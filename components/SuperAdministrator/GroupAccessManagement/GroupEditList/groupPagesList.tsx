import * as React from "react";
import {
  IconWrapper,
  ModuleContainer,
  ModuleName,
  ModuleNameWrapper,
  ModulePages,
  ModulePermission,
  ModuleSubPagename,
  ModuleSubpagesNameWrapper,
  ModuleWrapper,
} from "../style";
import RadioButttons from "@/reuseableComponents/RadioButton";
import { access, accessModule } from "@/global/fakeData";
import { useTheme } from "styled-components";
import IconComponent from "@/reuseableComponents/IconComponent";
import { GroupButtons } from "../../compnaySettings/style";
import { Button } from "@mui/material";
import CustomRadioButton from "@/reuseableComponents/customRadioButton";
interface IPermission {
  label: string;
  value: string;
}
interface ISubpage {
  name: string;
  permissions: IPermission[];
}
interface IProps {
  title: string;
  subpages: ISubpage[];
  icon: string;
}
const GroupPagesList = ({ title, subpages, icon }: IProps) => {
  const { colors }: any = useTheme();
  const [selectedValue, setSelectedValue] = React.useState("0");
  const [selectedPageValue, setSelectedPageValue] = React.useState("0");
  const handleChange = (value: string) => {
    setSelectedValue(value);
  };
  const handleChangePage = (value: string) => {
    setSelectedPageValue(value);
  };
  return (
    <>
      <ModuleContainer>
        <ModulePages>
          <ModuleWrapper>
            <ModuleNameWrapper>
              <IconWrapper>
                <IconComponent
                  icon={icon}
                  fill={colors.lightBlue}
                  width={"25px"}
                  height={"25px"}
                />
              </IconWrapper>
              <ModuleName>{title}</ModuleName>
            </ModuleNameWrapper>
          </ModuleWrapper>
          <ModulePermission>
            <CustomRadioButton
              permissions={accessModule}
              getvalue={(value) => handleChange(value)}
            />
          </ModulePermission>
        </ModulePages>
        {selectedValue === "1" && (
          <ModuleSubpagesNameWrapper>
            {subpages.map((item, index) => {
              return (
                <>
                  <ModuleSubPagename>{item.name}</ModuleSubPagename>
                  <CustomRadioButton
                    permissions={item.permissions}
                    getvalue={(value) => handleChangePage(value)}
                  />
                </>
              );
            })}
          </ModuleSubpagesNameWrapper>
        )}
      </ModuleContainer>
    </>
  );
};
export default GroupPagesList;
