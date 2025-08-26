"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { useTranslate } from "@tolgee/react";

interface FAQItem {
  title: string;
  content: string;
}

export default function QnA() {
  const { t } = useTranslate();

  const handleRedirect = (url: string): void => {
    window.open(url, "_blank"); // Open in a new tab
  };

  // Statyczne dane dla 5 pytań FAQ
  const questions: FAQItem[] = [
    {
      title: t("FAQ.questions.0.title"),
      content: t("FAQ.questions.0.content"),
    },
    {
      title: t("FAQ.questions.1.title"),
      content: t("FAQ.questions.1.content"),
    },
    {
      title: t("FAQ.questions.2.title"),
      content: t("FAQ.questions.2.content"),
    },
    {
      title: t("FAQ.questions.3.title"),
      content: t("FAQ.questions.3.content"),
    },
    {
      title: t("FAQ.questions.4.title"),
      content: t("FAQ.questions.4.content"),
    },
    {
      title: t("FAQ.questions.5.title"),
      content: t("FAQ.questions.5.content"),
    },
    {
      title: t("FAQ.questions.6.title"),
      content: t("FAQ.questions.6.content"),
    },
    {
      title: t("FAQ.questions.7.title"),
      content: t("FAQ.questions.7.content"),
    },
    {
      title: t("FAQ.questions.8.title"),
      content: t("FAQ.questions.8.content"),
    },
    {
      title: t("FAQ.questions.9.title"),
      content: t("FAQ.questions.9.content"),
    },
    {
      title: t("FAQ.questions.10.title"),
      content: t("FAQ.questions.10.content"),
    },
    {
      title: t("FAQ.questions.11.title"),
      content: t("FAQ.questions.11.content"),
    },
    {
      title: t("FAQ.questions.12.title"),
      content: t("FAQ.questions.12.content"),
    },
    {
      title: t("FAQ.questions.13.title"),
      content: t("FAQ.questions.13.content"),
    },
    {
      title: t("FAQ.questions.14.title"),
      content: t("FAQ.questions.14.content"),
    },
  ];

  return (
    <section
      className="bg-white text-zinc-900 bg-gradient-to-r relative overflow-hidden py-12"
      id="faq-section"
    >
      <div className="w-full max-w-[1200px] 3xl:max-w-screen-2xl lg:px-12 mx-auto p-4 z-10 relative pb-12">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-24 text-center">
          {t("FAQ.title")}
        </h2>
        <Accordion variant="splitted">
          {questions.map((item, index) => (
            <AccordionItem
              key={index}
              className="py-2 px-4"
              aria-label={item.title}
              title={<span className="font-bold text-black">{item.title}</span>}
            >
              <p className="text-zinc-700 text-md">{item.content}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
