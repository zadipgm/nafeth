import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { isTheme } from "@/_helpers/getTheme";
import { createPost } from "@/api/postApis/createBranch";
import { Update } from "@/api/putApis/update";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { ILoyality } from "@/models/loyality";
import InputField from "@/reuseableComponents/customInputField/input";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
import { Container } from "../../style";
interface IProps {
  list: ILoyality;
}
const EditLoyalityList = ({ list }: IProps) => {
  const { colors, translations } = useTheme();
  const router = useRouter();
  let obj = list.result[0];
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
    let url = `customers/Loyality/${data.id}`;
    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Loyality List has been Updated!.",
            "success"
          );
          router.push("/loyalty");
        } else {
          console.log(res);
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
        <h2>{translations?.editList as string}</h2>
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
                placeholder="Package Name"
                type="text"
                defaultValue={data.packageName}
                name={"packageName"}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.rentalIncome as string}
                placeholder="10"
                type="text"
                defaultValue={data.rentalIncome}
                name={"rentalIncome"}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.extraKM as string}
                placeholder="10"
                type="text"
                defaultValue={data.extraKM}
                name={"extraKM"}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.extraHour as string}
                placeholder="2"
                type="text"
                defaultValue={data.extraHours}
                name={"extraHours"}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.discount as string}
                placeholder="2"
                type="text"
                defaultValue={data.discount}
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
                defaultChecked={data.active === "Y" ? true : false}
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
              {translations?.update as string}
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
export default EditLoyalityList;
