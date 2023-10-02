import { colors } from "@mui/material";
import { styled, css } from "styled-components";
export const Container = styled.div`

`;
export const AddAccessoriesContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  margin:30px;
  padding-bottom: 10px;
`
export const SlectedAccessoriesContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
margin: 30px;
gap: 20px;
`
export const SlectedAccessories = styled.div`


width: 20%;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
`
export const Accessory = styled.div`
display: flex;
justify-content: space-between;
text-transform: capitalize;
`
export const AccessoriesContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 10px;
 
  width: 31.5%;
  gap: 6px;
  align-items: center;
  margin: 10px;
  display: flex;
  cursor: pointer;
  & .MuiFormGroup-root{
    label{
      margin-right: 10px;
    }
  }
`;
export const AccessoriesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;
export const RentContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding-bottom: 10px;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  > div {
    cursor: pointer;
  }
`;
export const CardListWrapper = styled.div<{ bcolor: string; color: string }>`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* padding: 20px; */
  border-radius: 8px;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  padding-bottom: 4px;
  &.car-management {
    margin: 20px 0px;
  }
  .load-more {
    width: 200px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    & .MuiButton-endIcon {
      svg {
        transform: rotate(90deg);
        margin: 0px 10px;
      }
    }
  }
`;
export const CarRentPageTitle = styled.h2`
  font-size: 18px;
  color: #1281c4;
  margin: 0;
`;
export const CarWrapper = styled.div<{ bcolor: string; color: string }>`
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding:0px 10px;
  .active_promotions{
    border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
    cursor: pointer;
  }
  .promotions{
   border: 2px solid transparent;
    cursor: pointer;
  }
   @media (max-width: 600px) {
    width: 100%;
    display: block;
  }
  @media (min-width: 600px) {
    width: 100%;
    display: flex;
  }
`;
export const ContractGrid = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
`
export const CardWrapper = styled.div<{ bcolor?: string; color?: string }>`
  width: 24%;
  color: ${({ color }) => color};
  background-color: ${({ bcolor }) => bcolor};
  padding: 15px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: all.5s;
  position: relative;
 
  &:hover {
    transition: all.5s;
    transform: scale(1.02);
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 15px 0px;
  }
  @media (min-width: 600px) {
    width: 100%;
    margin: 15px 0px;
  }
   @media (min-width: 768px) {
    width: 80%;
    /* margin: 0 auto; */
  }
  @media (min-width:1024px) {
    width: 48%;
    /* margin: 0 auto; */
  }
    @media (min-width:1440px) {
    width: 32%;
  }
   @media (min-width:1640px) {
    width: 23%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  &.contract-grid{
    display: block;
  }
  &.accessory{
    justify-content: center;
  }
  &.promotions{
    justify-content: flex-end;
@media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (min-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
  }
   
  &.car-management{
width: 25%;
@media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
  @media (min-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
  }
  &.customer {
    padding: 15px 0px 0px 0px;
    svg {
      margin: 0px 10px;
    }
    .add{
      width: 50%;
    font-size: 10px !important;
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.nafethBlue};
      background-color: ${({ theme }) => theme.colors.nafethBlue};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
    }
  }
  & .print {
    width: 50%;
    font-size: 10px !important;
    border: 1px solid ${({ theme }) => theme.colors.cyan};
    color:${({ theme }) => theme.colors.cyan};
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.cyan};
      background-color: ${({ theme }) => theme.colors.cyan};
      & .MuiButton-endIcon {
        svg {
          path {
            fill: #fff;
            stroke: #fff;
          }
        }
      }
    }
  }
  & .retrun {
    &.grid{
      margin: 4px;
      width: 46%;
    }
    width: 50%;
    font-size: 10px !important;
    border: 1px solid ${({ theme }) => theme.colors.darkYellow};
    color:${({ theme }) => theme.colors.darkYellow};
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.darkYellow};
      background-color: ${({ theme }) => theme.colors.darkYellow};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .extention{ 
    &.grid{
      margin: 4px;
      width: 46%;
    }
    width: 50%;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    font-size: 10px !important;
    color:  ${({ theme }) => theme.colors.purple};
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors.purple};
      & .MuiButton-endIcon {
        svg {
          fill: #fff;
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .nozhum {
    width: 100%;
    font-size: 10px !important;
    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.nafethBlue};
    }
  }
  & .details {

    &.grid{
      margin: 4px;
      width: 46%;
    }
    width: 50%;
    font-size: 10px !important;
    color: ${({ theme }) => theme.colors.green};
    border: 1px solid ${({ theme }) => theme.colors.green};
    svg {
      path {
        fill: ${({ theme }) => theme.colors.green};
      }
    }
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.green};
      background-color: ${({ theme }) => theme.colors.green};
      & .MuiButton-endIcon {
        svg {
          g {
            g {
              path {
                fill: #fff;
              }
            }
          }
          path {
            fill: #fff;
          }
        }
      }
    }
  }
  & .edit {
    width: 50%;
    font-size: 10px !important;
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.nafethBlue};
      background-color: ${({ theme }) => theme.colors.nafethBlue};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .rent {
    width: 50%;
    font-size: 10px !important;
    color: ${({ theme }) => theme.colors.purple};
    border: 1px solid ${({ theme }) => theme.colors.purple};
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors.purple};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .delete {
    width: 50%;
    font-size: 10px !important;
    color: red;
    border: 1px solid red;

    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.red};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .dispute {

    &.grid{
      margin: 4px;
      width: 46%;
    }
    width: 50%;
    font-size: 10px !important;
    color: red;
    border: 1px solid red;
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.red};
      background-color: ${({ theme }) => theme.colors.red};
      & .MuiButton-endIcon {
        svg {
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
`;
export const CardMakeModelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .customer_full_name{
 color: ${({ theme }) => theme.colors.nafethBlue}; 
  }
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
export const CardMakeModel = styled.div<{ color: string }>`
  font-size: 22px;
  &.contract{
    color: ${({ color }) => color};

  }
  color: ${({ theme }) => theme.colors.nafethBlue}; 
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  & .year{
    font-weight: 700;
  }
`;
export const CardColor = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid black;
  background-color: ${({ color }) => color};
`;
export const CardTypeIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
`;
export const NumberPlateContainer = styled.div`
  display: flex;
  border: 3px solid ${({ color }) => color};
  border-radius: 10px;
`;
export const NumberPlateArabic = styled.div<{ color: string }>`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Child = styled.p``;
export const NumberPlateEnglish = styled.div<{ color: string }>`
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CarPlateIcon = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    line-height: 14px;
    font-weight: 700;
    padding-bottom: 4px;
  }
`;
export const ALsaudia = styled.div<{ color: string }>`
  font-size: 10px;
  padding: 0px 4px;
  &.contract-page {
    font-size: 14px !important;
  }
`;
export const CardSpecsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 6px;
`;
export const CardTransmitionWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
.nextui-tooltip-button{
  display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
`;
export const Table = styled.table<{ color: string }>`
  direction: ltr;
  border: 3px solid ${({ color }) => color};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-spacing: 0;
  width:100%;
  
`;

export const TD = styled.td<{ color?: string }>`
  padding: 2px;
  border-right: 2px solid ${({ color }) => color};
  text-align: center;
  font-weight: 700;
  &.border-bottom {
    border-bottom: 2px solid ${({ color }) => color};
  }
  &.alsaudia {
    text-align: center;
    border-bottom: none;
    border-right: none;
    margin: 0 auto;
    width: 4%;
    > div {
      line-height: 0px;
      font-weight: 600;
      
      font-size: 10px;
    }
  }
  &.KSA {
    border-right: none;
    > p {
      text-align: center;
      line-height: 10px;
      font-weight: 700;
      font-size: 10px;
      padding-top: 4px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }
`;
export const DetailsHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DetailsTitle = styled.h3<{ color: string }>`
  text-align: center;
  background: ${({ color }) => color};
  margin: 0;
  padding: 12px;
  color: #fff;
`;



export const DetailWrapper = styled.div<{ color: string; bcolor: string }>`
  background-color: ${({ bcolor }) => bcolor};
  color: ${({ color }) => color};
`;
export const DetailList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding: 0;
  margin: 0;
  &.customer-info {
    > li {
      width: 50%;
      &.address {
        width: 100%;
      }
    }
  }
  .rent-button {
    position: absolute;
    bottom: 0;
    padding: 12px;
    width: 100%;
    border-radius: inherit;
    font-weight: 600;
  }
`;
export const DetailListItem = styled.li`
  width: 50%;
  display: flex;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};

  &:hover {
    transition: 0.5s;
    background-color: #f1f1f1;
    color: #000;
  }
`;
export const Strongtext = styled.strong``;
export const Spantext = styled.span``;
export const CarPlateInArabicWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  .car-plate-arabic {
    width: 100%;
  }
`;
export const RentWrapper = styled.div`
  display: flex;
  @media (max-width: 600px) {
    display: block;
    &.car-card {
    height: unset !important;
  }
  }
  margin: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 70px;
  &.car-card {
    height: 400px;
  }
  &.Customer-card {
    height: 300px;
  }
  &.driver-card {
    height: 200px;
  }
`;
export const RentList = styled.ul`
  margin: 0;
  padding: 15px;
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  flex-wrap: wrap;
  border-top-left-radius: 70px;
  border-bottom-left-radius: 70px;
  border-bottom-right-radius: 70px;
  background-color: ${({ theme }) => theme.colors.nafethBlue};
  color: white;
  &.rental-details {
    margin: 20px;
    border-radius: 100px;
    background-color: transparent;
    color: black;
    width: 90%;
    justify-content: center;
    align-items: center;
    > li {
      width: 16%;
      border-right: 1px solid ${({ theme }) => theme.colors.gray2};
      span {
        color: ${({ theme }) => theme.colors.gray1};
      }
    }
  }
  &.payment-detail {
    background-color: transparent;
    color: black;
    width: 70%;
    > li {
      width: 14%;
    }
  }
  &.payment-details {
    background-color: transparent;
    color: black;
    width: 100%;
    > li {
      width: 11%;
    }
  }
  &.custom-price {
    background-color: transparent;
    color: black;
    flex-wrap: nowrap;
    width: 100%;
    margin: 0;
    > li {
      width: 20%;
      margin: 0px 4px;
      span {
        color: ${({ theme }) => theme.colors.gray1};
      }
    }
  }
   @media (max-width: 600px) {
    width: 100%;
  }
`;
export const RentListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 16%;
margin: 2px;
  &.other-details {
    width: 30%;
  }
  &.other-detail {
    width: 30%;
  }
  @media (max-width: 600px) {
    width: 48%;
    justify-content: center;
  }
`;
export const CarOtherDetails = styled.div`
  width: 30%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  & .title {
    > h2 {
      margin: 0;
      color: black;
      font-weight: 700;
    }
  }
  > svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 0 auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;
export const OtherDetailsTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }
`;
export const Address = styled.span`
  font-size: 14px;
`;
export const BackICon = styled.div`
  cursor: pointer;
  svg {
    ${({ theme }) =>
    theme.isLTR
      ? css`
            transform: rotate(0deg);
          `
      : css`
            transform: rotate(180deg);
          `}
  }
`;
export const CarDetailsTitle = styled.span`
  color: ${({ theme }) => theme.colors.black1};
  &.other-detail {
    color: ${({ theme }) => theme.colors.black1};
  }
  &.other-details {
    color: ${({ theme }) => theme.colors.black1};
  }
`;
export const CarDetailsSubTitle = styled.span<{ color?: string }>`
  font-size: 18px;
  &.other-detail {
    font-size: 14px;
    font-weight: 700;
  }
  &.other-details {
    border:3px solid ${({ color }) => color};
    width: 100px;
    text-align: center;
    border-radius: 8px;
    color: ${({ color }) => color};
    background-color: ${({ theme }) => theme.colors.nafethBlue};
  }
`;
export const OtherDetailsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
export const CarplateSvgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
export const OtherDetailsListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const Colors = styled.div`
  color: blue;
`;
export const IDIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  font-weight: 700;
  align-items: center;
  border-radius: 100%;

  border: 1px solid black;
`;


// ----------------------CarListView css----------------------------------------------------------------------------------------

export const ListViewContainer = styled.div`
padding:0px 15px;
  
 `


export const GlobalListViewWrapper = styled.div`
 margin: 12px 0px;
  padding: 0px 15px 10px 15px;
 border-radius: 8px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  &.active_promotions{
    border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
    cursor: pointer;
  }
  &.promotions{
   border: 2px solid transparent;
    cursor: pointer;
  }
`
export const ModelListViewWrapper = styled.div`
  width: 32%;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .contract{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  .make-model{
    font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.nafethBlue}

  }
 @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
   @media (min-width: 1024px) {
    width: 20%;
  }
   @media (min-width: 1440px) {
    width: 20%;
  }
  `
export const CardPlateWrapper = styled.div`
width: 10%;
@media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
&.car-page{
  width: 30%;
  @media (max-width: 600px) {
    width: 66%;
  }
  @media (min-width: 600px) {
    width: 80%;
  }
   @media (min-width: 768px) {
    width: 50%;
  }
}
`
export const ReuseAbleList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
  
    @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
   @media (min-width: 1024px) {
    width: 40%;
    margin-top: 31px;
  }
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap ;
`
export const ReuseAbleListItem = styled.li<{ color?: string }>`
/* .nextui-tooltip-button{ */
    display: flex;
    justify-content: flex-start;
    color: ${({ color }) => color};
   gap: 8px;
    width: 215px;
    @media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 26%;
  }
   
  
    background-color: #d7d6d645;
    padding: 3px 3px 0px 3px;
    margin: 3px;
    border-radius: 8px;
    align-items: center;
   
    .nextui-tooltip-button{
gap: 8px;
>div{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    }
  /* } */
`
export const CarStatus = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Status = styled.div<{ color: string }>`
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background-color: ${({ color }) => color};
color: white;
    width: 100px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-radius: 8px;
`
export const CarTypeSvgWrapper = styled.div`
>span{
     font-size: 22px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.nafethBlue}
}
width: 32%;
display: flex;
    flex-direction: column;
@media (max-width: 600px) {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 100%;
  }
   @media (min-width: 1024px) {
     width: 35%;
    align-items:flex-end;
    justify-content: flex-end;
  }
   
`