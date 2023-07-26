import * as React from "react";
import Switch from "@mui/material/Switch";
import { Content, Info, Title, Wrapper } from "./style";
interface IProps {
  title: string;
  info?: string;
  value?: string;
  onchange?: (event: any) => void;
  checked?: boolean;
  required?: boolean;
  titlewidth?: string;
  contentwidth?: string;
}
export default function SwitchesComponent({
  title,
  info,
  value,
  onchange,
  checked = false,
  required = false,
  titlewidth = "40%",
  contentwidth = "60%",
}: IProps) {
  return (
    <Wrapper>
      <Title titlewidth={titlewidth}>{title}</Title>
      <Content contentwidth={contentwidth}>
        <Switch
          checked={checked}
          onChange={onchange}
          inputProps={{ "aria-label": "controlled" }}
          title={title}
          required={required}
          value={value}
        />
        <Info>{info}</Info>
      </Content>
    </Wrapper>
  );
}
