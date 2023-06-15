import * as React from "react";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { RadioButton } from "./style";
interface IData {
  value: string;
  label: string;
}
interface IProps {
  title: string;
  value: string;
  onchage: (e: any) => void;
  data: IData[];
}
const RadioButttons = ({ title, value, onchage, data }: IProps) => {
  return (
    <div>
      <RadioButton>
        <FormLabel id="demo-controlled-radio-buttons-group">{title}</FormLabel>
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
                control={<Radio />}
                label={val.label}
              />
            );
          })}
        </RadioGroup>
      </RadioButton>
    </div>
  );
};
export default RadioButttons;
