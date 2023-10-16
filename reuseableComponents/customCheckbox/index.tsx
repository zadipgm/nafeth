import * as React from "react";
import {
  CheckBoxContainer,
  Checkbox,
  CheckboxWrapper,
  SpanText,
} from "./style";
import CreateSvg from "@/public/icons/createSvg";
import ViewSvg from "@/public/icons/viewSvg";
import { useTheme } from "styled-components";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";

interface IProps {
  onchange?: (e: any) => void;
  id: number;
  name_ar?: string;
  name_en?: string;
  get?: number;
  post?: number;
  put?: number;
  del?: number;
  url?: string;
}
const CustomCheckbox = ({
  onchange,
  id,
  name_ar,
  name_en,
  get,
  post,
  put,
  del,
  url,
}: IProps) => {
  const { colors } = useTheme();
  let data = {
    id: id,
    name_en: name_en,
    name_ar: name_ar,
    get: get,
    post: post,
    put: put,
    del: del,
    url: url,
  };
  const [formData, setFormData] = React.useState(data);
  React.useEffect(() => {
    onchange?.({ ...formData });
  }, [formData]);

  const handleChange = React.useCallback(
    (e: any) => {
      let name = e.target.name;
      setFormData({
        ...formData,
        [name]: e.target.checked ? 1 : 0,
      });
    },
    [formData]
  );

  return (
    <CheckBoxContainer>
      <CheckboxWrapper color={colors.purple} hoverColor={"#7828c870"}>
        <Checkbox
          type="checkbox"
          aria-disabled
          onChange={(e) => handleChange(e)}
          name={"get"}
          value={"get"}
          defaultChecked={get === 1 ? true : false}
        />
        <SpanText aria-disabled>{"view"}</SpanText>
        <ViewSvg width="20px" height="20px" fill={colors.purple} />
      </CheckboxWrapper>
      {formData.get === 1 && (
        <>
          <CheckboxWrapper color={colors.green} hoverColor={"#13ae0563"}>
            <Checkbox
              type="checkbox"
              aria-disabled
              onChange={(e) => handleChange(e)}
              name={"post"}
              value={"post"}
              defaultChecked={post === 1 ? true : false}
            />
            <SpanText aria-disabled>{"create"}</SpanText>
            <CreateSvg width="20px" height="20px" fill={colors.green} />
          </CheckboxWrapper>
          <CheckboxWrapper
            color={colors.sideBarBgColor}
            hoverColor={"#1976d282"}
          >
            <Checkbox
              type="checkbox"
              aria-disabled
              onChange={(e) => handleChange(e)}
              name={"put"}
              value={"put"}
              defaultChecked={put === 1 ? true : false}
            />
            <SpanText aria-disabled>{"edit"}</SpanText>
            <EditSvg width="20px" height="20px" fill={colors.sideBarBgColor} />
          </CheckboxWrapper>
          <CheckboxWrapper color={colors.red} hoverColor={"dd37376b"}>
            <Checkbox
              type="checkbox"
              aria-disabled
              onChange={(e) => handleChange(e)}
              name={"del"}
              value={"del"}
              defaultChecked={del === 1 ? true : false}
            />
            <SpanText aria-disabled>{"delete"}</SpanText>
            <DeleteSvg width="20px" height="20px" fill={colors.red} />
          </CheckboxWrapper>
        </>
      )}
    </CheckBoxContainer>
  );
};
export default CustomCheckbox;
