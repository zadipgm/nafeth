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
import { useTheme } from "styled-components";
import SettingsSvg from "@/public/icons/settings";
const ProfileComponent = () => {
  const { colors } = useTheme();
  return (
    <ProfileContainer>
      <SettingIconWrapper>
        <SettingIcon>
          <SettingsSvg fill={colors.nafethBlue} />
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
