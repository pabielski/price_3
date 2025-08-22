import { CheckCircle } from "lucide-react";
import React from "react";
import { useTranslations } from "next-intl";

interface Feature {
  highlight: string; // Tekst do wyróżnienia
  text: string; // Pełny tekst funkcji
}

const PricingPlansModal: React.FC = () => {
  const t = useTranslations("ModalSection");

  // Pobranie listy funkcji z tłumaczeń
  const features: Feature[] = t.raw("features");

  return (
    <div className="container bg-white p-6 rounded-lg">
      {features.map((feature, index) => (
        <div className="item flex items-start mb-4" key={index}>
          <div className="item-icon text-green-600 text-2xl mr-4 self-start">
            <CheckCircle />
          </div>
          <div className="item-text text-md">
            <strong className="text-[#063e89]">{feature.highlight}</strong>{" "}
            {feature.text.replace(feature.highlight, "")}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlansModal;
