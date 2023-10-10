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
  const { colors, isLTR } = useTheme();
  return (
    <ProfileContainer>
      <SettingIconWrapper>
        <SettingIcon>
          <SettingsSvg fill={colors.sideBarBgColor} />
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
      <Name>{isLTR ? "Muhammad" : "محمد"}</Name>
      <Company>
        {isLTR ? "Kaleen Car Rental Ltd" : "كالين تأجير السيارات المحدودة"}
      </Company>
    </ProfileContainer>
  );
};
export default ProfileComponent;
