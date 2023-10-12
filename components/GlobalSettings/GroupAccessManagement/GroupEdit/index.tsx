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
import { useRouter } from "next/router";
import { encode as base64_encode } from "base-64";
import axios from "axios";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import Swal from "sweetalert2";
import { Title } from "../../BranchManagement/style";
import InputField from "@/reuseableComponents/customInputField/input";
interface IProps {
  title: string;
  result: any[];
}
export default function GroupEditForm({ title, result }: IProps) {
  const { colors } = useTheme();
  const router = useRouter();
  let getMenu = result[0].menu;
  let getFlatArrayFromMenu = getMenu.map((i: any) => i.menu);
  let getMenuInOneArray = getFlatArrayFromMenu.flatMap((menu: any) => menu);
  let addGroupObj = {
    name_en: result[0].name_en,
    name_ar: result[0].name_ar,
    description_en: result[0].description_en,
    description_ar: result[0].description_ar,
    active: result[0].active,
    isDateEnable: result[0].isDateEnable,
    isBlockEnable: result[0].isBlockEnable,
    isTajeerAvailable: result[0].isTajeerAvailable,
    isDeleteAvailable: result[0].isDeleteAvailable,
    isReSendNozumAvailable: result[0].isReSendNozumAvailable,
    isQuickAddCustomer: result[0].isQuickAddCustomer,
    isDiscountReceipt: result[0].isDiscountReceipt,
    isDeleteContract: result[0].isDeleteContract,
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
      .put(
        `https://appapi.nafeth.sa/api/settings/groups/${result[0].groupId}`,
        body,
        {
          headers: headers,
        }
      )
      .then((response) => {
        response;
        Swal.fire("Thank you!", "Group has been update.", "success");
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
                <InputField
                  label="English Name"
                  placeholder="zeshan"
                  onChange={hanldeFormData}
                  name="name_en"
                  classname="group-edit-form"
                  defaultValue={result[0].name_en}
                  value={formData.name_en}
                />
                <InputField
                  label="اسم عربي"
                  placeholder="زيشان"
                  onChange={hanldeFormData}
                  name="name_ar"
                  classname="group-edit-form"
                  value={formData.name_ar}
                  defaultValue={result[0].name_ar}
                />

                <InputField
                  label="English Description"
                  placeholder="Please enter here...."
                  onChange={hanldeFormData}
                  name="description_en"
                  classname="group-edit-form-description"
                  defaultValue={result[0].description_en}
                />
                <InputField
                  label="الوصف العربي"
                  placeholder=" الرجاء الدخول هنا....."
                  onChange={hanldeFormData}
                  name="description_ar"
                  classname="group-edit-form-description"
                  type="textarea"
                  defaultValue={result[0].description_ar}
                />

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
                            defaultChecked={
                              result[0][item.name] === "Y" ? true : false
                            }
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
            sideBarMenuData={result[0].menu}
            active_link={false}
            showcheckboxes={true}
            access_group_class={"group_access"}
            onchange={handleMenu}
          />
          <GroupButtons>
            <Button variant="contained" onClick={(e) => submitHandler(e)}>
              Update
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
