// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node




import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

async function main(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    console.log(response.text)
    return response.text;

  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error!";
  }
}

export default main;

// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: import.meta.env.VITE_GEMINI_API_KEY,
// });

// const tools = [
//   {
//     type: "google_search",
//   },
// ];

// const generationConfig = {
//   max_output_tokens: 2048,
//   thinkingLevel: "medium",
// };

// async function main(prompt) {
//   const interaction = await ai.interactions.create({
//     model: "models/gemini-3.5-flash",
//     input: prompt,
//     tools,
//     generation_config: generationConfig,
//   });

//   return interaction.output_text;
// }

// export default main;




// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY, });

// async function main() {
//   const interaction = await ai.interactions.create({
//     model: "gemini-3.5-flash",
//     input: "Explain how AI works in a few words",
//   });
//   console.log(interaction.output_text);
// }

//  export default main;
// import {GoogleGenAI,ThinkingLevel} from '@google/genai';

// async function main(prompt) {
//   const ai = new GoogleGenAI({
// apiKey: import.meta.env.VITE_GEMINI_API_KEY,  });
//   const tools = [
//     {
//       googleSearch: {
//       }
//     },
//   ];
//   const config = {
//     thinkingConfig: {
//       thinkingLevel: ThinkingLevel.MINIMAL,
//     },
//     tools,
//   };
//   const model = 'gemini-3.1-flash-lite';
//   const contents = [
//     {
//       role: 'user',
//       parts: [
//         {
//           text: prompt,
//         },
//       ],
//     },
//   ];

//   const response = await ai.models.generateContentStream({
//     model,
//     config,
//     contents,
//   });
// //   let fileIndex = 0;
//   for await (const chunk of response) {
//     if (chunk.text) {
//       console.log(chunk.text);
//     }
//   }
// }

// export default main;


// import { GoogleGenAI } from "@google/genai";
// import "dotenv/config";

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,
// });

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Hello Gemini!",
//   });

//   console.log(response.text);
// }

// main();