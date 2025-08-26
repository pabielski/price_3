"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ContactModal from "@/components/modals/ContactModal";
import { useTranslate } from "@tolgee/react";

interface MenuItem {
  label: string; // Label for the navigation item
  sectionId: string; // Corresponding section ID for scrolling
}

interface HeaderProps {
  menuItems: MenuItem[]; // Array of menu items
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { t } = useTranslate();
  // Toggle mobile menu
  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  // Scroll to specific section
  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <header className="px-4 md:px-12 w-full fixed left-1/2 transform -translate-x-1/2 top-0 z-[50] max-w-[1300px] 3xl:max-w-screen-2xl mx-auto rounded-xl">
      <div className="w-full bg-white/80 backdrop-blur-md shadow-lg py-[0.8rem] lg:py-4 px-6 rounded-xl mt-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="https://kwhotel.com/pl/">
            <Image
              src="/logo-2.png"
              alt="Logo"
              width={80}
              height={80}
              className="hover:cursor-pointer"
            />
          </Link>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              id="upper-bar-contact-request-mobile"
              className="bg-kworange text-white hover:bg-kworangeHover py-[1.2rem] px-4 rounded-lg hover:cursor-pointer font-normal"
              onClick={() => setIsModalOpen(true)}
            >
              {t("contact_button")}
            </button>

            <button
              onClick={toggleMenu}
              className="relative w-8 h-8 flex items-center justify-center focus:outline-none transition-all duration-300"
            >
              {/* Burger Icon */}
              <div
                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-[7px]"
                }`}
              ></div>
              <div
                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></div>
              <div
                className={`absolute w-6 h-[2px] bg-black transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-[7px]"
                }`}
              ></div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 font-poppins uppercase">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.sectionId)}
                className="hover:text-[#ee6410] cursor-pointer text-md transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button
            id="upper-bar-contact-request"
            className="hidden lg:inline-flex bg-kworange hover:bg-kworangeHover text-white hover:shadow-md transition-all duration-300 ease-in-out py-2 px-4 rounded-lg hover:cursor-pointer font-normal"
            onClick={() => setIsModalOpen(true)}
          >
            {t("contact_button")}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 mt-[0.4rem] rounded-xl">
            <ul className="flex flex-col divide-y divide-gray-200">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="block w-full p-4 text-left text-gray-800 hover:bg-gray-100 hover:text-[#ee6410] transition-all duration-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </header>
  );
};

export default Header;
