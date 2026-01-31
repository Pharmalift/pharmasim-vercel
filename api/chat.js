import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SCENARIOS = {
  mme_dubois: {
    name: "Mme Dubois", age: 58,
    personality: "Pressée mais coopérative, un peu distraite",
    context: "Vient chercher son ordonnance et demande quelque chose pour ses maux de tête.",
    prescription: ["Metformine 1000mg", "Ramipril 5mg", "Atorvastatine 20mg"],
    firstMessage: "Bonjour ! Je viens chercher mes médicaments habituels, j'ai mon ordonnance là. Et puis j'aurais voulu quelque chose pour mes maux de tête, vous avez un truc efficace ?",
    hiddenInfo: {
      otherMeds: "Kardégic 75mg prescrit par le cardiologue depuis 1 an",
      selfMedication: "A pris un Advil ce matin",
      medicalHistory: "Ulcère gastrique il y a 5 ans",
      allergies: "Aucune allergie connue",
      painDetails: "Céphalées temporales depuis 3 jours, pires avec le stress"
    }
  },
  aromatherapie: {
    name: "Mme Martin", age: 42,
    personality: "Anxieuse, cherche des solutions naturelles",
    context: "Veut des huiles essentielles pour le stress et le sommeil.",
    prescription: [],
    firstMessage: "Bonjour... Je cherche des huiles essentielles pour m'aider à dormir et me détendre. Je suis très stressée en ce moment, vous pouvez me conseiller ?",
    hiddenInfo: {
      otherMeds: "Lexomil prescrit depuis 2 mois pour anxiété",
      selfMedication: "Utilise déjà de la lavande en diffusion",
      medicalHistory: "Asthme léger dans l'enfance, burn-out il y a 6 mois",
      allergies: "Allergie acariens, réaction cutanée à un parfum",
      symptoms: "Difficultés d'endormissement, anxiété, palpitations"
    }
  },
  pediatrie: {
    name: "M. Petit", age: 35,
    personality: "Père inquiet, premier enfant",
    context: "Son fils Lucas (3 ans) a de la fièvre depuis hier.",
    prescription: [],
    firstMessage: "Bonjour, mon fils Lucas a de la fièvre depuis hier soir, il a 3 ans. Vous avez quelque chose pour faire baisser la température ? Je suis un peu inquiet...",
    hiddenInfo: {
      childSymptoms: "Fièvre 38.7°C, grognon mais mange un peu, nez qui coule",
      selfMedication: "A donné un demi-Doliprane hier soir (dosage incertain)",
      medicalHistory: "Convulsion fébrile il y a 6 mois, hospitalisé une nuit",
      allergies: "Aucune connue",
      otherInfo: "Lucas va à la crèche, vaccins à jour"
    }
  },
  dermato: {
    name: "Emma", age: 16,
    personality: "Timide, gênée par son acné",
    context: "Adolescente qui demande conseil pour son acné.",
    prescription: [],
    firstMessage: "Euh... bonjour. Je voulais savoir si vous aviez quelque chose pour... enfin, pour l'acné ? J'en ai vraiment marre là...",
    hiddenInfo: {
      currentTreatment: "Crème achetée sur internet (composition inconnue)",
      selfMedication: "Dentifrice sur les boutons (vu sur TikTok), peau très irritée",
      medicalHistory: "Cycles irréguliers",
      allergies: "Peau sensible, rougit au soleil",
      lifestyle: "Stress examens, dort mal, fast-food, manque d'eau"
    }
  }
};

function generateSystemPrompt(scenarioId) {
  const s = SCENARIOS[scenarioId];
  if (!s) return null;
  
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
    const scenario = SCENARIOS[scenarioId];
    if (!scenario) return res.status(400).json({ error: 'Invalid scenario' });

    // Premier appel : retourner directement le firstMessage sans appeler l'API
    if (!messages || messages.length === 0) {
      return res.status(200).json({ response: scenario.firstMessage });
    }

    const systemPrompt = generateSystemPrompt(scenarioId);

    const conversationMessages = (messages || []).map(m => ({
      role: m.type === 'patient' ? 'assistant' : 'user',
      content: m.content
    }));
    conversationMessages.push({ role: 'user', content: userMessage });

    const response = await client.messages.create({
      model: 'claude-3-5-haiku-latest',
      max_tokens: 300,
      system: systemPrompt,
      messages: conversationMessages
    });

    res.status(200).json({ response: response.content[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
