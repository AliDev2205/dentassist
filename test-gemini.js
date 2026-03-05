require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

async function testGemini() {
  try {
    console.log('Clé API:', process.env.GOOGLE_GEMINI_API_KEY ? '✅ Présente' : '❌ Manquante');
    
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Dis bonjour en français");
    console.log('✅ Réponse:', result.response.text());
    
  } catch (error) {
    console.log('❌ Erreur:', error.message);
  }
}

testGemini();