import {
  ItemKey,
  translations,
  CategoryKey,
  Lang,
} from "./locales/translations";

const DEFAULT_LANG: Lang = "en";

export function getTranslation(lang: Lang, key: ItemKey): string {
  return (
    translations[lang]?.items?.[key] ??
    translations[DEFAULT_LANG].items[key] ??
    key
  );
}

export const getUITranslation = (lang: Lang, key: string) => {
  return (
    translations[lang].ui?.[key as keyof (typeof translations)[Lang]["ui"]] ||
    key
  );
};

export function getCategoryTranslation(lang: Lang, key: CategoryKey): string {
  return (
    translations[lang]?.categories?.[key] ??
    translations[DEFAULT_LANG].categories[key] ??
    key
  );
}
