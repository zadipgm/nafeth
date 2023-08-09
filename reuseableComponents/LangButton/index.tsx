import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import { useTheme } from "styled-components";
import { Langwrapper, LangButton, IconWrapper } from "./style";
import { useRouter } from "next/router";
interface IProps {
  title_en: string;
  title_ar: string;
}
const LangaugeButtons = ({ title_ar, title_en }: IProps) => {
  const { locale } = useTheme();
  const router = useRouter();
  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);
  return locale === "ar" ? (
    <Langwrapper onClick={() => changeLocale()}>
      <LangButton href={`/en${router.asPath}`} color={isTheme()?.color}>
        <IconWrapper>
          <img width="30px" height="30px" src="/images/us.svg" />
        </IconWrapper>
        {title_en}
      </LangButton>
    </Langwrapper>
  ) : (
    <Langwrapper>
      <LangButton href={`/ar${router.asPath}`} color={isTheme()?.color}>
        <IconWrapper onClick={() => changeLocale()}>
          <img width="30" height="30" src="/images/saudi.svg" />
        </IconWrapper>
        {title_ar}
      </LangButton>
    </Langwrapper>
  );
};
export default LangaugeButtons;
