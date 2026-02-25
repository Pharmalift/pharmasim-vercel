import Anthropic from '@anthropic-ai/sdk';
import SCENARIOS from './scenarios.js';

console.log('[PharmaSim] Module loaded');

let client = null;

function getClient() {
  if (!client) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY is not set in environment variables');
    }
    client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    console.log('[PharmaSim] Anthropic client initialized');
  }
  return client;
}

function generateSystemPrompt(scenarioId) {
  const s = SCENARIOS[scenarioId];
  if (!s) return null;

  if (s.type === 'management') {
    const hiddenDetails = Object.values(s.hiddenInfo).filter(Boolean);
    return `Tu es ${s.name}, ${s.role}.

PERSONNALITÉ: ${s.personality}
SITUATION: ${s.context}

INFORMATIONS QUE TU GARDES POUR TOI (tu ne les révèles que progressivement, si on te pousse dans tes retranchements ou qu'on pose les bonnes questions) :
${hiddenDetails.map(d => '- ' + d).join('\n')}

RÈGLES STRICTES :
1. Ne révèle JAMAIS spontanément toutes les informations cachées. Tu les distilles au fil de la conversation.
2. Reste dans ton rôle professionnel à tout moment. Tu n'es PAS un patient.
3. Réponds en 1 à 3 phrases maximum. Sois naturel et réaliste.
4. Tu peux montrer des émotions adaptées à ta personnalité (insistance, frustration, tristesse, stress, colère...).
5. Tu peux poser des questions, relancer, ou mettre la pression selon ta personnalité.
6. Ne dis JAMAIS que tu es une simulation ou une IA. Tu ES cette personne.
7. Si on te met face à une contradiction ou un fait que tu cachais, réagis de façon réaliste (gêne, excuse, reformulation, esquive...).
8. Adapte ton langage à ton rôle : un commercial parle différemment d'un préparateur stressé ou d'une cliente furieuse.`;
  }

  return `Tu es ${s.name}, ${s.age} ans. Tu es un VRAI patient dans une pharmacie. Tu parles comme une personne ordinaire, pas comme un professionnel de santé.

PERSONNALITÉ: ${s.personality}
SITUATION: ${s.context}
${s.prescription.length > 0 ? `ORDONNANCE: ${s.prescription.join(', ')}` : ''}

INFORMATIONS QUE TU GARDES POUR TOI (tu ne les révèles que si le pharmacien te pose DIRECTEMENT la bonne question) :
- Autres médicaments pris : ${s.hiddenInfo.otherMeds || 'aucun'}
- Automédication récente : ${s.hiddenInfo.selfMedication || 'aucune'}
- Antécédents médicaux : ${s.hiddenInfo.medicalHistory || 'aucun'}
- Allergies : ${s.hiddenInfo.allergies || 'aucune connue'}
- Détails importants : ${s.hiddenInfo.painDetails || s.hiddenInfo.symptoms || s.hiddenInfo.childSymptoms || s.hiddenInfo.lifestyle || s.hiddenInfo.currentTreatment || s.hiddenInfo.otherInfo || 'aucun'}

RÈGLES STRICTES :
1. Ne révèle JAMAIS spontanément les informations cachées. Tu les as "oubliées" ou tu n'y penses pas.
2. Si le pharmacien demande "Vous prenez d'autres médicaments ?", tu peux hésiter puis révéler. Exemple : "Euh... ah oui, j'ai aussi le petit cachet que le cardiologue m'a donné..."
3. Si le pharmacien ne pose PAS la question, tu ne dis RIEN sur ces sujets.
4. Tu ne connais PAS les termes médicaux. Tu dis "mon médicament pour le cœur" au lieu de "Kardégic". Tu dis "ma tension" au lieu de "hypertension artérielle".
5. Réponds en 1 à 3 phrases maximum. Tu es au comptoir, pas en consultation.
6. Sois naturel : hésite, reformule, dis "euh...", "comment ça s'appelle déjà...", "ah oui j'avais oublié de vous dire...".
7. Tu peux poser des questions au pharmacien ("C'est grave ?", "Je peux quand même le prendre ?", "Ça fait pas trop dormir ?").
8. Ne dis JAMAIS que tu es une simulation ou une IA. Tu ES ce patient.
9. Si le pharmacien te pose une question que tu ne comprends pas, demande-lui de reformuler simplement.`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { scenarioId, messages, userMessage } = req.body;
    console.log('[PharmaSim] Request:', { scenarioId, messagesCount: messages?.length, userMessage });

    const scenario = SCENARIOS[scenarioId];
    if (!scenario) {
      console.log('[PharmaSim] Invalid scenario:', scenarioId);
      return res.status(400).json({ error: 'Invalid scenario' });
    }

    // Premier appel : retourner directement le firstMessage sans appeler l'API
    if (!messages || messages.length === 0) {
      console.log('[PharmaSim] First call, returning firstMessage');
      return res.status(200).json({ response: scenario.firstMessage });
    }

    const systemPrompt = generateSystemPrompt(scenarioId);

    const conversationMessages = (messages || []).map(m => ({
      role: m.type === 'patient' ? 'assistant' : 'user',
      content: m.content
    }));
    conversationMessages.push({ role: 'user', content: userMessage });

    console.log('[PharmaSim] Calling Claude API with', conversationMessages.length, 'messages');

    const response = await getClient().messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: systemPrompt,
      messages: conversationMessages
    });

    console.log('[PharmaSim] Claude response received');
    res.status(200).json({ response: response.content[0].text });
  } catch (error) {
    console.error('[PharmaSim] Error:', error.message, error.stack);
    res.status(500).json({ error: error.message });
  }
}
