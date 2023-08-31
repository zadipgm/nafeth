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
import Swal from "sweetalert2";
import CashSvg from "@/public/icons/payments";
const ReturnContract = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const [kmOut, setKmOut] = React.useState("");
  const [isbank, setIsbank] = React.useState(false);
  const onBankChange = (type: string) => {
    if (type === "Bank Transfer" || type === "Sadad") {
      setIsbank(true);
    } else {
      setIsbank(false);
    }
  };

  const handleSubmit = () => {
    Swal.fire("Thank you!", "Contract has been Close!.", "success");
    setTimeout(() => {
      router.push("/individualcontracts");
    }, 800);
  };
  const hanldeChange = (e: { target: { value: any } }) => {
    let value = e.target.value;
    setKmOut(value);
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
                placeholder="100000017"
                type="text"
                value={"10064"}
                name={"name_en"}
                disabled={true}
                required={true}
              />

              <InputComponent
                label="Price List"
                placeholder="100000017"
                type="text"
                value={"Testing"}
                name={"name_en"}
                disabled={true}
                required={true}
              />

              <InputComponent
                label="Issue Branch"
                placeholder="100000017"
                type="text"
                value={"Head Branch"}
                name={"name_en"}
                disabled={true}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="Customer Name"
                placeholder="100000017"
                type="text"
                value={"Muhammad zeshan"}
                name={"name_en"}
                disabled={true}
                required={true}
              />{" "}
              <InputComponent
                label="Make/ Model"
                placeholder="100000017"
                type="text"
                value={"Saic Motor/MG5"}
                name={"name_en"}
                disabled={true}
                required={true}
              />
              <InputComponent
                label="KM Out"
                placeholder="100000017"
                type="text"
                // onChange={(e) => hanldeChange(e)}
                onBlur={(e) => hanldeChange(e)}
                name={"name_en"}
                required={true}
              />
            </FormBox>
            <FormBox color={isTheme().color}>
              <InputComponent
                label="KM In"
                placeholder="100000017"
                type="text"
                value={"1"}
                name={"name_en"}
                disabled={true}
                required={true}
              />

              <InputComponent
                label="Return Date"
                type="date"
                name={"name_en"}
                required={true}
              />
              <TextField select label="Evaluation" name="Category" required>
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
              <TextField select label="Status" name="Category" required>
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
                <CarDetailsSubTitle>120.00</CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Daily limit of km</CarDetailsTitle>
                <CarDetailsSubTitle>200.00</CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Free Hours </CarDetailsTitle>
                <CarDetailsSubTitle>01.00</CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Extra hours</CarDetailsTitle>
                <CarDetailsSubTitle>03.00</CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle>Extra hourly rate</CarDetailsTitle>
                <CarDetailsSubTitle>50.00</CarDetailsSubTitle>
              </RentListItem>
              <RentListItem>
                <CarDetailsTitle> Extra KM Price</CarDetailsTitle>
                <CarDetailsSubTitle>05.00</CarDetailsSubTitle>
              </RentListItem>
            </RentList>
          </ReturnContainer>
          {kmOut.length > 0 && (
            <ReturnContainer>
              <Title color={colors.nafethBlue}>
                <h2>Rent Account</h2>
              </Title>
              <AccountTable>
                <tr>
                  <td>Return Date</td>
                  <td>2023-07-23</td>
                  <td>Issue Date</td>
                  <td>2023-07-23</td>
                  <td>Number of days</td>
                  <td>466</td>
                  <td>Price</td>
                  <td>3666</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr>
                  <td>Check-in time</td>
                  <td>17:07</td>
                  <td>Checkout time</td>
                  <td>11:18</td>
                  <td>Extra time</td>
                  <td>N/A</td>
                  <td>Price</td>
                  <td>100.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr>
                  <td>KM In</td>
                  <td> 2100</td>
                  <td>KM Out</td>
                  <td> 2200</td>
                  <td>Extra KM</td>
                  <td>N/A</td>
                  <td>Price</td>
                  <td>0.00</td>
                </tr>
                <tr></tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Total</td>
                  <td>3300.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Loyality/Pricelist</td>
                  <td>330.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Discount</td>
                  <td>00.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Accessories</td>
                  <td>00.00</td>
                </tr>
              </AccountTable>
              <AccountTable>
                <tr className="last-table">
                  <td>Total Rent</td>
                  <td>2970.00</td>
                </tr>
              </AccountTable>
            </ReturnContainer>
          )}
          {kmOut.length > 0 && (
            <ReturnContainer>
              <Title color={colors.nafethBlue}>
                <h2>Payment History</h2>
              </Title>
              <>
                <>
                  <Unpaid>UnPaid</Unpaid>
                  <RentList className="payment-detail">
                    {[1, 2].map((i) => {
                      return (
                        <>
                          <RentListItem>
                            <CashSvg
                              width="30px"
                              height="30px"
                              fill={colors.red}
                            />
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>#</CarDetailsTitle>
                            <CarDetailsSubTitle>{i}</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle> Receipt Type</CarDetailsTitle>
                            <CarDetailsSubTitle>
                              {" "}
                              Receivables
                            </CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Activity</CarDetailsTitle>
                            <CarDetailsSubTitle>Penality</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Date </CarDetailsTitle>
                            <CarDetailsSubTitle>28/08/2023</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Comments</CarDetailsTitle>
                            <CarDetailsSubTitle>test</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Amount</CarDetailsTitle>
                            <CarDetailsSubTitle>50.00</CarDetailsSubTitle>
                          </RentListItem>
                        </>
                      );
                    })}
                  </RentList>
                </>
                <div>
                  <Paid>Paid</Paid>
                  <RentList className="payment-details">
                    {[1, 2, 3].map((i) => {
                      return (
                        <>
                          <RentListItem>
                            <CashSvg
                              width="30px"
                              height="30px"
                              fill={colors.green}
                            />
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>#</CarDetailsTitle>
                            <CarDetailsSubTitle>{i}</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle> Payment Date</CarDetailsTitle>
                            <CarDetailsSubTitle> 28/08/2023</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Activity</CarDetailsTitle>
                            <CarDetailsSubTitle>Violation</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Receipt No </CarDetailsTitle>
                            <CarDetailsSubTitle>AR10167</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Payment Type</CarDetailsTitle>
                            <CarDetailsSubTitle>1</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Branch</CarDetailsTitle>
                            <CarDetailsSubTitle>Head</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Username</CarDetailsTitle>
                            <CarDetailsSubTitle>admin</CarDetailsSubTitle>
                          </RentListItem>
                          <RentListItem>
                            <CarDetailsTitle>Amount</CarDetailsTitle>
                            <CarDetailsSubTitle>50.00</CarDetailsSubTitle>
                          </RentListItem>
                        </>
                      );
                    })}
                  </RentList>
                </div>
              </>
            </ReturnContainer>
          )}
          {kmOut.length > 0 && (
            <ReturnContainer>
              <Title color={colors.nafethBlue}>
                <h2>Summary</h2>
              </Title>
              <FormBoxWrapper>
                <FormBox color={isTheme().color}>
                  <InputComponent
                    label="Total Rent"
                    placeholder="100000017"
                    type="text"
                    value={"2900"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />

                  <InputComponent
                    label="Other Charge"
                    placeholder="100000017"
                    type="text"
                    value={"0.00"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />

                  <InputComponent
                    label="Net Total"
                    type="text"
                    value={"3401.00"}
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
                    value={"2700"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />{" "}
                  <InputComponent
                    label="VAT"
                    placeholder="100000017"
                    type="text"
                    value={"443.41"}
                    name={"name_en"}
                    disabled={true}
                    required={true}
                  />
                  <InputComponent
                    label="Refunded"
                    placeholder="100000017"
                    type="text"
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
                    value={"0.00"}
                    name={"name_en"}
                    disabled={true}
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
                  <InputComponent
                    label="Comments"
                    placeholder=""
                    type="text"
                    name={"days"}
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
                    <TextField
                      select
                      label="PaymentType"
                      name="Category"
                      required
                    >
                      {bank.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <InputComponent
                      label="Transaction Date"
                      type="date"
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
              onClick={() => handleSubmit()}
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
