import Header from "@/components/Header";
import Hero from "@/components/hero";
import ForWhom from "@/components/ForWhom";

import ComparisonTable from "@/components/ComparisonTable";
import ProductsSection from "@/components/ProductsSection";

import Footer from "@/components/Footer";
import { getTranslate } from "@/tolgee/server";

export default async function Home() {
  const t = await getTranslate();

  const menuItems = [
    { label: t("Menu.SectionOne", "info-section"), sectionId: "info-section" },
    {
      label: t("Menu.SectionTwo", "features-section"),
      sectionId: "features-section",
    },
    {
      label: t("Menu.SectionThree", "plans-section"),
      sectionId: "plans-section",
    },
    { label: t("Menu.SectionFour", "faq-section"), sectionId: "faq-section" },
    { label: t("Menu.SectionFive", "for-whom-section"), sectionId: "dla-kogo" },
  ];

  return (
    <>
      <Header menuItems={menuItems} />
      <Hero />
      <ForWhom />
      <ComparisonTable />
      <ProductsSection />
      <Footer />
    </>
  );
}
