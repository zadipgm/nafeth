import { styled } from "styled-components";

export const Container = styled.div``;
export const CardListWrapper = styled.div<{ bcolor: string; color: string }>`
  width: 100%;
  margin-top: 70px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 20px;
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
`;
export const CarRentPageTitle = styled.h2`
  font-size: 18px;
  color: #1281c4;
`;
export const CarWrapper = styled.div<{ bcolor: string; color: string }>`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 20px;
`;
export const Car = styled.div<{ bcolor?: string; color?: string }>`
  width: 23.7%;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all.5s;
  cursor: pointer;
  position: relative;
  &:hover {
    transition: all.5s;
    transform: scale(1.02);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
 
  & .detail {
    width: 50%;
    font-size: 10px !important;
    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.nafethBlue};
      & .MuiButton-endIcon {
        svg {
          g {
            g {
              path {
                fill: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
export const CarMakeModelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Strong = styled.strong<{ color: string }>`
  font-size: 16px;
  margin: 0px 2px;
  color: ${({ color }) => color};
`;
export const Span = styled.span<{ color: string }>`
  font-size: 14px;
  color: ${({ color }) => color};
`;
export const CarMakeModel = styled.div<{ color: string }>`
  font-size: 18px;
  color: ${({ color }) => color};
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
export const CarColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid black;
  background-color: ${({ color }) => color};
`;
export const CarTypeIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;

`;
export const NumberPlateContainer = styled.div`
display: flex;
border: 3px solid ${({ color }) => color};
border-radius: 10px;
`
export const NumberPlateArabic = styled.div <{ color: string }>`
   height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Parent = styled.p`
/* width: 50%;
& .arabic{
        padding: 0px 8px;
       border-right: 2px solid ${({ color }) => color};
    }
    & .english{
        padding: 0px 8px;
       border-right: 2px solid ${({ color }) => color};
    }
    & .arabic_1{
        padding: 0px 8px;
    }
    & .english_1{
        padding: 0px 8px;
       
    } */
`
export const Child = styled.p`

`
export const NumberPlateEnglish = styled.div<{ color: string }>`
  height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CarPlateIcon = styled.div<{ color: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-top: 3px solid ${({ color }) => color};
    border-bottom: 3px solid ${({ color }) => color};
    border-right: 3px solid ${({ color }) => color};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px; */
p{
  line-height: 14px;
    font-weight: 700;
    padding-bottom:4px
}
`
export const ALsaudia = styled.div<{ color: string }>`
font-size: 10px;
padding:0px 4px;
`
export const CarSpecsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 6px;
`;
export const CarTransmitionWrapper = styled.div``;
export const Table = styled.table<{ color: string }>`
 border: 3px solid ${({ color }) => color};
 border-radius: 10px;
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-spacing: 0;
width: 55%;
`;

export const TD = styled.td<{ color?: string }>`
padding:2px;
border-right: 2px solid ${({ color }) => color};
text-align: center;
font-weight: 700;
&.border-bottom{
  border-bottom: 2px solid ${({ color }) => color};
}
&.alsaudia{
  text-align: center;
  border-bottom: none;
  border-right: none;
  margin: 0 auto;
  >div{
        line-height: 0px;
    font-weight: 600;
    width: 12px;
    font-size: 10px;
  }
}
&.KSA{
  border-right: none;
  >p{
    text-align: center;
    line-height: 10px;
    font-weight: 700;
    font-size: 10px;
    padding-top:4px ;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
}
`;

