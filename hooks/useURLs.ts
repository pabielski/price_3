// Prosta funkcja do czyszczenia URL-a z dziwnych znaków Unicode
export const cleanURL = (url: string): string => {
  if (!url) return "";
  return url
    .replace(/[\u200C\u200D\uFEFF\u2060\u2061\u2062\u2063\u2064]/g, "")
    .trim();
};
