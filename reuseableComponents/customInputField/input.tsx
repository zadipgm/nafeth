import * as React from "react";
import { Container, Input, Label } from "./style";
interface IProps {
  label: string;
  required?: boolean;
  disabled?: boolean;
  onChange?: (event: any) => void;
  type?: string;
  classname?: string;
  value?: string | number;
  placeholder?: string;
  name?: string;
  defaultValue?: string | number;
  onBlur?: (e: any) => void;
  maxLength?: number;
}
const InputField = ({
  label,
  type,
  required,
  disabled,
  onChange,
  classname,
  placeholder,
  value,
  name,
  onBlur,
  defaultValue,
  maxLength,
}: IProps) => {
  return (
    <Container className={classname}>
      <Label htmlFor={label}>{label}</Label>
      <Input
        type={type}
        onChange={onChange}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        name={name}
        defaultValue={defaultValue}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </Container>
  );
};
export default InputField;
