import * as React from "react";
import TextField from "@mui/material/TextField";
interface IProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  disabled?: boolean;
  type?: string;
  helperText?: string;
  classname?: string;
  multiline?: boolean;
  rows?: number;
  name?: string;
  onChange?: (e: any) => void;
  required?: boolean;
  error?: boolean;
}
const InputComponent = ({
  label,
  placeholder,
  value,
  disabled,
  type,
  helperText,
  classname,
  multiline,
  rows,
  name = "text",
  onChange,
  required,
  error = false,
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
        multiline={multiline}
        rows={rows}
        onChange={onChange}
        name={name}
        required={required}
        error={error}
      />
    </>
  );
};
export default InputComponent;
