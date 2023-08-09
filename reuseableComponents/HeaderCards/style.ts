import { css } from "styled-components";
import { styled } from "styled-components";
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;
export const Wrapper = styled.div<{ bcolor?: string; color?: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0px 20px;

  height: 300px;
  width: 80%;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  /* height: 19vh; */
`;
export const HeaderCardsSection = styled.div`
  display: flex;
`;

export const DashboardTitle = styled.h1`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.nafethBlue};
`;
export const CardContainer = styled.div`
  width: 50%;
`;
export const CardInnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  transition: 0.5s;
  align-items: center;
  transition: transform 0.5s;
`;
export const ContractsTitle = styled.h2`
  margin: 0px;
  font-size: 20px;
`;
export const CardTitle = styled.p<{ color?: string }>`
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  transition: 0.3s;
`;
export const Card = styled.div<{ cardcolor?: string; icolor?: string }>`
  width: 45%;
  background-color: ${({ cardcolor }) => cardcolor};
  transition: 0.5s;
  align-items: center;
  text-align: center;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  ${({ theme, icolor }) =>
    theme.isLTR
      ? css`
          border-left: 8px solid ${icolor};
        `
      : css`
          border-right: 8px solid ${icolor};
        `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.5s;
`;
export const ContentWrapper = styled.div``;
export const Number = styled.h5<{ color?: string }>`
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: ${({ color }) => color};
`;
export const IconWrapper = styled.div<{ bcolor?: string }>`
  width: 70px;
  height: 70px;
  background-color: ${({ bcolor }) => bcolor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

