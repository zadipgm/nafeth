import * as React from "react";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import InputComponent from "@/reuseableComponents/InputField";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Container, SwitchContainer, SwitchWrapper } from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import TabsComponent from "@/reuseableComponents/Tabs";
import { switch_data } from "@/global/fakeData";
import SideBarAccordions from "@/components/SideNavBar/sidebaraccordion";
import { IModuleTypes } from "@/models/module";
import { useRouter } from "next/router";
import { encode as base64_encode } from "base-64";
import axios from "axios";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import Swal from "sweetalert2";
import { Title } from "../../BranchManagement/style";
interface IProps {
  title: string;
  data: IModuleTypes[];
}
export default function GroupAddForm({ title, data }: IProps) {
  const { colors } = useTheme();
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
      // const uniqObjs: any = [];
      // const dupeObjs: any = [];
      // formData.menu.forEach((obj) =>
      //   [uniqObjs, dupeObjs][
      //     +(
      //       formData.menu.map((obj) => obj.id).filter((id) => id === obj.id)
      //         .length > 1
      //     )
      //   ].push(obj)
      // );
      // console.log("uniqObjs:", uniqObjs);
      // console.log("dupeObjs:", dupeObjs);
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
        <Title color={colors.nafethBlue}>
          <h2>{title}</h2>
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
            noValidate
            autoComplete="off"
          >
            <FormBoxWrapper>
              <FormBox className="group-edit-form" color={isTheme().color}>
                <InputComponent
                  label="English Name"
                  placeholder="zeshan"
                  onChange={hanldeFormData}
                  name="name_en"
                />
                <InputComponent
                  label="اسم عربي"
                  placeholder="زيشان"
                  onChange={hanldeFormData}
                  name="name_ar"
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper className="tabs">
              <FormBox
                className="group-edit-form-description"
                color={isTheme().color}
              >
                <InputComponent
                  label="English Description"
                  placeholder="Please enter here...."
                  onChange={hanldeFormData}
                  name="description_en"
                  multiline
                  rows={4}
                />
                <InputComponent
                  label="الوصف العربي"
                  placeholder=" الرجاء الدخول هنا....."
                  onChange={hanldeFormData}
                  name="description_ar"
                  multiline
                  rows={4}
                  type="textarea"
                />
              </FormBox>
            </FormBoxWrapper>
            <FormBoxWrapper>
              <FormBox
                className="group-edit-form-checkbox"
                color={isTheme().color}
              >
                <SwitchContainer>
                  <SwitchWrapper>
                    {switch_data.map((item, key) => {
                      return (
                        <div key={key}>
                          <SwitchesComponent
                            title={item.title}
                            info={item.info}
                            onchange={HanldeSwtiches}
                            name={item.name}
                          />
                        </div>
                      );
                    })}
                  </SwitchWrapper>
                </SwitchContainer>
              </FormBox>
            </FormBoxWrapper>
          </Box>
          <SideBarAccordions
            sideBarMenuData={data}
            active_link={false}
            showcheckboxes={true}
            access_group_class={"group_access"}
            onchange={handleMenu}
          />
          <GroupButtons>
            <Button variant="contained" onClick={(e) => submitHandler(e)}>
              Save
            </Button>
            <Button
              variant="contained"
              onClick={() => router.back()}
              color="error"
            >
              Cancel
            </Button>
          </GroupButtons>
        </FormWrapper>
      </Container>
    </>
  );
}
