import * as React from "react";
import TextField from "@mui/material/TextField";
interface IProps {
  label?: string;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  type?: string;
  helperText?: string;
  classname?: string;
}
const InputComponent = ({
  label,
  placeholder,
  value,
  disabled,
  type,
  helperText,
  classname,
}: IProps) => {
  return (
    <>
      <TextField
        className={classname}
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        type={type}
        helperText={helperText}
      />
    </>
  );
};
export default InputComponent;
