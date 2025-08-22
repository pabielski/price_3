"use client"; // Umożliwia użycie kodu po stronie klienta
import Script from "next/script";
import { useEffect, useState } from "react";

export default function LiveChat() {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    const checkConsent = () => {
      try {
        if (
          window.CookieConsent &&
          typeof window.CookieConsent.acceptedCategory === "function"
        ) {
          const hasConsent = window.CookieConsent.acceptedCategory("necessary");
          setIsConsented(!!hasConsent);
        }
      } catch {
        // Cicha obsługa błędów
      }
    };

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
    <>
      <Script
        id="livechat-script"
        strategy="afterInteractive"
        // // type="text/plain" //
        // data-category="functionality"
        dangerouslySetInnerHTML={{
          __html: `
          window.__lc = window.__lc || {};
          window.__lc.license = 18926579;
          window.__lc.integration_name = "manual_channels";
          window.__lc.product_name = "livechat";
          (function(n,t,c){
            function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}
            var e={_q:[],_h:null,_v:"2.0",
            on:function(){i(["on",c.call(arguments)])},
            once:function(){i(["once",c.call(arguments)])},
            off:function(){i(["off",c.call(arguments)])},
            get:function(){
              if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
              return i(["get",c.call(arguments)])
            },
            call:function(){i(["call",c.call(arguments)])},
            init:function(){
              var n=t.createElement("script");
              n.async=!0,n.type="text/javascript";
              n.src="https://cdn.livechatinc.com/tracking.js";
              t.head.appendChild(n)
            }};
            !n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
          }(window,document,[].slice));
        `,
        }}
      ></Script>
      <noscript>
        <a href="https://www.livechat.com/chat-with/18926579/" rel="nofollow">
          Chat with us
        </a>
        , powered by{" "}
        <a
          href="https://www.livechat.com/?welcome"
          rel="noopener nofollow"
          target="_blank"
        >
          LiveChat
        </a>
      </noscript>
    </>
  );
}
