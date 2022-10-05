export default function use() {
  // Change lang

  const select = ref(null);
  const lang = {
    uk: "Укр",
    en: "Eng",
    ru: "Рус",
  };

  const currentLocale = ref("Укр");

  const chaneLang = (val) => {
    currentLocale.value = val;
  };

  // ...

  return {
    select,
    lang,
    // Change lang

    currentLocale,
    chaneLang,
  };
}
