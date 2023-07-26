import ArrowDown from "@/public/icons/arrowDownSvg";
import CarManageSvg from "@/public/icons/carManageSvg";
import Link from "next/link";
import * as React from "react";
import {
  Menu,
  MenuContainer,
  MenuLink,
  MenuListTitle,
  NestedMenu,
  NestedMenuList,
  Span,
  Title,
  TitleIconWrapper,
  Wrapper,
} from "./style";
import { useTheme } from "styled-components";
import ProfileComponent from "../profile";
import { sideMenuData } from "@/global/fakeData";

const SideBarMenu = () => {
  const [expand, setExpand] = React.useState("");
  const { colors }: any = useTheme();
  const expandHandler = (panel: string) => {
    setExpand(panel);
  };
  return (
    <MenuContainer>
      <ProfileComponent />
      <Menu>
        <MenuListTitle className="side-bar-main-title">
          <Title>General</Title>
        </MenuListTitle>
        <MenuListTitle>DashBoard</MenuListTitle>
        {sideMenuData.map((item, index) => {
          return (
            <div key={index}>
              <MenuListTitle className="side-bar-main-title">
                <Title>{item.module}</Title>
              </MenuListTitle>
              {item.pages.map((p, index) => {
                return (
                  <MenuListTitle key={index}>
                    <Wrapper className={expand === p.panel ? "active" : ""}>
                      <MenuLink
                        onClick={() => expandHandler(p.panel)}
                        className="menu-link"
                      >
                        <TitleIconWrapper>
                          <CarManageSvg fill={colors.black1} />
                          <Span>{p.module_name}</Span>
                        </TitleIconWrapper>
                        <ArrowDown
                          classname="arrow-down"
                          fill="black"
                          width="15px"
                          height="15px"
                        />
                      </MenuLink>
                    </Wrapper>
                    {expand === p.panel && (
                      <NestedMenu>
                        {p.page.map((page, index) => {
                          return (
                            <NestedMenuList key={index}>
                              <a href={page.page_link}>{page.page_name}</a>
                            </NestedMenuList>
                          );
                        })}
                      </NestedMenu>
                    )}
                  </MenuListTitle>
                );
              })}
            </div>
          );
        })}
      </Menu>
    </MenuContainer>
  );
};
export default SideBarMenu;
