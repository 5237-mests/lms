import { en } from "./en"
import { fr } from "./fr"

export const translations = {
  en,
  fr,
}

export type Language = keyof typeof translations
export type TranslationKeys = typeof en

