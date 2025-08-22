"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";

import { InfoCardData } from "./hover-grid/types";
import PricingPlansModal from "@/components/modals/pricingplans";
import InfoCard from "./hover-grid/InfoCard";
import { useTranslate } from "@tolgee/react";

interface InfoGridSectionProps {
  jsonData: InfoCardData[]; // Tablica danych kafelków
}
const handleRedirect = (url: string): void => {
  window.open(url, "_blank"); // Open in a new tab
};
const InfoGridSection: React.FC<InfoGridSectionProps> = ({ jsonData }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState<InfoCardData | null>(null);

  const handleOpenModal = (item: InfoCardData) => {
    setSelectedItem(item); // Set the selected item data
    onOpen(); // Open the modal
  };
  const { t } = useTranslate();

  return (
    <>
      {selectedItem && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="4xl"
          scrollBehavior="inside"
          shouldBlockScroll={false}
          classNames={{
            base: "bg-[#fff] text-black border-[#f2f2f2] rounded-lg",
            body: "py-6",
            backdrop: "bg-[#292f46]/30 backdrop-opacity-30",
            header: "border-b-[1px] border-[#f2f2f2]",
            footer: "border-t-[1px] border-[#f2f2f2",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  {selectedItem.modalBoxTitle}
                </ModalHeader>
                <ModalBody>
                  {selectedItem.modalBoxContent === "Pricingplansmodal" ? (
                    <PricingPlansModal /> // Renderuje dynamicznie komponent
                  ) : (
                    <p>{selectedItem.content}</p> // Fallback na zwykłą treść
                  )}
                </ModalBody>
                <ModalFooter>
                  <button onClick={onClose}>{t("Close")}</button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
      <section id="features-section">
        <div className="relative bg-[url('/bbblurry.svg')] bg-no-repeat bg-right bg-cover pt-12 lg:pt-24 pb-6">
          <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl font-poppins mb-12 text-center">
            {t("cards_title")}
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[1250px]  mx-auto grid grid-cols-1 sm:grid-cols-5 gap-10 pt-12 px-6 justify-items-center items-center overflow-hidden"
          >
            {jsonData.map((item, index) => (
              <InfoCard
                key={index}
                item={item}
                index={index}
                onCardClick={handleOpenModal}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }} // Początkowy stan
            whileInView={{ opacity: 1, y: 0 }} // Stan, gdy element jest w widoku
            transition={{ duration: 0.8 }}
            className="w-full pt-12 lg:pt-16 mx-auto lg:p-4 z-10 relative flex justify-center gap-10"
          >
            <button
              className="px-4 py-2 bg-[#ee6410] text-white rounded-lg text-md hover:bg-[#d85a0e] transition shadow-md "
              onClick={() => handleRedirect(t("Link2"))}
            >
              {t("Primary_Button")}
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InfoGridSection;
