import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { isTheme } from "@/_helpers/getTheme";
import CarPlate from "@/components/CarRental/CarPlate";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";

import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import Swal from "sweetalert2";
import { CarPlateExtention, ExtentionContainer } from "../style";
import { ICarModel } from "@/models/carmodel";
import { ICustomers } from "@/models/customers";
import { IContracts } from "@/models/individualContracts";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { filterBranch, filterCar, filterCustomer } from "@/_helpers/filters";
import { Update } from "@/api/putApis/update";
import { IBranchModel } from "@/models/branch";
import InputField from "@/reuseableComponents/customInputField/input";
interface IProps {
  contract: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  branches: IBranchModel;
}
const ContractExtention = ({ contract, cars, customers, branches }: IProps) => {
  const { colors, locale, isLTR, translations } = useTheme();
  const router = useRouter();
  let obj = {
    contractNo: contract.result[0].contractNo,
    oldReturnDate: contract.result[0].actualReturnDate,
    returnDate: formattedDate(new Date()),
    comments: "",
    branchId: filterBranch(branches, contract.result[0].issueBranchID)[0].id,
  };
  const [data, setData] = React.useState(obj);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `contracts/Individual/${contract.result[0].contractNo}/extend`;

    await Update(userName, userPassword, url, company, data).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire(
            "Thank you!",
            "Contract date has been Extended!.",
            "success"
          );
          router.push("/individualcontracts");
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
  const carMakeMOdel = `${
    isLTR
      ? filterCar(cars, contract.result[0].carID)[0].make.name_en
      : filterCar(cars, contract.result[0].carID)[0].make.name_ar
  }/${
    isLTR
      ? filterCar(cars, contract.result[0].carID)[0].model.name_en
      : filterCar(cars, contract.result[0].carID)[0].model.name_ar
  }`;
  const carplate = {
    plateText1_ar: filterCar(cars, contract.result[0].carID)[0].plateText1_ar,
    plateText2_ar: filterCar(cars, contract.result[0].carID)[0].plateText2_ar,
    plateText3_ar: filterCar(cars, contract.result[0].carID)[0].plateText3_ar,
    plateNo: filterCar(cars, contract.result[0].carID)[0].plateNo,
    plateText1_en: filterCar(cars, contract.result[0].carID)[0].plateText1_en,
    plateText2_en: filterCar(cars, contract.result[0].carID)[0].plateText2_en,
    plateText3_en: filterCar(cars, contract.result[0].carID)[0].plateText3_en,
  };
  return (
    <ExtentionContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.contractExtention}</h2>
      </Title>

      <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <CarPlateExtention>
          <CarPlate car={carplate} />
        </CarPlateExtention>
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
                label={translations?.extendedDate as string}
                type="date"
                value={formattedDate(new Date())}
                disabled={true}
              />
              <InputField
                label={translations?.customerName as string}
                type="text"
                value={
                  filterCustomer(customers, contract.result[0].customerID)[0][
                    `fullname_${locale}`
                  ]
                }
                disabled={true}
              />

              <InputField
                label={translations?.ContractNumber as string}
                type="text"
                value={contract.result[0].contractNo}
                disabled={true}
              />
              <InputField
                label={translations?.makemodel as string}
                type="text"
                value={carMakeMOdel}
                disabled={true}
              />

              <InputField
                label={translations?.currentReturnDate as string}
                type="date"
                value={contract.result[0].actualReturnDate}
                disabled={true}
              />

              <InputField
                label={translations?.newReturnDate as string}
                type="date"
                name="returnDate"
                defaultValue={data.returnDate}
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.Comments as string}
                type="text"
                name="comments"
                onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button variant="contained" color="success" type="submit">
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
    </ExtentionContainer>
  );
};
export default ContractExtention;
