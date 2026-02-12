// ============================================
// SCENARIOS PARTAGÉS - PharmaSim Pro
// Utilisé par chat.js et feedback.js
// ============================================

const SCENARIOS = {
  // ========== RISQUES CRITIQUES ==========
  douleur_thoracique: {
    name: "M. Durand", age: 45,
    personality: "Pressé, minimise ses symptômes, veut juste un médicament rapide",
    context: "Douleur thoracique qu'il attribue à un faux mouvement.",
    prescription: [],
    firstMessage: "Bonjour, j'ai dû me froisser un muscle hier, j'ai une douleur là dans la poitrine. Vous avez un anti-douleur costaud ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Aucune",
      medicalHistory: "Père décédé d'infarctus à 52 ans, fumeur 1 paquet/jour",
      allergies: "Aucune connue",
      otherInfo: "Douleur qui irradie dans le bras gauche, essoufflement à l'effort depuis 1 semaine, refuse d'aller aux urgences"
    }
  },
  femme_enceinte_medicaments: {
    name: "Mme Laurent", age: 29,
    personality: "Inquiète, premier trimestre, nausées",
    context: "Veut quelque chose contre les nausées et un antidouleur.",
    prescription: [],
    firstMessage: "Bonjour, je suis enceinte de 2 mois et j'ai des nausées horribles... et aussi des maux de tête. Qu'est-ce que je peux prendre ?",
    hiddenInfo: {
      otherMeds: "Acide folique",
      selfMedication: "A pris de l'ibuprofène hier sans savoir que c'était contre-indiqué",
      medicalHistory: "Premier trimestre de grossesse, a vomi son comprimé ce matin",
      allergies: "Aucune connue",
      otherInfo: "Ne sait pas que beaucoup de médicaments sont interdits pendant la grossesse"
    }
  },
  personne_agee_polymediquee: {
    name: "Mme Mercier", age: 82,
    personality: "Confuse, parle de ses petits-enfants, oublie ses questions",
    context: "Vient avec un sac de médicaments, ne sait plus ce qu'elle prend.",
    prescription: [],
    firstMessage: "Bonjour mon petit... Je viens chercher mes médicaments mais je ne sais plus lesquels... J'ai mon sac là, vous pouvez regarder ?",
    hiddenInfo: {
      otherMeds: "Prend 12 médicaments différents, confond les boîtes",
      selfMedication: "Prend du Lexomil en plus sans prescription pour dormir",
      medicalHistory: "A chuté 2 fois le mois dernier, vit seule, mange très peu",
      allergies: "Ne s'en souvient plus",
      otherInfo: "Dort mal, confusion fréquente, isolement social"
    }
  },
  intoxication_enfant: {
    name: "Mme Girard", age: 30,
    personality: "Paniquée, parle très vite",
    context: "Sa fille Léa (2 ans) a avalé des médicaments.",
    prescription: [],
    firstMessage: "Aidez-moi ! Ma fille a avalé des cachets, je ne sais pas combien ! Qu'est-ce que je fais ?!",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Aucune",
      medicalHistory: "C'était du Doliprane 1000mg, elle pense que Léa en a pris 3 ou 4, il y a 30 minutes",
      allergies: "Aucune connue",
      otherInfo: "Léa pèse 12kg, semble normale pour l'instant, la mère a jeté la boîte"
    }
  },

  // ========== CONSEIL SPÉCIALISÉ ==========
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
  phytotherapie_prostate: {
    name: "M. Bernard", age: 62,
    personality: "Méfiant envers les médicaments chimiques",
    context: "Problèmes urinaires, levers nocturnes fréquents.",
    prescription: [],
    firstMessage: "Bonjour, je voudrais quelque chose de naturel pour... enfin, je me lève 4-5 fois par nuit pour uriner. On m'a parlé de plantes ?",
    hiddenInfo: {
      otherMeds: "Kardégic 160mg prescrit par le cardiologue",
      selfMedication: "Tamsulosine prescrite mais arrêtée de lui-même à cause des effets secondaires",
      medicalHistory: "PSA jamais contrôlé depuis 3 ans",
      allergies: "Aucune connue",
      otherInfo: "Parfois du sang dans les urines mais pense que c'est les hémorroïdes"
    }
  },
  micronutrition_fatigue: {
    name: "Mme Faure", age: 35,
    personality: "Épuisée, cernes, jeune maman",
    context: "Fatigue intense, veut des vitamines.",
    prescription: [],
    firstMessage: "Bonjour, je suis épuisée en ce moment... J'ai besoin de vitamines ou quelque chose pour retrouver de l'énergie, j'en peux plus.",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Aucune",
      medicalHistory: "Régime végétarien strict depuis 5 ans",
      allergies: "Aucune connue",
      otherInfo: "Allaite son bébé de 4 mois, pertes de cheveux importantes, règles très abondantes depuis l'accouchement"
    }
  },
  menopause: {
    name: "Mme Blanchard", age: 52,
    personality: "Gênée, bouffées de chaleur visibles",
    context: "Symptômes ménopause, refuse le THS.",
    prescription: [],
    firstMessage: "Bonjour... C'est un peu gênant mais j'ai des bouffées de chaleur terribles, je suis trempée la nuit. Mon médecin veut me donner des hormones mais j'ai peur, vous avez autre chose ?",
    hiddenInfo: {
      otherMeds: "Compléments à base de soja achetés en supermarché",
      selfMedication: "Soja en automédication",
      medicalHistory: "Mère a eu un cancer du sein (d'où la peur du THS)",
      allergies: "Aucune connue",
      otherInfo: "Irritabilité importante, tensions conjugales, dort 3-4h par nuit"
    }
  },
  detox_drainage: {
    name: "Mme Petit", age: 28,
    personality: "Influencée réseaux sociaux, vocabulaire wellness",
    context: "Veut une cure détox après les fêtes.",
    prescription: [],
    firstMessage: "Bonjour ! Je voudrais faire une détox pour éliminer les toxines, j'ai vu sur Instagram une cure de jus, vous avez ça ? Il faut que je purifie mon foie.",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Prend des laxatifs naturels tous les jours",
      medicalHistory: "Fait régulièrement des jeûnes de 3 jours, a perdu 8kg en 2 mois avec des méthodes yo-yo",
      allergies: "Aucune connue",
      otherInfo: "Cheveux et ongles cassants, obsédée par son poids, possible trouble du comportement alimentaire"
    }
  },
  sport_recuperation: {
    name: "Thomas", age: 32,
    personality: "Sportif amateur motivé, veut performer",
    context: "Prépare un marathon, courbatures.",
    prescription: [],
    firstMessage: "Salut ! Je prépare mon premier marathon et j'ai des courbatures de fou. Vous avez des trucs pour mieux récupérer ? Et pour améliorer mes performances aussi ?",
    hiddenInfo: {
      otherMeds: "Protéines en poudre achetées sur internet",
      selfMedication: "Protéines en poudre de composition douteuse",
      medicalHistory: "Crampes importantes récemment",
      allergies: "Aucune connue",
      otherInfo: "Boit très peu d'eau pendant l'effort, court 60km/semaine depuis seulement 2 mois (avant sédentaire), intéressé par la créatine"
    }
  },

  // ========== POPULATIONS SPÉCIFIQUES ==========
  pediatrie: {
    name: "M. Petit", age: 35,
    personality: "Père inquiet, premier enfant",
    context: "Son fils Lucas (3 ans) a de la fièvre depuis hier.",
    prescription: [],
    firstMessage: "Bonjour, mon fils Lucas a de la fièvre depuis hier soir, il a 3 ans. Vous avez quelque chose pour faire baisser la température ? Je suis un peu inquiet...",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "A donné un demi-Doliprane hier soir (dosage incertain)",
      medicalHistory: "Convulsion fébrile il y a 6 mois, hospitalisé une nuit",
      allergies: "Aucune connue",
      childSymptoms: "Fièvre 38.7°C, grognon mais mange un peu, nez qui coule, va à la crèche, vaccins à jour"
    }
  },
  bebe_coliques: {
    name: "Mme Dupont", age: 30,
    personality: "Épuisée, perdue, premier bébé",
    context: "Bébé Noah (3 semaines) pleure beaucoup, suspicion coliques.",
    prescription: [],
    firstMessage: "Bonjour... Notre bébé pleure tout le temps, surtout le soir, il se tortille, on n'en peut plus. On dort plus depuis 3 semaines. C'est des coliques ?",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Ont déjà essayé 3 laits différents sur conseils de la famille",
      medicalHistory: "La maman allaite mais boit beaucoup de lait de vache, le bébé régurgite beaucoup",
      allergies: "Aucune connue",
      otherInfo: "N'ont pas vu le pédiatre depuis la sortie de maternité, la maman pleure souvent (possible baby blues)"
    }
  },
  personne_agee_isolee: {
    name: "M. Martin", age: 78,
    personality: "Fier, refuse l'aide, vient régulièrement discuter",
    context: "Vient renouveler son ordonnance, semble confus.",
    prescription: [],
    firstMessage: "Bonjour ! Comment allez-vous ? Ah la la, quel temps aujourd'hui... Euh... Je venais pour... Attendez, je l'ai noté quelque part...",
    hiddenInfo: {
      otherMeds: "Ne s'en souvient plus, oublie de prendre ses médicaments",
      selfMedication: "Aucune",
      medicalHistory: "Sa femme est décédée il y a 6 mois, ses enfants habitent loin",
      allergies: "Ne s'en souvient plus",
      otherInfo: "Mange essentiellement des conserves, a failli provoquer un incendie (casserole oubliée), refuse l'aide à domicile"
    }
  },
  femme_enceinte_rhume: {
    name: "Mme Chen", age: 34,
    personality: "Enrhumée, 1er trimestre, inquiète",
    context: "Rhume, mal de gorge, enceinte de 10 semaines.",
    prescription: [],
    firstMessage: "Bonjour, je suis enceinte de 10 semaines et j'ai attrapé un gros rhume... J'ai le nez bouché, mal à la gorge, un peu de fièvre. Je peux prendre quoi ? Je n'ose toucher à rien.",
    hiddenInfo: {
      otherMeds: "Acide folique et vitamines prénatales",
      selfMedication: "A pris du miel avec de l'alcool (grog conseillé par sa mère)",
      medicalHistory: "Fièvre à 38.5°C depuis hier, tousse beaucoup la nuit",
      allergies: "Aucune connue",
      otherInfo: "Travaille en crèche, n'a pas appelé sa sage-femme car pense que c'est juste un rhume"
    }
  },
  patient_diabetique: {
    name: "M. Koné", age: 58,
    personality: "Diabétique mal équilibré, aime le sucré",
    context: "Demande un sirop pour la toux.",
    prescription: [],
    firstMessage: "Bonjour, j'ai une toux grasse qui m'embête depuis une semaine. Vous me donnez un bon sirop ? Le plus efficace que vous avez.",
    hiddenInfo: {
      otherMeds: "Metformine pour diabète type 2",
      selfMedication: "A déjà pris un sirop sucré la semaine dernière",
      medicalHistory: "HbA1c à 9% au dernier contrôle, ne suit pas son régime",
      allergies: "Aucune connue",
      otherInfo: "Pieds qui picotent parfois mais ne l'a jamais dit au médecin"
    }
  },

  // ========== DERMATOLOGIE COMPTOIR ==========
  dermato: {
    name: "Emma", age: 16,
    personality: "Timide, gênée par son acné",
    context: "Adolescente qui demande conseil pour son acné.",
    prescription: [],
    firstMessage: "Euh... bonjour. Je voulais savoir si vous aviez quelque chose pour... enfin, pour l'acné ? J'en ai vraiment marre là...",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Dentifrice sur les boutons (vu sur TikTok), peau très irritée",
      medicalHistory: "Cycles irréguliers",
      allergies: "Peau sensible, rougit au soleil",
      currentTreatment: "Crème achetée sur internet (composition inconnue)"
    }
  },
  eczema_bebe: {
    name: "Mme Dubois-Morel", age: 32,
    personality: "Inquiète, a lu beaucoup sur internet, corticophobie",
    context: "Bébé Emma (8 mois) avec plaques rouges qui gratte.",
    prescription: [],
    firstMessage: "Bonjour, ma fille a des plaques rouges sur les joues et dans les plis, elle se gratte beaucoup. Le médecin a prescrit de la cortisone mais j'ai peur, c'est dangereux non ?",
    hiddenInfo: {
      otherMeds: "Dermocorticoïde prescrit mais non appliqué par peur",
      selfMedication: "Utilise plein de crèmes naturelles à la place de la prescription",
      medicalHistory: "Le papa a de l'asthme (terrain atopique familial), Emma dort mal",
      allergies: "Terrain atopique familial",
      otherInfo: "A essayé un lait végétal sans avis médical"
    }
  },
  mycose_pied: {
    name: "M. Fernandez", age: 42,
    personality: "Gêné, sportif, va à la piscine",
    context: "Démangeaisons entre les orteils.",
    prescription: [],
    firstMessage: "Euh bonjour... C'est un peu gênant mais j'ai des démangeaisons entre les orteils, c'est tout rouge et ça pèle. C'est quoi ? Une mycose ?",
    hiddenInfo: {
      otherMeds: "Metformine (diabétique type 2)",
      selfMedication: "A utilisé une crème antifongique mais seulement 3 jours",
      medicalHistory: "Diabétique (ne fait pas le lien avec les mycoses), symptômes depuis 3 mois",
      allergies: "Aucune connue",
      otherInfo: "Va à la piscine 3x/semaine, porte les mêmes chaussures de sport sans chaussettes parfois"
    }
  },
  poux: {
    name: "Mme Martinez", age: 38,
    personality: "Débordée, 3 enfants, épuisée par la situation",
    context: "Poux récidivants chez ses enfants.",
    prescription: [],
    firstMessage: "Bonjour, j'en peux plus des poux ! J'ai traité mes enfants la semaine dernière et ça recommence. Donnez-moi le truc le plus fort que vous avez, j'en ai marre !",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "A utilisé un produit anti-poux périmé trouvé dans le placard, plus mayonnaise et vinaigre",
      medicalHistory: "N'a traité que les enfants, pas vérifié les parents",
      allergies: "Aucune connue",
      otherInfo: "N'a pas lavé la literie ni les doudous, l'école est infestée"
    }
  },
  coup_de_soleil: {
    name: "Lucas", age: 22,
    personality: "Étudiant, a fait la fête sur la plage",
    context: "Coup de soleil sévère.",
    prescription: [],
    firstMessage: "Aïe aïe aïe... J'ai pris un méga coup de soleil hier à la plage. J'ai super mal, c'est tout rouge. Vous avez une crème miracle ?",
    hiddenInfo: {
      otherMeds: "Doxycycline pour l'acné (photosensibilisant)",
      selfMedication: "Aucune crème solaire utilisée",
      medicalHistory: "Coup de soleil 2ème degré avec cloques, a bu de l'alcool toute la journée au soleil",
      allergies: "Aucune connue",
      otherInfo: "Grains de beauté nombreux non surveillés, ne savait pas que son antibiotique est photosensibilisant"
    }
  },
  herpes_labial: {
    name: "Julie", age: 27,
    personality: "Stressée, a un rendez-vous important demain",
    context: "Bouton de fièvre récidivant.",
    prescription: [],
    firstMessage: "Bonjour, j'ai ENCORE un bouton de fièvre qui arrive, je sens le picotement là ! J'ai un entretien d'embauche demain, il me faut un truc qui marche vraiment vite !",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Utilise toujours les mêmes crèmes mais trop tard",
      medicalHistory: "Herpès récidivant 5-6 fois par an, n'a jamais consulté pour ça",
      allergies: "Aucune connue",
      otherInfo: "Très stressée (facteur déclenchant), embrasse son copain même pendant les poussées"
    }
  },

  // ========== SITUATIONS DÉLICATES ==========
  veterinaire: {
    name: "Mme Rossi", age: 55,
    personality: "Très attachée à son animal, le considère comme son enfant",
    context: "Son chat de 12 ans a des problèmes.",
    prescription: [],
    firstMessage: "Bonjour, c'est pour mon chat Minou... Il vomit souvent et ne mange plus trop depuis quelques jours. Vous avez quelque chose ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement vétérinaire en cours",
      selfMedication: "Donne un anti-inflammatoire humain au chat (Advil écrasé dans la pâtée)",
      medicalHistory: "Chat non vu par un vétérinaire depuis 2 ans",
      allergies: "Aucune connue",
      otherInfo: "Le chat a aussi perdu du poids ces dernières semaines"
    }
  },
  contraception_urgence: {
    name: "Claire", age: 19,
    personality: "Stressée, gênée, parle à voix basse",
    context: "Rapport non protégé.",
    prescription: [],
    firstMessage: "Bonjour... Euh... Je voudrais... la pilule du lendemain, s'il vous plaît.",
    hiddenInfo: {
      otherMeds: "Pilule contraceptive classique (oubli de 2 comprimés)",
      selfMedication: "Aucune",
      medicalHistory: "C'est la 3ème fois cette année, rapport il y a 36 heures",
      allergies: "Aucune connue",
      otherInfo: "Ne sait pas où elle en est dans son cycle, son copain refuse le préservatif, pas de suivi gynéco"
    }
  },
  test_grossesse_positif: {
    name: "Inès", age: 23,
    personality: "En pleurs, perdue",
    context: "Vient de faire un test de grossesse positif.",
    prescription: [],
    firstMessage: "(En larmes) Excusez-moi... Je viens d'acheter un test chez vous... Il est positif... Je... Je sais pas quoi faire...",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Aucune",
      medicalHistory: "Étudiante, en couple récent, pas prête pour un enfant",
      allergies: "Aucune connue",
      otherInfo: "Ne connaît pas les options, a peur de la réaction de ses parents, ne sait pas vers qui se tourner"
    }
  },
  sevrage_tabac: {
    name: "M. Leroy", age: 55,
    personality: "Fumeur depuis 35 ans, veut arrêter mais pas convaincu",
    context: "Son médecin lui a dit d'arrêter de fumer.",
    prescription: [],
    firstMessage: "Bonjour, mon médecin me harcèle pour que j'arrête de fumer. Bon, je veux bien essayer mais je vous préviens, j'ai déjà essayé 10 fois et ça marche jamais. Vous avez quoi ?",
    hiddenInfo: {
      otherMeds: "Traitement pour BPCO",
      selfMedication: "A essayé les patchs mais mal dosés",
      medicalHistory: "2 paquets par jour, BPCO diagnostiquée, première cigarette dans les 5 min après le réveil",
      allergies: "Aucune connue",
      otherInfo: "Sa femme fume aussi, a peur de grossir, dépendance très forte"
    }
  },
  dependance_benzodiazepines: {
    name: "Mme Roux", age: 65,
    personality: "Anxieuse, suppliante, cliente fidèle",
    context: "Veut son Lexomil sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, vous me connaissez, je viens toujours ici. Le médecin ne peut pas me voir avant 2 semaines et je n'ai plus de Lexomil. Vous pouvez me dépanner ? Juste une boîte ?",
    hiddenInfo: {
      otherMeds: "Lexomil depuis 15 ans (doses augmentées seule) + Stilnox le soir",
      selfMedication: "A augmenté les doses de Lexomil toute seule",
      medicalHistory: "Son médecin veut diminuer mais elle refuse, a déjà demandé dans d'autres pharmacies",
      allergies: "Aucune connue",
      otherInfo: "Tremble légèrement, risque de sevrage brutal si arrêt"
    }
  },
  patient_agressif: {
    name: "M. Sanchez", age: 40,
    personality: "En colère, agressif, impatient",
    context: "Son médicament antidépresseur est en rupture.",
    prescription: [],
    firstMessage: "C'est QUOI ce bordel ?! La semaine dernière vous m'avez dit que mon médicament serait là aujourd'hui et il y est toujours pas ! Vous vous foutez de moi ?!",
    hiddenInfo: {
      otherMeds: "Traitement antidépresseur en rupture nationale",
      selfMedication: "Aucune",
      medicalHistory: "N'a plus de comprimés depuis 2 jours, syndrome de sevrage (irritabilité, vertiges)",
      allergies: "Aucune connue",
      otherInfo: "Problèmes financiers, vient de perdre son emploi"
    }
  },
  suspicion_maltraitance: {
    name: "Mère de Timéo", age: 35,
    personality: "Répond vite, ne laisse pas l'enfant parler",
    context: "Enfant Timéo (7 ans) avec des bleus.",
    prescription: [],
    firstMessage: "Bonjour, mon fils est tombé dans les escaliers, il a des bleus. Vous avez de l'arnica ?",
    hiddenInfo: {
      otherMeds: "Aucun",
      selfMedication: "Aucune",
      medicalHistory: "C'est la 3ème fois en 2 mois qu'ils viennent pour des chutes, le beau-père est très strict",
      allergies: "Aucune connue",
      otherInfo: "Bleus sur les bras à différents stades, l'enfant ne parle pas et semble effrayé, la mère répond à sa place"
    }
  },

  // ========== MANAGEMENT & GESTION ==========
  delegue_insistant: {
    name: "Marc", role: "Délégué pharmaceutique Pharma Générix",
    type: 'management',
    personality: "Commercial expérimenté, insistant mais souriant",
    context: "Veut placer un nouveau générique avec objectif de vente ambitieux",
    prescription: [],
    firstMessage: "Bonjour ! Comment allez-vous ? Je viens vous présenter notre nouveau générique du Doliprane, on a une offre exceptionnelle ce mois-ci : -15% sur la première commande et une PLV offerte. Je vous en mets combien de boîtes ?",
    hiddenInfo: {
      minimum: "La remise n'est valable que pour une commande de 500 boîtes minimum",
      ruptures: "Le produit a un historique de ruptures de stock",
      marge: "La marge réelle est inférieure au princeps avec cette offre",
      objectif: "Il a un objectif de vente à atteindre ce mois-ci",
      concurrent: "Votre concurrent a refusé cette offre"
    }
  },
  conflit_equipe: {
    name: "Sophie", role: "Préparatrice en pharmacie",
    type: 'management',
    personality: "Bonne professionnelle mais à cran, se sent lésée",
    context: "Conflit ouvert avec sa collègue Marie, l'ambiance est devenue difficile",
    prescription: [],
    firstMessage: "Vous vouliez me voir ? Si c'est encore à cause de Marie, j'en ai marre. Elle me parle mal devant les clients, elle prend toujours ses pauses en premier, et en plus c'est moi qui me tape tout le boulot de réception !",
    hiddenInfo: {
      promotion: "Marie a eu une promotion que Sophie espérait",
      perso: "Sophie a des problèmes personnels (divorce en cours)",
      ignorance: "Marie ne sait pas qu'elle blesse Sophie",
      duree: "Le conflit dure depuis 2 mois",
      equipe: "D'autres membres de l'équipe commencent à prendre parti"
    }
  },
  demande_augmentation: {
    name: "Julie", role: "Pharmacienne adjointe depuis 4 ans",
    type: 'management',
    personality: "Professionnelle, fidèle, a préparé son argumentaire",
    context: "Rendez-vous demandé pour parler de son salaire",
    prescription: [],
    firstMessage: "Merci de me recevoir. Voilà, ça fait 4 ans que je suis là, je n'ai jamais eu de problème, je gère les formations, je fais les permanences... J'aimerais qu'on parle de mon salaire. J'ai regardé, je suis en dessous de la grille.",
    hiddenInfo: {
      offre: "Elle a une offre dans une autre pharmacie (+300€/mois)",
      fidelite: "Elle ne veut pas partir mais c'est un vrai levier",
      responsabilites: "Elle aimerait aussi plus de responsabilités",
      conjoint: "Son mari vient de perdre son emploi",
      grossesse: "Elle est enceinte mais ne l'a pas encore annoncé"
    }
  },
  erreur_delivrance: {
    name: "Karim", role: "Préparateur junior (1 an d'expérience)",
    type: 'management',
    personality: "Jeune, consciencieux mais stressé par l'erreur",
    context: "A délivré Doliprane 1000 au lieu de Doliprane 500 pour un enfant. Le parent s'en est aperçu.",
    prescription: [],
    firstMessage: "Je suis vraiment désolé... Je ne comprends pas comment j'ai pu me tromper. Le papa était pressé, il y avait la queue... J'ai paniqué quand il est revenu. Vous allez me virer ?",
    hiddenInfo: {
      consequence: "L'enfant n'a rien pris (erreur détectée à temps)",
      historique: "C'est sa première erreur",
      process: "Il n'a pas fait vérifier par le pharmacien car celui-ci était au téléphone",
      perso: "Il a peur d'en parler à ses parents",
      impact: "Il dort mal depuis l'incident"
    }
  },
  client_prix_internet: {
    name: "M. Morel", role: "Client occasionnel",
    type: 'management',
    personality: "Râleur, cherche toujours le moins cher",
    context: "Conteste le prix d'un produit de parapharmacie",
    prescription: [],
    firstMessage: "18 euros le Cicaplast ?! Mais sur Amazon il est à 12 ! Vous vous moquez des gens, vous prenez des marges énormes. Je vais le commander sur internet, tant pis.",
    hiddenInfo: {
      urgence: "Il a besoin du produit maintenant (son enfant s'est brûlé)",
      fidelite: "Il est client depuis des années mais achète de plus en plus en ligne",
      contrefacon: "Il ne sait pas que les produits internet peuvent être contrefaits",
      retour: "Il reviendra pour ses médicaments de toute façon"
    }
  },
  negociation_grossiste: {
    name: "François", role: "Directeur régional Alliance Healthcare",
    type: 'management',
    personality: "Professionnel, connaît ses chiffres, en position de force",
    context: "Renégociation annuelle des conditions commerciales",
    prescription: [],
    firstMessage: "Bonjour ! Merci de me recevoir pour notre bilan annuel. Alors, votre CA chez nous est stable, vous êtes à 68% de taux de génériques... On peut maintenir les conditions actuelles. Sauf si vous voulez passer au palier supérieur avec 5000€ de plus par mois...",
    hiddenInfo: {
      concurrent: "Votre concurrent a de meilleures conditions car il commande plus",
      livraison: "Il y a de la marge de négociation sur la livraison",
      autre_grossiste: "Un autre grossiste vous a approché",
      direct_labo: "Le direct labo représente 15% de vos achats et le répartiteur n'aime pas ça"
    }
  },
  recadrage_retards: {
    name: "Thomas", role: "Préparateur (3 ans d'ancienneté)",
    type: 'management',
    personality: "Sympathique, apprécié des clients, mais désinvolte sur les horaires",
    context: "4ème retard du mois, le titulaire doit agir",
    prescription: [],
    firstMessage: "Ah oui, pardon pour ce matin, j'ai eu un problème de réveil encore... Mais je suis resté plus tard hier soir pour compenser ! Et puis bon, c'était que 10 minutes.",
    hiddenInfo: {
      sorties: "Il sort beaucoup le soir (concerts, sorties)",
      compensation: "Il compense effectivement parfois en restant plus tard",
      equipe: "Les autres collaborateurs commencent à remarquer et ça les agace",
      competences: "Il a des compétences précieuses (maîtrise le logiciel)",
      inconscience: "Il ne se rend pas compte de l'impact sur l'équipe"
    }
  },
  avis_google_negatif: {
    name: "Mme Fontaine", role: "Cliente (au téléphone puis en face)",
    type: 'management',
    personality: "Furieuse, se sent mal traitée, veut des excuses",
    context: "Attente longue hier, elle a posté un avis 1 étoile et menace d'en parler partout",
    prescription: [],
    firstMessage: "Allô, c'est Mme Fontaine. J'ai attendu 35 minutes hier pour 3 boîtes de médicaments, personne ne s'est excusé, c'est inadmissible ! J'ai mis un avis sur Google et je vais prévenir tout le quartier !",
    hiddenInfo: {
      probleme_reel: "Il y avait effectivement eu un problème informatique hier",
      fidelite: "Elle est cliente depuis 20 ans",
      deuil: "Son mari est décédé récemment (elle est plus irritable)",
      regret: "Elle regrette un peu d'avoir mis l'avis mais ne veut pas perdre la face",
      reconnaissance: "Elle aimerait qu'on la reconnaisse comme bonne cliente"
    }
  },

  // ========== CONSEILS ASSOCIÉS AUX ORDONNANCES ==========
  ordo_antibiotique: {
    name: "M. Blanc", age: 38,
    personality: "Pressé, vient pendant sa pause déjeuner",
    context: "Angine traitée par antibiotique, vient avec ordonnance pendant sa pause.",
    prescription: ["Amoxicilline 1g x3/jour pendant 7 jours"],
    firstMessage: "Bonjour, j'ai mon ordonnance pour une angine. Vous pouvez me servir vite ? Je suis en pause déjeuner.",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Prend du Gaviscon régulièrement pour des remontées acides (peut affecter l'absorption de l'antibiotique)",
      medicalHistory: "A tendance à arrêter les antibiotiques dès qu'il se sent mieux, ne finit jamais le traitement complet",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne sait pas qu'il faut finir le traitement antibiotique même si les symptômes disparaissent"
    },
    expectedProducts: ["Probiotiques (Lactibiane/Ultralevure)", "Spray gorge (Hexaspray)", "Pastilles (Lysopaïne)", "Thermomètre si besoin"],
    commercialTips: "Proposer les probiotiques naturellement au moment de la délivrance en expliquant que l'antibiotique détruit aussi la flore intestinale. Enchaîner avec le spray gorge pour soulager en attendant que l'antibiotique fasse effet."
  },
  ordo_rhino_hiver: {
    name: "Mme Morel", age: 42,
    personality: "Enrhumée, pressée mais à l'écoute des conseils",
    context: "Gros rhume hivernal, vient avec ordonnance du médecin.",
    prescription: ["Rhinofluimucil", "Efferalgan Codéiné"],
    firstMessage: "Bonjour, j'ai attrapé un gros rhume, voilà l'ordonnance du médecin. J'espère que ça va passer vite, j'en peux plus.",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Aucune automédication récente",
      medicalHistory: "Pas d'antécédents particuliers",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne boit pas assez d'eau, nez très irrité par les mouchages répétés, fumeuse occasionnelle"
    },
    expectedProducts: ["Spray eau de mer (Stérimar)", "Mouchoirs doux", "Inhalation (Pérubore)", "Miel/propolis pour la gorge", "Vitamine C", "Échinacée"],
    commercialTips: "Proposer le spray eau de mer comme complément indispensable pour accélérer la guérison et bien nettoyer le nez avant le Rhinofluimucil. Enchaîner avec les mouchoirs doux pour le nez irrité et la vitamine C pour soutenir les défenses."
  },
  ordo_eczema_bebe: {
    name: "Mme Da Silva", age: 30,
    personality: "Jeune maman attentive, pose beaucoup de questions, veut bien faire",
    context: "Bébé Mia (8 mois) a de l'eczéma, vient avec ordonnance du pédiatre.",
    prescription: ["Diprosone crème (dermocorticoïde)"],
    firstMessage: "Bonjour, le pédiatre a prescrit cette crème pour ma fille Mia, elle a de l'eczéma sur les joues et dans les plis. Comment je l'applique ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours pour le bébé",
      selfMedication: "N'utilise pas d'émollient quotidien pour le bébé",
      medicalHistory: "Terrain atopique familial (le papa est asthmatique)",
      allergies: "Aucune allergie connue",
      otherInfo: "Lave le bébé avec du savon de Marseille classique qui est trop agressif pour une peau atopique"
    },
    expectedProducts: ["Émollient quotidien (Dexeryl/Lipikar AP+)", "Huile lavante sans savon (Mustela Stelatopia)", "Brumisateur eau thermale", "Syndet/pain dermatologique"],
    commercialTips: "Expliquer que le dermocorticoïde traite la crise mais que l'émollient quotidien PRÉVIENT les crises suivantes - c'est un duo indissociable. L'huile lavante remplace le savon trop agressif."
  },
  ordo_hypertension: {
    name: "M. Nguyen", age: 65,
    personality: "Rigoureux, veut bien comprendre, c'est un nouveau traitement pour lui",
    context: "Premier diagnostic d'hypertension, première ordonnance.",
    prescription: ["Amlodipine 5mg", "Ramipril 5mg"],
    firstMessage: "Bonjour, mon médecin vient de me diagnostiquer de l'hypertension. C'est ma première ordonnance pour ça. Comment ça marche ces médicaments ?",
    hiddenInfo: {
      otherMeds: "Aucun autre traitement en cours",
      selfMedication: "Aucune automédication",
      medicalHistory: "Pas d'antécédent cardiovasculaire majeur",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne possède pas d'autotensiomètre, mange très salé, consomme du réglisse quotidiennement (fait monter la tension artérielle)"
    },
    expectedProducts: ["Autotensiomètre (Omron)", "Carnet de suivi tensionnel", "Sel de régime", "Compléments oméga-3"],
    commercialTips: "Proposer l'autotensiomètre en expliquant que le suivi tensionnel à domicile est recommandé par les cardiologues et que ça permet de mieux ajuster le traitement. Le carnet de suivi va avec."
  },
  ordo_diabete_insuline: {
    name: "Mme Berger", age: 48,
    personality: "Inquiète, le passage à l'insuline est vécu comme un échec personnel",
    context: "Passage à l'insuline, première délivrance, a besoin d'explications.",
    prescription: ["Lantus SoloStar", "Aiguilles pour stylo", "Bandelettes de glycémie"],
    firstMessage: "Bonjour... Mon médecin m'a mise sous insuline. Je... je pensais que ça n'arriverait jamais. Il m'a dit de venir vous voir pour les explications.",
    hiddenInfo: {
      otherMeds: "Continue la Metformine mais ne comprend pas pourquoi prendre les deux",
      selfMedication: "Aucune automédication",
      medicalHistory: "Diabète de type 2, peur des piqûres",
      allergies: "Aucune allergie connue",
      otherInfo: "Voyage prévu dans 3 semaines (problème de conservation de l'insuline), ne sait pas gérer les hypoglycémies"
    },
    expectedProducts: ["Pochette isotherme (conservation insuline en voyage)", "Sucres rapides (Hypo-Stop/Dextro Energy)", "Crème pieds diabétiques (Akiléïne)", "Lancettes supplémentaires", "Carnet de glycémie"],
    commercialTips: "La pochette isotherme est indispensable pour le voyage qu'elle prépare. Les sucres rapides sont une sécurité essentielle à toujours avoir sur soi. La crème pour les pieds s'inscrit dans le suivi global du diabète."
  },
  ordo_douleur_dos: {
    name: "M. Ramos", age: 48,
    personality: "Travailleur du BTP, costaud, veut être soulagé rapidement pour retourner au chantier",
    context: "Lumbago aigu survenu au travail, vient avec ordonnance.",
    prescription: ["Kétoprofène gel", "Thiocolchicoside"],
    firstMessage: "Aïe... Bonjour. J'ai mon ordonnance pour le dos. Je me suis bloqué au boulot, j'ai un chantier à finir cette semaine.",
    hiddenInfo: {
      otherMeds: "Aucun traitement de fond en cours",
      selfMedication: "Prend du Nurofen en automédication en plus de l'ordonnance (risque de surdosage AINS)",
      medicalHistory: "Port de charges lourdes quotidien, ne s'échauffe jamais, épisodes de lumbago récurrents",
      allergies: "Aucune allergie connue",
      otherInfo: "Veut absolument reprendre le travail dès demain malgré la douleur"
    },
    expectedProducts: ["Ceinture lombaire (Thuasne)", "Patches chauffants (ThermaCare)", "Gel de massage (Synthol)", "Balle de massage", "Arnica (Arnigel)"],
    commercialTips: "Proposer la ceinture lombaire pour pouvoir reprendre le travail en sécurité et les patchs chauffants ThermaCare pour la nuit. Le gel Synthol en complément pour les massages."
  },
  ordo_allergie_saisonniere: {
    name: "Mme Lambert", age: 35,
    personality: "Active, sportive, frustrée car les allergies l'empêchent de courir dehors",
    context: "Allergies saisonnières printanières, vient avec ordonnance.",
    prescription: ["Desloratadine 5mg", "Cromoglicate collyre"],
    firstMessage: "Bonjour, j'ai mon ordonnance pour les allergies. Chaque printemps c'est pareil, j'ai le nez qui coule et les yeux qui piquent. En plus je ne peux plus aller courir.",
    hiddenInfo: {
      otherMeds: "Aucun autre traitement en cours",
      selfMedication: "Aucune automédication récente",
      medicalHistory: "Asthme léger dans l'enfance, porte des lentilles de contact (vérifier compatibilité collyre)",
      allergies: "Allergies aux pollens de graminées",
      otherInfo: "Vit avec un chat (possible allergène permanent en plus des pollens saisonniers)"
    },
    expectedProducts: ["Spray barrière nasal (Allergyl/Humex allergie)", "Lunettes de soleil", "Sérum physiologique", "Baume lèvres protecteur", "Taie anti-acariens"],
    commercialTips: "Proposer le spray barrière nasal en expliquant qu'il permet de continuer le sport en extérieur en créant un film protecteur. Le sérum physiologique pour rincer le nez au retour de course."
  },
  ordo_gastro_enfant: {
    name: "M. Fournier", age: 40,
    personality: "Papa stressé, l'enfant vomit depuis la veille, un peu paniqué",
    context: "Gastro-entérite de son fils Léo (5 ans), vient avec ordonnance.",
    prescription: ["Tiorfan", "Smecta"],
    firstMessage: "Bonjour, mon fils Léo a une gastro, il vomit depuis hier soir et a la diarrhée. Voilà l'ordonnance du médecin. C'est la panique à la maison, sa petite sœur est aussi à la maison.",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours pour l'enfant",
      selfMedication: "Aucune automédication",
      medicalHistory: "Pas d'antécédent particulier pour l'enfant",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne sait pas préparer un soluté de réhydratation orale, petite sœur de 2 ans risque d'être contaminée, pas de gel hydroalcoolique à la maison, l'enfant refuse de boire"
    },
    expectedProducts: ["Soluté de réhydratation orale (Adiaril)", "Probiotiques enfant (Ultralevure sachets)", "Gel hydroalcoolique", "Lingettes désinfectantes", "Solution nasale"],
    commercialTips: "Le SRO est INDISPENSABLE en cas de gastro chez l'enfant pour éviter la déshydratation - c'est la priorité absolue. Le gel hydroalcoolique et les lingettes pour protéger la petite sœur de la contagion."
  },

  // ========== CONSEILS PATHOLOGIES COURANTES ==========
  conseil_rhume: {
    name: "M. Lemaire", age: 35,
    personality: "Enrhumé, veut être soulagé vite, un peu impatient",
    context: "Vient au comptoir avec le nez bouché depuis 3 jours, sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, j'ai le nez complètement bouché depuis 3 jours, c'est l'enfer. Donnez-moi quelque chose d'efficace.",
    hiddenInfo: {
      otherMeds: "Traitement antihypertenseur en cours (contre-indication aux vasoconstricteurs)",
      selfMedication: "Utilise déjà Actifed et Aturgyl depuis 5 jours (vasoconstricteurs en excès et dangereux avec son hypertension)",
      medicalHistory: "Hypertendu sous traitement",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne boit pas assez d'eau, ne fait pas le lien entre son hypertension et la contre-indication aux vasoconstricteurs"
    },
    expectedProducts: ["Spray eau de mer hypertonique (Physiomer/Stérimar)", "Paracétamol", "Inhalation (Pérubore/Aromasol)", "Pastilles gorge", "Vitamine C", "Tisane thym/miel", "Mouchoirs doux"],
    commercialTips: "Construire un panier complet autour du symptôme sans vasoconstricteurs. Proposer la vitamine C et le thym/miel comme complément naturel agréable."
  },
  conseil_jambes_lourdes: {
    name: "Mme Garnier", age: 52,
    personality: "Sédentaire, travaille debout toute la journée en boulangerie, souffre de la chaleur",
    context: "Été, jambes lourdes et gonflées, vient sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, j'ai les jambes très lourdes et gonflées avec cette chaleur. Mes chevilles doublent de volume le soir. Vous avez quelque chose ?",
    hiddenInfo: {
      otherMeds: "Sous pilule contraceptive (toujours sous contraception orale à 52 ans, facteur de risque veineux)",
      selfMedication: "Aucune automédication",
      medicalHistory: "Fume 5 cigarettes par jour (facteur de risque vasculaire supplémentaire)",
      allergies: "Aucune allergie connue",
      otherInfo: "Un mollet plus gonflé que l'autre (signe d'alerte possible phlébite à orienter vers le médecin), ne porte pas de contention"
    },
    expectedProducts: ["Veinotonique oral (Daflon/Cyclo3 Fort)", "Gel jambes fraîcheur (Thrombex gel)", "Bas de contention (Sigvaris)", "Spray fraîcheur", "Complément vigne rouge/marronnier"],
    commercialTips: "Les bas de contention sont la base du traitement veineux, le veinotonique oral complète l'action sur le long terme, et le gel apporte un soulagement immédiat."
  },
  conseil_solaire_famille: {
    name: "Famille Martin", age: 40,
    personality: "Famille enthousiaste, part en vacances au bord de mer, veut se préparer",
    context: "Couple avec 2 enfants (4 et 8 ans), départ en vacances à la mer.",
    prescription: [],
    firstMessage: "Bonjour ! On part en vacances à la mer la semaine prochaine avec nos deux enfants. Il nous faut de la crème solaire. Qu'est-ce que vous conseillez ?",
    hiddenInfo: {
      otherMeds: "Monsieur prend du millepertuis (photosensibilisant, risque de brûlure solaire accru)",
      selfMedication: "Aucune autre automédication",
      medicalHistory: "La fille de 4 ans a une peau très claire type phototype I (très sensible au soleil)",
      allergies: "Aucune allergie connue",
      otherInfo: "Pas de chapeau ni lunettes de soleil prévus pour les enfants, destination tropicale (risque moustiques en plus du soleil)"
    },
    expectedProducts: ["SPF50+ enfants (Avène/Bioderma)", "SPF30-50 adultes", "Après-soleil", "Stick lèvres SPF", "Brumisateur", "Anti-moustiques (Cinq sur Cinq/Insect Ecran)", "Biafine", "Trousse de voyage"],
    commercialTips: "Construire la trousse solaire complète pour toute la famille. Ne pas oublier les anti-moustiques si destination tropicale. L'après-soleil pour le confort du soir."
  },
  conseil_digestion: {
    name: "Mme Torres", age: 45,
    personality: "Mange vite, stressée par le travail, problèmes digestifs récurrents",
    context: "Ballonnements et digestion difficile après les repas, sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, j'ai tout le temps des ballonnements après manger, c'est très gênant surtout au travail. Vous avez quelque chose d'efficace ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement prescrit en cours",
      selfMedication: "Prend du Spasfon de temps en temps mais ne le mentionne pas spontanément",
      medicalHistory: "Pas d'antécédent digestif particulier diagnostiqué",
      allergies: "Aucune allergie connue",
      otherInfo: "Mange très vite à cause du stress au travail, boit 4 à 5 cafés par jour (irritant digestif)"
    },
    expectedProducts: ["Charbon végétal ou Météospasmyl", "Probiotiques en cure (Lactibiane/Ergyphilus)", "Tisane digestive (fenouil/menthe poivrée)", "Complément artichaut/radis noir", "Enzyme digestive"],
    commercialTips: "Proposer une cure de probiotiques pour rééquilibrer la flore intestinale sur le long terme, plus la tisane digestive comme rituel quotidien agréable après le repas."
  },
  conseil_fatigue_etudiant: {
    name: "M. Robin", age: 28,
    personality: "Intellectuel, épuisé, soutenance de thèse dans 3 semaines",
    context: "Fatigue intense et troubles de la concentration, vient sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, je suis complètement crevé en ce moment. J'ai ma soutenance de thèse dans 3 semaines et je n'arrive plus à me concentrer. Vous avez des vitamines ou quelque chose ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Boit beaucoup de café et de boissons énergisantes pour tenir",
      medicalHistory: "Pas d'antécédent médical particulier",
      allergies: "Aucune allergie connue",
      otherInfo: "Dort seulement 5 heures par nuit, mange mal (fast food principalement), pâleur visible (possible carence en fer)"
    },
    expectedProducts: ["Magnésium + B6 (Magné B6/Formag)", "Multivitamines (Berocca/Supradyn)", "Gelée royale/ginseng (Arkopharma)", "Oméga-3 (concentration)", "Spray mélatonine (sommeil)", "Ampoules de fer si pâleur"],
    commercialTips: "Construire un pack performance intellectuelle : magnésium pour le stress, oméga-3 pour la concentration, mélatonine pour optimiser la qualité du sommeil."
  },
  conseil_bebe_premier: {
    name: "Mme Diallo", age: 30,
    personality: "Jeune maman anxieuse, premier bébé Aya (1 mois), veut tout bien faire",
    context: "Bébé a des coliques et érythème fessier, vient sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, mon bébé pleure beaucoup le soir, elle a 1 mois. Ma mère dit que c'est des coliques. Et en plus elle a les fesses toutes rouges. Je suis perdue...",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours pour le bébé",
      selfMedication: "Aucune automédication",
      medicalHistory: "Allaite mais envisage d'arrêter par fatigue",
      allergies: "Aucune allergie connue",
      otherInfo: "N'utilise pas de liniment mais des lingettes parfumées (irritant pour les fesses), ne change pas assez souvent la couche, le bébé régurgite aussi"
    },
    expectedProducts: ["Calmosine/Biogaia (coliques)", "Liniment oléocalcaire", "Couches hypoallergéniques", "Crème change (Bepanthen/Cicalfate)", "Eau thermale", "Coussin chauffant bébé", "Tétine adaptée"],
    commercialTips: "Montrer le liniment comme alternative douce aux lingettes parfumées. Proposer la crème change en duo avec le liniment. Calmosine ou Biogaia pour les coliques."
  },
  conseil_sport_reprise: {
    name: "Thomas", age: 25,
    personality: "Motivé, a repris le sport après 2 ans d'arrêt, souffre mais ne veut pas ralentir",
    context: "Courbatures et crampes après reprise intensive du sport, sans ordonnance.",
    prescription: [],
    firstMessage: "Salut ! J'ai repris la muscu et le running il y a 2 semaines et j'ai des courbatures de fou. Mes mollets me tuent et j'ai des crampes la nuit. Vous avez des trucs ?",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Aucune automédication",
      medicalHistory: "Pas d'antécédent médical",
      allergies: "Aucune allergie connue",
      otherInfo: "Ne s'hydrate pas assez pendant l'effort, ne s'étire pas, a repris trop intensément (entraînement tous les jours), ne mange pas assez de protéines"
    },
    expectedProducts: ["Arnica (Arnigel + granules)", "Magnésium (crampes)", "Baume/gel chauffant (Synthol)", "Boisson isotonique/électrolytes", "Protéines/BCAA", "Compresse froid", "Bande de contention"],
    commercialTips: "Le magnésium est la base pour les crampes nocturnes, proposer l'arnica en gel + granules en combo, et la boisson isotonique pour l'hydratation pendant l'effort."
  },
  conseil_poux_rentree: {
    name: "Mme Martinez", age: 38,
    personality: "Débordée, maman de 3 enfants, c'est la rentrée, veut une solution rapide",
    context: "Poux détectés chez un de ses enfants, vient sans ordonnance.",
    prescription: [],
    firstMessage: "Bonjour, mon fils a des poux. L'école vient de m'appeler. Il me faut un traitement. Donnez-moi le plus efficace !",
    hiddenInfo: {
      otherMeds: "Aucun traitement en cours",
      selfMedication: "Aucune automédication",
      medicalHistory: "Pas d'antécédent particulier",
      allergies: "Aucune allergie connue",
      otherInfo: "A 2 autres enfants à vérifier (risque de contamination), n'a jamais traité de poux avant, ne pense pas à traiter l'environnement (literie, doudous, bonnets), son fils a les cheveux longs"
    },
    expectedProducts: ["Traitement anti-poux (Pouxit XF/Paranix)", "Peigne fin métallique (Assy)", "Spray répulsif préventif", "Spray textile/literie", "Shampooing lavande", "Élastiques cheveux", "Charlotte"],
    commercialTips: "Le traitement seul ne suffit pas. Proposer le spray textile pour éviter la réinfestation, le répulsif pour protéger les frères et sœurs, et le peigne métallique indispensable pour les lentes."
  }
};

export default SCENARIOS;
