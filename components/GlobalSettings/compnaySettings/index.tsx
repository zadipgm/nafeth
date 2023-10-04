import * as React from "react";
import { Container } from "./style";

import Nodhom from "./nodhom";
import GlobalSettings from "./globalSettings";
import TajeerPortal from "./tajeerPortal";
import NationalAddress from "./nationalAddress";
import CustomSettings from "./customSettings";
import { useTheme } from "styled-components";
import { IGlobalSettings } from "@/models/globalsettings";
interface IProps {
  result: IGlobalSettings;
}
const CompnaySettings = ({ result }: IProps) => {
  const { isDark }: any = useTheme();
  return (
    <Container>
      <GlobalSettings global_settinigs={result.result[0].companyGlobal} />
      <CustomSettings custom_settings={result.result[0].companyCustom} />
      <TajeerPortal tajeer_portal={result.result[0].companyTajeer} />
      <NationalAddress national_address={result.result[0].companyAddress} />
      <Nodhom nozhum={result.result[0].companyNozhum} />
    </Container>
  );
};
export default CompnaySettings;
