export const filterByLocale = (locale: any, keys: any) => {
  let searchStr_ar = `_ar`;
  let filter_ar_keys = keys.filter(
    (obj: any) => !obj.toLowerCase().includes(searchStr_ar.toLowerCase())
  );
  let searchStr_en = `_en`;
  let filter_en_keys = keys.filter(
    (obj: any) => !obj.toLowerCase().includes(searchStr_en.toLowerCase())
  );
  let result = locale === "en" ? filter_ar_keys : filter_en_keys;

  return result;
};
