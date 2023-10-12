import { isTheme } from "@/_helpers/getTheme";
import CarPlate from "@/components/CarRental/CarPlate";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  ButtonWrapper,
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import {
  bank,
  carplate,
  payment,
  paymentActivity,
  paymentCategory,
  user,
} from "@/global/fakeData";
import { Box, Button, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { AddPaymentContainer, CarPlateWrapper } from "../style";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";

import { useAppData } from "@/context/paymentLookupContext";
import { AppContexts } from "@/models/appContext";
import { fetchData } from "@/api/fetchapis/fetchData";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { ILookUp } from "@/models/lookup";
import ModalComponent from "@/reuseableComponents/modal";
import ContractListView from "@/components/contracts/contractListView";
import ShortListView from "@/reuseableComponents/ShortListView.tsx";
const AddPayment = () => {
  const { locale } = useTheme();
  const [open, setOpen] = React.useState(false);
  const AppDataContext: AppContexts = useAppData();
  console.log("dataaaaa", AppDataContext);
  const [category, setCategory] = React.useState(0);
  const [payments, setPayments] = React.useState("");
  const [activity, setActivity] = React.useState<ILookUp>();
  const [c_number, setC_number] = React.useState();
  const [modalData, setModalData] = React.useState();
  const handleOpen = () => {
    let username = getName() as string;
    let password = getPassword() as string;
    let company = getCompany() as string;
    fetchData(
      username,
      password,
      `/contracts/Individual?search=${c_number}`,
      company
    ).then((data) => setModalData(data));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCategoryField = async (e: any) => {
    let id = e.target.value;
    let username = getName() as string;
    let password = getPassword() as string;
    let company = getCompany() as string;
    await fetchData(
      username,
      password,
      `/lookup/PaymentActivity/${id}`,
      company
    ).then((data) => setActivity(data));
    setCategory(id);
  };
  const { colors } = useTheme();
  const router = useRouter();
  console.log("here is iddd", modalData);
  return (
    <AddPaymentContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>Add New Payment</h2>
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
          // onSubmit={(e) => handleSubmit(e)}
        >
          <FormBoxWrapper>
            <FormBox color={isTheme().color}>
              <InputField
                label="Date"
                type="date"
                name={"date"}
                defaultValue={formattedDate(new Date())}
                //   onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Type"
                name="type"
                // onChange={handleChange}
                defaultValue={""}
                required
              >
                <>
                  <option value="" disabled>
                    Select Type
                  </option>
                  {AppDataContext?.paymentType?.result.map((option) => (
                    <option key={option.name_en} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Category"
                name="category"
                onChange={handleCategoryField}
                defaultValue={""}
                required
              >
                <>
                  <option value="" disabled>
                    Select Category
                  </option>
                  {AppDataContext?.paymentCategory?.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label="Activity"
                name="Activity"
                // onChange={handleChange}
                defaultValue={""}
                required
              >
                <>
                  {activity?.result?.map((option) => (
                    <option key={option.name_en} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              {Number(category) === 1 && (
                <>
                  <InputField
                    label="Contract Number"
                    type="number"
                    name={"contract_number"}
                    onChange={(e) => setC_number(e.target.value)}
                    required={true}
                  />
                  <ButtonWrapper className="contract-search-payment">
                    <Button variant="contained" onClick={handleOpen}>
                      Search
                    </Button>
                  </ButtonWrapper>

                  <InputField
                    label="Cutomer Name"
                    type="text"
                    name={"Cutomer Name"}
                    //   onChange={handleChange}
                    required={true}
                  />
                  <CarPlateWrapper>
                    <CarPlate car={carplate} />
                  </CarPlateWrapper>
                </>
              )}
              {Number(category) === 3 && (
                <>
                  <SelectField
                    label="Employee/User"
                    name="user"
                    // onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    <>
                      {user.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </>
                  </SelectField>
                </>
              )}
              {Number(category) === 4 && (
                <>
                  <InputField
                    label="Customer Name"
                    type="text"
                    name={"Customer Name"}
                    //   onChange={handleChange}
                    required={true}
                  />
                </>
              )}
              {Number(category) === 5 && (
                <>
                  <InputField
                    label="Car Plate Number"
                    type="text"
                    name={"Carplatenumber"}
                    //   onChange={handleChange}
                    required={true}
                  />
                </>
              )}
              <ModalComponent open={open} handleClose={handleClose} size={"md"}>
                <>
                  <ShortListView
                    contracts={AppDataContext?.contracts}
                    customers={AppDataContext?.Customers}
                    cars={AppDataContext?.cars}
                    close={handleClose}
                  />
                </>
              </ModalComponent>
              <InputField
                label="Amount"
                type="text"
                name={"Amount"}
                defaultValue={"0"}
                //   onChange={handleChange}
                required={true}
              />
              <SelectField
                label="Payment Type"
                name="PaymentType"
                // onChange={handleChange}
                defaultValue={""}
                required
              >
                <>
                  {payment.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      // onClick={() => handlepaymentField(option.value)}
                    >
                      {option.label}
                    </option>
                  ))}
                </>
              </SelectField>
              {payments !== "Cheque" && (
                <InputField
                  label="Tranaction Date"
                  type="date"
                  name={"tranactionDate"}
                  defaultValue={formattedDate(new Date())}
                  //   onChange={handleChange}
                  required={true}
                />
              )}
              {payments === "Cheque" && (
                <InputField
                  label="Check Date"
                  type="date"
                  name={"checkDate"}
                  defaultValue={formattedDate(new Date())}
                  //   onChange={handleChange}
                  required={true}
                />
              )}
              {payments === "Sadad" || payments === "Bank Transfer" ? (
                <InputField
                  label="Tranaction Number"
                  type="text"
                  placeholder="123456"
                  name={"Tranaction Number"}
                  //   onChange={handleChange}
                  required={true}
                />
              ) : (
                ""
              )}
              {payments === "Cheque" && (
                <InputField
                  label="Check Number"
                  type="text"
                  placeholder="123456"
                  name={"check Number"}
                  //   onChange={handleChange}
                  required={true}
                />
              )}
              {payments === "Sadad" ||
              payments === "Bank Transfer" ||
              payments === "Cheque" ? (
                <SelectField
                  label="Bank Name"
                  name="Bank Name"
                  // onChange={handleChange}
                  defaultValue={""}
                  required
                >
                  <>
                    {bank.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        // onClick={() => hanldeCategoryID(option.id)}
                      >
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
              ) : (
                ""
              )}
              <InputField
                label="Comments"
                type="text"
                name={"Comments"}
                //   onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              className="add-car-save-button"
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
        </Box>
      </FormWrapper>
    </AddPaymentContainer>
  );
};
export default AddPayment;
