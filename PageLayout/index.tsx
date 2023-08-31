import { ReactElement } from "react";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import { Children, LayoutContainer, Wrapper } from "./styled.components";
import { darkTheme, lightTheme } from "../global/theme";
import SideNavBar from "@/components/SideNavBar";
import Footer from "@/components/footer";
import { useDarkMode } from "@/hooks/useDarkLightMood";
import { LoginProvider } from "@/context";
import Header from "@/components/header";
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
        <LoginProvider>
          <Header
            themeToggler={themeToggler as () => void}
            theme={theme as string}
          />
          <LayoutContainer>
            <SideNavBar />
            <Wrapper>
              <Children>{children}</Children>
              <Footer />
            </Wrapper>
          </LayoutContainer>
        </LoginProvider>
      </ThemeProvider>
    </>
  );
};
export default Layout;
