import { FormatIcu } from "@tolgee/format-icu";
import { DevTools, Tolgee } from "@tolgee/react";
import enMessages from "../messages/en.json";
import plMessages from "../messages/pl.json";
import deMessages from "../messages/de.json";

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;
const isProduction = process.env.NODE_ENV === "production";

export const ALL_LANGUAGES = ["pl", "en", "de"];

export const DEFAULT_LANGUAGE = "pl";

export function TolgeeBase() {
  const tolgee = Tolgee()
    .use(FormatIcu())
    .updateDefaults({
      fallbackLanguage: "pl",
      staticData: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        en: enMessages as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        pl: plMessages as any,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        de: deMessages as any,
      },
    });

  // Dodaj DevTools tylko w trybie development
  if (!isProduction) {
    tolgee.use(DevTools());
    if (apiKey && apiUrl) {
      tolgee.updateDefaults({
        apiKey,
        apiUrl,
      });
    }
  }

  return tolgee;
}
