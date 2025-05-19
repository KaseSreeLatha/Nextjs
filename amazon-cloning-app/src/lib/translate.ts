// lib/translate.ts
import axios from "axios";

const API_URL = "https://libretranslate.com/translate"; // Public LibreTranslate API

// Translate function that interacts with the LibreTranslate API
export const translateText = async (text: string, targetLanguage: string): Promise<string> => {
  try {
    const response = await axios.post(API_URL, {
      q: text,
      source: "en", // Default source language is English
      target: targetLanguage,
      format: "text",
    });

    return response.data.translatedText; // Return the translated text
  } catch (error) {
    console.error("Error during translation:", error);
    throw new Error("Translation failed.");
  }
};