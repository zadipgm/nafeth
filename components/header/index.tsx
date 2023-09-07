import * as React from "react";
import { useTheme } from "styled-components";
import MobileHeader from "./mobile";
import DesktopHeader from "./desktop";
import { HeadersContainer } from "./styled.components";
interface IProps {
  themeToggler: () => void;
  theme: string;
}
const Header = ({ themeToggler, theme }: IProps) => {
  const { isMobile } = useTheme();
  return (
    <HeadersContainer>
      <div className="mobile">
        <MobileHeader />
      </div>
      <div className="desktop">
        <DesktopHeader theme={theme} themeToggler={themeToggler} />
      </div>
    </HeadersContainer>
  );
};
export default Header;
