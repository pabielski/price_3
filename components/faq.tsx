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
      title: t("faq.question1.title"),
      content: t("faq.question1.content"),
    },
    {
      title: t("faq.question2.title"),
      content: t("faq.question2.content"),
    },
    {
      title: t("faq.question3.title"),
      content: t("faq.question3.content"),
    },
    {
      title: t("faq.question4.title"),
      content: t("faq.question4.content"),
    },
    {
      title: t("faq.question5.title"),
      content: t("faq.question5.content"),
    },
  ];

  return (
    <section
      className="bg-white text-zinc-900 bg-gradient-to-r relative overflow-hidden py-12"
      id="faq-section"
    >
      <div className="w-full max-w-[1200px] 3xl:max-w-screen-2xl lg:px-12 mx-auto p-4 z-10 relative pb-12">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-24 text-center">
          {t("faq.title")}
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
        <div className="w-full pt-12 lg:pt-24 mx-auto lg:p-4 z-10 relative flex flex-col items-center gap-8">
          <h3 className="text-2xl font-bold text-center">
            {t("faq.ready_title")}
          </h3>
          <div className="flex justify-center gap-10">
            <button
              className="px-4 py-2 bg-transparent border border-[#15803d] text-[#15803d] hover:text-white rounded-lg text-md hover:bg-[#15803d] transition shadow-md hover:shadow-lg"
              onClick={() => handleRedirect(t("SecondaryLink"))}
            >
              {t("SecondaryButton")}
            </button>
            <button
              id="bottom-contact-request"
              className="px-4 py-2 bg-[#ee6410] text-white rounded-lg text-md hover:bg-[#d85a0e] transition shadow-md hover:shadow-lg"
              onClick={() => handleRedirect(t("Link2"))}
            >
              {t("PrimaryButton")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
