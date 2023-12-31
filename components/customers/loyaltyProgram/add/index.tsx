import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { isTheme } from "@/_helpers/getTheme";
import { createPost } from "@/api/postApis/createBranch";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import InputField from "@/reuseableComponents/customInputField/input";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
import { Container } from "../../style";
const AddLoyalityList = () => {
  const { colors, translations } = useTheme();
  const router = useRouter();
  let obj = {
    packageName: "",
    rentalIncome: 0,
    extraKM: 0,
    extraHours: 0,
    discount: 0,
    active: "",
  };
  const [data, setData] = React.useState(obj);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeStatus = (e: { target: { name: any; checked: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = "customers/Loyality";
    await createPost(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Loyality List has been Created!.",
            "success"
          );
          router.push("/loyalty");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      }
    );
  };
  return (
    <Container>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.addNewList as string}</h2>
      </Title>
      <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "100%",
            padding: "15px",
          }}
          noValidate={false}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormBoxWrapper className="price-list">
            <FormBox className="price-list">
              <InputField
                label={translations?.packageName as string}
                placeholder="Loyality Name in english"
                type="text"
                name={"packageName"}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.rentalIncome as string}
                placeholder="10"
                type="text"
                name={"rentalIncome"}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.extraKM as string}
                placeholder="Loyality Name in arabic"
                type="text"
                name={"extraKM"}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.extraHour as string}
                placeholder="10"
                type="text"
                name={"extraHours"}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.discount as string}
                placeholder="name in arabic"
                type="text"
                name={"discount"}
                onChange={handleChange}
                required={true}
              />
              <SwitchesComponent
                title={translations?.activeInactive as string}
                info={""}
                onchange={(e) => handleChangeStatus(e)}
                name={"active"}
                classname={"pricelist-switch"}
                value={data.active}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="pricelist-save-button"
              type="submit"
            >
              {translations?.save as string}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => router.back()}
            >
              {translations?.cancel as string}
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </Container>
  );
};
export default AddLoyalityList;
