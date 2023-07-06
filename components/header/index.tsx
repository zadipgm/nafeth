import * as React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  IconWrapper,
  LangButton,
  Langwrapper,
  LightMood,
  LogoContainer,
  LogoutWrapper,
  NotificationIcon,
  Wrappper,
} from "./styled.components";
import { useRouter } from "next/router";
import LogoutSvg from "@/public/icons/logoutSvg";
import NotificationSvg from "@/public/icons/notificationSvg";
import LightMoodSvg from "@/public/icons/lightmoodSvg";
import DarkMoodSvg from "@/public/icons/darkmoodSvg";
interface IProps {
  themeToggler: string | (() => void);
  theme: string;
}
const Header = ({ themeToggler, theme }: IProps) => {
  const router = useRouter();

  const { locale, colors }: any = useTheme();
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);

  return (
    <>
      <Container>
        <LogoContainer>
          <a href={"/dashboard"}>
            <img
              src="/images/nafeth.png"
              alt="logo"
              width={150}
              height={"100%"}
            />
          </a>
        </LogoContainer>
        <Wrappper>
          {theme === "light" ? (
            <LightMood onClick={themeToggler as VoidFunction}>
              <LightMoodSvg
                width="40px"
                height="40px"
                fill={colors.pageTextColor}
              />
            </LightMood>
          ) : (
            <LightMood onClick={themeToggler as VoidFunction}>
              <DarkMoodSvg
                width="40px"
                height="40px"
                fill={colors.pageTextColor}
              />
            </LightMood>
          )}
          <NotificationIcon>
            <NotificationSvg
              width="40px"
              height="40px"
              fill={colors.pageTextColor}
            />
          </NotificationIcon>
          {locale === "ar" ? (
            <Langwrapper onClick={() => changeLocale()}>
              <LangButton href={`/en${router.asPath}`}>
                <IconWrapper>
                  <img width="30px" height="30px" src="/images/us.svg" />
                </IconWrapper>
                EN
              </LangButton>
            </Langwrapper>
          ) : (
            <Langwrapper>
              <LangButton href={`/ar${router.asPath}`}>
                <IconWrapper onClick={() => changeLocale()}>
                  <img width="30" height="30" src="/images/saudi.svg" />
                </IconWrapper>
                AR
              </LangButton>
            </Langwrapper>
          )}
          <LogoutWrapper>
            <LogoutSvg
              fill={colors.pageTextColor}
              width={"25px"}
              height={"25px"}
            />{" "}
            <span>Logout</span>
          </LogoutWrapper>
        </Wrappper>
      </Container>
    </>
  );
};
export default Header;
