import * as React from "react";
import TextField from "@mui/material/TextField";
import { Container } from "./style";
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
  onBlur?: (e: any) => void;
  required?: boolean;
  error?: boolean;
  defaultValue?: string | number;
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
  onBlur,
  required,
  error = false,
  defaultValue,
}: IProps) => {
  return (
    <Container className={classname}>
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
        onBlur={onBlur}
        onChange={onChange}
        name={name}
        InputProps={{
          inputProps: {
            max: 1,
            min: 1,
          },
        }}
        required={required}
        error={error}
        defaultValue={defaultValue}
      />
    </Container>
  );
};
export default InputComponent;
