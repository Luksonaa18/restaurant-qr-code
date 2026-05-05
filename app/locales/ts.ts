import { ItemKey, translations, CategoryKey, Lang } from "./translations";

const DEFAULT_LANG: Lang = "en";

export function getTranslation(lang: Lang, key: ItemKey): string {
  return (
    translations[lang]?.items?.[key] ??
    translations[DEFAULT_LANG].items[key] ??
    key
  );
}

export const getUITranslation = (lang: Lang, key: string) => {
  const dictionary = translations[lang] ?? translations[DEFAULT_LANG];

  return dictionary?.ui?.[key as keyof typeof dictionary.ui] ?? key;
};

export function getCategoryTranslation(lang: Lang, key: CategoryKey): string {
  return (
    translations[lang]?.categories?.[key] ??
    translations[DEFAULT_LANG].categories[key] ??
    key
  );
}
