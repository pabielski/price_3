"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

// Deklaracje typów dla Google Tag Manager
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default function ScriptGTM({
  gtmId,
  dataLayerName = "dataLayer",
}: {
  gtmId?: string;
  dataLayerName?: string;
}) {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    // Dodajmy definicję gtag do window
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    // Ustaw domyślne odrzucenie zgód
    window.gtag("consent", "default", {
      analytics_storage: "denied",
    });

    const checkConsent = () => {
      try {
        if (
          window.CookieConsent &&
          typeof window.CookieConsent.acceptedCategory === "function"
        ) {
          const hasConsent = window.CookieConsent.acceptedCategory("analytics");
          setIsConsented(!!hasConsent);
        }
      } catch {
        // Cicha obsługa błędów
      }
    };

    // Słuchaj wydarzeń zgód
    const handleReady = () => {
      checkConsent();
    };

    document.addEventListener("cookieconsent:ready", handleReady);
    document.addEventListener("cookieconsent:accepted", checkConsent);
    document.addEventListener("cookieconsent:changed", checkConsent);

    return () => {
      document.removeEventListener("cookieconsent:ready", handleReady);
      document.removeEventListener("cookieconsent:accepted", checkConsent);
      document.removeEventListener("cookieconsent:changed", checkConsent);
    };
  }, []);

  if (!gtmId || !isConsented) {
    return null;
  }

  return (
    <>
      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','${dataLayerName}','${gtmId}');`,
        }}
      />
      {/* Google Tag Manager (noscript) */}
      <noscript
        id="gtm-noscript"
        data-category="marketing"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
}
