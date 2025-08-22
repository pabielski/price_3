import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  // Fallback do domyślnego języka jeśli locale nie jest dostępny
  const locale = requested || "pl";

  try {
    const messages = (await import(`../messages/${locale}.json`)).default;
    return {
      locale,
      messages,
    };
  } catch (error) {
    // Jeśli nie można załadować pliku, zwróć pusty obiekt messages
    console.warn(`Could not load messages for locale: ${locale}`, error);
    return {
      locale,
      messages: {},
    };
  }
});
