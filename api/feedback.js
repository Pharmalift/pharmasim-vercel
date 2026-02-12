import Anthropic from '@anthropic-ai/sdk';
import SCENARIOS from './scenarios.js';

console.log('[PharmaSim Feedback] Module loaded');

let client = null;

function getClient() {
  if (!client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY is not set in environment variables');
    }
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    console.log('[PharmaSim Feedback] Anthropic client initialized');
  }
  return client;
}

function buildFeedbackSystemPrompt(scenarioData, scenarioType, score) {
  const hiddenInfoBlock = scenarioData.hiddenInfo
    ? Object.entries(scenarioData.hiddenInfo)
        .map(([key, value]) => `- ${key} : ${value}`)
        .join('\n')
    : 'Aucune information cachée fournie.';

  const expectedProductsBlock = scenarioData.expectedProducts && scenarioData.expectedProducts.length > 0
    ? scenarioData.expectedProducts.join(', ')
    : 'Non spécifié';

  const commercialTipsBlock = scenarioData.commercialTips || 'Non spécifié';

  const isCommercialRelevant = scenarioType === 'ordonnance' || scenarioType === 'conseil';

  return `Tu es un formateur expert en pharmacie officinale française. Tu analyses la performance d'un pharmacien lors d'une simulation de comptoir.

CONTEXTE DU SCÉNARIO :
- Patient : ${scenarioData.name || 'Inconnu'}, ${scenarioData.age ? scenarioData.age + ' ans' : 'âge non précisé'}
- Situation : ${scenarioData.context || 'Non précisé'}
- Type de scénario : ${scenarioType}

INFORMATIONS CACHÉES DU SCÉNARIO (que le pharmacien devait découvrir par son interrogatoire) :
${hiddenInfoBlock}

PRODUITS ATTENDUS / CONSEILS ASSOCIÉS :
${expectedProductsBlock}

CONSEILS COMMERCIAUX DE RÉFÉRENCE :
${commercialTipsBlock}

SCORE BRUT DE L'INTERFACE : ${score}/100

INSTRUCTIONS :
1. Analyse la conversation ci-dessous entre le pharmacien (messages "pharmacist") et le patient/interlocuteur (messages "patient").
2. Sois constructif mais honnête. Un bon feedback aide à progresser.
3. Identifie précisément quelles informations cachées ont été découvertes et lesquelles ont été manquées.
4. ${isCommercialRelevant
    ? "Évalue particulièrement la compétence commerciale : le pharmacien a-t-il proposé des produits pertinents ? A-t-il su argumenter de manière naturelle et centrée sur le patient ? A-t-il manqué des opportunités de conseil associé ?"
    : "Évalue la qualité de la prise en charge globale et la pertinence des conseils donnés."}
5. Attribue un score détaillé sur 4 axes de 25 points chacun. Le total peut différer du score brut de l'interface : ton évaluation est plus fine.
6. Réponds TOUJOURS en français.
7. Utilise EXACTEMENT le format markdown suivant, sans le modifier :

## 📊 Analyse de votre consultation

### ✅ Points forts
- [liste ce que le pharmacien a bien fait - exemples précis tirés de la conversation]

### ❌ Points manqués
- [liste les informations cachées qui n'ont PAS été découvertes, explique POURQUOI c'était important]

### 💊 Conseil associé - Opportunités commerciales
- **Produits proposés** : [liste les produits que le pharmacien a suggérés]
- **Opportunités manquées** : [liste les produits attendus qui n'ont PAS été proposés, avec une brève explication de leur pertinence]
- **Qualité de l'argumentaire** : [la recommandation était-elle naturelle et centrée sur le patient, ou trop commerciale ?]

### 🎯 Axes d'amélioration
1. [conseil spécifique et actionnable]
2. [conseil spécifique et actionnable]
3. [conseil spécifique et actionnable]

### 📈 Score détaillé
- Interrogatoire : X/25
- Sécurité : X/25
- Conseil associé : X/25
- Relation patient : X/25
- **Total : X/100**`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { scenarioId, messages, score, scenarioType } = req.body;
    console.log('[PharmaSim Feedback] Request:', {
      scenarioId,
      messagesCount: messages?.length,
      score,
      scenarioType
    });

    if (!messages || messages.length === 0) {
      return res.status(400).json({ error: 'No conversation messages provided' });
    }

    // Lookup full scenario data server-side (includes hiddenInfo, commercialTips, expectedProducts)
    const serverScenario = SCENARIOS[scenarioId];
    if (!serverScenario) {
      return res.status(400).json({ error: 'Invalid scenario ID' });
    }

    const systemPrompt = buildFeedbackSystemPrompt(
      serverScenario,
      scenarioType || serverScenario.type || 'conseil',
      score || 0
    );

    const conversationText = messages
      .map(m => `[${m.type === 'patient' ? 'Patient' : 'Pharmacien'}] : ${m.content}`)
      .join('\n\n');

    console.log('[PharmaSim Feedback] Calling Claude API for feedback analysis');

    const response = await getClient().messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1500,
      system: systemPrompt,
      messages: [
        {
          role: 'user',
          content: `Voici la conversation complète de la simulation. Analyse la performance du pharmacien :\n\n${conversationText}`
        }
      ]
    });

    const feedbackText = response.content[0].text;
    console.log('[PharmaSim Feedback] Feedback generated successfully');

    res.status(200).json({ feedback: feedbackText });
  } catch (error) {
    console.error('[PharmaSim Feedback] Error:', error.message, error.stack);
    res.status(500).json({ error: error.message });
  }
}
