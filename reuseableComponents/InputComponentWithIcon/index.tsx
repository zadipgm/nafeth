import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
interface IProps {
  classname?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: (e: any) => void;
}
const InputComponentWithIcon = ({
  classname,
  type,
  required,
  placeholder,
  onChange,
}: IProps) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        id="input-with-icon-textfield"
        label={placeholder}
        className={classname}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        type={type}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Box>
  );
};
export default InputComponentWithIcon;
