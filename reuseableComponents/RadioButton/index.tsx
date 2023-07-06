import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioButton, Title } from "./style";
interface IData {
  value: string;
  label: string;
}
interface IProps {
  title?: string;
  value: string;
  onchage: (e: any) => void;
  data: IData[];
  color?: string;
}
const RadioButttons = ({ title, value, onchage, data, color }: IProps) => {
  return (
    <div>
      <RadioButton>
        <Title id="demo-controlled-radio-buttons-group">{title}</Title>

        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={onchage}
        >
          {data.map((val) => {
            return (
              <FormControlLabel
                value={val.value}
                control={
                  <Radio
                    color={color}
                    value={val.value}
                    checked={val.value === value}
                  />
                }
                label={val.label}
                checked={val.value === value}
              />
            );
          })}
        </RadioGroup>
      </RadioButton>
    </div>
  );
};
export default RadioButttons;
