import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { darkTheme, lightTheme } from "../global/theme";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@/hooks/useDarkLightMood";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface Props extends AppProps {
  translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
  locale: string;
}
type AppPropsWithLayout = Props & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const [theme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // @ts-ignore
  themeMode.translations = translations;
  themeMode.isLTR = locale === "en-US" || locale === "en";
  themeMode.isRTL = locale === "ar";

  themeMode.locale = locale === "en-US" || locale === "en" ? "en" : "ar";

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={themeMode}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};
MyApp.getInitialProps = async ({ router }: AppContext) => {
  const { locale } = router;
  const { default: arLocalStrings } = await import("../locales/ar");
  const { default: enLocalStrings } = await import("../locales/en");
  const translations = locale === "ar" ? arLocalStrings : enLocalStrings;
  return { translations, locale };
};
export default MyApp;
