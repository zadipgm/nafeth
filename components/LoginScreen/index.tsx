import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {
  Container,
  ContentWrapper,
  LogoWrapper,
  Logo,
  Form,
  SvgWrapper,
  Wrapper,
  SpinnerWrapper,
  Input,
  EyesWrapper,
  Hr,
  LinksWrapper,
  ForgotPassWord,
  BiLangWrapper,
} from "./styled.components";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import SimpleSnackbar from "@/reuseableComponents/Snackbar";
import EmailSvg from "@/public/icons/emailSvg";
import PassWordSvg from "@/public/icons/passwordSvg";
import {
  IconWrapper,
  LangButton,
  Langwrapper,
} from "@/reuseableComponents/LangButton/style";

const LoginScreen = () => {
  const router = useRouter();
  const { locale, colors, translations }: any = useTheme();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isComplete, setIsComplete] = React.useState(false);
  const [passwordShown, setPasswordShown] = React.useState(false);

  const changeLocale = React.useCallback(() => {
    if (locale === "en-US" || locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale]);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setEmail(value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <>
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <Logo
              src="/images/nafeth1.svg"
              alt="logo"
              width={200}
              height={"100%"}
            />
          </LogoWrapper>
          <Form onSubmit={(e: any) => handleSubmit(e)}>
            <Wrapper>
              <SvgWrapper>
                <EmailSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="email"
                placeholder={translations?.enterEmail}
                required
                onChange={(e: any) => handleEmail(e)}
              />
            </Wrapper>
            <Wrapper className="password">
              <SvgWrapper>
                <PassWordSvg
                  width="25px"
                  height="25px"
                  fill={colors.lightBlue}
                />
              </SvgWrapper>
              <Input
                type={passwordShown ? "text" : "password"}
                placeholder={translations?.password}
                required
                onChange={(e: any) => handlePassword(e)}
              />
              <EyesWrapper onClick={togglePassword}>
                {passwordShown ? (
                  <VisibilityOutlinedIcon color={"primary"} />
                ) : (
                  <VisibilityOffOutlinedIcon color={"primary"} />
                )}
              </EyesWrapper>
            </Wrapper>

            <SpinnerWrapper>
              {locale === "en" ? (
                <Input
                  type="submit"
                  className={`login login-${isComplete}`}
                  value={"Login"}
                />
              ) : (
                <Input
                  type="submit"
                  className={`login login-${isComplete}`}
                  value={"الدخول"}
                />
              )}
              {isComplete && (
                <Box>
                  <CircularProgress />
                </Box>
              )}
            </SpinnerWrapper>
            <Hr></Hr>
            <LinksWrapper>
              <ForgotPassWord>
                <Link href={`/${locale}/forgot_password`}>
                  {translations?.forgotpassword}
                </Link>
              </ForgotPassWord>
              <BiLangWrapper>
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
              </BiLangWrapper>
            </LinksWrapper>

            <br></br>
          </Form>
        </ContentWrapper>
      </Container>
    </>
  );
};
export default LoginScreen;
