import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { BurgerMenu, LogoContainer, LogoutWrapper } from "../styled.components";
import BurgerSvg from "@/public/icons/burgerSvg";
import { GlobalUserContext } from "@/context";
import Image from "next/image";
import ModalComponent from "@/reuseableComponents/modal";
import CloseSvg from "@/public/icons/closeSvg";
import ProfileComponent from "@/components/SideNavBar/profile";
import SideBarAccordions from "@/components/SideNavBar/sidebaraccordion";
import {
  CloseIconLangButton,
  SideIconWrapper,
} from "@/components/SideNavBar/styled.components";
import DashboardSvg from "@/public/icons/dashboard";
import Link from "next/link";
import LangaugeButtons from "@/reuseableComponents/LangButton";
import LogoutSvg from "@/public/icons/logoutSvg";
import Cookies from "js-cookie";
import HomeSvg from "@/public/icons/homeSvg";

const MobileHeader = () => {
  const { locale, colors } = useTheme();
  const router = useRouter();
  const { menu } = React.useContext(GlobalUserContext);
  const [open, setOpen] = React.useState(false);

  const changeLocale = React.useCallback(() => {
    if (locale === "en") {
      router.push(`${router.asPath}`, `${router.asPath}`, {
        locale: "en",
      });
    } else {
      router.push(`${router.asPath}`, `${router.asPath}`, { locale: "ar" });
    }
  }, [locale, router]);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
    <>
      <BurgerMenu onClick={handleOpen}>
        <LogoContainer className="mobile">
          <BurgerSvg fill={colors.sideBarBgColor} width="30px" height="30px" />
          <a href={"/dashboard"}>
            <Image src="/images/pro2.webp" alt="logo" width={140} height={50} />
          </a>
        </LogoContainer>
      </BurgerMenu>
      <ModalComponent
        open={open}
        handleClose={handleClose}
        size="sm"
        classname="mobile-modal"
      >
        <>
          <CloseIconLangButton onClick={handleClose}>
            <CloseSvg fill="#fff" />
            <LangaugeButtons
              title_en="ENGLISH"
              title_ar="العربية"
              classname="mobile"
            />
          </CloseIconLangButton>
          <SideIconWrapper className="mobile">
            <HomeSvg fill={colors.white} width="40px" height="40px" />
            <Link href="/dashboard">{"Dashboard"}</Link>
          </SideIconWrapper>
          <SideBarAccordions
            sideBarMenuData={menu.result}
            handleClose={handleClose}
            classnames={"mobile"}
          />
          <LogoutWrapper onClick={handleLogout} className="mobile">
            <LogoutSvg fill={"red"} width={"25px"} height={"25px"} />{" "}
            <span>Logout</span>
          </LogoutWrapper>
          {/* <ProfileComponent /> */}
        </>
      </ModalComponent>
    </>
  );
};
export default MobileHeader;
