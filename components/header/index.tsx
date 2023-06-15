import * as React from "react";

import { useTheme } from "styled-components";
import {
  Container,
  IconWrapper,
  LangButton,
  Langwrapper,
  LightMood,
  LogoutWrapper,
  NotificationIcon,
} from "./styled.components";
import { useRouter } from "next/router";
import LogoutSvg from "@/public/icons/logoutSvg";
import NotificationSvg from "@/public/icons/notificationSvg";
import LightMoodSvg from "@/public/icons/lightmoodSvg";

const Header = () => {
  const router = useRouter();
  const { locale } = useTheme();
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
        <LightMood>
          <LightMoodSvg width="30px" height="30px" fill="#ffff" />
        </LightMood>
        <NotificationIcon>
          <NotificationSvg width="30px" height="30px" />
        </NotificationIcon>
        {locale === "ar" ? (
          <Langwrapper onClick={() => changeLocale()}>
            <IconWrapper>
              <img width="30px" height="30px" src="/images/us.svg" />
            </IconWrapper>
            <LangButton href={`/en${router.asPath}`}>EN</LangButton>
          </Langwrapper>
        ) : (
          <Langwrapper>
            <IconWrapper onClick={() => changeLocale()}>
              <img width="30" height="30" src="/images/saudi.svg" />
            </IconWrapper>
            <LangButton href={`/ar${router.asPath}`}>AR</LangButton>
          </Langwrapper>
        )}
        <LogoutWrapper>
          <LogoutSvg fill={"#b5bcbc"} width={"25px"} height={"25px"} />{" "}
          <span>Logout</span>
        </LogoutWrapper>
      </Container>
    </>
  );
};
export default Header;
