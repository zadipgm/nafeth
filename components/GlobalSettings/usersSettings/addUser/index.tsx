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
} from "@/models/userModel";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
interface IProps {
  manager: ILookupManager;
  baseBranch: ILookupBaseBranch;
  group: ILookupGroup;
}
const AddUser = ({ manager, group, baseBranch }: IProps) => {
  let obj = {
    username: "",
    password: "",
    fullname_en: "",
    fullname_ar: "",
    idNumber: "",
    groupId: 0,
    managerId: 0,
    phone: 0,
    email: "",
    designation: "",
    baseBranch: 0,
    customPrice: "",
    active: "",
    language: "",
  };
  const [data, setData] = React.useState(obj);
  const [confirm_password, setConfirm_password] = React.useState("");
  const { isLTR, colors } = useTheme();
  const [passwordShown, setPasswordShown] = React.useState(false);
  const router = useRouter();
  const handleChangeStatus = (e: { target: { name: any; checked: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
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
    if (data.password === confirm_password) {
      let userName = getName() as string;
      let userPassword = getPassword() as string;
      let company = getCompany() as string;
      let url = "settings/Users";

      await createPost(userName, userPassword, url, company, data).then(
        (res: any) => {
          if (res.data.message === "Success") {
            Swal.fire("Thank you!", "User has been Created!.", "success");
            router.push("/Users");
          } else {
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
        <h2>Add New User</h2>
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
            <FormBox>
              <InputField
                label="User Name"
                placeholder="User Name"
                type="text"
                name={"username"}
                value={data.username}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Full Name in English"
                placeholder="Full Name in English"
                type="text"
                name={"fullname_en"}
                value={data.fullname_en}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Base Branch"
                defaultValue={data.baseBranch}
                name="baseBranch"
                value={data.baseBranch}
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
                value={data.phone}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label="Maximum discount on contracts"
                placeholder="0"
                type="text"
                name={"customPrice"}
                value={data.customPrice}
                onChange={handleChange}
                required={true}
              />

              {/* <PasswordWrapper> */}
              <InputField
                label="Password"
                placeholder="Password"
                type={passwordShown ? "text" : "password"}
                name={"password"}
                value={data.password}
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
                value={data.fullname_ar}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Group"
                defaultValue={data.groupId}
                name="groupId"
                value={data.groupId}
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
                value={data.email}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="language"
                defaultValue={data.language}
                name="language"
                value={data.language}
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
                value={confirm_password}
                onChange={handleConfirmPassword}
                required={true}
              />
              {/* <EyesWrapper onClick={togglePassword}>
                  {passwordShown ? (
                    <VisibilityOutlinedIcon color={"primary"} />
                  ) : (
                    <VisibilityOffOutlinedIcon color={"primary"} />
                  )}
                </EyesWrapper> */}

              <InputField
                label="ID Number"
                placeholder="ID Number"
                type="text"
                name={"idNumber"}
                value={data.idNumber}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Manager"
                defaultValue={"3"}
                name="managerId"
                value={data.managerId}
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
                value={data.designation}
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
              Save
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
export default AddUser;
