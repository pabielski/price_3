export const URLS = {
  pl: {
    primary:
      "https://kwhotel-cloud.paperform.co?sol=--2--&source=lp-price&location=hero",
    secondary: "https://example.com/pl",
  },
  en: {
    primary:
      "https://kwhotel-cloud.paperform.co?sol=--2--&source=lp-price&location=hero",
    secondary: "https://example.com/en",
  },
  de: {
    primary:
      "https://kwhotel-cloud.paperform.co?sol=--2--&source=lp-price&location=hero",
    secondary: "https://example.com/de",
  },
};

export type Language = keyof typeof URLS;
