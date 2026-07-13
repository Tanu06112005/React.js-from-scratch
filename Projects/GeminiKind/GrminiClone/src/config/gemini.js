const ApiKey = import.meta.env.VITE_GEMINI_API_CODE;

console.log("API key loaded:", !!ApiKey);

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import { GoogleGenAI } from '@google/genai';

console.log("API key loaded:", !!ApiKey);

const ai = new GoogleGenAI({
  apiKey: ApiKey,
});

const runGemini = async (prompt) => {
  try {
    // Ekdum simple request bina kisi extra tools ya config ke
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite', 
      contents: prompt,
    });

    // Result return karna
    return response.text; 
  } catch (error) {
    console.error("Gemini API Error:", error);
    return null;
  }
}

export default runGemini;


