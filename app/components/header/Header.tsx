"use client";

import { IoClose, IoMenu } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore, useLangStore } from "@/zustand";
import { useTranslation } from "@/app/locales/translator";
import { ItemKey } from "@/app/locales/translations";
import Image, { StaticImageData } from "next/image";


import usa from "@/public/usa.jpg";
import georgia from "@/public/georgia.png";
import turkey from "@/public/Flag_of_Turkey.svg";
import russia from "@/public/russia.webp";


type Lang = "en" | "ge" | "tr" | "ru";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const langRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  const increase = useCartStore((s) => s.increase);
  const decrease = useCartStore((s) => s.decrease);
  const remove = useCartStore((s) => s.clearCart);
  const items = useCartStore((s) => s.items);

  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const lang = useLangStore((s) => s.lang) as Lang;
  const setLang = useLangStore((s) => s.setLang);

  const { tUI, tItem } = useTranslation();

  
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  
  const languages: {
    code: Lang;
    label: string;
    flag: StaticImageData;
  }[] = [
    { code: "en", label: "EN", flag: usa },
    { code: "ge", label: "GE", flag: georgia },
    { code: "tr", label: "TR", flag: turkey },
    { code: "ru", label: "RU", flag: russia },
  ];

  
  const currentLang =
    languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <>
      
      <header className="h-16 w-full z-50 bg-black border-b border-[#C9A84C]/20 shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
        <nav className="flex items-center justify-between px-6 h-full">
          
          <h1
            onClick={() => router.push("/")}
            className="text-xl font-bold cursor-pointer text-white tracking-widest"
          >
            MARINA
          </h1>

          <div className="flex items-center gap-4">
            
            <div className="relative" ref={langRef}>
              <div
                onClick={() => setLangOpen((p) => !p)}
                className="flex items-center gap-2 border border-[#C9A84C]/40 px-2 py-1 rounded-lg cursor-pointer hover:border-[#E8C97A]"
              >
                <Image
                  src={currentLang.flag}
                  width={20}
                  height={20}
                  alt="flag"
                  className="rounded-sm"
                />
                <span className="text-[#C9A84C] text-sm uppercase">
                  {currentLang.label}
                </span>
              </div>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 bg-black border border-[#C9A84C]/30 rounded-lg overflow-hidden z-50 min-w-30"
                  >
                    {languages.map((l) => (
                      <div
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`flex items-center gap-2 px-3 py-2 cursor-pointer transition-colors
                          ${
                            lang === l.code
                              ? "bg-[#1A1008]"
                              : "hover:bg-[#1A1008]"
                          }`}
                      >
                        <Image
                          src={l.flag}
                          width={20}
                          height={20}
                          alt={l.code}
                          className="rounded-sm"
                        />
                        <span className="text-[#C9A84C] text-sm">
                          {l.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 🍔 MENU ICON */}
            <div className="relative">
              <IoMenu
                onClick={() => setIsOpen((p) => !p)}
                className="text-2xl text-[#C9A84C] hover:text-[#E8C97A] transition-colors cursor-pointer"
              />

              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-linear-to-b from-[#E8C97A] to-[#B8860B] text-[#120C06] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {totalCount}
                </span>
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* 🛒 CART DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 inset-0 bg-black z-9990 flex flex-col"
          >
            {/* HEADER */}
            <div className="px-6 h-16 flex justify-between items-center border-b border-[#C9A84C]/20">
              <span className="tracking-widest bg-linear-to-b from-[#E8C97A] via-[#C9A84C] to-[#7A5C00] bg-clip-text text-transparent font-bold text-lg">
                {tUI("cart")}
              </span>

              <IoClose
                onClick={() => setIsOpen(false)}
                className="text-2xl text-[#C9A84C] hover:text-[#E8C97A] transition-colors cursor-pointer"
              />
            </div>

            {/* ITEMS */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {items.length === 0 ? (
                <p className="text-[#C9A84C]/50 text-center mt-10 tracking-widest text-sm">
                  {tUI("empty-cart")}
                </p>
              ) : (
                items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border border-[#C9A84C]/20 bg-[#1A1008] rounded-xl p-3 hover:border-[#C9A84C]/50 transition-colors"
                  >
                    <div>
                      <p className="font-medium text-[#E8C97A]">
                        {tItem(item.nameKey as ItemKey)}
                      </p>
                      <p className="text-sm text-[#C9A84C]/60">
                        {item.price}₾
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => decrease(item.id)}
                        className="w-7 h-7 border border-[#C9A84C]/40 text-[#C9A84C] hover:border-[#E8C97A] hover:text-[#E8C97A] rounded transition-colors"
                      >
                        -
                      </button>

                      <span className="w-6 text-center text-[#E8C97A] font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="w-7 h-7 border border-[#C9A84C]/40 text-[#C9A84C] hover:border-[#E8C97A] hover:text-[#E8C97A] rounded transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* FOOTER */}
            <div className="p-4 border-t border-[#C9A84C]/20 flex justify-between items-center">
              <button
                onClick={remove}
                className="text-sm text-[#C9A84C]/50 hover:text-red-400 transition-colors tracking-wider"
              >
                {tUI("clear-cart")}
              </button>

              <div className="font-semibold text-[#E8C97A] tracking-wider">
                {tUI("total")}:{" "}
                <span className="bg-linear-to-b from-[#E8C97A] to-[#B8860B] bg-clip-text text-transparent">
                  {totalPrice}₾
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;