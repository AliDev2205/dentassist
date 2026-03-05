import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (!message || message.trim().length === 0) {
      return NextResponse.json(
        { error: 'Le message ne peut pas être vide' },
        { status: 400 }
      );
    }

    if (message.length > 500) {
      return NextResponse.json(
        { error: 'Le message est trop long (max 500 caractères)' },
        { status: 400 }
      );
    }

    // Simulation de réponse - À REMPLACER PAR TON IA
    const responses = [
      "En tant qu'assistant dentaire, je peux vous donner des conseils généraux sur l'hygiène bucco-dentaire. Pour un diagnostic précis, consultez un dentiste.",
      "Je recommande un brossage des dents 2 fois par jour pendant 2 minutes, avec une brosse à dents souple.",
      "Les contrôles dentaires réguliers sont importants. Je suggère une visite chez le dentiste tous les 6 mois.",
      "Pour les douleurs dentaires, consultez rapidement un dentiste. En attendant, vous pouvez prendre un antalgique compatible avec votre santé.",
    ];

    // Réponse simulée basée sur des mots-clés
    let response = responses[Math.floor(Math.random() * responses.length)];
    
    if (message.toLowerCase().includes('bross') || message.toLowerCase().includes('nettoy')) {
      response = "Pour un bon brossage : utilisez une brosse souple, faites des mouvements circulaires, et n'oubliez pas les gencives. Changez de brosse tous les 3 mois.";
    } else if (message.toLowerCase().includes('carie') || message.toLowerCase().includes('doul')) {
      response = "Les caries peuvent causer des douleurs. Consultez un dentiste pour un diagnostic. En attendant, évitez le sucré et maintenez une bonne hygiène.";
    } else if (message.toLowerCase().includes('rendez') || message.toLowerCase().includes('consult')) {
      response = "Vous pouvez prendre rendez-vous avec un dentiste via notre plateforme. Allez dans la section 'Dentistes disponibles' de votre tableau de bord.";
    }

    // Simule un délai de traitement
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    return NextResponse.json({ response });
    
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}