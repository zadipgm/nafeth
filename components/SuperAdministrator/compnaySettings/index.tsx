import * as React from "react";
import {
  CompnayLogo,
  Container,
  FormBox,
  FormBoxWrapper,
  FormContainer,
  FormWrapper,
  GroupButtons,
  GsettingsTitle,
  ZipCode,
} from "./style";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";

import Nodhom from "./nodhom";
import GlobalSettings from "./globalSettings";
import TajeerPortal from "./tajeerPortal";
import NationalAddress from "./nationalAddress";
import CustomSettings from "./customSettings";
import { useTheme } from "styled-components";
import { isTheme } from "@/_helpers/getTheme";
import { Title } from "../BranchManagement/style";

const CompnaySettings = () => {
  const { isDark }: any = useTheme();
  return (
    <Container>
      <GlobalSettings />
      <CustomSettings />
      <TajeerPortal />
      <NationalAddress />

      <Nodhom />
    </Container>
  );
};
export default CompnaySettings;
