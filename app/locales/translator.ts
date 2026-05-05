"use client";

import { useLangStore } from "@/zustand";
import { ItemKey, CategoryKey } from "./translations";
import { getCategoryTranslation, getTranslation, getUITranslation } from "./ts";

type UIKey = "clear-cart" | "product" | "total" | "cart" | "empty-cart";

export const useTranslation = () => {
  const lang = useLangStore((s) => s.lang);

  const tItem = (key: ItemKey) => getTranslation(lang, key);
  const tCategory = (key: CategoryKey) => getCategoryTranslation(lang, key);
  const tUI = (key: UIKey) => getUITranslation(lang, key);

  return { lang, tItem, tCategory, tUI };
};
