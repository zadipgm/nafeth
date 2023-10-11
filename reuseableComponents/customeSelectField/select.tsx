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
}: IProps) => {
  return (
    <Container className={classname}>
      <Label htmlFor={label}>{label}</Label>
      <Select
        name={name}
        onChange={onChange}
        required={required}
        value={value}
        defaultValue={defaultValue}
      >
        {children}
      </Select>
    </Container>
  );
};
export default SelectField;
