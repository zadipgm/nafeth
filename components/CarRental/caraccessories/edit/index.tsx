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
import { IAccessory } from "@/models/IAccessory";
import { IPrices } from "@/models/pricelist";
import InputComponent from "@/reuseableComponents/InputField";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
interface IProps {
  list: IAccessory;
}
const EditAccessoryList = ({ list }: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState(list.result[0]);

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
    let url = `cars/Accessories/${data.id}`;
    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Accessory List has been Updated!.",
            "success"
          );
          router.push("/caraccessories");
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
    <div>
      <Title color={colors.sideBarBgColor}>
        <h2>Edit List</h2>
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
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="Accessory Name in English"
                placeholder="name in english"
                type="text"
                defaultValue={data.accessories_en}
                name={"accessories_en"}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="description in English"
                placeholder="description"
                type="text"
                defaultValue={data.description_en}
                name={"description_en"}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="Accessory Name in Arabic"
                placeholder="name in arabic"
                type="text"
                defaultValue={data.accessories_ar}
                name={"accessories_ar"}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="description in Arabic"
                placeholder="description"
                type="text"
                defaultValue={data.description_ar}
                name={"description_ar"}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="cost"
                placeholder="21"
                type="text"
                name={"cost"}
                defaultValue={data.cost}
                onChange={handleChange}
                required={true}
              />
              <SwitchesComponent
                title="Active/Inactive"
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
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </div>
  );
};
export default EditAccessoryList;
