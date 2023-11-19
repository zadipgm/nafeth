import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  ModalHeader,
  OTPPhone,
  OTPSent,
  OTPText,
  OTpWrapper,
  RentContainer,
} from "../style";
import AddIcon from "@mui/icons-material/Add";
import {
  FormBox,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import SelectedCar from "./selectedCar";
import SelectedCustomer from "./selectedCustomer";
import CashSvg from "@/public/icons/payments";
import CheckSvg from "@/public/icons/checkSvg";
import Swal from "sweetalert2";
import ModalComponent from "@/reuseableComponents/modal";
import CustomPrice from "./customprice";
import AddAccessories from "./addAccessories";
import { ICustomers, customer } from "@/models/customers";
import { ICarModel } from "@/models/carmodel";
import { Icustomprice } from "@/models/customerPrice";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { createPost } from "@/api/postApis/createBranch";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { GetDateFromDays, NumOfDays } from "@/_helpers/getDays";
import InputField from "@/reuseableComponents/customInputField/input";
import { customersKeys } from "@/constants";
import DataTable from "@/reuseableComponents/DataTable";
import {
  Amount,
  Description,
  RentSummary,
  Summary,
} from "@/components/contracts/style";
import { rentObj } from "@/global/fakeData";
import SelectField from "@/reuseableComponents/customeSelectField/select";
import { useRentCarData } from "@/context/rentPageLookup";
import { IRentPageContext } from "@/models/IRentPageContext";
import CarCheckList from "./CarCheckList";
import CarSignature from "./CarSignature";
import CloseSvg from "@/public/icons/closeSvg";
import OTPInput from "../otpComponent";
import SwitchesComponent from "@/reuseableComponents/toggleButton";
interface IProps {
  car: ICarModel;
}
const RentCar = ({ car }: IProps) => {
  const { colors, translations, locale } = useTheme();
  const RentPageContext: IRentPageContext = useRentCarData();

  const router = useRouter();
  const [openCustomPrice, setOpenCustomPrice] = React.useState(false);
  let initialReturnDate = GetDateFromDays(1);
  const [returnDate, setReturnDate] = React.useState(initialReturnDate);
  const [isCustomerOpen, setIsCustomerOpen] = React.useState(false);
  const [isDriverOpen, setIsDriverOpen] = React.useState(false);
  const [ShowContractDetials, setShowContractDetials] = React.useState(false);
  const [totalDays, setTotalDays] = React.useState(1);
  const [accessories, setAccessories] = React.useState(false);
  const [customPrice, setCustomPrice] = React.useState<Icustomprice>();
  const [caraccessories, setCaraccessories] = React.useState<string[]>([]);
  const [customer, setCustomer] = React.useState<ICustomers | any>();
  const [driver, setDriver] = React.useState<ICustomers | any>();
  const [data, setData] = React.useState(rentObj);
  const [inNafeth, setInNafeth] = React.useState(false);
  const [openOtp, setOpenOtp] = React.useState(false);
  const [otpResponse, setOtpResponse] = React.useState("");
  const [carMarkerList, setCarMarkerList] = React.useState([]);
  const [carSignature, setCarSignature] = React.useState("");
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
    let filterCustomer = RentPageContext?.customer?.result.filter(
      (item) => item.id === number
    );
    setCustomer(filterCustomer);
  };
  const hanldeAutInTajeer = () => {
    setShowContractDetials(true);
    setInNafeth(false);
  };
  const hanldeAutInNafeth = () => {
    setShowContractDetials(true);
    setInNafeth(true);
  };
  //driver Functions-----------------
  const handleOpenDriver = () => {
    setIsDriverOpen(true);
  };
  const handleCloseDriver = () => {
    setIsDriverOpen(false);
  };
  const onSelectDriver = (number: number) => {
    let filterDriver = RentPageContext?.customer?.result.filter(
      (item) => item.id === number
    );
    setDriver(filterDriver);
  };
  ////input field onchange Function-----------------
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleChangeDays = (e: { target: { value: any } }) => {
    let days = Number(e.target.value);
    let newReturnDate = GetDateFromDays(days === 0 ? 1 : days);
    setTotalDays(days);
    setReturnDate(newReturnDate);
  };
  const handleChangeReturnDate = (e: { target: { value: any } }) => {
    // debugger;
    let date = new Date(e.target.value);
    let newDays = NumOfDays(data.issueDate, date);
    let truncDays = Math.trunc(newDays);
    setReturnDate(`${date}`);
    setTotalDays(truncDays);
  };
  // car marker list Function
  const hanldeCarMarker = (marker: any) => {
    setCarMarkerList(marker);
  };
  // car signature Function
  const hanldeCarSignature = (sig: any) => {
    setCarSignature(sig);
  };
  // OTP Function
  const openOtpModal = () => {
    setOpenOtp(true);
  };
  const closeOtpModal = () => {
    setOpenOtp(false);
  };
  const handleOTPSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let body = {};
  };
  // hanlde sendTajeer
  const handleSendTajeer = (e: { target: { name: any; checked: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.checked === true ? "Y" : "N",
    });
  };
  //submit Functions-----------------
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let markerobj = carMarkerList.filter((m: any) => m.x != "" && m.y != "");
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
      actualReturnDate: formattedDate(returnDate),
      actualTotalDays: totalDays,
      issueComments: data.issueComments,
      issueBranchID: 1,
      issueBy: userName,
      promotionDiscount: data.promotionDiscount,
      accessoriesID: caraccessories.toLocaleString(),
      tajeer_FuelType: data.tajeer_FuelType.toString(),
      tajeer_FuelLevel: data.tajeer_FuelLevel.toString(),
      tajeer_OilType: data.tajeer_OilType,
      tajeer_OilchangeDate: data.tajeer_OilchangeDate,
      tajeer_OilChangeKM: Number(data.tajeer_OilChangeKM),
      tajeer_Odometer: Number(data.tajeer_Odometer),
      tajeer_AC: data.tajeer_AC.toString(),
      tajeer_Stereo: data.tajeer_Stereo.toString(),
      tajeer_Screen: data.tajeer_Screen.toString(),
      tajeer_Speedometer: data.tajeer_Speedometer.toString(),
      tajeer_CarSeat: data.tajeer_CarSeat.toString(),
      tajeer_SpareTire: data.tajeer_SpareTire.toString(),
      tajeer_SpareTireTools: data.tajeer_SpareTireTools.toString(),
      tajeer_Tires: data.tajeer_Tires.toString(),
      tajeer_FirstAid: data.tajeer_FirstAid.toString(),
      tajeer_Keys: data.tajeer_Keys.toString(),
      tajeer_FireExtinguisher: data.tajeer_FireExtinguisher.toString(),
      tajeer_SafetyTriangle: data.tajeer_SafetyTriangle.toString(),
      tajeer_Signature: carSignature,
      tajeer_CheckList: JSON.stringify(markerobj),
      tajeer_ContractType: data.tajeer_ContractType,
      tajeer_RentPolicy: data.tajeer_RentPolicy,
      Tajeer_GeographicalArea: "0",
      tajeer_Returnbranch: data.tajeer_Returnbranch,
      tajeer_send: data.tajeer_send,
      tajeer_nafethsign: inNafeth ? "Y" : "N",
      paymentmethod: " 2",
    };
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
          if (res.data?.message == "Success") {
            if (data.tajeer_send === "N") {
              setOpenOtp(false);
              Swal.fire("Thank you!", "Contract has been Created!.", "success");
              router.push("/individualcontracts");
            } else {
              setOtpResponse(res.data?.result);
              setOpenOtp(true);
            }
          } else {
            console.log(res);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: `${res.data?.message}`,
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
    ) * totalDays;
  //filter selected accessories
  let filteredAccessory = RentPageContext?.accessories.result.filter((item) =>
    caraccessories.includes(`${item.id}`)
  );
  //total accessories cost
  let totalAccesoriesCost = filteredAccessory?.reduce(
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
    <>
      <RentContainer>
        <Title color={colors.sideBarBgColor}>
          <h2>{translations?.selectedCar}</h2>
        </Title>
      </RentContainer>
      {/* ------------------selected Car------------------ */}
      <Box
        component="form"
        sx={{
          width: "100%",
          maxWidth: "100%",
          // padding: "15px",
        }}
        noValidate={false}
        autoComplete="on"
        onSubmit={handleSubmit}
        // onSubmit={(e) => hanldelSubmitBill(e)}
      >
        <>
          <SelectedCar
            car={car}
            customPrice={customPrice as Icustomprice}
            onChange={handleChange}
            tajeerData={RentPageContext?.tajeerDropdownLookupData}
            speedometer_Keys={RentPageContext?.speedometer_Keys}
            fuelType={RentPageContext?.fuelType}
            availableFuel={RentPageContext?.availableFuel}
            carSeats={RentPageContext?.carSeats}
            acStereoData={RentPageContext?.acStereoData}
          />

          {/* ------------------Add Accessory Modal------------------ */}
          <ModalComponent
            open={accessories}
            handleClose={handleAddAccessoryClose}
            size={"md"}
          >
            <AddAccessories
              setAccessories={setAccessories}
              getCar_accessories={getCar_accessories}
              car_accessories={RentPageContext?.accessories}
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
                <ArrowCircleSvg
                  width="15px"
                  height="15px"
                  fill={colors.white}
                />
              }
            >
              {translations?.addCustomer}
            </Button>
            <Button
              variant="contained"
              className="custom-price-button"
              onClick={() => handleOpenCutomPrice()}
              endIcon={
                <CashSvg width="15px" height="15px" fill={colors.white} />
              }
            >
              {translations?.customePrice}
            </Button>
            <Button
              variant="contained"
              className="add-accessories-button"
              onClick={handleAddAccessory}
              endIcon={
                <AddIcon width="15px" height="15px" fill={colors.white} />
              }
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
              data={RentPageContext?.customer.result}
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
              <SelectedCustomer
                customer={customer as customer}
                type={"customer"}
              />
            </RentContainer>
          )}
          {/* ------------------Add Driver modal------------------ */}
          <ModalComponent
            open={isDriverOpen}
            handleClose={handleCloseDriver}
            size={"md"}
          >
            <DataTable
              classname="small_size"
              data={RentPageContext?.customer.result}
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
            <RentContainer className="driver-container">
              <Title color={colors.purple}>
                <h2>{translations?.selectedDriver}</h2>
              </Title>
              <SelectedCustomer customer={driver as customer} type={"driver"} />
            </RentContainer>
          )}
          {customer?.length > 0 && (
            <GroupButtons className="rent-car-group-button">
              <Button
                variant="contained"
                className="arrow"
                onClick={hanldeAutInTajeer}
                endIcon={
                  <ArrowCircleSvg
                    width="15px"
                    height="15px"
                    fill={colors.white}
                  />
                }
              >
                {translations?.authenticateOnTajeer}
              </Button>
              <Button
                variant="contained"
                className="arrow"
                onClick={hanldeAutInNafeth}
                endIcon={
                  <ArrowCircleSvg
                    width="15px"
                    height="15px"
                    fill={colors.white}
                  />
                }
              >
                {translations?.authenticateInNafeth}
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

          {/* ------------------Add contract detail------------------ */}
          {ShowContractDetials && (
            <>
              <RentContainer className="contract-details">
                <Title color={colors.sideBarBgColor}>
                  <h2>{translations?.contractDetail}</h2>
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
                    value={formattedDate(returnDate)}
                    onChange={handleChangeReturnDate}
                    name={"actualReturnDate"}
                    required={true}
                  />
                  <InputField
                    label={translations?.days as string}
                    placeholder=""
                    type="text"
                    onChange={handleChangeDays}
                    value={totalDays}
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

                  <SelectField
                    label={translations?.contractType as string}
                    name="tajeer_ContractType"
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectContractType as string}
                      </option>
                      {RentPageContext.tajeer_Contracttype?.result.map(
                        (option) => (
                          <option key={option.id} value={option.id}>
                            {option[`name_${locale}`]}
                          </option>
                        )
                      )}
                    </>
                  </SelectField>
                  <SelectField
                    label={translations?.rentpolicy as string}
                    name={"tajeer_RentPolicy"}
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseRentPolicy as string}
                      </option>
                      {RentPageContext &&
                        JSON.parse(
                          RentPageContext?.tajeerrentpolicy.result.value
                        ).map((option: any) => (
                          <option key={option.id} value={option.id}>
                            {option.earlyReturnPolicy}
                          </option>
                        ))}
                    </>
                  </SelectField>
                  <SelectField
                    label={translations?.allowedgeographicalarea as string}
                    name={"Tajeer_GeographicalArea"}
                    onChange={handleChange}
                    defaultValue={""}
                    required={false}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectGeoArea as string}
                      </option>
                      {RentPageContext &&
                        JSON.parse(
                          RentPageContext.tajeerextendedcoverage?.result.value
                        ).map((option: any) => (
                          <option key={option.id} value={option.id}>
                            {option[`name_${locale}`]}
                          </option>
                        ))}
                    </>
                  </SelectField>
                  <SelectField
                    label={translations?.returnBranch as string}
                    name={"tajeer_Returnbranch"}
                    onChange={handleChange}
                    defaultValue={""}
                    required={true}
                  >
                    <>
                      <option value={""} disabled>
                        {translations?.pleaseSelectBranch as string}
                      </option>
                      {RentPageContext.tajeer_Branches?.result.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option[`name_${locale}`]}
                        </option>
                      ))}
                    </>
                  </SelectField>
                  <CarCheckList hanldeCarMarker={hanldeCarMarker} />
                  {inNafeth && (
                    <CarSignature hanldeCarSignature={hanldeCarSignature} />
                  )}
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
              <RentContainer className="rent_summary">
                <Title color={colors.sideBarBgColor}>
                  <h2>{translations?.pricing}</h2>
                </Title>
                <Summary className="summary">
                  <RentSummary className="summary">
                    <Description className="des">
                      {translations?.description}
                    </Description>
                    <Amount className="des">{translations?.ammount}</Amount>
                  </RentSummary>
                  <RentSummary>
                    <Description>{translations?.totalRentedCost}</Description>
                    <Amount>{totalRentedCost}</Amount>
                  </RentSummary>
                  <RentSummary>
                    <Description>
                      {translations?.totalAccessoriesCost}
                    </Description>
                    <Amount className="positive">{totalAccesoriesCost}</Amount>
                  </RentSummary>
                  <RentSummary className="net_total">
                    <Description className="total_amount">
                      {translations?.totalCost}
                    </Description>
                    <Amount className="total_amount">{totalCost}</Amount>
                  </RentSummary>
                  <RentSummary>
                    <Description>{translations?.advanceAmount}</Description>
                    <Amount className="negetive">{data.advanceAmount}</Amount>
                  </RentSummary>
                  <RentSummary className="net_total">
                    <Description className="total_amount">
                      {translations?.remainingCost}
                    </Description>
                    <Amount className="total_amount">{remianingCost}</Amount>
                  </RentSummary>
                </Summary>
              </RentContainer>
              <SwitchesComponent
                title={"Send Data to Tajeer" as string}
                info={""}
                onchange={(e) => handleSendTajeer(e)}
                name={"tajeer_send"}
                value={data.tajeer_send}
                classname="tajeer-send"
                defaultChecked={data.tajeer_send === "Y" ? true : false}
              />
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
                <ModalComponent
                  open={openOtp}
                  handleClose={closeOtpModal}
                  classname="otp-modal"
                >
                  <>
                    <Box
                      component="form"
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                        // padding: "15px",
                      }}
                      noValidate={false}
                      autoComplete="on"
                      onSubmit={handleOTPSubmit}
                    >
                      <OTPText>
                        <OTPSent
                          dangerouslySetInnerHTML={{ __html: otpResponse }}
                        >
                          {}
                        </OTPSent>
                      </OTPText>
                      <OTpWrapper>
                        <InputField
                          label="Enter OTP"
                          placeholder="xxxxxx..."
                          // onChange={}
                          required={true}
                          type="text"
                          classname="otp-class"
                        />
                        <GroupButtons>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                          >
                            {"Submit"}
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={closeOtpModal}
                          >
                            {translations?.cancel}
                          </Button>
                        </GroupButtons>
                      </OTpWrapper>
                    </Box>
                  </>
                </ModalComponent>
              </GroupButtons>
            </>
          )}
        </>
      </Box>
    </>
  );
};
export default RentCar;
