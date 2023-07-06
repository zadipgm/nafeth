import * as React from "react";
import { Item, RadioButton, RadioButtonLabel, Wrapper } from "./style";
interface IPermission {
  label: string;
  value: string;
}
interface IProps {
  permissions: IPermission[];
  getvalue: (value: string) => void;
  // value: string;
}
const CustomRadioButton = ({ permissions, getvalue }: IProps) => {
  const [select, setSelect] = React.useState("0");
  const handleSelectChange = (value: string) => {
    setSelect(value);
    getvalue(value);
    console.log("setting", value);
  };
  return (
    <Wrapper>
      {permissions.map((item) => {
        return (
          <Item
            className={select === item.value ? "active" : ""}
            bgcolor={
              item.value === "0"
                ? "#d32f2f"
                : item.value === "1"
                ? "#17C964"
                : item.value === "2"
                ? "#0072F5"
                : item.value === "3"
                ? "#F5A524"
                : item.value === "4"
                ? "#7828C8"
                : "#d32f2f"
            }
          >
            <RadioButton
              bgcolor={
                item.value === "0"
                  ? "#d32f2f"
                  : item.value === "1"
                  ? "#17C964"
                  : item.value === "2"
                  ? "#0072F5"
                  : item.value === "3"
                  ? "#F5A524"
                  : item.value === "4"
                  ? "#7828C8"
                  : "#d32f2f"
              }
              label={item.label}
              type="radio"
              value={select}
              checked={select === item.value}
              onChange={() => handleSelectChange(item.value)}
            />
          </Item>
        );
      })}
    </Wrapper>
  );
};
export default CustomRadioButton;
