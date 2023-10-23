import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import { RentContainer, RentSelectedCarContainer } from "../style";
import AddIcon from "@mui/icons-material/Add";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import CustomersList from "@/components/customers";
import SelectedCar from "./selectedCar";
import SelectedCustomer from "./selectedCustomer";
import CashSvg from "@/public/icons/payments";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
import CheckSvg from "@/public/icons/checkSvg";
import Swal from "sweetalert2";
import CardUserSvg from "@/public/icons/carduserSvg";
import ModalComponent from "@/reuseableComponents/modal";
import CustomPrice from "./customprice";
import AddAccessories from "./addAccessories";
import {
  ICategory,
  ICustomers,
  IPriceList,
  IidType,
  customer,
} from "@/models/customers";
import { ICarModel } from "@/models/carmodel";
import { Icustomprice } from "@/models/customerPrice";
import { IAccessory } from "@/models/IAccessory";
import { ICitiesModel } from "@/models/city";
import { ICountriesModel } from "@/models/country";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { createPost } from "@/api/postApis/createBranch";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { NumOfDays } from "@/_helpers/getDays";
import InputField from "@/reuseableComponents/customInputField/input";
import { customersKeys } from "@/constants";
import DataTable from "@/reuseableComponents/DataTable";
interface IProps {
  customers: ICustomers;
  car: ICarModel;
  car_accessories: IAccessory;
  category: ICategory;
  IdType: IidType;
  cities: ICitiesModel;
  countries: ICountriesModel;
  pricelist: IPriceList;
}
const RentCar = ({ customers, car, car_accessories }: IProps) => {
  const { colors, translations } = useTheme();
  const router = useRouter();
  let obj = {
    customerID: 0,
    driverID: 0,
    carID: 0,
    pricelistID: 0,
    issueDate: formattedDate(new Date()),
    timeOut: "",
    kmOut: 0,
    dailyPrice: 0,
    weeklyPrice: 0,
    monthlyPrice: 0,
    graceHours: "",
    graceHoursPrice: "",
    kmLimit: 0,
    extraKmPrice: 0,
    advanceAmount: 0,
    actualReturnDate: formattedDate(new Date()),
    actualTotalDays: 1,
    issueComments: "",
    issueBranchID: 0,
    issueBy: "",
    promotionDiscount: 0,
    accessoriesID: 0,
  };
  const [openCustomPrice, setOpenCustomPrice] = React.useState(false);
  const [isCustomerSelected, setIsCustomerSelected] = React.useState(false);

  const [isCustomerOpen, setIsCustomerOpen] = React.useState(false);
  const [isDriverOpen, setIsDriverOpen] = React.useState(false);
  const [ShowContractDetials, setShowContractDetials] = React.useState(false);
  const [showPricing, setShowPricing] = React.useState(false);
  const [accessories, setAccessories] = React.useState(false);
  const [customPrice, setCustomPrice] = React.useState<Icustomprice>();
  const [caraccessories, setCaraccessories] = React.useState<string[]>([]);
  const [customer, setCustomer] = React.useState<ICustomers | any>();
  const [driver, setDriver] = React.useState<ICustomers | any>();
  const [data, setData] = React.useState(obj);

  //Accessory Functions-----------------
  const handleAddAccessory = () => {
    setAccessories(true);
  };
  const handleAddAccessoryClose = () => {
    setAccessories(false);
  };
  const getCar_accessories = (accessoriess: any) => {
    setCaraccessories(accessoriess);
  };

  //Customer price Functions-----------------
  const handleOpenCutomPrice = () => setOpenCustomPrice(true);
  const handleCloseCutomPrice = () => setOpenCustomPrice(false);
  const getCustomPrice = (prices: any) => {
    setCustomPrice(prices);
  };

  //customers Functions-----------------
  const handleOpenCustomer = () => {
    setIsCustomerOpen(true);
  };
  const handleCloseCustomer = () => {
    setIsCustomerOpen(false);
  };
  const onSelectCustomer = (number: number) => {
    let filterCustomer = customers?.result.filter((item) => item.id === number);
    setCustomer(filterCustomer);
  };
  //driver Functions-----------------
  const handleOpenDriver = () => {
    setIsDriverOpen(true);
  };
  const handleCloseDriver = () => {
    setIsDriverOpen(false);
  };
  const onSelectDriver = (number: number) => {
    let filterDriver = customers?.result.filter((item) => item.id === number);
    setDriver(filterDriver);
  };
  ////input field onchange Function-----------------
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //submit Functions-----------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let body = {
      customerID: customer?.[0].id,
      driverID: driver?.[0].id,
      carID: car.result[0].id,
      pricelistID: customer?.[0].pricelist.id,
      issueDate: data.issueDate,
      timeOut: new Date().getHours() + ":" + new Date().getMinutes(),
      kmOut:
        customPrice?.mileage === undefined
          ? car.result[0].mileage
          : customPrice?.mileage,
      dailyPrice:
        customPrice?.dailyRent === undefined
          ? car.result[0].dailyRent
          : customPrice?.dailyRent,
      weeklyPrice:
        customPrice?.weeklyRent === undefined
          ? car.result[0].weeklyRent
          : customPrice?.weeklyRent,
      monthlyPrice:
        customPrice?.monthlyRent === undefined
          ? car.result[0].monthlyRent
          : customPrice?.monthlyRent,
      graceHours:
        customPrice?.graceHours === undefined
          ? car.result[0].graceHours.toLocaleString()
          : customPrice?.graceHours.toLocaleString(),
      graceHoursPrice:
        customPrice?.graceCharge === undefined
          ? car.result[0].graceCharge.toLocaleString()
          : customPrice?.graceCharge.toLocaleString(),
      kmLimit:
        customPrice?.dailyKMlimit === undefined
          ? car.result[0].dailyKMlimit
          : customPrice?.dailyKMlimit,
      extraKmPrice:
        customPrice?.perExtraKM === undefined
          ? car.result[0].perExtraKM
          : customPrice?.perExtraKM,
      advanceAmount: data.advanceAmount,
      actualReturnDate: data.actualReturnDate,
      actualTotalDays: NumOfDays(data.issueDate, data.actualReturnDate),
      issueComments: data.issueComments,
      issueBranchID: 1,
      issueBy: userName,
      promotionDiscount: data.promotionDiscount,
      accessoriesID: caraccessories.toLocaleString(),
    };
    e.preventDefault();

    let url = "contracts/Individual";
    if (car.result[0].status === "RENTED") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "This Car is already Rented, Please select another car.",
      });
    } else {
      await createPost(userName, userPassword, url, company, body).then(
        (res: any) => {
          if (res.status == 200) {
            Swal.fire("Thank you!", "Contract has been Created!.", "success");
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
    }
  };

  //total rented cost
  let totalRentedCost =
    Number(
      customPrice?.dailyRent === undefined
        ? car.result[0].dailyRent
        : customPrice?.dailyRent
    ) * Number(NumOfDays(data.issueDate, data.actualReturnDate));

  //filter selected accessories
  let filteredAccessory = car_accessories.result.filter((item) =>
    caraccessories.includes(`${item.id}`)
  );

  //total accessories cost
  let totalAccesoriesCost = filteredAccessory.reduce(
    (accumulator, currentValue) => {
      return accumulator + currentValue.cost;
    },
    0
  );

  // total cost
  let totalCost = totalRentedCost + totalAccesoriesCost;

  //Remaining cost
  let remianingCost = totalCost - data.advanceAmount;

  console.log("here is customer,", customer);
  return (
    <>
      <RentContainer>
        <Title color={colors.sideBarBgColor}>
          <h2>{translations?.selectedCar}</h2>
        </Title>
        {/* ------------------selected Car------------------ */}
        <SelectedCar car={car} customPrice={customPrice as Icustomprice} />
      </RentContainer>
      {/* ------------------Add Accessory Modal------------------ */}
      <ModalComponent
        open={accessories}
        handleClose={handleAddAccessoryClose}
        size={"md"}
      >
        <AddAccessories
          setAccessories={setAccessories}
          getCar_accessories={getCar_accessories}
          car_accessories={car_accessories}
          caraccessories={caraccessories}
          close={handleAddAccessoryClose}
        />
      </ModalComponent>
      {/* ------------------Add Custom Prices------------------ */}
      <ModalComponent
        open={openCustomPrice}
        handleClose={handleCloseCutomPrice}
        size={"md"}
      >
        <CustomPrice
          handleClose={handleCloseCutomPrice}
          car={car}
          getCustomPrice={getCustomPrice}
        />
      </ModalComponent>
      <GroupButtons className="rent-car-group-button">
        <Button
          variant="contained"
          className="arrow"
          onClick={handleOpenCustomer}
          endIcon={
            <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
          }
        >
          {translations?.addCustomer}
        </Button>
        <Button
          variant="contained"
          className="custom-price-button"
          onClick={() => handleOpenCutomPrice()}
          endIcon={<CashSvg width="15px" height="15px" fill={colors.white} />}
        >
          {translations?.customePrice}
        </Button>
        <Button
          variant="contained"
          className="add-accessories-button"
          onClick={handleAddAccessory}
          endIcon={<AddIcon width="15px" height="15px" fill={colors.white} />}
        >
          {translations?.addAccessories}
        </Button>
      </GroupButtons>
      {/* ------------------Add Customer modal------------------ */}
      <ModalComponent
        open={isCustomerOpen}
        handleClose={handleCloseCustomer}
        size={"md"}
      >
        <DataTable
          classname="small_size"
          data={customers.result}
          showFilter={true}
          isDeleteAble={false}
          isEditAble={false}
          isViewAble={false}
          isDuplicate={false}
          page_color={colors.sideBarBgColor}
          size="400px"
          showAddButton={false}
          keys={customersKeys}
          isSelectable={true}
          showCloseIcon={true}
          handleClose={handleCloseCustomer}
          handleSelect={onSelectCustomer}
        />
      </ModalComponent>
      {customer?.length > 0 && (
        <RentContainer>
          <Title color={colors.nafethBlue}>
            <h2>{translations?.selectedCustomer}</h2>
          </Title>
          <SelectedCustomer customer={customer as customer} type={"customer"} />
        </RentContainer>
      )}

      {customer?.length > 0 && (
        <GroupButtons className="rent-car-group-button">
          <Button
            variant="contained"
            className="arrow"
            onClick={() => setShowContractDetials(true)}
            endIcon={
              <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
            }
          >
            {translations?.addContractDetails}
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={handleOpenDriver}
            endIcon={
              <AddIcon
                width="15px"
                height="15px"
                fill={colors.sideBarBgColor}
              />
            }
          >
            {translations?.addDriver}
          </Button>
        </GroupButtons>
      )}

      {/* ------------------Add Driver modal------------------ */}
      <ModalComponent
        open={isDriverOpen}
        handleClose={handleCloseDriver}
        size={"md"}
      >
        <DataTable
          classname="small_size"
          data={customers.result}
          showFilter={true}
          isDeleteAble={false}
          isEditAble={false}
          isViewAble={false}
          isDuplicate={false}
          page_color={colors.sideBarBgColor}
          size="400px"
          showAddButton={false}
          keys={customersKeys}
          isSelectable={true}
          showCloseIcon={true}
          handleClose={handleCloseDriver}
          handleSelect={onSelectDriver}
        />
      </ModalComponent>
      {driver?.length > 0 && (
        <RentContainer>
          <Title color={colors.purple}>
            <h2>{translations?.selectedDriver}</h2>
          </Title>
          <SelectedCustomer customer={driver as customer} type={"driver"} />
        </RentContainer>
      )}
      {/* ------------------Add contract detail------------------ */}
      {ShowContractDetials && (
        <>
          <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
            <Box
              component="form"
              sx={{
                width: "100%",
                maxWidth: "100%",
                margin: "40px 0px 0px 0px",
              }}
              noValidate={false}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <RentContainer>
                <Title color={colors.sideBarBgColor}>
                  <h2>
                    {translations?.contractDetail} & {translations?.pricing}
                  </h2>
                </Title>

                <FormBox className="contract-pricing">
                  <InputField
                    label={translations?.fromDate as string}
                    placeholder=""
                    type="date"
                    defaultValue={data.issueDate}
                    onChange={handleChange}
                    name={"issueDate"}
                    required={true}
                  />
                  <InputField
                    label={translations?.toDate as string}
                    placeholder=""
                    type="date"
                    onChange={handleChange}
                    name={"actualReturnDate"}
                    required={true}
                  />
                  <InputField
                    label={translations?.days as string}
                    placeholder=""
                    type="text"
                    onChange={handleChange}
                    value={
                      Math.trunc(
                        NumOfDays(data.issueDate, data.actualReturnDate)
                      ) === 0
                        ? 1
                        : Math.trunc(
                            NumOfDays(data.issueDate, data.actualReturnDate)
                          )
                    }
                    name={"actualTotalDays"}
                    required={true}
                  />
                  <InputField
                    label={translations?.advanceAmount as string}
                    placeholder=""
                    type="text"
                    name={"advanceAmount"}
                    defaultValue={0}
                    onChange={handleChange}
                    required={false}
                  />
                  <InputField
                    label={translations?.totalRentedCost as string}
                    placeholder=""
                    type="text"
                    value={totalRentedCost}
                    required={true}
                    disabled={true}
                  />
                  <InputField
                    label={translations?.totalAccessoriesCost as string}
                    placeholder=""
                    type="text"
                    disabled={true}
                    value={totalAccesoriesCost}
                    name={"date"}
                    required={true}
                  />
                  <InputField
                    label={translations?.totalCost as string}
                    placeholder=""
                    type="text"
                    value={totalCost}
                    name={"days"}
                    disabled={true}
                    required={true}
                  />

                  <InputField
                    label={translations?.remainingCost as string}
                    placeholder=""
                    type="text"
                    disabled={true}
                    value={remianingCost}
                    name={"days"}
                    required={true}
                  />
                  <InputField
                    label={translations?.Comments as string}
                    placeholder=""
                    type="text"
                    onChange={handleChange}
                    name={"issueComments"}
                    required={true}
                  />
                </FormBox>
              </RentContainer>

              <GroupButtons>
                <Button
                  variant="contained"
                  className="create-contract-button"
                  type="submit"
                  endIcon={
                    <CheckSvg width="15px" height="15px" fill={colors.white} />
                  }
                >
                  {translations?.createContract}
                </Button>
              </GroupButtons>
            </Box>
          </FormWrapper>
        </>
      )}
    </>
  );
};
export default RentCar;
