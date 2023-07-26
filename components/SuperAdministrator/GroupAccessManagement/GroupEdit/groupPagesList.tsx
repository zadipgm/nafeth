import * as React from "react";
import {
  IconWrapper,
  ModuleName,
  ModuleNameWrapper,
  ModulePages,
  ModulePermission,
  ModuleSubPagename,
  ModuleSubpagesNameWrapper,
  ModuleWrapper,
} from "../style";
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
  page_name_en: string;
  page_name_ar: string;
  permissions: IPermission[];
}
interface IProps {
  title: string;
  subpages: ISubpage[];
  icon: string;
}
const GroupPagesList = ({ title, subpages, icon }: IProps) => {
  const { colors, isDark } = useTheme();
  console.log(isDark);
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
                <ModuleSubPagename>{item.page_name_en}</ModuleSubPagename>
                <CustomRadioButton
                  permissions={item.permissions}
                  getvalue={(value) => handleChangePage(value)}
                />
              </>
            );
          })}
        </ModuleSubpagesNameWrapper>
      )}
    </>
  );
};
export default GroupPagesList;
