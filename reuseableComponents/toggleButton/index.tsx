import * as React from "react";
import Switch from "@mui/material/Switch";
import { Content, Info, Title, Wrapper } from "./style";
interface IProps {
  title: string;
  info?: string;
}
export default function SwitchesComponent({ title, info }: IProps) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Wrapper>
      <Title>{title}</Title>

      <Content>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          title={title}
          required={true}
        />
        <Info>{info}</Info>
      </Content>
    </Wrapper>
  );
}
