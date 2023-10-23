import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { isTheme } from "@/_helpers/getTheme";
import { createPost } from "@/api/postApis/createBranch";
import { Update } from "@/api/putApis/update";
import CarRent from "@/components/CarRental";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { ICarModel } from "@/models/carmodel";
import { IPrices } from "@/models/pricelist";
import { IPromotions } from "@/models/promotions";
import InputField from "@/reuseableComponents/customInputField/input";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";

interface IProps {
  list: IPromotions;
  cars: ICarModel;
}
const EditPromotionList = ({ list, cars }: IProps) => {
  const { colors, translations } = useTheme();
  const router = useRouter();
  const [showCar, setshowCar] = React.useState(false);
  const [data, setData] = React.useState(list.result[0]);
  let carIDs = data.carID.split(",");
  const [array, setArray] = React.useState(carIDs);
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
    let url = `cars/Promotions/${data.id}`;
    let body = {
      id: data.id,
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

    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Promotion List has been Updated!.",
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
    console.log(typeof selectedCar);
    let arrayCopy = [...array] as any;
    if (arrayCopy.includes(`${selectedCar}`)) {
      const index = arrayCopy.indexOf(`${selectedCar}`);
      arrayCopy.splice(index, 1);
      setArray(arrayCopy);
    } else {
      arrayCopy.push(`${selectedCar}`);
      setArray(arrayCopy);
    }
  };

  console.log("here is array", array);
  return (
    <div>
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
                label={translations?.fullName_en as string}
                placeholder="name in english"
                type="text"
                name={"promotionName_en"}
                defaultValue={data.promotionName_en}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.fullName_ar as string}
                placeholder="name in english"
                type="text"
                name={"promotionName_ar"}
                defaultValue={data.promotionName_en}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.startDate as string}
                placeholder=""
                type="text"
                name={"startDate"}
                defaultValue={data.startDate}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.endDate as string}
                placeholder=""
                type="text"
                name={"endDate"}
                defaultValue={data.endDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.startTime as string}
                placeholder="12:00"
                type="text"
                name={"startTime"}
                defaultValue={data.startTime}
                onChange={handleChange}
                required={true}
              />
              <InputField
                label={translations?.endTime as string}
                placeholder=""
                type="text"
                name={"endTime"}
                defaultValue={data.endTime}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.discount as string}
                placeholder="10"
                type="text"
                name={"discount"}
                defaultValue={data.discount}
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

          <CarRent
            cars={cars}
            title={"car list"}
            page={"promotions"}
            hanldeSelected={hanldeSelected}
            showAddButton={false}
            selectedCarID={data.carID.split(",")}
          />
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
    </div>
  );
};
export default EditPromotionList;
