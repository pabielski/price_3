import React from "react";
import { getTranslate } from "@/tolgee/server";
import { Facebook, Twitter, Linkedin, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import { getLocale } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslate();
  const locale = await getLocale();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1300px] 3xl:max-w-screen-2xl mx-auto px-4 lg:px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Informacje o firmie */}
          <div className="col-span-1 md:col-span-2">
            {/* <h3 className="text-xl font-bold mb-4">{t("companyTitle")}</h3> */}
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={200}
              className="max-w-20 mb-4"
            />
            <p className="text-gray-400 mb-4">
              {t("footer.companyDescription")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/programkwhotel"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>

              <a
                href="https://www.youtube.com/@kwhotel-polska"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <YoutubeIcon className="h-6 w-6" />
              </a>
              <a
                href="https://pl.linkedin.com/company/kajware"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Linki */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.linksTitle")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://kwhotel.com/pl/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.solutions")}
                </a>
              </li>
              <li>
                <a
                  href="https://ai-w-hotelarstwie-kontakt.paperform.co/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.contact")}
                </a>
              </li>
              <li>
                <a
                  href="https://kwhotel.com/pl/rodo/"
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                >
                  {t("footer.rodo")}
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              {t("footer.contactTitle")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t("footer.email")}</li>
              <li>{t("footer.phone")}</li>
              <li>{t("footer.address")}</li>
            </ul>
          </div>
        </div>

        {/* Stopka */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              <a
                href={`https://kwhotel.com/${locale}`}
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Kwhotel
              </a>
              . {t("footer.rightsReserved")}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="https://kwhotel.com/pl/polityka-prywatnosci/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.privacyPolicy")}
              </a>
              <a
                href="https://kwhotel.com/pl/rodo/"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {t("footer.rodo")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
