import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  AccessoriesContainer,
  AccessoriesWrapper,
  BackICon,
  CarDetailsSubTitle,
  CarDetailsTitle,
  CarOtherDetails,
  Colors,
  ModalHeader,
  OtherDetailsList,
  OtherDetailsListItem,
  OtherDetailsTitleWrapper,
  RentContainer,
  RentList,
  RentListItem,
  RentWrapper,
} from "../style";
import AddIcon from "@mui/icons-material/Add";
import SedanSvg from "@/public/icons/Sedan";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useRouter } from "next/router";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import CustomersList from "@/components/customers";
import SelectedCar from "./selectedCar";
import SelectedCustomer from "./selectedCustomer";
import CashSvg from "@/public/icons/payments";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
import {
  category,
  contractType,
  modde,
  payment,
  returnBranch,
} from "@/global/fakeData";
import CheckSvg from "@/public/icons/checkSvg";
import Swal from "sweetalert2";
import UsersSvg from "@/public/icons/USERS";
import CardUserSvg from "@/public/icons/carduserSvg";
import ModalComponent from "@/reuseableComponents/modal";
import CloseSvg from "@/public/icons/closeSvg";
import { ReturnContainer } from "@/components/contracts/style";
import CustomPrice from "./customprice";
import AddAccessories from "./addAccessories";
import EditCustomer from "@/components/customers/edit";
const RentCar = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openCustomPrice, setOpenCustomPrice] = React.useState(false);
  const [isCustomerSelected, setIsCustomerSelected] = React.useState(false);
  const [isCustomerAdded, setIsCustomerAdded] = React.useState(false);
  const [ShowContractDetials, setShowContractDetials] = React.useState(false);
  const [showPricing, setShowPricing] = React.useState(false);
  const [accessories, setAccessories] = React.useState(false);
  var date1 = new Date();
  const [getdate, SetDate] = React.useState(date1);
  const onCustomerSelected = () => {
    setIsCustomerSelected(false);
    setIsCustomerAdded(true);
    setShowContractDetials(false);
    setShowPricing(false);
  };
  const date = new Date(); // Current date

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });
  var date2 = new Date(getdate);

  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const handleSubmit = () => {
    Swal.fire("Thank you!", "Contract has been Created!.", "success");
    setTimeout(() => {
      router.push("/individualcontracts");
    }, 800);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenCutomPrice = () => setOpenCustomPrice(true);
  const handleCloseCutomPrice = () => setOpenCustomPrice(false);
  return (
    <RentContainer>
      <Title color={colors.nafethBlue}>
        <h2>Rent A Car</h2>
      </Title>
      <SelectedCar />
      {accessories && <AddAccessories setAccessories={setAccessories} />}

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
        <CustomPrice handleClose={handleCloseCutomPrice} />
      </ModalComponent>
      {isCustomerSelected && (
        <CustomersList
          addable={true}
          editable={true}
          deleteable={false}
          details={false}
          page_color={colors.nafethBlue}
          title={"Select a Customer"}
          onCustomerSelected={onCustomerSelected}
        />
      )}
      {isCustomerAdded && <SelectedCustomer />}
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
          <Button
            variant="contained"
            color="success"
            className="custom-price-button"
            onClick={() => handleOpen()}
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
      <ModalComponent open={open} handleClose={handleClose} size="xl">
        <>
          <EditCustomer isEditHeader={true} handleClose={handleClose} />
        </>
      </ModalComponent>
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
                    type="text"
                    value={formattedDate}
                    name={"date"}
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="To Date"
                    placeholder=""
                    type="date"
                    onChange={(e) => SetDate(e.target.value)}
                    name={"date"}
                    value={getdate as unknown as string}
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Days"
                    placeholder=""
                    type="text"
                    value={Math.trunc(Difference_In_Days) + 1}
                    name={"days"}
                    required={true}
                    classname="car-contract-details"
                  />
                </FormBox>
              </FormBoxWrapper>
              <FormBoxWrapper>
                <FormBox
                  color={isTheme().color}
                  className="car-contract-dropdown"
                >
                  <TextField
                    select
                    label="Contract Type"
                    name="Category"
                    required
                    className="car-contract-dropdown"
                  >
                    {contractType.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    select
                    label="Returned Branch"
                    required
                    className="car-contract-dropdown"
                  >
                    {returnBranch.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
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
                    name={"days"}
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
                    value={"560"}
                    name={"date"}
                    required={true}
                    disabled={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Total Accessories Cost"
                    placeholder=""
                    type="text"
                    disabled={true}
                    value={0}
                    name={"date"}
                    required={true}
                    classname="car-contract-details"
                  />
                  <InputComponent
                    label="Total Cost"
                    placeholder=""
                    type="text"
                    value={"560"}
                    name={"days"}
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
                    label="Remaining Cost"
                    placeholder=""
                    type="text"
                    value={"560"}
                    name={"days"}
                    disabled={true}
                    required={true}
                    classname="car-contract-cost"
                  />
                  <InputComponent
                    label="Advance Amount"
                    placeholder=""
                    type="text"
                    defaultValue={0}
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
                  <TextField
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
                  </TextField>
                  <TextField
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
                  </TextField>
                </FormBox>
              </FormBoxWrapper>
            </Box>
          </FormWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              className="create-contract-button"
              onClick={() => handleSubmit()}
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
