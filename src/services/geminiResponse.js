import { GoogleGenAI } from "@google/genai";

export async function askGemini(question) {
  try {
    const ai = new GoogleGenAI({
      apiKey: import.meta.env.VITE_GEMINIKEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: question
    });

    return response.text;
  } catch (error) {
    console.error("❌ Gemini API Error:", error?.message || error);
    return "Sorry, I couldn't fetch Gemini response right now.";
  }
}
