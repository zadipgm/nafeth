import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { AccountTable, Paid, ReturnContainer, Unpaid } from "../style";
import { useTheme } from "styled-components";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
import { bank, evalueation, payment, status } from "@/global/fakeData";
import {
  CarDetailsSubTitle,
  CarDetailsTitle,
  RentList,
  RentListItem,
} from "@/components/CarRental/style";
import { useRouter } from "next/router";
import moment from "moment";
import Swal from "sweetalert2";
import CashSvg from "@/public/icons/payments";
import { IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import {
  filterAccessory,
  filterBranch,
  filterCar,
  filterCustomer,
  filterPriceList,
} from "@/_helpers/filters";
import { IBranchModel } from "@/models/branch";
import { IAccessory } from "@/models/IAccessory";
import DatePicker from "@/reuseableComponents/DatePicker";
import DatePickerComponent from "@/reuseableComponents/DatePicker";
import { NumOfDays } from "@/_helpers/getDays";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
interface IProps {
  contract: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  pricelist: IPriceList;
  branch: IBranchModel;
  accessories: IAccessory;
}
const ReturnContract = ({
  contract,
  cars,
  customers,
  pricelist,
  branch,
  accessories,
}: IProps) => {
  const returnobj = {
    retunDate: formattedDate(new Date()),
    kmIn: "",
    evaluation: "",
    status: "",
    comments: "",
    discount: "",
  };
  const { colors, locale, isLTR } = useTheme();
  const router = useRouter();
  const [kmOut, setKmOut] = React.useState("");
  const [data, setData] = React.useState(returnobj);
  const [isbank, setIsbank] = React.useState(false);
  const onBankChange = (type: string) => {
    if (type === "Bank Transfer" || type === "Sadad") {
      setIsbank(true);
    } else {
      setIsbank(false);
    }
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const PriceName = filterPriceList(
    pricelist,
    contract.result[0].pricelistID
  )[0][`name_${locale}`];

  const branchName = filterBranch(branch, contract.result[0].issueBranchID)[0][
    `name_${locale}`
  ];
  const customerName = filterCustomer(
    customers,
    contract.result[0].customerID
  )[0][`fullname_${locale}`];

  const carMakeMOdel = `${
    isLTR
      ? filterCar(cars, contract.result[0].carID)[0].make.name_en
      : filterCar(cars, contract.result[0].carID)[0].make.name_ar
  }/${
    isLTR
      ? filterCar(cars, contract.result[0].carID)[0].model.name_en
      : filterCar(cars, contract.result[0].carID)[0].model.name_ar
  }`;

  //time diffrence
  let checkInTime = moment(
    new Date().getHours() + ":" + new Date().getMinutes(),
    "H:mm"
  );
  let checkoutTime = moment(contract.result[0].timeOut, "H:mm");

  let ExtraTime = moment(checkInTime).diff(moment(checkoutTime), "h");
  // get number of days from date start and end date
  let days = NumOfDays(contract.result[0].issueDate, data.retunDate);
  //price*dailyrent
  let dailyPrice = contract.result[0].dailyPrice * days;
  //extra hours price
  let extraHourPrice = contract.result[0].graceHoursPrice * ExtraTime;
  //extra kmLimit
  const extraKmLimit =
    contract.result[0].kmLimit * contract.result[0].actualTotalDays;
  //extra km
  const extraKm = Number(data.kmIn) - contract.result[0].kmOut;
  extraKm - extraKmLimit;
  const extraKmPrice = extraKm * contract.result[0].extraKmPrice;

  //totalPrice
  const total =
    Number(dailyPrice) +
    Number(extraHourPrice) +
    Number(extraKmPrice > extraKmLimit ? extraKmPrice : 0);
  //AccessoryPrice
  const accessoryPrice = filterAccessory(
    accessories,
    contract.result[0].accessoriesID
  );
  const totalRent = Number(total) + Number(accessoryPrice);

  // gross total
  let otherAmount = 0;
  let discountAmount = 0;
  let paid = 0;
  const grossTotal = totalRent + otherAmount - Number(data.discount) - paid;

  // vat
  let vatAmount = 15 / 100;
  const vat = vatAmount * grossTotal;

  //Net Total
  const netTotal = grossTotal + vat;
  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let body = {
      contractNo: contract.result[0].contractNo,
      status: data.status,
      freehours: contract.result[0].graceHours,
      returnDate: data.retunDate,
      daysRented: days,
      daysCost: dailyPrice,
      timeIn: new Date().getHours() + ":" + new Date().getMinutes(),
      extraTime: Math.sign(ExtraTime) === -1 ? "00:00" : `${ExtraTime}:00`,
      timeCost: extraHourPrice,
      kmIn: Number(data.kmIn),
      extraKM: extraKm,
      kmCost: extraKmPrice,
      accessoriesCost: Number(accessoryPrice.toString()),
      pricelistLoyalityDiscount: 0,
      promotionDiscount: 0,
      totalRentCost: totalRent,
      otherCost: 0,
      discount: 0,
      grossTotal: grossTotal,
      vatPercent: 15,
      vatAmount: vat,
      refunded: 0,
      paid: contract.result[0].advanceAmount,
      netTotal: netTotal,
      returnComments: data.comments,
      returnBranchID: contract.result[0].issueBranchID,
      returnBy: 0,
    };

    let userName = getName() as string;
    let userPassword = getPassword() as string;
    let company = getCompany() as string;
    let url = `contracts/Individual/${contract.result[0].contractNo}/return`;
    if (Number(data.kmIn) > contract.result[0].kmOut) {
      await Update(userName, userPassword, url, company, body).then(
        (res: any) => {
          if (res.status == 200) {
            Swal.fire(
              "Thank you!",
              "Contract date has been closed!.",
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
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add km In more than km out!",
      });
    }
  };
  return (
    <ReturnContainer>
      <Title color={colors.nafethBlue}>
        <h2>Contract Details</h2>
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
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Contract Number"
                type="text"
                value={contract.result[0].contractNo}
                variant={"filled"}
                disabled={true}
              />

              <InputComponent
                label="Price List"
                type="text"
                value={PriceName}
                variant={"filled"}
                disabled={true}
              />

              <InputComponent
                label="Issue Branch"
                type="text"
                value={branchName}
                variant={"filled"}
                disabled={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Customer Name"
                type="text"
                value={customerName}
                variant="filled"
                disabled={true}
              />{" "}
              <InputComponent
                label="Make/ Model"
                type="text"
                value={carMakeMOdel}
                variant="filled"
                disabled={true}
              />
              <InputComponent
                label="KM In"
                placeholder="100000017"
                type="text"
                onBlur={handleChange}
                name={"kmIn"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="KM Out"
                type="text"
                value={contract.result[0].kmOut}
                variant="filled"
                disabled={true}
              />
              {/* <DatePickerComponent onChange={handleChange} /> */}
              <InputComponent
                label="Return Date"
                type="date"
                variant="filled"
                onChange={handleChange}
                defaultValue={data.retunDate}
                name={"retunDate"}
                required={true}
                mindate={contract.result[0].issueDate}
              />
              <TextField
                select
                label="Evaluation"
                name="evaluation"
                required
                onChange={handleChange}
              >
                {evalueation.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          <FormBoxWrapper>
            <FormBox color={isTheme().color} className="return-contract">
              <TextField
                select
                label="Status"
                name="status"
                required
                onChange={handleChange}
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormBox>
          </FormBoxWrapper>
          <ReturnContainer>
            <Title color={colors.nafethBlue}>
              <h2>Rental Details</h2>
            </Title>
            <RentList className="rental-details">
              <RentListItem>
                <CarDetailsTitle>Daily Rent</CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].dailyPrice}
                </CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Daily Km limit</CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].kmLimit}
                </CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Free Hours </CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].graceHours}
                </CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Extra hours</CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].graceHours}
                </CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Extra hourly price</CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].graceHoursPrice}
                </CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle> Extra KM Price</CarDetailsTitle>
                <CarDetailsSubTitle>
                  {contract.result[0].extraKmPrice}
                </CarDetailsSubTitle>
              </RentListItem>
            </RentList>
          </ReturnContainer>
          {Number(data.kmIn) > contract.result[0].kmOut && (
            <ReturnContainer>
              <Title color={colors.nafethBlue}>
                <h2>Rent Account</h2>
              </Title>
              <AccountTable>
                <tr>
                  <td>Return Date</td>
                  <td>{data.retunDate}</td>
                  <td>Issue Date</td>
                  <td>{contract.result[0].issueDate}</td>
                  <td>Number of days</td>
                  <td>{days}</td>
                  <td>Price</td>
                  <td>{dailyPrice}</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr>
                  <td>Check-in time</td>
                  <td>
                    {new Date().getHours() + ":" + new Date().getMinutes()}
                  </td>
                  <td>Checkout time</td>
                  <td>{contract.result[0].timeOut}</td>
                  <td>Extra time</td>
                  <td> {Math.sign(ExtraTime) === -1 ? 0 : ExtraTime}</td>
                  <td>Price</td>
                  <td>
                    {Math.sign(extraHourPrice) === -1 ? 0 : extraHourPrice}
                  </td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr>
                  <td>KM Out</td>
                  <td>{contract.result[0].kmOut}</td>
                  <td>KM In</td>
                  <td>{data.kmIn}</td>
                  <td>Extra KM</td>
                  <td>{extraKm}</td>
                  <td>Price</td>
                  <td>{extraKmPrice > extraKmLimit ? extraKmPrice : 0}</td>
                </tr>
                <tr></tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Total</td>
                  <td>{total}</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Loyality/Pricelist</td>
                  <td className="red">00.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Discount</td>
                  <td className="red">00.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Accessories</td>
                  <td>{accessoryPrice}</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Total Rent</td>
                  <td>{totalRent}</td>
                </tr>
              </AccountTable>
            </ReturnContainer>
          )}

          {Number(data.kmIn) > contract.result[0].kmOut && (
            <ReturnContainer>
              <Title color={colors.nafethBlue}>
                <h2>Summary</h2>
              </Title>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Total Rent"
                    type="text"
                    value={totalRent}
                    variant="filled"
                    disabled={true}
                  />

                  <InputComponent
                    label="Other Charge"
                    placeholder="100000017"
                    type="text"
                    value={"0.00"}
                    variant="filled"
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />

                  <InputComponent
                    label="Net Total"
                    type="text"
                    variant="filled"
                    value={netTotal}
                    disabled={true}
                    name={"name_en"}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Gross Total"
                    placeholder="100000017"
                    type="text"
                    variant="filled"
                    value={grossTotal}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />{" "}
                  <InputComponent
                    label="VAT"
                    placeholder="100000017"
                    type="text"
                    value={vat}
                    name={"name_en"}
                    variant="filled"
                    disabled={true}
                    required={true}
                  />
                  <InputComponent
                    label="Refunded"
                    placeholder="100000017"
                    type="text"
                    variant="filled"
                    value={"0.00"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />
                </FormBox>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Paid"
                    placeholder="100000017"
                    type="text"
                    variant="filled"
                    value={"0.00"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />
                  <InputComponent
                    label="Discount"
                    placeholder="10"
                    onChange={handleChange}
                    type="text"
                    name={"discount"}
                    required={true}
                  />
                  <TextField
                    select
                    label="PaymentType"
                    name="Category"
                    required
                  >
                    {payment.map((option) => (
                      <MenuItem
                        key={option.value}
                        value={option.value}
                        onClick={() => onBankChange(option.value)}
                      >
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox color={isTheme().color} className="comments">
                  <InputComponent
                    label="Comments"
                    placeholder=""
                    type="text"
                    name={"comments"}
                    required={true}
                    multiline={true}
                    rows={1}
                  />
                </FormBox>
              </FormBoxWrapper>
              {isbank && (
                <FormBoxWrapper>
                  <FormBox color={isTheme().color} className="bank-name">
                    <InputComponent
                      label="Transaction Number"
                      placeholder="445522667"
                      type="text"
                      name={"name_en"}
                      required={true}
                    />
                    <TextField select label="Bank" name="Category" required>
                      {bank.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <InputComponent
                      label="Transaction Date"
                      type="date"
                      variant="filled"
                      name={"name_en"}
                      required={true}
                    />
                  </FormBox>
                </FormBoxWrapper>
              )}
            </ReturnContainer>
          )}
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="add-customer-save-button"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              PayNow
            </Button>
            <Button
              variant="contained"
              color="success"
              className="paylater-button"
              type="submit"
            >
              PayLater
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
    </ReturnContainer>
  );
};
export default ReturnContract;
