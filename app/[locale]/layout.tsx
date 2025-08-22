// app/[locale]/layout.tsx (SERVER)
import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { TolgeeNextProvider } from "@/tolgee/client";
import { ALL_LANGUAGES } from "@/tolgee/shared";
import { getTolgee } from "@/tolgee/server";
import { HeroUIProvider } from "@heroui/react";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";

type Props = {
  children: ReactNode;
  params: { locale: string }; // ← NIE Promise
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = params; // ← bez await
  if (!ALL_LANGUAGES.includes(locale)) notFound();

  const tolgee = await getTolgee();
  const records = await tolgee.loadRequired();

  return (
    <html lang={locale}>
      <body className={`${montserrat.className} ${poppins.className}`}>
        <HeroUIProvider>
          <TolgeeNextProvider language={locale} staticData={records}>
            <NextIntlClientProvider>{children}</NextIntlClientProvider>
          </TolgeeNextProvider>
        </HeroUIProvider>
      </body>
    </html>
  );
}
