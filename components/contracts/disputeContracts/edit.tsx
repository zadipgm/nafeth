import * as React from "react";
import {
  CarDetailsHeading,
  DetailSection,
  EditDisputeContainer,
} from "../style";
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
import { Box, Button } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
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
import InputField from "@/reuseableComponents/customInputField/input";
import { CarPlateWrapper } from "@/components/payments/style";
import SelectField from "@/reuseableComponents/customeSelectField/select";
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
  const { colors, locale, isLTR, translations } = useTheme();
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
        <h2>{translations?.DisputedPendingContracts as string}</h2>
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
          <FormBox>
            <FormBoxWrapper className="summary">
              <InputField
                label={translations?.ContractNumber as string}
                type="text"
                name={"plateText1_ar"}
                value={contracts.result[0].contractNo}
                disabled={true}
              />
              <InputField
                label={translations?.priceList as string}
                type="text"
                value={
                  filterPriceList(
                    priceList,
                    contracts.result[0].pricelistID
                  )[0][`name_${locale}`]
                }
                disabled={true}
              />
              <InputField
                label={translations?.kmout as string}
                type="text"
                disabled={true}
                value={contracts.result[0].kmOut}
              />

              <InputField
                label={translations?.customerName as string}
                type="text"
                name={"plateText1_ar"}
                value={
                  filterCustomer(customers, contracts.result[0].customerID)[0][
                    `fullname_${locale}`
                  ]
                }
                disabled={true}
              />
              <InputField
                label={translations?.issueBranch as string}
                disabled={true}
                type="text"
                value={
                  filterBranch(branches, contracts.result[0].issueBranchID)[0][
                    `name_${locale}`
                  ]
                }
              />
              <InputField
                label={translations?.issueDate as string}
                type="text"
                disabled={true}
                value={contracts.result[0].issueDate}
              />

              <InputField
                label={translations?.nationality as string}
                type="text"
                value={
                  filterCustomer(customers, contracts.result[0].customerID)[0]
                    .nationality[`name_${locale}`]
                }
                disabled={true}
              />
              <InputField
                label={translations?.IssuedUser as string}
                type="text"
                disabled={true}
                value={
                  filterUser(users, Number(contracts.result[0].issueBy))[0][
                    `fullname_${locale}`
                  ]
                }
              />
              <InputField
                label={translations?.ExpiryDate as string}
                type="text"
                disabled={true}
                value={contracts.result[0].actualReturnDate}
              />
            </FormBoxWrapper>
            <DetailSection>
              <Title color={colors.sideBarBgColor}>
                <h2>{translations?.carDetails as string}</h2>
              </Title>
            </DetailSection>
            <FormBoxWrapper className="summary">
              <CarPlateWrapper>
                <CarPlate car={filterCar(cars, contracts.result[0].carID)[0]} />
              </CarPlateWrapper>

              <InputField
                label={translations?.makemodel as string}
                type="text"
                disabled={true}
                value={filterCarMakeModel(
                  isLTR,
                  cars,
                  contracts.result[0].carID
                )}
              />

              <InputField
                label={translations?.carYear as string}
                type="text"
                disabled={true}
                value={filterCar(cars, contracts.result[0].carID)[0].year}
              />

              <InputField
                label={translations?.carType as string}
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].carType[
                    `name_${locale}`
                  ]
                }
              />

              <InputField
                label={translations?.carColor as string}
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].color[
                    `name_${locale}`
                  ]
                }
              />

              <InputField
                label={translations?.insuranceExpiry as string}
                type="text"
                disabled={true}
                value={
                  filterCar(cars, contracts.result[0].carID)[0].insuranceExpDate
                }
              />

              <InputField
                label={translations?.sparepartsvalue as string}
                name={"sparePartsCost"}
                type="text"
                onChange={handleChange}
                required={true}
              />

              <InputField
                label={translations?.oilchangevalue as string}
                type="text"
                onChange={handleChange}
                name={"oilChangeCost"}
                required={true}
              />

              <InputField
                label={translations?.thevalueofcardamageassessment as string}
                type="text"
                onChange={handleChange}
                name={"damageCost"}
                required={true}
              />
            </FormBoxWrapper>
            <DetailSection>
              <Title color={colors.sideBarBgColor}>
                <h2>{translations?.contractProcedures as string}</h2>
              </Title>
            </DetailSection>
            <FormBoxWrapper className="summary">
              <InputField
                label={translations?.carCondition as string}
                value={filterCar(cars, contracts.result[0].carID)[0].status}
                disabled={true}
              />

              <SelectField
                onChange={handleChange}
                label={translations?.paymentStatus as string}
                name="disputedBillingStatus"
                defaultValue={""}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectPaymentStatus}
                  </option>
                  {paymentStatus.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </>
              </SelectField>

              <InputField
                label={translations?.kMIn as string}
                type="text"
                onChange={handleChange}
                name={"disputedKMIn"}
                required={true}
              />

              <InputField
                label={translations?.returnDate as string}
                type="date"
                onChange={handleChange}
                name={"disputedSubmitedDatetime"}
                defaultValue={data.disputedSubmitedDatetime}
                required={true}
              />

              <InputField
                label={translations?.Comments as string}
                type="text"
                onChange={handleChange}
                name={"disputedComments"}
                required={true}
              />
            </FormBoxWrapper>
          </FormBox>

          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="dispute-button"
              type="submit"
            >
              {translations?.dispute}
            </Button>
            <Button
              variant="contained"
              color="error"
              className="dispute-cancel"
              onClick={() => router.back()}
            >
              {translations?.cancel}
            </Button>
          </GroupButtons>
        </Box>
      </FormWrapper>
    </EditDisputeContainer>
  );
};
export default EditDisputeContracts;
