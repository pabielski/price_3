"use client"; // Enables client-side code execution

import Script from "next/script";
import { useEffect, useState } from "react";

export default function MetaPixel() {
  // State to track if user has consented to marketing cookies
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    // Function to check if user has given consent for marketing cookies
    const checkConsent = () => {
      try {
        if (
          window.CookieConsent &&
          typeof window.CookieConsent.acceptedCategory === "function"
        ) {
          const hasConsent = window.CookieConsent.acceptedCategory("marketing");
          setIsConsented(!!hasConsent);
        }
      } catch {
        // Silent error handling
      }
    };

    // Handler for when cookie consent is ready
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

  if (!isConsented) {
    return null;
  }

  return (
    <Script
      id="fb-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '969705693810399');
          fbq('track', 'PageView');
        `,
      }}
    />
  );
}
