import * as React from "react";
import { Title } from "../../BranchManagement/style";
import { useTheme } from "styled-components";
import { Container, PasswordWrapper } from "../style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "../../compnaySettings/style";
import { Box, Button } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { language } from "@/global/fakeData";
import { useRouter } from "next/router";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { createPost } from "@/api/postApis/createBranch";
import Swal from "sweetalert2";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { EyesWrapper } from "@/components/LoginScreen/styled.components";
import {
  ILookupBaseBranch,
  ILookupGroup,
  ILookupManager,
  IUserList,
} from "@/models/userModel";
import { Update } from "@/api/putApis/update";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
interface IEdit {
  result: IUserList[];
  manager: ILookupManager;
  baseBranch: ILookupBaseBranch;
  group: ILookupGroup;
}
const EditUser = ({ result, manager, baseBranch, group }: IEdit) => {
  let obj = {
    id: result[0].id,
    username: result[0].username,
    password: result[0].password,
    fullname_en: result[0].fullname_en,
    fullname_ar: result[0].fullname_ar,
    idNumber: result[0].idNumber,
    group: result[0].group.id,
    manager: result[0].manager.id,
    phone: result[0].phone,
    email: result[0].email,
    designation: result[0].designation,
    baseBranch: result[0].baseBranch.id,
    customPrice: result[0].customPrice,
    active: result[0].active,
    language: result[0].language,
  };
  const [data, setData] = React.useState(obj);
  const [confirm_password, setConfirm_password] = React.useState(
    result[0].password
  );
  const { isLTR, colors } = useTheme();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const router = useRouter();
  const handleChangeStatus = (e: { target: { name: any; checked: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked ? "Y" : "N",
    });
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleConfirmPassword = (e: { target: { value: any } }) => {
    setConfirm_password(e.target.value);
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let body = {};
    if (data.password === confirm_password) {
      let userName = getName() as string;
      let userPassword = getPassword() as string;
      let company = getCompany() as string;
      let url = `settings/Users/${data.id}`;

      await Update(userName, userPassword, url, company, data).then(
        (res: any) => {
          if (res.data.message === "Success") {
            Swal.fire("Thank you!", "User has been updated!.", "success");
            router.push("/Users");
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password did not match! Please try again.",
      });
    }
  };
  return (
    <Container>
      <Title color={colors.sideBarBgColor}>
        <h2>Edit User</h2>
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
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputField
                label="User Name"
                placeholder="User Name"
                type="text"
                name={"username"}
                defaultValue={data.username}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Full Name in English"
                placeholder="Full Name in English"
                type="text"
                name={"fullname_en"}
                defaultValue={data.fullname_en}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Base Branch"
                defaultValue={data.baseBranch}
                name="baseBranch"
                onChange={handleChange}
              >
                <>
                  {baseBranch.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {isLTR ? option.name_en : option.name_ar}
                    </option>
                  ))}
                </>
              </SelectField>
              <InputField
                label="Phone"
                placeholder="966581955852"
                type="text"
                name={"phone"}
                defaultValue={data.phone}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Maximum discount on contracts"
                placeholder="0"
                type="text"
                name={"customPrice"}
                defaultValue={data.customPrice}
                onChange={handleChange}
                required={true}
              />

              {/* <PasswordWrapper> */}
              <InputField
                label="Password"
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
                name={"password"}
                defaultValue={data.password}
                onChange={handleChange}
                required={true}
              />
              {/* <EyesWrapper onClick={togglePassword}>
                  {passwordShown ? (
                    <VisibilityOutlinedIcon color={"primary"} />
                  ) : (
                    <VisibilityOffOutlinedIcon color={"primary"} />
                  )}
                </EyesWrapper>
              </PasswordWrapper> */}
              <InputField
                label="الاسم الكامل بالعربي"
                placeholder="الاسم الكامل بالعربي"
                type="text"
                name={"fullname_ar"}
                defaultValue={data.fullname_ar}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Group"
                name="groupId"
                defaultValue={data.group}
                onChange={handleChange}
              >
                <>
                  {group.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {isLTR ? option.name_en : option.name_ar}
                    </option>
                  ))}
                </>
              </SelectField>
              <InputField
                label="Email"
                placeholder="xyz@gmail.com"
                type="text"
                name={"email"}
                defaultValue={data.email}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="language"
                defaultValue={data.language}
                name="language"
                onChange={handleChange}
              >
                <>
                  {language.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </>
              </SelectField>

              {/* <PasswordWrapper> */}
              <InputField
                label="Confirm Password"
                placeholder="confirm password"
                type={passwordShown ? "text" : "password"}
                name={"confirmPassword"}
                defaultValue={confirm_password}
                onChange={handleConfirmPassword}
                required={true}
              />
              {/* <EyesWrapper onClick={togglePassword}>
                  {passwordShown ? (
                    <VisibilityOutlinedIcon color={"primary"} />
                  ) : (
                    <VisibilityOffOutlinedIcon color={"primary"} />
                  )}
                </EyesWrapper>
              </PasswordWrapper> */}
              <InputField
                label="ID Number"
                placeholder="ID Number"
                type="text"
                name={"idNumber"}
                defaultValue={data.idNumber}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Manager"
                defaultValue={data.manager}
                name="managerId"
                onChange={handleChange}
              >
                <>
                  {manager.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {isLTR ? option.name_en : option.name_ar}
                    </option>
                  ))}
                </>
              </SelectField>
              <InputField
                label="designation"
                placeholder="Branch supervisor"
                type="text"
                name={"designation"}
                defaultValue={data.designation}
                onChange={handleChange}
                required={true}
              />
              <SwitchesComponent
                title="Active/Inactive"
                info={""}
                onchange={(e) => handleChangeStatus(e)}
                name={"active"}
                classname={"user-switch"}
                value={data.active}
                defaultChecked={data.active === "Y" ? true : false}
              />
            </FormBox>
          </FormBoxWrapper>

          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="add-user-save-button"
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
    </Container>
  );
};
export default EditUser;
