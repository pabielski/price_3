"use client";
import React, { useState } from "react";
import Image from "next/image";
import { InfoCardData } from "./types"; // Importujemy typ danych

interface InfoCardProps {
  item: InfoCardData; // Jeden kafelek
  onCardClick: (item: InfoCardData) => void; // Funkcja obsługująca kliknięcie
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ item, onCardClick, index }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - left,
      y: e.clientY - top,
    });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`relative  flex flex-col justify-between h-64 max-w-lg w-full px-8 transition-all duration-300 ease-in-out col-span-2 ${
          item.clickable
            ? "hover:shadow-2xl hover:cursor-pointer  hover:-translate-y-1 shadow-lg hover:animate-float"
            : "cursor-default "
        } rounded-lg`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => item.clickable && onCardClick(item)}
      >
        <div className="relative z-40 flex flex-col justify-center items-center h-full">
          <h3 className="text-xl font-bold mb-2 text-[#09203d] justify-center text-center">
            {item.title}
          </h3>
          <p className="text-zinc-700 text-center">{item.content}</p>
          {item.clickable && (
            <button
              className="text-red-800 mt-4"
              onClick={() => onCardClick(item)}
            ></button>
          )}
        </div>

        <div className="absolute inset-0 z-30 bg-white mx-1 my-1 rounded-lg "></div>

        <div
          className={`absolute inset-0 rounded-lg transition-all duration-500 z-20 ease-in-out`}
          style={{
            background: isHovered
              ? `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(9, 32, 61, 1), rgba(9, 32, 61, 0.1))`
              : "none",
          }}
        ></div>

        <div className="absolute inset-0 rounded-lg transition-all duration-300 bg-[#02002021] shadow-md"></div>

        <div className="absolute -top-4 -right-3 lg:-right-4 w-8 h-8 lg:w-12 lg:h-12 bg-[#00ad73] rounded-full flex justify-center items-center z-30">
          <Image
            src={item.imageUrl}
            alt={`Ikona ${item.title}`}
            width={100}
            height={100}
            className="max-w-20 lg:max-w-none"
          />
        </div>
      </div>
      {index % 2 === 0 ? <div className="col-span-1"></div> : null}
    </>
  );
};

export default InfoCard;
