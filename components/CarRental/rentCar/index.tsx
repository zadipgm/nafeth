import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import { RentContainer } from "../style";
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
  const { colors } = useTheme();
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
  const [isDriverSelected, setIsDriverSelected] = React.useState(false);
  const [isCustomerAdded, setIsCustomerAdded] = React.useState(false);
  const [isDriverAdded, setIsDriverAdded] = React.useState(false);
  const [ShowContractDetials, setShowContractDetials] = React.useState(false);
  const [showPricing, setShowPricing] = React.useState(false);
  const [accessories, setAccessories] = React.useState(false);
  const [customPrice, setCustomPrice] = React.useState<Icustomprice>();
  const [caraccessories, setCaraccessories] = React.useState<string[]>([]);
  const [customer, setCustomer] = React.useState<customer>();
  const [driver, setDriver] = React.useState<customer>();
  const [data, setData] = React.useState(obj);

  const onCustomerSelected = (customerobj: any) => {
    setCustomer(customerobj);
    setIsCustomerSelected(false);
    setIsCustomerAdded(true);
    setShowContractDetials(false);
    setShowPricing(false);
    setIsDriverSelected(false);
  };
  const onDriverSelected = (driver: any) => {
    setDriver(driver);
    setIsDriverSelected(false);
    setIsDriverAdded(true);
  };
  const handleOpenCutomPrice = () => setOpenCustomPrice(true);
  const handleCloseCutomPrice = () => setOpenCustomPrice(false);
  const getCustomPrice = (prices: any) => {
    setCustomPrice(prices);
  };
  const hanlelOpenDriver = () => setIsDriverSelected(true);
  const getCar_accessories = (accessoriess: any) => {
    console.log("getCar_accessories", accessoriess);
    setCaraccessories(accessoriess);
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log("handleChange", data);
  };
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      customerID: customer?.id,
      driverID: driver?.id,
      carID: car.result[0].id,
      pricelistID: customer?.pricelist.id,
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
      issueBy: "admin",
      promotionDiscount: data.promotionDiscount,
      accessoriesID: caraccessories.toLocaleString(),
    };
    console.log("here is body", body);
    e.preventDefault();
    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = "contracts/Individual";

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

  return (
    <RentContainer>
      <Title color={colors.nafethBlue}>
        <h2>Rent A Car</h2>
      </Title>
      <SelectedCar car={car} customPrice={customPrice as Icustomprice} />

      {accessories && (
        <AddAccessories
          setAccessories={setAccessories}
          getCar_accessories={getCar_accessories}
          car_accessories={car_accessories}
          caraccessories={caraccessories}
        />
      )}

      <GroupButtons>
        <Button
          variant="contained"
          color="success"
          className="rent-car-save-button"
          onClick={() => setIsCustomerSelected(true)}
          endIcon={
            <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
          }
        >
          Next
        </Button>
        <Button
          variant="contained"
          color="success"
          className="custom-price-button"
          onClick={() => handleOpenCutomPrice()}
          endIcon={<CashSvg width="15px" height="15px" fill={colors.white} />}
        >
          Custom Price
        </Button>
        <Button
          variant="contained"
          color="success"
          className="add-accessories-button"
          onClick={() => setAccessories(true)}
          endIcon={<AddIcon width="15px" height="15px" fill={colors.white} />}
        >
          Add Accessories
        </Button>
      </GroupButtons>
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
      {isCustomerSelected && (
        <CustomersList
          editable={true}
          deleteable={false}
          details={false}
          listtype={"customer"}
          page_color={colors.nafethBlue}
          title={"Select a Customer"}
          onCustomerSelected={onCustomerSelected}
          customers={customers}
          isAddbutton={true}
        />
      )}
      {isCustomerAdded && (
        <SelectedCustomer customer={customer as customer} type={"Customer"} />
      )}

      {isCustomerAdded && (
        <GroupButtons>
          <Button
            variant="contained"
            color="success"
            className="rent-car-save-button"
            onClick={() => setShowContractDetials(true)}
            endIcon={
              <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
            }
          >
            Next
          </Button>
          {isCustomerAdded && (
            <Button
              variant="contained"
              color="info"
              className="rent-car-Adddriver-button"
              onClick={hanlelOpenDriver}
              endIcon={
                <AddIcon width="15px" height="15px" fill={colors.nafethBlue} />
              }
            >
              Add Driver
            </Button>
          )}
          <Button
            variant="contained"
            color="success"
            className="custom-price-button"
            onClick={() =>
              router.push({
                pathname: `/customers/edit/${customer?.id}`,
                query: { page: "rentcar_page" },
              })
            }
            endIcon={
              <CardUserSvg
                width="20px"
                height="20px"
                fill={colors.nafethBlue}
              />
            }
          >
            Edit Customer
          </Button>
        </GroupButtons>
      )}
      {isDriverSelected && (
        <CustomersList
          editable={true}
          deleteable={false}
          details={false}
          page_color={colors.purple}
          listtype={"driver"}
          title={"Select a Driver"}
          onCustomerSelected={onDriverSelected}
          customers={customers}
          isAddbutton={false}
        />
      )}
      {isDriverAdded && (
        <SelectedCustomer customer={driver as customer} type={"Driver"} />
      )}
      {isDriverAdded && (
        <GroupButtons>
          <Button
            variant="contained"
            color="success"
            className="rent-car-Add-contract"
            onClick={() => setShowContractDetials(true)}
            endIcon={
              <ArrowCircleSvg width="15px" height="15px" fill={colors.white} />
            }
          >
            Add Contract Details
          </Button>
        </GroupButtons>
      )}
      {ShowContractDetials && (
        <>
          <Title color={colors.nafethBlue}>
            <h3>Contract Details</h3>
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
            >
              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-details"
                >
                  <InputComponent
                    label="From Date"
                    placeholder=""
                    type="date"
                    defaultValue={data.issueDate}
                    onChange={handleChange}
                    name={"issueDate"}
                    variant="filled"
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="To Date"
                    placeholder=""
                    type="date"
                    variant="filled"
                    onChange={handleChange}
                    name={"actualReturnDate"}
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Days"
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
                    classname="car-contract-details"
                  />
                </FormBox>
              </FormBoxWrapper>

              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-comment"
                >
                  <InputComponent
                    label="Comments"
                    placeholder=""
                    type="text"
                    onChange={handleChange}
                    name={"issueComments"}
                    required={true}
                    multiline={true}
                    rows={3}
                  />
                </FormBox>
              </FormBoxWrapper>
            </Box>
          </FormWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="rent-car-save-button"
              onClick={() => setShowPricing(true)}
              endIcon={
                <ArrowCircleSvg
                  width="15px"
                  height="15px"
                  fill={colors.white}
                />
              }
            >
              Next
            </Button>
          </GroupButtons>
        </>
      )}
      {showPricing && (
        <>
          <Title color={colors.nafethBlue}>
            <h3>Pricing</h3>
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
            >
              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-details"
                >
                  <InputComponent
                    label="Total Rented Cost"
                    placeholder=""
                    type="text"
                    value={totalRentedCost}
                    required={true}
                    disabled={true}
                    variant="filled"
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Total Accessories Cost"
                    placeholder=""
                    type="text"
                    disabled={true}
                    value={totalAccesoriesCost}
                    variant="filled"
                    name={"date"}
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Total Cost"
                    placeholder=""
                    type="text"
                    value={totalCost}
                    name={"days"}
                    variant="filled"
                    disabled={true}
                    required={true}
                    classname="car-contract-details"
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-details"
                >
                  <InputComponent
                    label="Advance Amount"
                    placeholder=""
                    type="text"
                    name={"advanceAmount"}
                    onChange={handleChange}
                    required={true}
                    classname="car-contract-cost"
                  />
                  <InputComponent
                    label="Remaining Cost"
                    placeholder=""
                    type="text"
                    disabled={true}
                    id="outlined-disabled"
                    value={remianingCost}
                    variant="filled"
                    name={"days"}
                    required={true}
                    classname="car-contract-cost"
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-dropdown"
                >
                  {/* <TextField
                    select
                    label="Contract Mode"
                    name="Category"
                    required
                    className="car-contract-dropdown"
                  >
                    {modde.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField> */}
                  {/* <TextField
                    select
                    label="Payment Type"
                    required
                    className="car-contract-dropdown"
                  >
                    {payment.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField> */}
                </FormBox>
              </FormBoxWrapper>
            </Box>
          </FormWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              className="create-contract-button"
              onClick={(e) => handleSubmit(e)}
              endIcon={
                <CheckSvg width="15px" height="15px" fill={colors.white} />
              }
            >
              Create Contract
            </Button>
          </GroupButtons>
        </>
      )}
    </RentContainer>
  );
};
export default RentCar;
