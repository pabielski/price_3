import type { CookieConsentConfig } from "vanilla-cookieconsent";
import plTranslations from "./locales/pl.json";
import enTranslations from "./locales/en.json";
const pluginConfig: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
      equalWeightButtons: true,
      flipButtons: false,
    },
    preferencesModal: {
      layout: "box",
      position: "left",
      equalWeightButtons: true,
      flipButtons: false,
    },
  },

  onFirstConsent: function () {
    document.dispatchEvent(new Event("cookieconsent:accepted"));
  },

  onConsent: function () {
    document.dispatchEvent(new Event("cookieconsent:accepted"));
  },

  onChange: function () {
    document.dispatchEvent(new Event("cookieconsent:accepted"));
  },

  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      enabled: false,
      autoClear: {
        cookies: [{ name: /^(_ga|_gid|_ga_FPS8SCFRC2)/ }],
      },
    },
    marketing: {
      autoClear: {
        cookies: [{ name: "_fbp" }],
      },
    },
    functionality: {
      autoClear: {
        cookies: [
          { name: "NEXT_LOCALE" },
          { name: "_oauth_redirect_detector" },
        ],
      },
    },
  },

  language: {
    default: "pl",
    autoDetect: "document",
    translations: {
      pl: plTranslations,
      en: enTranslations,
    },
  },
};

export default pluginConfig;
