"use client";

import { useEffect } from "react";
import * as VanillaCookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import pluginConfig from "./config";

// Eksportuj instancję dla innych komponentów
export const getCookieConsent = () => window.CookieConsent;

const CookieConsentComponent = () => {
  useEffect(() => {
    // Najpierw przypisz obiekt CookieConsent do window
    if (typeof window !== "undefined") {
      window.CookieConsent = VanillaCookieConsent;
    }

    // Inicjalizacja
    VanillaCookieConsent.run(pluginConfig);

    // Dispatch event when CookieConsent is ready
    setTimeout(() => {
      document.dispatchEvent(new Event("cookieconsent:ready"));
    }, 300);
  }, []);

  return null;
};

export default CookieConsentComponent;
