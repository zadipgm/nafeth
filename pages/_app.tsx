import * as React from "react";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import { darkTheme, lightTheme } from "../global/theme";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "@/hooks/useDarkLightMood";
import { LoginProvider } from "@/context";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import LoadingScreen from "./loading";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
interface Props extends AppProps {
  translations?:
    | typeof import("../locales/ar").default
    | typeof import("../locales/en").default;
  locale: string;
  isMobile: boolean;
}
type AppPropsWithLayout = Props & {
  Component: NextPageWithLayout;
};

const MyApp = ({
  Component,
  pageProps,
  translations,
  locale,
  isMobile,
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();
  const [theme] = useDarkMode();
  const [loading, setLoading] = React.useState(false);
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  // @ts-ignore
  themeMode.translations = translations;
  themeMode.isLTR = locale === "en-US" || locale === "en";
  themeMode.isRTL = locale === "ar";
  themeMode.isMobile = isMobile;

  themeMode.locale = locale === "en-US" || locale === "en" ? "en" : "ar";
  const isLogin = Cookies.get("isLogin");
  React.useEffect(() => {
    if (isLogin === "true") {
      const handleStart = () => {
        setLoading(true);
      };
      const handleComplete = () => {
        setLoading(false);
      };

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleComplete);
        router.events.off("routeChangeError", handleComplete);
      };
      router.push({ pathname: router.asPath });
    } else {
      router.push({ pathname: "/login" });
    }
  }, [isLogin, router]);

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, height=device-height ,initial-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      {loading ? (
        <LoadingScreen open={loading} />
      ) : (
        <LoginProvider>
          <ThemeProvider theme={themeMode}>
            <Component {...pageProps} />
          </ThemeProvider>
        </LoginProvider>
      )}
    </>
  );
};
MyApp.getInitialProps = async ({ router, ctx }: AppContext) => {
  const { locale } = router;
  const { default: arLocalStrings } = await import("../locales/ar");
  const { default: enLocalStrings } = await import("../locales/en");
  const translations = locale === "ar" ? arLocalStrings : enLocalStrings;
  let userAgent: string | undefined;
  if (ctx.req) {
    userAgent = ctx.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  let isMobile = Boolean(
    userAgent?.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  console.log(isMobile, "Mobile");
  return { translations, locale, isMobile };
};
export default MyApp;
