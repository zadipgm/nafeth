import * as React from "react";
import { Container, SideBar, SideIconWrapper } from "./styled.components";
import SideBarAccordions from "./sidebaraccordion";
import DashboardSvg from "@/public/icons/dashboard";
import { useTheme } from "styled-components";
import Profile from "./profile";
import Link from "next/link";
import { GlobalUserContext } from "@/context";

const SideNavBar = () => {
  const { menu } = React.useContext(GlobalUserContext);
  const { colors, isMobile } = useTheme();

  return (
    <>
      <Container className="desktop">
        <SideBar>
          <Profile />
          <SideIconWrapper>
            <DashboardSvg
              fill={colors.pageTextColor}
              width="23px"
              height="23px"
            />
            <Link href="/dashboard">{"Dashboard"}</Link>
          </SideIconWrapper>
          <SideBarAccordions sideBarMenuData={menu.result} />
        </SideBar>
      </Container>
    </>
  );
};
export default SideNavBar;
