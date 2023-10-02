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
import Swal from "sweetalert2";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PassWordSvg from "@/public/icons/passwordSvg";
import {
  IconWrapper,
  LangButton,
  Langwrapper,
} from "@/reuseableComponents/LangButton/style";
import UsersSvg from "@/public/icons/USERS";
import { handleLogin } from "@/api/fetchapis/login";
import Cookies from "js-cookie";
const LoginScreen = () => {
  const router = useRouter();
  const { locale, colors, translations }: any = useTheme();
  const [userName, setUserName] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");
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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(userName, userPassword, "/login", "nafeth")
      .then((res) => {
        if (res.message === "Success") {
          localStorage.setItem("menu", JSON.stringify(res));
          setIsComplete(true);
          Swal.fire("", "You are logged in successfully!", "success");
          Cookies.set("isLogin", "true");
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        setIsComplete(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "user name or password incorrect",
        });
        console.log(error);
      });
  };
  return (
    <>
      <Container>
        <ContentWrapper>
          <LogoWrapper>
            <Logo
              src="/images/nafeth.svg"
              alt="logo"
              width={200}
              height={"100%"}
            />
          </LogoWrapper>
          <Form onSubmit={(e: any) => handleSubmit(e)}>
            <Wrapper>
              <SvgWrapper>
                <UsersSvg width="25px" height="25px" fill={colors.lightBlue} />
              </SvgWrapper>
              <Input
                type="text"
                placeholder={"user name..."}
                required
                value={userName}
                onChange={(e: any) => setUserName(e.target.value)}
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
                placeholder={"password..."}
                required
                value={userPassword}
                onChange={(e: any) => setUserPassword(e.target.value)}
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
                  disabled={isComplete}
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
                  <CircularProgress color="secondary" />
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
                        <img
                          width="30px"
                          height="30px"
                          src="/images/us.svg"
                          alt="uk"
                        />
                      </IconWrapper>
                      EN
                    </LangButton>
                  </Langwrapper>
                ) : (
                  <Langwrapper>
                    <LangButton href={`/ar${router.asPath}`}>
                      <IconWrapper onClick={() => changeLocale()}>
                        <img
                          width="30"
                          height="30"
                          src="/images/saudi.svg"
                          alt="saudi"
                        />
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
