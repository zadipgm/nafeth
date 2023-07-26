import { styled } from "styled-components";

export const MenuContainer = styled.div``;
export const Menu = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  width: 300px;
`;
export const MenuMainListTitle = styled.li``;
export const Title = styled.h6`
  white-space: nowrap;
  overflow: hidden;
  font-weight: 600;
  text-overflow: ellipsis;
  padding-bottom: 10px;
  margin-top: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.headerSiderBarBorderColor};
  color: #24695c;
  font-size: 18px;
  margin-bottom: 0;
`;
export const MenuListTitle = styled.li`
  display: block;
  float: none;
  width: 100%;
  padding: 6px 20px;
  transition: all 0.5s ease;
  font-weight: 600;

  &.side-bar-main-title {
  }
`;
export const MenuLink = styled.div`
  color: #222222;
  border-radius: 10px;
  font-weight: 600;
  transition: all 0.5s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px;
`;
export const Wrapper = styled.div`
  transition: all 0.5s ease;
  &.active {
    border-radius: 10px;
    font-weight: 600;
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.colors.nafethBlue};
    div {
      color: #d0efe9;
    }
    svg {
      path {
        fill: #d0efe9;
        transition: all 0.5s ease;
      }
    }
  }
  :hover {
    transition: all 0.5s ease;
    background-color: ${({ theme }) => theme.colors.nafethBlue};
    /* color: ${({ theme }) => theme.colors.pageTextColor}; */
    color: #d0efe9;
    svg {
      path {
        fill: #d0efe9;
        transition: all 0.5s ease;
      }
    }
  }
`;

export const TitleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export const Span = styled.span``;
export const NestedMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  
`;
export const NestedMenuList = styled.li`
transform: translateY(30px);
  transition: all 5s ease;
  
  a {
    text-decoration: none;
    padding: 8px 42px;
    font-size: 13px;
    color: #717171;
    display: block;
    position: relative;
    letter-spacing: 0.07em;
  }
  :hover {
    color: #24695c;
  }
`;
