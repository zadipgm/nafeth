import * as React from "react";
import { CarDetailsHeading, EditDisputeContainer } from "../style";
import { useTheme } from "styled-components";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory } from "@/models/IAccessory";
import { IBranchModel } from "@/models/branch";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
import {
  filterBranch,
  filterCar,
  filterCarMakeModel,
  filterCustomer,
  filterPriceList,
  filterUser,
  filterUserByName,
} from "@/_helpers/filters";
import { IUser } from "@/models/userModel";
import CarPlate from "@/components/CarRental/CarPlate";
import { payment, paymentStatus } from "@/global/fakeData";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
interface IProps {
  contracts: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  priceList: IPriceList;
  accessories: IAccessory;
  branches: IBranchModel;
  users: IUser;
}

const EditDisputeContracts = ({
  contracts,
  cars,
  customers,
  priceList,
  branches,
  users,
}: IProps) => {
  const { colors, locale, isLTR } = useTheme();
  const router = useRouter();
  const obj = {
    disputedComments: "",
    disputedBillingStatus: "",
    disputedKMIn: 0,
    sparePartsCost: 0,
    oilChangeCost: 0,
    damageCost: 0,
    disputedSubmitedDatetime: formattedDate(new Date()),
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
    let name = getName() as string;
    let branchID = filterUserByName(users, name)[0].baseBranch.id;
    let body = {
      contractNo: contracts.result[0].contractNo,
      disputedComments: data.disputedComments,
      disputedBillingStatus: data.disputedBillingStatus,
      disputedCarStatus: filterCar(
        cars,
        contracts.result[0].carID
      )[0].status.toLocaleUpperCase(),
      disputedContractStatus: contracts.result[0].status,
      disputedKMIn: Number(data.disputedKMIn),
      sparePartsCost: Number(data.sparePartsCost),
      oilChangeCost: Number(data.oilChangeCost),
      damageCost: Number(data.damageCost),
      disputedSubmitedDatetime: data.disputedSubmitedDatetime,
      disputedBranchID: branchID,
      disputedBy: getName(),
    };
    console.log("here is body", body);
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `contracts/Individual/${contracts.result[0].contractNo}/dispute`;
    await Update(userName, userPassword, url, company, body).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "Contract has been Updated!.", "success");
          router.push("/disputecontracts");
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
    <EditDisputeContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>{"Disputed Pending Contracts"}</h2>
      </Title>
      <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
          noValidate={false}
          autoComplete="off"
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Contract Number"
                type="text"
                name={"plateText1_ar"}
                value={contracts.result[0].contractNo}
                variant="filled"
                disabled={true}
              />
              <InputComponent
                label="Price List"
                type="text"
                value={
                  filterPriceList(
                    priceList,
                    contracts.result[0].pricelistID
                  )[0][`name_${locale}`]
                }
                variant="filled"
                disabled={true}
              />
              <InputComponent
                label="KM Out"
                type="text"
                variant="filled"
                disabled={true}
                value={contracts.result[0].kmOut}
              />
            </FormBox>

            <FormBox color={isTheme().color}>
              <InputComponent
                label="Customer Name"
                type="text"
                name={"plateText1_ar"}
                value={
                  filterCustomer(customers, contracts.result[0].customerID)[0][
                    `fullname_${locale}`
                  ]
                }
                variant="filled"
                disabled={true}
              />
              <InputComponent
                label="Issued branch"
                disabled={true}
                variant="filled"
                type="text"
                value={
                  filterBranch(branches, contracts.result[0].issueBranchID)[0][
                    `name_${locale}`
                  ]
                }
              />
              <InputComponent
                label="Issue Date"
                type="text"
                disabled={true}
                value={contracts.result[0].issueDate}
                variant="filled"
              />
            </FormBox>

            <FormBox color={isTheme().color}>
              <InputComponent
                label="Nationality"
                type="text"
                value={
                  filterCustomer(customers, contracts.result[0].customerID)[0]
                    .nationality[`name_${locale}`]
                }
                disabled={true}
                variant="filled"
              />
              <InputComponent
                label="Issued User"
                type="text"
                disabled={true}
                variant="filled"
                value={
                  filterUser(users, Number(contracts.result[0].issueBy))[0][
                    `fullname_${locale}`
                  ]
                }
              />
              <InputComponent
                label="Expiry Date"
                type="text"
                disabled={true}
                value={contracts.result[0].actualReturnDate}
                variant="filled"
              />
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.sideBarBgColor}>
            <h2>{"Car Details"}</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <CarPlate car={filterCar(cars, contracts.result[0].carID)[0]} />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Car Make/Model"
                type="text"
                disabled={true}
                value={filterCarMakeModel(
                  isLTR,
                  cars,
                  contracts.result[0].carID
                )}
                variant="filled"
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Car Year"
                type="text"
                disabled={true}
                value={filterCar(cars, contracts.result[0].carID)[0].year}
                variant="filled"
              />
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Car Type"
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].carType[
                    `name_${locale}`
                  ]
                }
                variant="filled"
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Car Color"
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].color[
                    `name_${locale}`
                  ]
                }
                variant="filled"
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Insurance Expiry Date"
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].insuranceExpDate
                }
                variant="filled"
              />
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Spare parts value"
                name={"sparePartsCost"}
                type="text"
                onChange={handleChange}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Oil change value"
                type="text"
                onChange={handleChange}
                name={"oilChangeCost"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="The value of car damage assessment"
                type="text"
                onChange={handleChange}
                name={"damageCost"}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <Title color={colors.sideBarBgColor}>
            <h2>{"Contract Procedures"}</h2>
          </Title>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Car Condition"
                value={filterCar(cars, contracts.result[0].carID)[0].status}
                variant="filled"
                disabled={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <TextField
                select
                onChange={handleChange}
                label="Payment Status"
                name="disputedBillingStatus"
                // onChange={handleChange}
                defaultValue={""}
              >
                {paymentStatus.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="KM In"
                type="text"
                onChange={handleChange}
                name={"disputedKMIn"}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Return Date"
                type="date"
                onChange={handleChange}
                variant="filled"
                name={"disputedSubmitedDatetime"}
                defaultValue={data.disputedSubmitedDatetime}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color} className="comments">
              <InputComponent
                label="comments"
                type="text"
                onChange={handleChange}
                name={"disputedComments"}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="dispute-button"
              type="submit"
            >
              Dispute
            </Button>
            <Button
              variant="contained"
              color="error"
              className="dispute-cancel"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </EditDisputeContainer>
  );
};
export default EditDisputeContracts;
