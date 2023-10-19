import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import {
  AccountTable,
  Amount,
  Description,
  RentSummary,
  ReturnContainer,
  Summary,
} from "../style";
import { useTheme } from "styled-components";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { bank, evalueation, payment, status } from "@/global/fakeData";
import {
  CarDetailsSubTitle,
  CarDetailsTitle,
  RentList,
  RentListItem,
} from "@/components/CarRental/style";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { IContracts } from "@/models/individualContracts";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { Update } from "@/api/putApis/update";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
import ModalComponent from "@/reuseableComponents/modal";
import CloseSvg from "@/public/icons/closeSvg";
import { useReturnPageData } from "@/context/returnpageContext";
import { IReturnPageContexts } from "@/models/appContext";
import { createPost } from "@/api/postApis/createBranch";
import DataTable from "@/reuseableComponents/DataTable";
import { contractKeys, contractPaymentKeys } from "@/constants";
import { fetchData } from "@/api/fetchapis/fetchData";
import {
  IContractPayment,
  IContractPaymentResult,
} from "@/models/contractPayment";
import ReceiptSummary from "./ReceiptSummary";
import RentAccount from "./RentAccount/inidex";
interface IProps {
  contract: IContracts;
}
const ReturnContract = ({ contract }: IProps) => {
  const returnPage: IReturnPageContexts = useReturnPageData();
  const returnobj = {
    retunDate: formattedDate(new Date()),
    kmIn: "",
    evaluation: "",
    status: "",
    comments: "",
    discount: "",
  };
  const billobj = {
    amount: 0,
    contractNo: 0,
    activity: 0,
    date: formattedDate(new Date()),
    comments: "",
  };
  let userName = getName() as string;
  let userPassword = getPassword() as string;
  let company = getCompany() as string;
  const { colors, locale } = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState(returnobj);
  const [bill, setBill] = React.useState(billobj);
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [contractBill, setContractBill] = React.useState<IContractPayment>();

  const fetchContractPayments = React.useCallback(async () => {
    let url = `/contracts/Individual/${contract.result[0].contractNo}/bills`;
    const res = await fetchData(userName, userPassword, url, company);
    setContractBill(res);
  }, [contractBill, bill]);
  React.useEffect(() => {
    fetchContractPayments();
  }, []);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const hanldeBillChange = (e: { target: { name: any; value: any } }) => {
    setBill({ ...bill, [e.target.name]: e.target.value });
  };
  const hanldelSubmitBill = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let body = {
      amount: bill.amount,
      contractNo: contract.result[0].contractNo,
      activity: bill.activity,
      date: bill.date,
      comments: bill.comments,
    };
    await createPost(
      userName,
      userPassword,
      `contracts/Individual/${contract.result[0].contractNo}/bills`,
      company,
      body
    ).then((res: any) => {
      if (res.status == 200) {
        fetchContractPayments();
        setRefresh(!refresh);
        Swal.fire("Thank you!", "New Bill has been Added!.", "success");
        setOpen(false);
      } else {
        console.log(res);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setOpen(true);
      }
    });
    console.log("contractBill", billobj, refresh);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <FormWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <Box
          component="form"
          sx={{
            width: "100%",
            maxWidth: "100%",
          }}
          noValidate={false}
          autoComplete="on"
        >
          <ReturnContainer className="return-page">
            <Title color={colors.sideBarBgColor}>
              <h2>Contract Details</h2>
            </Title>
            <FormBoxWrapper className="return-page">
              <FormBox color={isTheme().color}>
                <InputField
                  label="Contract Number"
                  type="text"
                  value={contract.result[0].contractNo}
                  disabled={true}
                />
                <InputField
                  label="Price List"
                  type="text"
                  value={12}
                  disabled={true}
                />
                <InputField
                  label="Issue Branch"
                  type="text"
                  value={"main"}
                  disabled={true}
                />
                <InputField
                  label="Customer Name"
                  type="text"
                  value={"zeshan"}
                  disabled={true}
                />{" "}
                <InputField
                  label="Make/ Model"
                  type="text"
                  value={"toyota"}
                  disabled={true}
                />
                <InputField
                  label="KM Out"
                  type="text"
                  value={contract.result[0].kmOut}
                  disabled={true}
                />
                <InputField
                  label="KM In"
                  placeholder="100000017"
                  type="text"
                  onBlur={handleChange}
                  name={"kmIn"}
                  required={true}
                />
                <InputField
                  label="Return Date"
                  type="date"
                  onChange={handleChange}
                  defaultValue={data.retunDate}
                  name={"retunDate"}
                  required={true}
                />
                <SelectField
                  label="Evaluation"
                  name="evaluation"
                  required
                  onChange={handleChange}
                >
                  <>
                    {evalueation.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SelectField
                  label="Status"
                  name="status"
                  required
                  onChange={handleChange}
                >
                  <>
                    {status.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
              </FormBox>
            </FormBoxWrapper>
          </ReturnContainer>
          <ReturnContainer>
            <Title color={colors.sideBarBgColor}>
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
            <>
              <RentAccount />
              <GroupButtons className="add-bill-button">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                >
                  Add Bill
                </Button>
              </GroupButtons>
              <ModalComponent open={open} handleClose={handleClose}>
                <>
                  <FormWrapper
                    bcolor={isTheme().bcolor}
                    color={isTheme().color}
                  >
                    <Box
                      component="form"
                      sx={{
                        width: "100%",
                        maxWidth: "100%",
                        padding: "15px",
                      }}
                      noValidate={false}
                      autoComplete="on"
                      onSubmit={(e) => hanldelSubmitBill(e)}
                    >
                      <FormBoxWrapper>
                        <div onClick={handleClose} className="close-icon">
                          <CloseSvg fill={colors.sideBarBgColor} />
                        </div>
                        <FormBox>
                          <InputField
                            label="Date"
                            type="date"
                            onChange={hanldeBillChange}
                            defaultValue={formattedDate(new Date())}
                            name={"date"}
                            required={true}
                          />
                          <SelectField
                            label="Activity"
                            name="activity"
                            required={true}
                            defaultValue={0}
                            onChange={hanldeBillChange}
                          >
                            <>
                              <option value={0} disabled>
                                Select Activity..
                              </option>
                              {returnPage?.activity?.result.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option[`name_${locale}`]}
                                </option>
                              ))}
                            </>
                          </SelectField>

                          <InputField
                            label="Amount"
                            type="number"
                            onChange={hanldeBillChange}
                            defaultValue={"0"}
                            name={"amount"}
                            required={true}
                          />
                          <InputField
                            label="Comments"
                            placeholder=""
                            type="text"
                            onChange={hanldeBillChange}
                            name={"comments"}
                            required={true}
                          />
                        </FormBox>
                      </FormBoxWrapper>
                      <GroupButtons>
                        <Button
                          variant="contained"
                          color="success"
                          className="paylater-button"
                          type="submit"
                        >
                          Add
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleClose}
                        >
                          Cancel
                        </Button>
                      </GroupButtons>
                    </Box>
                  </FormWrapper>
                </>
              </ModalComponent>
            </>
          )}
          {Number(data.kmIn) > contract.result[0].kmOut && (
            <>
              {contractBill?.result?.length! > 0 && (
                <ReturnContainer>
                  <Title color={colors.sideBarBgColor}>
                    <h2>Bills</h2>
                  </Title>
                  <DataTable
                    data={contractBill?.result}
                    isDeleteAble={false}
                    isEditAble={false}
                    isViewAble={false}
                    isDuplicate={false}
                    page_color={colors.sideBarBgColor}
                    size="400px"
                    showFilter={false}
                    showAddButton={false}
                    keys={contractPaymentKeys}
                  />
                </ReturnContainer>
              )}
              <ReceiptSummary />
              <GroupButtons className="return_page_buttons">
                <Button
                  variant="contained"
                  color="success"
                  className="add-customer-save-button"
                  // type="submit"
                  // onClick={(e) => handleSubmit(e)}
                >
                  Return With Full Payment
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  className="paylater-button"
                  // type="submit"
                >
                  Return only
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => router.back()}
                >
                  Cancel
                </Button>
              </GroupButtons>
            </>
          )}
        </Box>
      </FormWrapper>
    </>
  );
};
export default ReturnContract;
