import { styled } from "styled-components";

export const Container = styled.div``;
export const Title = styled.h2`
  color:${({ theme }) => theme.colors.pageTextColor};
  font-size: 22px;
`;
export const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
      margin: 30px 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
export const FormWrapper = styled.div`
&.group-edit-list-form{
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  margin-bottom:15px ;
}
`;
export const GsettingsTitle = styled.div`
display: flex;
gap: 24.5%;
padding:10px 15px;
align-items: center;
text-align: center;
color: #d9d9d9;
background-color: ${({ theme }) => theme.colors.green};
border-top-right-radius: 8px;
border-top-left-radius: 8px;
font-size: 20px;
>img{
  border-radius: 6px;
}
>h2{
  font-size: 20px;
  color: white;
}

  &.tajeer {
    margin-top: 15px;
    background-color: #2a4158;
  }
  &.national-address {
    margin-top: 15px;
    background-color: #1c8da4;
  }
  &.custom-settings {
    margin-top: 15px;
    background-color:${({ theme }) => theme.colors.headersideBarBgColor};
  }
  &.nodhom{
    background-color: #44A0E1;
  }
`;
export const ImageWrapper = styled.div`
width: 195px;
height: 66px;
border-radius: 6px;
background-color: white;
`
export const FormBox = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 32%;
  flex-direction: column;
  gap: 24px;
  & .MuiInputBase-root {
    color: ${({ theme }) => theme.colors.pageTextColor};
  }
  &.tajeer {
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root.MuiTextField-root {
      width: 32%;
    }
  }
  &.national-address {
    width: 49%;
  }
  &.custom-settings-last-child {
    gap: 19px;
  }
  &.tabs {
    width: 100%;
  }
  &.nodhom {
    width: 50%;
  }
  &.nodhom-second-last-child {
    width: 80%;
  }
  &.nodhom-last-child {
    width: 17%;
  }
  &.global-settings1{
    width: 66%;
    justify-content: space-between;
    
  }
  &.global-settings{
    width: 32%;
    justify-content: space-between;
    gap: 2px;
  }
  &.group-edit-form{
    flex-direction: row;
    width: 100%;
    & .MuiFormControl-root{
      width: 50%;
    }
  }
  &.group-edit-form-checkbox{
    width: 100%;
    .group-switches{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    > div {
      width: 25%;
    }
  }
    
  }
  &.group-switches{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    > div {
      width: 20%;
    }
  }
`;

export const ZipCode = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  & .MuiFormControl-root.MuiTextField-root {
    width: 50%;
    &.owner-id {
      width: 70%;
    }
    &.version-number {
      width: 30%;
    }
  }
`;
export const CompnayLogo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
  > img {
    border-radius: 6px;
  }
`;
export const FormBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  & .MuiButtonBase-root{
    width: 170px;
    &.global-settings-save-button{
      background-color: ${({ theme }) => theme.colors.green};
    }
    &.tajeer-portal-details-save-button{
      background-color: ${({ theme }) => theme.colors.darkblue2};
    }
    &.national-address-save-button{
      background-color: ${({ theme }) => theme.colors.lightblue1};
    }
    &.custom-settings-save-button{
      background-color: ${({ theme }) => theme.colors.headersideBarBgColor};
    }
    &.nodhom-save-button{
      background-color: ${({ theme }) => theme.colors.lightBlue1};
    }
  }
`;
// Nodhom component Style


export const CardContainer = styled.div`
 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div<{ bgColor?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  gap: 15px;
  background-color: ${({ bgColor }) => bgColor};
  >img{
    border-radius: 6px;
  }
`;
export const Text = styled.div`
color: #fff;
  > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
