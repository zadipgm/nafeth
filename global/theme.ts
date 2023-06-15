import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
    direction: "rtl" | "ltr";
    isLTR: boolean;
    device: "mobile" | "desktop" | "tablet";
    isRTL: boolean;
    locale: "ar" | "en-US" | "en";
    colors: {
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
      green: string;
      lightGreen: string,
      darkblue2: string;
      lightblue1: string;
      darkblue3: string;
    };
  }
}

const defaultTheme: DefaultTheme = {
  locale: "en",
  direction: "rtl",
  device: "mobile",
  isLTR: false,
  isRTL: true,
  colors: {
    themeColor: "linear-gradient(-49deg,#022646cc 22%,#12baff);",
    lightThemeColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    headerLightColor: "linear-gradient(-49deg,#09589d29 22%,#56ceff33);",
    darkBlue: "#044783",
    red: "#dd3737",
    lightBlue: "#0969a5d6",
    lightBlue1: "#44A0E1",
    white: "#fff",
    black: "#000",
    black1: "#292929",
    gray1: "#5a5c69",
    gray2: "#cfcfcf",
    gray3: "#cfcfcf45",
    green: "#26695c",
    lightGreen: "#25706278",
    darkblue2: "#2a4158",
    lightblue1: "#1c8da4",
    darkblue3: "#111727",
  },
};

export default defaultTheme;
