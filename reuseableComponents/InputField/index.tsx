import * as React from "react";
import TextField, { TextFieldVariants } from "@mui/material/TextField";
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
  id?: string;
  variant?: TextFieldVariants;
  mindate?: string;
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
  mindate,
  name = "text",
  onChange,
  onBlur,
  required,
  error = false,
  defaultValue,
  id,
  variant = "outlined",
}: IProps) => {
  return (
    <Container className={classname}>
      <TextField
        className={classname}
        id={id}
        label={label}
        variant={variant}
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
            min: mindate,
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
