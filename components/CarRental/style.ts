import { styled, css } from "styled-components";
export const Container = styled.div``;
export const AddAccessoriesContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding-bottom: 10px;
`;
export const SignatureWrapper = styled.div`
& .sigCanvas{
  border:1px solid ${({ theme }) => theme.colors.gray2};
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 85%;
    height: 50%;
    border-radius: 8px;
}
`
export const OTPSent = styled.p`
font-size: 20px;
    font-weight: 600;
    padding: 15px;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px; 
`
export const OTPPhone = styled.div`

`
export const OTPText = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const OTpWrapper = styled.div`
.otpContainer{
  margin: 5% auto;
    width: 94%;
    display: flex;
    align-items: center;
    justify-content: center;
.otpInput{
  width: 3rem !important;
  height: 3rem;
  margin: 0 1rem;
  font-size: 2rem;
  text-align: center;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
}
`
export const CheckListWrapper = styled.div`
`
export const Instruction = styled.div`
padding: 15px;
`
export const MarkerImageWapper = styled.div <{ borderColor: string }>`
    border: 3px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 8px;
    cursor: pointer;
    transition: all.5s;
    background: white;
  
    flex-basis: 150px;
    flex-grow: 1;
    &.avtive{
      transition: all.5s;
      border: 3px solid ${({ borderColor }) => borderColor};
    }
img>{
  
  /* border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor}; */
}
`
export const CustomTabsImage = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: ${({ theme }) => theme.colors.sideBarBgColor};
    padding: 10px;
    margin: 0px 16px;
    border-radius: 8px;
`
export const InstructionList = styled.ul`
    color: ${({ theme }) => theme.colors.gray2};
    background-color:${({ theme }) => theme.colors.sideBarBgColor};
    border-color: #bce8f1;
    border-radius: 8px;
   margin: 0;
   padding: 10px;
    list-style-type: none;
`
export const InstructionListItem = styled.li`
list-style-type: disclosure-closed;
margin: 0px 25px;
`
export const MarkerImage = styled.img<{ left: number, top: number }>`
position: absolute;
left: ${({ left }) => `${left}px`};
top: ${({ top }) => `${top}px`};
z-index: 9999;
`
export const CheckListBgImageWrapper = styled.div`
position: relative;
`
export const CheckListBgImage = styled.div`
background-image: url('/images/checklistmarker.jpg');
width: 893px;
    height: 429px;
     border:1px solid ${({ theme }) => theme.colors.gray2};
  
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 8px;
`
export const SlectedAccessoriesContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 30px;
  gap: 20px;
`;
export const SlectedAccessories = styled.div`
  width: 20%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.sideBarBgColor};
`;
export const Accessory = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding:unset;
`;
export const AccessoriesContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 10px;
  flex-grow: 1;
  gap: 6px;
  align-items: center;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  & .MuiFormGroup-root {
    label {
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
  &.contract-details{
    margin-top: 15px;
  }
  &.driver-container{
    margin:15px 0px;
  }
  &.contract-pricing {
    margin-top: 40px;
  }
  &.rent_summary{
    margin-top: 20px;
  }
  &.rent_account{
    margin-top: 20px;
  }
`;
export const RentSelectedCarContainer = styled.div`
  margin: 30px;
`;
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  padding: 10px;
  > div {
    cursor: pointer;
  }
  > span {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
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
  padding: 0px 20px;
  .active_promotions {
    border: 2px solid ${({ theme }) => theme.colors.sideBarBgColor};
    cursor: pointer;
  }
  .individual {
    flex-grow: 1;
    flex-basis: 400px;
  }
  .car-management {
    justify-content: space-between;
  }
  .promotions {
    border: 2px solid transparent;
    cursor: pointer;
  }
`;
export const ContractGrid = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;
export const CardWrapper = styled.div<{ bcolor?: string; color?: string }>`
  width: 23%;
  color: ${({ color }) => color};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 22px;

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

  @media (min-width: 1024px) {
    width: 48%;
    /* margin: 0 auto; */
  }
  @media (min-width: 1440px) {
    width: 32%;
  }
  @media (min-width: 1640px) {
    width: 24%;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  font-family: inherit;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
  &.accessory {
    font-family: inherit;
    justify-content: center;
  }
  &.promotions {
    font-family: inherit;
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
  &.car-management {
  }

  &.customer {
    font-family: inherit;
    flex-grow: 1;
    flex-basis: 100px;
    padding: 15px 0px 0px 0px;
    svg {
      margin: 0px 10px;
    }
    .add {
      text-transform: capitalize;
      padding:unset;
      flex-grow: 1;
      flex-basis: 100px;
      font-size: 14px !important;
      svg {
        margin: 0px 7px;
      }
      &:hover {
        color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor};
        background-color: ${({ theme }) => theme.colors.sideBarBgColor};
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
    text-transform: capitalize;
    padding:unset;
    font-family: inherit;
    flex-grow: 1;
    flex-basis: 100px;
    font-size: 14px !important;
    border: 1px solid ${({ theme }) => theme.colors.cyan};
    color: ${({ theme }) => theme.colors.cyan};
    svg {
      margin: 0px 7px;
    }
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
    font-family: inherit;
    text-transform: capitalize;
    padding:unset;
    svg {
      margin: 0px 7px;
    }
    flex-grow: 1;
    flex-basis: 100px;
    font-size: 14px !important;
    border: 1px solid ${({ theme }) => theme.colors.darkYellow};
    color: ${({ theme }) => theme.colors.darkYellow};
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
  & .extention {
    font-family: inherit;
    text-transform: capitalize;
    padding:unset;
    svg {
      margin: 0px 7px;
    }
    flex-grow: 1;
    flex-basis: 100px;
    border: 1px solid ${({ theme }) => theme.colors.purple};
    font-size: 14px !important;
    color: ${({ theme }) => theme.colors.purple};
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors.purple};
      & .MuiButton-endIcon {
        svg {
          margin: 0px 7px;
          fill: #fff;
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .nozhum {
    font-family: inherit;
    svg {
      margin: 0px 7px;
    }
    width: 100%;
    font-size: 14px !important;
    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
  }
  & .details {
    text-transform: capitalize;
    padding:unset;
    font-family: inherit;
    flex-grow: 1;
    flex-basis: 100px;
    svg {
      margin: 0px 7px;
    }
    font-size: 14px !important;
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
    text-transform: capitalize;
    padding:unset;
    font-family: inherit;
    flex-grow: 1;
    flex-basis: 100px;
    svg {
      margin: 0px 7px;
    }
    font-size: 14px !important;
    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor};
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
      & .MuiButton-endIcon {
        svg {
          margin: 0px 7px;
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .rent {
    text-transform: capitalize;
    padding:unset;
    font-family: inherit;
    svg {
      margin: 0px 7px;
    }
    flex-grow: 1;
    flex-basis: 100px;
    font-size: 14px !important;
    color: ${({ theme }) => theme.colors.purple};
    border: 1px solid ${({ theme }) => theme.colors.purple};

    &:hover {
      color: #fff;
      border: 1px solid ${({ theme }) => theme.colors.purple};
      background-color: ${({ theme }) => theme.colors.purple};
      & .MuiButton-endIcon {
        svg {
          margin: 0px 7px;
          path {
            stroke: #fff;
          }
        }
      }
    }
  }
  & .delete {
    text-transform: capitalize;
    padding: unset;
    font-family: inherit;
    svg {
      margin: 0px 7px;
    }
    flex-grow: 1;
    flex-basis: 100px;
    font-size: 14px !important;
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
    text-transform: capitalize;
    padding: unset;
    font-family: inherit;
    flex-grow: 1;
    flex-basis: 100px;
    svg {
      margin: 0px 7px;
    }
    font-size: 14px !important;
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
  .customer_full_name {
    color: ${({ theme }) => theme.colors.sideBarBgColor};
    font-size: 18px;
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
export const ContractNumber = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* gap: 2px; */
`;
export const CardMakeModel = styled.div`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.sideBarBgColor};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  & .year {
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
  gap: 12px;
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
  .nextui-tooltip-button {
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
  width: 100%;
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
export const EnglishCar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  letter-spacing: 0.6px;
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
  &.car_page{
    >li{
      width: 100%;
    }
  }
  &.individual{
    >li{
      width: 100%;
    }
  }
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
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  }
`;
export const DetailListItem = styled.li`
  width: 100%;
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
  flex-wrap: wrap;
  gap: 20px;
  .car-plate-arabic {
    width: 100%;
  }
`;





export const Address = styled.span`
  font-size: 14px;
`;



export const CarPlateNumberInputWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
gap: 16px;
flex-wrap: wrap;
`


export const OtherDetailsListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
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
//Selected Customer css------------------------------------------

export const SelectedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  &.selected-customer{
    background-color: white;
    border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
  }
  &.selected_car{
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 border-bottom-left-radius: 8px;
 border-bottom-right-radius: 8px;
 background-color: white;
  }
  &.return_list{
    >li{
      flex-basis: 200px;
    }
  }
`;
export const SelectedListItem = styled.li`
  flex-grow: 1;
  flex-basis: 300px;
  padding: 15px;
  ${({ theme }) =>
    theme.isLTR
      ? css`
          border-right: 1px solid ${({ theme }) => theme.colors.gray2};
        `
      : css`
          border-left: 1px solid ${({ theme }) => theme.colors.gray2};
        `}
        &.car_plate{
          display:flex;
          flex-direction: column;
          gap:10px;
        }
`;
export const Label = styled.div`
  font-size: 18px;
  font-weight: 700;
  padding: 0px 12px;
  border-radius: 5px;
  background-color: #d7d6d645;
`;
export const Value = styled.div`
  padding: 0px 12px;
  text-transform: capitalize;
  
  &.car_plate{
        width: clamp(200px, 40%, 400px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
`;
// ----------------------CarListView css----------------------------------------------------------------------------------------

export const ListViewContainer = styled.div`
  padding: 0px 20px;
`;

export const GlobalListViewWrapper = styled.div`
  margin: 20px 0px;
  padding: 0px 15px 15px 15px;
  &.contract-list-view {
    padding: 10px 15px 15px 15px;
  }
  border-radius: 20px;
  display: flex;
box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
  flex-wrap: wrap;
  &.active_promotions {
    border: 2px solid ${({ theme }) => theme.colors.sideBarBgColor};
    cursor: pointer;
  }
  &.promotions {
    border: 2px solid transparent;
    cursor: pointer;
  }
`;
export const ContractCustomer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 0px 7px;
  &.short-list-view {
    flex-direction: column;
    align-items: flex-start;
  }
  & .contract-customer {
    font-size: 20px;
    font-weight: 700;
  }
`;
export const ModelListViewWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  flex-basis: clamp(150px, 100%, 200px);
  font-size: 18px;
  display: flex;
  gap: 2px;

  &.short-list-view {
    transition: all.5s;
    border: 2px solid transparent;
    display: flex;
    width: 97%;
    cursor: pointer;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 15px;
    margin: 15px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &.active {
      border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
    }
  }
  &.contract-number {
    flex-basis: 150px;
    display: flex;
    flex-direction: column;
  }
  flex-direction: column;
  align-items: flex-start;
  .contract {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .color {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .make-model {
    font-size: 26px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sideBarBgColor};
    line-height: 21px;
  }
`;
export const CardPlateWrapper = styled.div`
  width: 100%;
  &.short-list-view {
    width: 50%;
  }
`;
export const ReuseAbleList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  flex-grow: 1;
  flex-basis: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .car-management {
    flex-grow: 1;
    flex-basis: 150px;
  }
  .dashboard {
    flex-grow: 1;
    flex-basis: 150px;
  }
  .individual {
    flex-grow: 1;
    flex-basis: 150px;
  }
  .disputed {
    flex-grow: 1;
    flex-basis: 150px;
  }
`;
export const ReuseAbleListItem = styled.li<{ color?: string }>`
  display: flex;
  justify-content: flex-start;
  color: ${({ color }) => color};
  gap: 8px;
  width: 100%;
  background-color: #d7d6d645;
  padding: 3px 3px 0px 3px;
  margin: 3px;
  border-radius: 8px;
  align-items: center;
  .nextui-tooltip-button {
    gap: 8px;
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const CarStatus = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Status = styled.div<{ color: string }>`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${({ color }) => color};
  color: white;
  width: 100px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 8px;
`;

export const CarTypeSvgWrapper = styled.div`
  flex-grow: 1;
  flex-basis: 200px;
  .color {
    color: ${({ theme }) => theme.colors.darkBlue};
  }
  .make-model {
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.sideBarBgColor};
    line-height: 21px;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: end;
`;
