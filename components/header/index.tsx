import * as React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  LightMood,
  LogoContainer,
  LogoutWrapper,
  NotificationIcon,
  Wrappper,
} from "./styled.components";
import { useRouter } from "next/router";
import LogoutSvg from "@/public/icons/logoutSvg";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import { isTheme } from "@/_helpers/getTheme";
import BellIcon from "@/public/icons/bellIconSvg";
import LangButtons from "@/reuseableComponents/LangButton";
import LangaugeButtons from "@/reuseableComponents/LangButton";
import { Tooltip } from "@nextui-org/react";
import { Badge } from "@mui/material";
import Image from "next/image";
import Cookies from "js-cookie";
interface IProps {
  themeToggler: () => void;
  theme: string;
}
const Header = ({ themeToggler, theme }: IProps) => {
  const router = useRouter();
  const { colors }: any = useTheme();
  const ThemeToggle = () => {
    themeToggler();
    let localTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", localTheme);
  };
  const handleLogout = () => {
    Cookies.remove("userName");
    Cookies.remove("userPassword");
    Cookies.remove("company");
    Cookies.remove("menu");
    router.push("/login");
  };
  return (
    <>
      <Container>
        <LogoContainer>
          <a href={"/dashboard"}>
            <Image src="/images/pro2.webp" alt="logo" width={140} height={66} />
          </a>
        </LogoContainer>
        <Wrappper>
          {theme === "light" ? (
            <LightMood onClick={ThemeToggle} color={isTheme()?.color}>
              <Tooltip content="Dark mood" color="invert" placement="leftStart">
                <NightlightRoundOutlinedIcon />
              </Tooltip>
            </LightMood>
          ) : (
            <LightMood onClick={ThemeToggle} color={isTheme()?.color}>
              <Tooltip content="Light mood" placement="leftStart">
                <LightModeIcon className="dark" />
              </Tooltip>
            </LightMood>
          )}
          <NotificationIcon>
            <Badge color="secondary" badgeContent={2} showZero>
              <BellIcon
                width="30px"
                height="30px"
                fill={colors.pageTextColor}
              />
            </Badge>
          </NotificationIcon>
          <LangaugeButtons title_en="ENGLISH" title_ar="العربية" />
          <LogoutWrapper onClick={handleLogout}>
            <LogoutSvg fill={"red"} width={"25px"} height={"25px"} />{" "}
            <span>Logout</span>
          </LogoutWrapper>
        </Wrappper>
      </Container>
    </>
  );
};
export default Header;
