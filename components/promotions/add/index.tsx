import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { isTheme } from "@/_helpers/getTheme";
import { createPost } from "@/api/postApis/createBranch";
import CarRent from "@/components/CarRental";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { ICarModel } from "@/models/carmodel";
import InputComponent from "@/reuseableComponents/InputField";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
interface IProps {
  cars: ICarModel;
}
const AddPromotionList = ({ cars }: IProps) => {
  const { colors } = useTheme();
  const router = useRouter();
  let obj = {
    id: 0,
    promotionName_ar: "",
    promotionName_en: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    discount: 0,
    carID: [],
    active: "",
  };
  const [data, setData] = React.useState(obj);
  const [showCar, setshowCar] = React.useState(false);
  const [array, setArray] = React.useState([]);
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
    let url = "cars/Promotions";
    let body = {
      promotionName_ar: data.promotionName_ar,
      promotionName_en: data.promotionName_en,
      startDate: data.startDate,
      startTime: data.startTime,
      endDate: data.endDate,
      endTime: data.endTime,
      discount: data.discount,
      carID: array.toString(),
      active: data.active,
    };
    await createPost(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Promotion List has been Created!.",
            "success"
          );
          router.push("/promotions");
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
  const hanldeSelected = (car: any) => {
    const selectedCar = car?.id as any;
    let arrayCopy = [...array] as any;
    if (arrayCopy.includes(selectedCar)) {
      const index = arrayCopy.indexOf(selectedCar);
      arrayCopy.splice(index, 1);
      setArray(arrayCopy);
    } else {
      arrayCopy.push(selectedCar);
      setArray(arrayCopy);
    }
  };
  return (
    <div>
      <Title color={colors.sideBarBgColor}>
        <h2>Add New List</h2>
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
                label="Promotion name English"
                placeholder="name in english"
                type="text"
                name={"promotionName_en"}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="Start Date"
                placeholder=""
                type="date"
                name={"startDate"}
                classname="date-time"
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="Promotion name Arabic"
                placeholder="name in arabic"
                type="text"
                name={"promotionName_ar"}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="End Date"
                placeholder=""
                type="date"
                name={"endDate"}
                classname="date-time"
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="Start Time"
                placeholder="name in english"
                type="time"
                name={"startTime"}
                classname="date-time"
                defaultValue={data.startTime}
                onChange={handleChange}
                required={true}
              />
              <InputComponent
                label="discount"
                placeholder="10"
                type="text"
                name={"discount"}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="price-list">
              <InputComponent
                label="End Time"
                placeholder=""
                type="time"
                name={"endTime"}
                defaultValue={Date.now()}
                onChange={handleChange}
                required={true}
                classname="date-time"
              />
              <SwitchesComponent
                title="Active/Inactive"
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
              onClick={() => setshowCar(!showCar)}
            >
              Next
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </GroupButtons>
          {showCar && (
            <>
              <CarRent
                cars={cars}
                title={"car list"}
                page={"promotions"}
                hanldeSelected={hanldeSelected}
                showAddButton={false}
                selectedCarID={[]}
              />
              <GroupButtons>
                <Button
                  variant="contained"
                  color="success"
                  className="pricelist-save-button"
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
            </>
          )}
        </Box>
      </FormWrapper>
    </div>
  );
};
export default AddPromotionList;
