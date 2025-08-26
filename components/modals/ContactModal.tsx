"use client";
import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { useLocale } from "next-intl";
import { PhoneCall } from "lucide-react";
import { useTranslate } from "@tolgee/react";

import { Button } from "@heroui/button";
import PrimaryButton from "../ui/PrimaryButton";
import { cleanURL } from "@/utils/cleanURL";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslate();
  const currentLang = useLocale();
  const contacts = [
    { name: "Anna Galos", phone: "798 781 017" },
    { name: "Paulina Barska", phone: "513 440 398" },
    { name: "Anna Bednarska", phone: "798 413 136 " },
  ];
  const urls = {
    primary: cleanURL(t("Global.PrimaryURL")),
    secondary: cleanURL(t("Global.SecondaryURL")),
  };

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      isOpen={isOpen}
      onOpenChange={onClose}
      size="3xl"
      scrollBehavior="inside"
      backdrop="opaque"
      className="bg-white rounded-xl"
    >
      <ModalContent>
        <ModalHeader className="text-center text-2xl font-bold text-gray-800">
          {t("Global.ContactModal.title")}
        </ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center ">
            {currentLang === "pl" ? (
              contacts.map((contact, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition"
                  onClick={() =>
                    window.open(
                      `tel:${contact.phone.replace(/-/g, "")}`,
                      "_self"
                    )
                  }
                >
                  <PhoneCall className="mx-auto text-[#d85a0e]" size={36} />
                  <p className="font-semibold text-lg mt-2">{contact.phone}</p>
                  <p className="text-gray-600 text-sm">{contact.name}</p>
                </div>
              ))
            ) : (
              <div className="p-4 bg-gray-100 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition col-span-3 justify-self-center">
                <PhoneCall className="mx-auto text-[#d85a0e]" size={36} />
                <p className="font-semibold text-lg mt-2">{t("phone")}</p>
                <p className="text-gray-600 text-sm">{t("description")}</p>
              </div>
            )}
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-700 font-semibold text-lg pb-4">
              {t("orContactForm")}
            </p>
            <PrimaryButton
              url={
                urls.primary +
                "?sol=--2--&?source=lp-price&?location=upper-menu"
              }
            >
              {t("Global.PrimaryButton")}
            </PrimaryButton>
          </div>
        </ModalBody>
        <ModalFooter className="flex justify-center">
          <Button
            color="danger"
            onClick={onClose}
            className="text-sm px-4 py-2"
          >
            {t("close")}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactModal;
