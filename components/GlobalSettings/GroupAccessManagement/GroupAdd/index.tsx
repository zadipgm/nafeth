import * as React from "react";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Container, SwitchContainer, SwitchWrapper } from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import { switch_data } from "@/global/fakeData";
import SideBarAccordions from "@/components/SideNavBar/sidebaraccordion";
import { IModuleTypes } from "@/models/module";
import { useRouter } from "next/router";
import { encode as base64_encode } from "base-64";
import axios from "axios";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import Swal from "sweetalert2";
import { Title } from "../../BranchManagement/style";
import InputField from "@/reuseableComponents/customInputField/input";
interface IProps {
  title: string;
  data: IModuleTypes[];
}
export default function GroupAddForm({ title, data }: IProps) {
  const { colors, translations, locale } = useTheme();
  const router = useRouter();
  let getMenu = data.map((item) => item.menu);
  let getMenuInOneArray = getMenu.flatMap((menu) => menu);
  let addGroupObj = {
    name_en: "",
    name_ar: "",
    description_en: "",
    description_ar: "",
    active: "Y",
    isDateEnable: "N",
    isBlockEnable: "N",
    isTajeerAvailable: "N",
    isDeleteAvailable: "N",
    isReSendNozumAvailable: "N",
    isQuickAddCustomer: "N",
    isDiscountReceipt: "N",
    isDeleteContract: "N",
    role: "User",
    menu: getMenuInOneArray,
  };
  const [formData, setFormData] = React.useState(addGroupObj);
  React.useEffect(() => {}, [formData]);
  const HanldeSwtiches = (e: { target: { name: any; checked: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
    });
  };
  const hanldeFormData = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleMenu = React.useCallback(
    (checkboxdata: any) => {
      setFormData({
        ...formData,
        menu: [...formData.menu, checkboxdata],
      });
    },
    [formData]
  );
  const submitHandler = (e: any) => {
    e.preventDefault();
    let auth = base64_encode(`${getName()}:${getPassword()}`);
    let body = formData;
    const headers = {
      Authorization: `Basic ${auth}`,
      company: getCompany(),
    };
    axios
      .post("https://appapi.nafeth.sa/api/settings/groups", body, {
        headers: headers,
      })
      .then((response) => {
        response;
        Swal.fire("Thank you!", "Group has been added.", "success");
        router.push("/groups");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(error);
      });
  };
  return (
    <>
      <Container color={isTheme().color} bcolor={isTheme().bcolor}>
        <Title color={colors.sideBarBgColor}>
          <h2>{translations?.addGroup}</h2>
        </Title>
        <FormWrapper
          className="group-edit-list-form"
          color={isTheme().color}
          bcolor={isTheme().bcolor}
        >
          <Box
            component="form"
            sx={{
              width: "100%",
              maxWidth: "100%",
            }}
            noValidate={false}
            autoComplete="on"
            onSubmit={(e) => submitHandler(e)}
          >
            <FormBoxWrapper>
              <FormBox className="group-edit-form" color={isTheme().color}>
                <InputField
                  label={translations?.fullName_en as string}
                  placeholder="zeshan"
                  onChange={hanldeFormData}
                  name="name_en"
                  classname="group-edit-form"
                />
                <InputField
                  label={translations?.fullName_en as string}
                  placeholder="زيشان"
                  onChange={hanldeFormData}
                  name="name_ar"
                  classname="group-edit-form"
                />
              </FormBox>

              <FormBox
                className="group-edit-form-description"
                color={isTheme().color}
              >
                <InputField
                  label={translations?.englishDescription as string}
                  placeholder="Please enter here...."
                  onChange={hanldeFormData}
                  name="description_en"
                  classname="group-edit-form-description"
                />
                <InputField
                  label="الوصف العربي"
                  placeholder=" الرجاء الدخول هنا....."
                  onChange={hanldeFormData}
                  name="description_ar"
                  classname="group-edit-form-description"
                  type="textarea"
                />

                <SwitchContainer>
                  <SwitchWrapper>
                    {switch_data.map((item, key) => {
                      return (
                        <div key={key}>
                          <SwitchesComponent
                            title={item[`title_${locale}`].trim()}
                            info={item[`info_${locale}`].trim()}
                            onchange={HanldeSwtiches}
                            name={item[`name_${locale}`].trim()}
                          />
                        </div>
                      );
                    })}
                  </SwitchWrapper>
                </SwitchContainer>
              </FormBox>
            </FormBoxWrapper>

            <SideBarAccordions
              sideBarMenuData={data}
              active_link={false}
              showcheckboxes={true}
              access_group_class={"group_access"}
              onchange={handleMenu}
            />
            <GroupButtons>
              <Button variant="contained" type="submit">
                {translations?.save}
              </Button>
              <Button
                variant="contained"
                onClick={() => router.back()}
                color="error"
              >
                {translations?.cancel}
              </Button>
            </GroupButtons>
          </Box>
        </FormWrapper>
      </Container>
    </>
  );
}
