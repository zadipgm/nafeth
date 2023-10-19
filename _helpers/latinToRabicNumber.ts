export const LatinToArabicNumber = (number: string) => {
    let numLatinToAr = number.replaceAll(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[d as any]).replace(/\./g, "٫");
    return numLatinToAr
}