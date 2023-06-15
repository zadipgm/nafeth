import SettingsSvg from "@/public/icons/settingSvg";
import * as React from "react";
import {
  Company,
  Name,
  ProfileContainer,
  ProfileImage,
  SettingIcon,
  SettingIconWrapper,
} from "./styled.components";
import Image from "next/image";
const ProfileComponent = () => {
  return (
    <ProfileContainer>
      <SettingIconWrapper>
        <SettingIcon>
          <SettingsSvg fill="transparent" />
        </SettingIcon>
      </SettingIconWrapper>
      <ProfileImage>
        <Image
          src="/images/avatar.png"
          alt="Profile"
          width={100}
          height={100}
        />
      </ProfileImage>
      <Name>Muhammad</Name>
      <Company>Kaleen Car Rental Ltd</Company>
    </ProfileContainer>
  );
};
export default ProfileComponent;
