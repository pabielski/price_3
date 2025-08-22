import { getTranslate } from "../tolgee/server";
import { getLocale } from "next-intl/server";

// Funkcja do czyszczenia URL-a z dziwnych znaków Unicode
const cleanURL = (url: string): string => {
  if (!url) return "";
  return url
    .replace(/[\u200C\u200D\uFEFF\u2060\u2061\u2062\u2063\u2064]/g, "")
    .trim();
};

// Główna funkcja do pobierania URL-i
export const getURLs = async () => {
  const t = await getTranslate();
  const locale = await getLocale();

  return {
    primary: cleanURL(t("Global.PrimaryURL")),
    secondary: cleanURL(t("Global.SecondaryURL")),
    locale,
  };
};

// Funkcja do dodawania parametru location
export const addLocation = (url: string, location: string): string => {
  const clean = cleanURL(url);
  return `${clean}&location=${location}`;
};
