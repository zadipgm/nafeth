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
import { IGlobalSettings } from "@/models/globalsettings";
import { CityProvider } from "@/context/cityContext";
interface IProps {
  result: IGlobalSettings;
}
const CompnaySettings = ({ result }: IProps) => {
  console.log("here is result", result);
  const { isDark }: any = useTheme();
  return (
    <CityProvider>
      <Container>
        <GlobalSettings global_settinigs={result.result[0].companyGlobal} />
        <CustomSettings custom_settings={result.result[0].companyCustom} />
        <TajeerPortal tajeer_portal={result.result[0].companyTajeer} />
        <NationalAddress national_address={result.result[0].companyAddress} />
        <Nodhom nozhum={result.result[0].companyNozhum} />
      </Container>
    </CityProvider>
  );
};
export default CompnaySettings;
