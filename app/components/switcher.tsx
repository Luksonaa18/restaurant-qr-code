"use client";

import { useLangStore } from "@/zustand";

const languages = ["en", "ru", "tr", "ka"] as const;

export const LanguageSwitcher = () => {
  const lang = useLangStore((s) => s.lang);
  const setLang = useLangStore((s) => s.setLang);

  return (
    <div className="flex gap-2 p-2">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-md text-sm border ${
            lang === l ? "bg-black text-white" : "bg-white"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
};
