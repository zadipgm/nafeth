import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface option {
  value: string;
  label: string;
}
interface IProps {
  label: string;
  value: string;
  handlechange: (event: any) => void;
  option: option[];
}
const SelectComponent = ({ value, handlechange, label, option }: IProps) => {
  return (
    <div>
      <FormControl required sx={{ minWidth: 120, width: "100%" }}>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={value}
          label="Age"
          onChange={handlechange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {option.map((item) => {
            return <MenuItem value={item.value}>{item.label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
  );
};
export default SelectComponent;
