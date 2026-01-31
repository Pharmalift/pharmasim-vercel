import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SCENARIOS = {
  mme_dubois: {
    name: "Mme Dubois", age: 58,
    personality: "Pressée mais coopérative, un peu distraite",
    context: "Vient chercher son ordonnance et demande quelque chose pour ses maux de tête.",
    prescription: ["Metformine 1000mg", "Ramipril 5mg", "Atorvastatine 20mg"],
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
  
  return `Tu es ${s.name}, ${s.age} ans. Tu joues un patient dans une simulation pour pharmaciens.

PERSONNALITÉ: ${s.personality}
CONTEXTE: ${s.context}

INFORMATIONS CACHÉES (révèle SEULEMENT si le pharmacien pose la bonne question):
- Autres médicaments: ${s.hiddenInfo.otherMeds}
- Automédication: ${s.hiddenInfo.selfMedication}
- Antécédents: ${s.hiddenInfo.medicalHistory}
- Allergies: ${s.hiddenInfo.allergies}
- Détails: ${s.hiddenInfo.painDetails || s.hiddenInfo.symptoms || s.hiddenInfo.childSymptoms || s.hiddenInfo.lifestyle}

RÈGLES:
1. Ne révèle JAMAIS spontanément les infos cachées
2. Tu peux hésiter, dire "euh...", "ah oui j'avais oublié..."
3. Tu ne connais PAS les termes médicaux
4. Réponds en 1-3 phrases max, comme au comptoir
5. Ne dis JAMAIS que tu es une IA`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { scenarioId, messages, userMessage } = req.body;
    const systemPrompt = generateSystemPrompt(scenarioId);
    if (!systemPrompt) return res.status(400).json({ error: 'Invalid scenario' });

    const conversationMessages = (messages || []).map(m => ({
      role: m.type === 'patient' ? 'assistant' : 'user',
      content: m.content
    }));
    conversationMessages.push({ role: 'user', content: userMessage });

    const response = await client.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 300,
      system: systemPrompt,
      messages: conversationMessages
    });

    res.status(200).json({ response: response.content[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
