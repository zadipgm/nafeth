import { styled } from "styled-components";

export const Container = styled.div``;

export const FormContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  margin-top:20px ;
`;
export const FormWrapper = styled.div<{ bcolor: string; color: string }>`
  background-color: rgb(244, 245, 243);
  &.contract-details{}
  color: ${({ color }) => color};
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  &.group-edit-list-form {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    margin-bottom: 15px;
  }
`;
export const GsettingsTitle = styled.div<{ color?: string }>`
  display: flex;
  gap: 24.5%;
  padding: 0px 15px;
  align-items: center;
  text-align: center;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  font-size: 16px;
  > img {
    border-radius: 8px;
  }
  > h2 {
    font-size: 16px;
    color: #fff;
  }

  &.custom-settings {
    margin-top: 15px;
    background-color: ${({ theme }) => theme.colors.bussinesBlue};
  }
`;
export const ImageWrapper = styled.div`
  width: 195px;
  height: 66px;
  border-radius: 8px;
  background-color: white;
`;
export const FormBox = styled.div`
  display: flex;
      width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 12px;

  &.contract-pricing{
    padding: 15px;
  }
  .car-plate-number {
    flex-grow: 1;
    flex-basis: 500px;
  }
`;

export const CompnayLogo = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  > img {
    border-radius: 8px;
  }
`;
export const FormBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &.return-page{
    padding: 15px;
  }
  & .close-icon{
    cursor: pointer;
  }
  &.summary{

    padding: 12px;
  }
  &.price-list {
    align-items: baseline;
  }
  gap: 20px;
  &.tabs {
    justify-content: flex-start;
    width: 100%;
    padding: 0px 15px;
    & .MuiBox-root {
      padding: 15px 0px;
    }
  }
`;
export const GroupButtons = styled.div`
&.return_page_buttons{
  margin-top: 20px;
}
&.add-bill-button{
  margin-top: 16px;
  justify-content: flex-end;
}
& .add-customer-save-button{
  width: 350px;
}
  &.rent-car-group-button {
    padding: 20px 0px;
    margin: 20px 0px;
    flex-wrap: wrap;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 12px;
  & .MuiButtonBase-root {
    width: 250px;
    gap: 12px;
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    &.pricelist-save-button {
      background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    }
    &.dispute-button {
      background-color: ${({ theme }) => theme.colors.red};
    }
    &.dispute-cancel {
      background-color: ${({ theme }) => theme.colors.gray1};
    }
    &.selectButton {
      color: ${({ theme }) => theme.colors.white};
      padding: 10px 20px;
      font-size: 14px;
      width: 150px;
    }
  }
  &.global-settings-save-button {
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  }
  &.contract-on-tajeer-button {
    background-color: ${({ theme }) => theme.colors.green};
    width: 25%;
  }
  &.rent-car-Add-contract {
    background-color: ${({ theme }) => theme.colors.green};
    flex-grow: 1;
    flex-basis: 200px;
    svg {
      transform: rotate(90deg);
      margin: 0px 10px;
    }
  }
  &.contract-on-nafeth-button {
    background-color: ${({ theme }) => theme.colors.green};
    width: 25%;
  }
  &.paylater-button {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
  &.create-contract-button {
    width: 100%;
    @media (max-width: 768px) {
      width: 100%;
      justify-content: center;
    }
    margin-bottom: 20px;
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  }
  &.add-accessories-button {
    background-color: ${({ theme }) => theme.colors.purple};
    flex-grow: 1;
    flex-basis: 400px;
  }
  &.rent-car-Adddriver-button {
    flex-grow: 1;
    flex-basis: 200px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
  &.custom-price-button {
    flex-grow: 1;
    flex-basis: 200px;
    background-color: ${({ theme }) => theme.colors.red};
  }
  &.tajeer-portal-details-save-button {
    background-color: #8e3a47;
  }
  &.rent-car-save-button {
    flex-grow: 1;
    flex-basis: 200px;
    background-color: ${({ theme }) => theme.colors.sideBarBgColor};
    svg {
      transform: rotate(90deg);
      margin: 0px 10px;
    }
  }
  &.national-address-save-button {
    background-color: ${({ theme }) => theme.colors.lightblue1};
  }
  &.add-customer-save-button {
    background-color: ${({ theme }) => theme.colors.green};
  }
  &.custom-settings-save-button {
    background-color: ${({ theme }) => theme.colors.bussinesBlue};
  }
  &.nodhom-save-button {
    background-color: ${({ theme }) => theme.colors.lightBlue1};
  }
  &.add-car-save-button {
    background-color: ${({ theme }) => theme.colors.cyan};
  }
  &.add-branch-save-button {
    background-color: ${({ theme }) => theme.colors.purple};
  }
  &.add-user-save-button {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
`;
// Nodhom component Style

export const Logo = styled.div<{ bgcolor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  gap: 15px;
  flex-wrap: wrap;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  background-color: ${({ bgcolor }) => bgcolor};
  > img {
    border-radius: 8px;
    flex-grow: 1;
    flex-basis: 100px;
  }
`;
export const Text = styled.div`
  color: #fff;
  flex-grow: 1;
  flex-basis: 600px;
  > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  &.contract-search-payment{
margin-top: 16px;
  }
`;
