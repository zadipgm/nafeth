import * as React from "react";
import { Container, Label, Select } from "./style";
interface IProps {
  label: string;
  required?: boolean;
  onChange?: (event: any) => void;
  classname?: string;
  value?: string | number;
  name?: string;
  defaultValue?: string | number;
  children?: React.ReactElement;
  disabled?: boolean;
}
const SelectField = ({
  label,
  required,
  onChange,
  classname,
  value,
  name,
  children,
  defaultValue,
  disabled = false,
}: IProps) => {
  return (
    <Container className={classname}>
      <Label htmlFor={label}>{label}</Label>
      <Select
        name={name}
        disabled={disabled}
        onChange={onChange}
        required
        value={value}
        defaultValue={defaultValue}
      >
        {children}
      </Select>
    </Container>
  );
};
export default SelectField;
