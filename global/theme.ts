import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
    direction: "rtl" | "ltr";
    isLTR: boolean;
    isLight: string,
    isDark: string,
    themeToggle: () => void;
    isMobile: boolean
    isRTL: boolean;
    locale: "ar" | "en";
    colors: {
      bussinesBlue: string;
      themeColor: string;
      lightThemeColor: string;
      darkBlue: string;
      red: string;
      lightBlue: string;
      lightBlue1: string;
      headerLightColor: string;
      white: string;
      black: string;
      black1: string;
      gray1: string;
      gray2: string;
      gray3: string;
      nafethBlue: string;
      purple: string;
      darkYellow: string;
      cyan: string;
      green: string
      lightGreen: string,
      lightRed: string;
      darkblue2: string;
      lightblue1: string;
      headerbgcolor: string
      sideBarBgColor: string;
      headersideBarbgcolor: string;
      pagebgcolor: string,
      pageTextColor: string
      headerSiderBarBorderColor: string
      borderBottomColor: string
    };
  }
}

export const lightTheme: DefaultTheme = {
  locale: "en",
  direction: "rtl",
  isMobile: true,
  isLTR: false,
  isRTL: true,
  isLight: "light",
  isDark: "",
  themeToggle: () => { },
  colors: {
    borderBottomColor: "#DDDDDD",
    bussinesBlue: "#1976d2",
    themeColor: "linear-gradient(-49deg,#022646cc 22%,#12baff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    darkBlue: "#044783",
    red: "#dd3737",
    lightBlue: "#1976d2",
    lightBlue1: "#44A0E1",
    white: "#fff",
    black: "#000",
    black1: "#292929",
    gray1: "#5a5c69",
    cyan: "#06B7DB",
    gray2: "#cfcfcf",
    gray3: "#d7d6d645", green: "#22741bb5",
    nafethBlue: "#1281C4",
    purple: "#7828C8",
    darkYellow: "#936316",
    lightGreen: "#25706278",
    lightRed: "#ff000026",
    darkblue2: "#2a4158",
    lightblue1: "#1c8da4",
    sideBarBgColor: "#283b58",
    headersideBarbgcolor: "#ababab",
    headerbgcolor: "#fff",
    pagebgcolor: "#f4f3ef",
    pageTextColor: "#222222ad",
    headerSiderBarBorderColor: "#e6edef"
  },
};

export const darkTheme: DefaultTheme = {
  locale: "en",
  direction: "rtl",
  isMobile: true,
  isLTR: false,
  isRTL: true,
  isLight: "light",
  isDark: "",
  themeToggle: () => { },
  colors: {
    borderBottomColor: "#DDDDDD",
    bussinesBlue: "#1976d2",
    themeColor: "linear-gradient(-49deg,#022646cc 22%,#12baff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    darkBlue: "#044783",
    red: "#dd3737",
    lightBlue: "#1976d2",
    lightBlue1: "#44A0E1",
    white: "#fff",
    black: "#000", cyan: "#06B7DB",
    black1: "#292929",
    gray1: "#5a5c69",
    gray2: "#cfcfcf",
    gray3: "#d7d6d645",
    nafethBlue: "#1281C4",
    green: "#22741bb5",
    purple: "#7828C8",
    darkYellow: "#936316",
    lightGreen: "#25706278",
    darkblue2: "#2a4158",
    lightblue1: "#1c8da4",
    lightRed: "#ff000026",
    sideBarBgColor: "#283b58",
    headersideBarbgcolor: "#111727",
    headerbgcolor: "#111727",
    pagebgcolor: "#f4f3ef",
    pageTextColor: "#ffffffb3",
    headerSiderBarBorderColor: "#36405d"
  },
};
