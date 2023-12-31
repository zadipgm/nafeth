import * as React from "react";
import { Container, MenuWrapper, SideIconWrapper } from "./styled.components";
import SideBarAccordions from "./sidebaraccordion";
import DashboardSvg from "@/public/icons/dashboard";
import { useTheme } from "styled-components";
import Link from "next/link";
import { GlobalUserContext } from "@/context";

import { LogoContainer } from "../header/styled.components";
import Image from "next/image";
import HomeSvg from "@/public/icons/homeSvg";

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
          <SideIconWrapper>
            <Link href="/dashboard">
              <HomeSvg fill={colors.gray2} width="40px" height="40px" />
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
