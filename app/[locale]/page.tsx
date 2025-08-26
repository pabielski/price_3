import Header from "@/components/Header";
import Hero from "@/components/hero";
import ForWhom from "@/components/ForWhom";

import ComparisonTable from "@/components/ComparisonTable";
import ProductsSection from "@/components/ProductsSection";

import Footer from "@/components/Footer";
import { getTranslate } from "@/tolgee/server";
import QnA from "@/components/faq";

export default async function Home() {
  const t = await getTranslate();

  const menuItems = [
    { label: t("Menu.SectionFive", "for-whom-section"), sectionId: "dla-kogo" },

    {
      label: t("Menu.SectionTwo", "features-tabs-section"),
      sectionId: "features-tabs-section",
    },

    { label: t("Menu.SectionFour", "faq-section"), sectionId: "faq-section" },
  ];

  return (
    <>
      <Header menuItems={menuItems} />
      <Hero />
      <ForWhom />
      <ComparisonTable />
      <ProductsSection />
      <QnA />
      <Footer />
    </>
  );
}
