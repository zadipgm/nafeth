import * as React from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
interface IProps {
  title: string;
}
export default function SwitchesComponent({ title }: IProps) {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <FormControlLabel
        label={title}
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            title={title}
            required={true}
          />
        }
      />
    </>
  );
}
