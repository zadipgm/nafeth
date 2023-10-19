import * as React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  LightMood,
  LogoContainer,
  LogoutWrapper,
  Wrappper,
} from "../styled.components";
import { useRouter } from "next/router";
import LogoutSvg from "@/public/icons/logoutSvg";

import LangaugeButtons from "@/reuseableComponents/LangButton";
import { Tooltip } from "@nextui-org/react";
import { Badge } from "@mui/material";
import Image from "next/image";
import Cookies from "js-cookie";
import MobileHeader from "../mobile";
import { GetMainHeading } from "@/_helpers/getMainHeading";
interface IProps {
  themeToggler: () => void;
  theme: string;
}
const DesktopHeader = ({ themeToggler, theme }: IProps) => {
  const router = useRouter();
  const { colors, isMobile }: any = useTheme();
  const ThemeToggle = () => {
    themeToggler();
    let localTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", localTheme);
  };
  const handleLogout = () => {
    Cookies.remove("userName");
    Cookies.remove("userPassword");
    Cookies.remove("company");
    localStorage.clear();
    Cookies.remove("isLogin");
    router.push("/login");
  };

  return (
    <Container>
      <div className="link">
        {GetMainHeading(
          router.pathname.replaceAll("/", "")
        )?.toLocaleUpperCase()}
      </div>
      <Wrappper>
        {/* {theme === "light" ? (
          <LightMood onClick={ThemeToggle} color={isTheme()?.color}>
            <Tooltip content="Dark mode" color="invert" placement="leftStart">
              <NightlightRoundOutlinedIcon />
            </Tooltip>
          </LightMood>
        ) : (
          <LightMood onClick={ThemeToggle} color={isTheme()?.color}>
            <Tooltip content="Light mode" placement="leftStart">
              <LightModeIcon className="dark" />
            </Tooltip>
          </LightMood>
        )} */}
        {/* <NotificationIcon>
          <Badge color="secondary" badgeContent={2} showZero>
            <BellIcon width="30px" height="30px" fill={colors.pageTextColor} />
          </Badge>
        </NotificationIcon> */}
        <LangaugeButtons
          title_en="ENGLISH"
          title_ar="العربية"
          classname="desktops"
        />
        <LogoutWrapper onClick={handleLogout} className="desktop-logout">
          <LogoutSvg fill={"red"} width={"25px"} height={"25px"} />{" "}
          <span>Logout</span>
        </LogoutWrapper>
      </Wrappper>
    </Container>
  );
};
export default DesktopHeader;
