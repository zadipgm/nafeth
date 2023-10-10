import { isTheme } from "@/_helpers/getTheme";
import CarPlate from "@/components/CarRental/CarPlate";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
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
import InputComponent from "@/reuseableComponents/InputField";
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
import { AddPaymentContainer, CarPlateWrapper } from "../style";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
const AddPayment = () => {
  const [category, setCategory] = React.useState("");
  const [payments, setPayments] = React.useState("");
  const handlefieldsChange = (val: string) => {
    setCategory(val);
    console.log(val);
  };
  const handlepaymentField = (val: string) => {
    setPayments(val);
  };
  const { colors } = useTheme();
  const router = useRouter();
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
              <InputComponent
                label="Date"
                type="date"
                name={"date"}
                defaultValue={formattedDate(new Date())}
                variant="filled"
                //   onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="Category"
                name="category"
                // onChange={handleChange}
                defaultValue={""}
                required
              >
                {paymentCategory.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={() => handlefieldsChange(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {category === "PettyCash" && (
                <>
                  <TextField
                    select
                    label="Employee/User"
                    name="user"
                    // onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    {user.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <InputComponent
                    label="Customer Name"
                    type="text"
                    name={"Customer Name"}
                    //   onChange={handleChange}
                    required={true}
                  />
                </>
              )}
              {category === "Reservation" && (
                <>
                  <InputComponent
                    label="Customer Name"
                    type="text"
                    name={"Customer Name"}
                    //   onChange={handleChange}
                    required={true}
                  />
                  <InputComponent
                    label="Car Plate"
                    type="text"
                    name={"Car Plate"}
                    //   onChange={handleChange}
                    required={true}
                  />
                  <CarPlateWrapper>
                    <CarPlate car={carplate} />
                  </CarPlateWrapper>
                </>
              )}
              {category === "companycontract" || category === "contract" ? (
                <>
                  <TextField
                    select
                    label="Activity"
                    name="activity"
                    // onChange={handleChange}
                    defaultValue={""}
                    required
                  >
                    {paymentActivity.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                  <InputComponent
                    label="Contract Number"
                    type="text"
                    name={"contract_number"}
                    //   onChange={handleChange}
                    required={true}
                  />
                  <InputComponent
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
              ) : (
                ""
              )}
              <InputComponent
                label="Amount"
                type="text"
                name={"Amount"}
                defaultValue={"0"}
                //   onChange={handleChange}
                required={true}
              />
              <TextField
                select
                label="Payment Type"
                name="PaymentType"
                // onChange={handleChange}
                defaultValue={""}
                required
              >
                {payment.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    onClick={() => handlepaymentField(option.value)}
                  >
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {payments !== "Cheque" && (
                <InputComponent
                  label="Tranaction Date"
                  type="date"
                  name={"tranactionDate"}
                  defaultValue={formattedDate(new Date())}
                  variant="filled"
                  //   onChange={handleChange}
                  required={true}
                />
              )}
              {payments === "Cheque" && (
                <InputComponent
                  label="Check Date"
                  type="date"
                  name={"checkDate"}
                  defaultValue={formattedDate(new Date())}
                  variant="filled"
                  //   onChange={handleChange}
                  required={true}
                />
              )}
              {payments === "Sadad" || payments === "Bank Transfer" ? (
                <InputComponent
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
                <InputComponent
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
                <TextField
                  select
                  label="Bank Name"
                  name="Bank Name"
                  // onChange={handleChange}
                  defaultValue={""}
                  required
                >
                  {bank.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      // onClick={() => hanldeCategoryID(option.id)}
                    >
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                ""
              )}
              <InputComponent
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
