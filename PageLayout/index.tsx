import { ReactElement } from "react";
import * as React from "react";
import { ThemeProvider } from "styled-components";

import {
  Children,
  LayoutContainer,
  LayoutWrapper,
  Wrapper,
} from "./styled.components";
import theme, { darkTheme, lightTheme } from "../global/theme";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useDarkMode } from "@/hooks/useDarkLightMood";

interface IProps {
  children: ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const [theme, themeToggler] = useDarkMode();
  const [initialRenderComplete, setInitialRenderComplete] =
    React.useState(false);
  React.useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={themeMode}>
        <Header themeToggler={themeToggler} theme={theme} />
        <LayoutContainer>
          <SideNavBar />

          <Wrapper>
            <Children>{children}</Children>
            <Footer />
          </Wrapper>
        </LayoutContainer>
      </ThemeProvider>
    </>
  );
};
export default Layout;
