"use client";

import { Tabs, Tab } from "@heroui/tabs";
import { useState } from "react";
import { useTranslate } from "@tolgee/react";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

type TabKey =
  | "panel_administracyjny"
  | "sledzenie"
  | "ai"
  | "integracje"
  | "piate"
  | "szoste";

interface ListItem {
  title: string;
  description: string;
}

interface TabData {
  title: string;
  subtitle: string;
  items: ListItem[];
}

export default function FeaturesTabs() {
  const [selected, setSelected] = useState<TabKey>("panel_administracyjny");
  const { t } = useTranslate();

  const renderItem = (item: ListItem) => {
    return (
      <div className="space-y-2">
        <h4 className="font-semibold text-base">{item.title}</h4>
        <p className="text-gray-600">{item.description}</p>
      </div>
    );
  };

  //  Static data for 6 sections
  const tabsData: Record<TabKey, TabData> = {
    panel_administracyjny: {
      title: t("tab1.title"),
      subtitle: t("tab1.subtitle"),
      items: [
        {
          title: t("tab1.item1.title"),
          description: t("tab1.item1.description"),
        },
        {
          title: t("tab1.item2.title"),
          description: t("tab1.item2.description"),
        },
        {
          title: t("tab1.item3.title"),
          description: t("tab1.item3.description"),
        },
      ],
    },
    sledzenie: {
      title: t("tab2.title"),
      subtitle: t("tab2.subtitle"),
      items: [
        {
          title: t("tab2.item1.title"),
          description: t("tab2.item1.description"),
        },
        {
          title: t("tab2.item2.title"),
          description: t("tab2.item2.description"),
        },
        {
          title: t("tab2.item3.title"),
          description: t("tab2.item3.description"),
        },
      ],
    },
    ai: {
      title: t("tab3.title"),
      subtitle: t("tab3.subtitle"),
      items: [
        {
          title: t("tab3.item1.title"),
          description: t("tab3.item1.description"),
        },
        {
          title: t("tab3.item2.title"),
          description: t("tab3.item2.description"),
        },
        {
          title: t("tab3.item3.title"),
          description: t("tab3.item3.description"),
        },
        {
          title: t("tab3.item4.title"),
          description: t("tab3.item4.description"),
        },
      ],
    },
    integracje: {
      title: t("tab4.title"),
      subtitle: t("tab4.subtitle"),
      items: [
        {
          title: t("tab4.item1.title"),
          description: t("tab4.item1.description"),
        },
        {
          title: t("tab4.item2.title"),
          description: t("tab4.item2.description"),
        },
        {
          title: t("tab4.item3.title"),
          description: t("tab4.item3.description"),
        },
        {
          title: t("tab4.item4.title"),
          description: t("tab4.item4.description"),
        },
        {
          title: t("tab4.item5.title"),
          description: t("tab4.item5.description"),
        },
        {
          title: t("tab4.item6.title"),
          description: t("tab4.item6.description"),
        },
      ],
    },
    piate: {
      title: t("tab5.title"),
      subtitle: t("tab5.subtitle"),
      items: [
        {
          title: t("tab5.item1.title"),
          description: t("tab5.item1.description"),
        },
        {
          title: t("tab5.item2.title"),
          description: t("tab5.item2.description"),
        },
        {
          title: t("tab5.item3.title"),
          description: t("tab5.item3.description"),
        },
      ],
    },
    szoste: {
      title: t("tab6.title"),
      subtitle: t("tab6.subtitle"),
      items: [
        {
          title: t("tab6.item1.title"),
          description: t("tab6.item1.description"),
        },
        {
          title: t("tab6.item2.title"),
          description: t("tab6.item2.description"),
        },
        {
          title: t("tab6.item3.title"),
          description: t("tab6.item3.description"),
        },
        {
          title: t("tab6.item4.title"),
          description: t("tab6.item4.description"),
        },
        {
          title: t("tab6.item5.title"),
          description: t("tab6.item5.description"),
        },
      ],
    },
  };

  return (
    <section id="" className="bg-white">
      <div className="w-full max-w-[1300px] 3xl:max-w-screen-2xl mx-auto px-4 md:px-12 py-8 md:py-24 ">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-12 text-center">
          {t("tabs_title")}
        </h2>
        <p className="text-center text-zinc-600 mb-12">
          <span className="text-gray-600">{t("tabs_description")}</span>
        </p>

        <Tabs
          selectedKey={selected}
          onSelectionChange={(key) => setSelected(key as TabKey)}
          classNames={{
            tabList: "w-full relative flex flex-col md:flex-row",
            cursor: "w-full bg-[green]",
            tab: "text-center text-xs sm:text-base whitespace-normal",
            tabContent: "",
          }}
          className="w-full"
          color="primary"
          variant="solid"
          placement="top"
        >
          <Tab
            key="panel_administracyjny"
            title={tabsData.panel_administracyjny.title}
          >
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">
                {tabsData.panel_administracyjny.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.panel_administracyjny.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.panel_administracyjny.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab key="sledzenie" title={tabsData.sledzenie.title}>
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">{tabsData.sledzenie.title}</h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.sledzenie.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.sledzenie.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab key="ai" title={tabsData.ai.title}>
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">{tabsData.ai.title}</h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.ai.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.ai.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab key="integracje" title={tabsData.integracje.title}>
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">
                {tabsData.integracje.title}
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.integracje.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.integracje.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab key="piate" title={tabsData.piate.title}>
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">{tabsData.piate.title}</h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.piate.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.piate.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
          <Tab key="szoste" title={tabsData.szoste.title}>
            <div className="mt-6 space-y-6">
              <h3 className="text-2xl font-bold">{tabsData.szoste.title}</h3>
              <p className="text-lg text-gray-600 mb-8">
                {tabsData.szoste.subtitle}
              </p>
              <ul className="space-y-6">
                {tabsData.szoste.items.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <div className="flex-1">{renderItem(item)}</div>
                  </li>
                ))}
              </ul>
            </div>
          </Tab>
        </Tabs>

        <div className="w-full pt-12 lg:pt-16 mx-auto lg:p-4 z-10 relative flex justify-center gap-10">
          <PrimaryButton url={t("Link1")}>{t("PrimaryButton")}</PrimaryButton>
          <SecondaryButton url={t("demoLink")}>
            {t("SecondaryButton")}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
