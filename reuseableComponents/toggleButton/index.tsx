import * as React from "react";
import Switch from "@mui/material/Switch";
import { Content, Info, Title, Wrapper } from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
interface IProps {
  title: string;
  info?: string;
  value?: string;
  onchange?: (event: any) => void;
  checked?: boolean;
  required?: boolean;
  titlewidth?: string;
  contentwidth?: string;
  name?: string;
  defaultChecked?: boolean;
  classname?: string;
}
export default function SwitchesComponent({
  title,
  info,
  value,
  onchange,
  required = false,
  titlewidth = "40%",
  contentwidth = "60%",
  name,
  defaultChecked = false,
  classname,
}: IProps) {
  const { colors } = useTheme();
  const [checked, setIscheked] = React.useState(defaultChecked);
  const handleChecked = (e: any) => {
    setIscheked(!checked);
    onchange?.(e);
  };
  return (
    <Wrapper className={classname}>
      <Title titlewidth={titlewidth}>{title}</Title>
      <Content contentwidth={contentwidth}>
        <Switch
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChecked}
          title={title}
          required={required}
          value={value}
          name={name}
        />
        <Info color={isTheme().color}>{info}</Info>
      </Content>
    </Wrapper>
  );
}
