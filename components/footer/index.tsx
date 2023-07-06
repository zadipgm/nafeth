import * as React from "react";
import { useTheme } from "styled-components";
import { Container } from "./styled.components";
const Footer = () => {
  const { translations }: any = useTheme();
  return <Container>{translations?.copyRights}</Container>;
};
export default Footer;
