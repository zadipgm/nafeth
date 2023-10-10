import { css } from "styled-components";
import { styled } from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
flex-wrap: wrap;

`;

export const HeaderCardsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;
  width: 100%;
`;

export const DashboardTitle = styled.h1`
  font-size: 24px;
  margin: 0px;
  color: ${({ theme }) => theme.colors.sideBarBgColor};
`;

export const CardInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  transition: 0.5s;
  align-items: center;
  transition: transform 0.5s;
  padding-bottom: 20px;
 width: 100%;
  &.car-management{
    flex-grow: 1;
    flex-basis: 250px;
    justify-content: space-between;
  }
  .dashboard{
    flex-grow: 1;
    flex-basis: 250px;
    justify-content: space-between;
  }
  
`;
export const ContractsTitle = styled.h2`
  margin: 0px;
  font-size: 20px;
`;

export const HeaderCardWrapper = styled.div`
  transition: 0.5s;
  align-items: center;
  text-align: center;
  padding: 15px;
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
    background-color: #FFFFFF;
    color: #252422;
  border-radius: 8px;
      flex-grow: 1;
    flex-basis: 250px;
`
export const Card = styled.div<{ cardcolor?: string; icolor?: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
     margin-bottom: 12px;
  &.car-management{
    flex-grow:1;
    flex-basis:250px;
  
  }
  
`;
export const ContentWrapper = styled.div`
    font-size: 2em;
    line-height: 1.4em;

`;
export const Viewmore = styled.div`
cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    border-top: 1px solid ${({ theme }) => theme.colors.borderBottomColor};
padding-top: 8px;
svg{
  margin-top: 5px;
}

    `

export const IconWrapper = styled.div<{ bcolor?: string }>`
  width: 70px;
  height: 70px;
  background-color: ${({ bcolor }) => bcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

