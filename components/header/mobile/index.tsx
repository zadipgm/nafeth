import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { BurgerMenu, LogoContainer } from "../styled.components";
import BurgerSvg from "@/public/icons/burgerSvg";
import { GlobalUserContext } from "@/context";
import Image from "next/image";
import ModalComponent from "@/reuseableComponents/modal";
import CloseSvg from "@/public/icons/closeSvg";
import ProfileComponent from "@/components/SideNavBar/profile";
import SideBarAccordions from "@/components/SideNavBar/sidebaraccordion";
import { SideIconWrapper } from "@/components/SideNavBar/styled.components";
import DashboardSvg from "@/public/icons/dashboard";
import Link from "next/link";

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
  }, [locale]);
  const handleOpen = () => {
    console.log("open", open);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <BurgerMenu onClick={handleOpen}>
        <LogoContainer className="mobile">
          <BurgerSvg fill={colors.nafethBlue} width="30px" height="30px" />
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
          <div onClick={handleClose}>
            <CloseSvg />
          </div>
          <SideIconWrapper>
            <DashboardSvg
              fill={colors.pageTextColor}
              width="23px"
              height="23px"
            />
            <Link href="/">{"Dashboard"}</Link>
          </SideIconWrapper>
          <SideBarAccordions sideBarMenuData={menu.result} />
          {/* <ProfileComponent /> */}
        </>
      </ModalComponent>
    </>
  );
};
export default MobileHeader;
