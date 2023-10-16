import * as React from "react";
import { Container, MenuWrapper, SideIconWrapper } from "./styled.components";
import SideBarAccordions from "./sidebaraccordion";
import DashboardSvg from "@/public/icons/dashboard";
import { useTheme } from "styled-components";
import Link from "next/link";
import { GlobalUserContext } from "@/context";
import { useRouter } from "next/router";
import CardUserSvg from "@/public/icons/carduserSvg";
import { LogoContainer } from "../header/styled.components";
import Image from "next/image";
import UsersSvg from "@/public/icons/USERS";

const SideNavBar = () => {
  const { menu } = React.useContext(GlobalUserContext);
  const { colors, translations } = useTheme();

  return (
    <>
      <Container className="desktop">
        <LogoContainer>
          <a href={"/dashboard"}>
            <Image
              src="/images/nafeth.png"
              alt="logo"
              width={125}
              height={66}
            />
          </a>
        </LogoContainer>
        <MenuWrapper>
          {/* <SideIconWrapper>
            <Link href="/profile">
              <UsersSvg width="25px" height="25px" fill={colors.gray2} />
              <div>{"User Profile"}</div>
            </Link>
          </SideIconWrapper> */}
          <SideIconWrapper>
            <Link href="/dashboard">
              <DashboardSvg fill={colors.gray2} width="25px" height="25px" />
              <div>{translations?.dashboard}</div>
            </Link>
          </SideIconWrapper>
          <SideBarAccordions sideBarMenuData={menu.result} />
        </MenuWrapper>
      </Container>
    </>
  );
};
export default SideNavBar;
