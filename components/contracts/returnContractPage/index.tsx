import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { ReturnContainer } from "../style";
import { useTheme } from "styled-components";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import { isTheme } from "@/_helpers/getTheme";
import { evalueation, status } from "@/global/fakeData";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { IContracts } from "@/models/individualContracts";
import { formattedDate } from "@/_helpers/monthdayYearFormat";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
import ModalComponent from "@/reuseableComponents/modal";
import CloseSvg from "@/public/icons/closeSvg";
import { useReturnPageData } from "@/context/returnpageContext";
import { IReturnPageContexts } from "@/models/appContext";
import { createPost } from "@/api/postApis/createBranch";
import DataTable from "@/reuseableComponents/DataTable";
import { contractPaymentKeys } from "@/constants";
import { fetchData } from "@/api/fetchapis/fetchData";
import { IContractPayment } from "@/models/contractPayment";
import ReceiptSummary from "./ReceiptSummary";
import RentAccount from "./RentAccount/inidex";
import RentalDetails from "./RentalDetails";
import { IRentCalculation } from "@/models/rentCalculate";
interface IProps {
  contract: IContracts;
}
const ReturnContract = ({ contract }: IProps) => {
  const returnPage: IReturnPageContexts = useReturnPageData();
  const returnobj = {
    contractNo: contract.result[0].contractNo,
    dateIn: formattedDate(new Date()),
    kmIn: 0,
    timeIn: "",
    discount: 0,
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
  const { colors, locale, translations } = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState(returnobj);
  const [bill, setBill] = React.useState(billobj);
  const [open, setOpen] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const [contractBill, setContractBill] = React.useState<IContractPayment>();
  const [rentCalculation, setRentCalculation] =
    React.useState<IRentCalculation>();

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
  };
  React.useEffect(() => {
    CalculateRent();
  }, [data.kmIn, data.discount, data.dateIn]);
  const CalculateRent = async () => {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    let body = {
      contractNo: contract.result[0].contractNo,
      dateIn: new Date(data.dateIn),
      kmIn: Number(data?.kmIn),
      timeIn: time,
      discount: Number(data.discount),
    };
    if (data.kmIn > contract.result[0].kmOut) {
      await createPost(
        userName,
        userPassword,
        `contracts/Individual/${contract.result[0].contractNo}/calculaterent`,
        company,
        body
      ).then((res: any) => {
        if (res.data.result === null) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong!...${res.data.message}`,
          });
        } else {
          setRentCalculation(res.data);
        }
      });
    } else {
      return;
    }
  };
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    CalculateRent();
  };
  console.log(rentCalculation, "rentCalculation");
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
              <h2>{translations?.contractDetail}</h2>
            </Title>
            <FormBoxWrapper className="return-page">
              <FormBox>
                <InputField
                  label={translations?.ContractNumber as string}
                  type="text"
                  value={contract.result[0].contractNo}
                  disabled={true}
                />
                <InputField
                  label={translations?.priceList as string}
                  type="text"
                  value={12}
                  disabled={true}
                />
                <InputField
                  label={translations?.issueBranch as string}
                  type="text"
                  value={"main"}
                  disabled={true}
                />
                <InputField
                  label={translations?.customerName as string}
                  type="text"
                  value={"zeshan"}
                  disabled={true}
                />{" "}
                <InputField
                  label={translations?.makemodel as string}
                  type="text"
                  value={"toyota"}
                  disabled={true}
                />
                <InputField
                  label={translations?.kmout as string}
                  type="text"
                  value={contract.result[0].kmOut}
                  disabled={true}
                />
                <InputField
                  label={translations?.kMIn as string}
                  placeholder="100000017"
                  type="text"
                  onBlur={handleChange}
                  name={"kmIn"}
                  required={true}
                />
                <InputField
                  label={translations?.returnDate as string}
                  type="date"
                  onChange={handleChange}
                  defaultValue={data.dateIn}
                  name={"dateIn"}
                  required={true}
                />
                <SelectField
                  label={translations?.evaluation as string}
                  name="evaluation"
                  defaultValue={""}
                  onChange={handleChange}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      {translations?.pleaseEvaluate as string}
                    </option>
                    {evalueation.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </>
                </SelectField>
                <SelectField
                  label={translations?.status as string}
                  name="status"
                  required
                  defaultValue={""}
                  onChange={handleChange}
                >
                  <>
                    <option value="" disabled>
                      {translations?.pleaseSelectStatus as string}
                    </option>
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
          <RentalDetails contract={contract} />
          {Number(data.kmIn) > contract.result[0].kmOut && (
            <>
              <RentAccount rentCalculation={rentCalculation} />
              <GroupButtons className="add-bill-button">
                <Button
                  variant="contained"
                  color="success"
                  onClick={handleOpen}
                >
                  {translations?.addBill as string}
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
                            label={translations?.date as string}
                            type="date"
                            onChange={hanldeBillChange}
                            defaultValue={formattedDate(new Date())}
                            name={"date"}
                            required={true}
                          />
                          <SelectField
                            label={translations?.activity as string}
                            name="activity"
                            required={true}
                            defaultValue={""}
                            onChange={hanldeBillChange}
                          >
                            <>
                              <option value={""} disabled>
                                {translations?.pleaseSelectActivity as string}
                              </option>
                              {returnPage?.activity?.result.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option[`name_${locale}`]}
                                </option>
                              ))}
                            </>
                          </SelectField>

                          <InputField
                            label={translations?.ammount as string}
                            type="number"
                            onChange={hanldeBillChange}
                            defaultValue={"0"}
                            name={"amount"}
                            required={true}
                          />
                          <InputField
                            label={translations?.Comments as string}
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
                          {translations?.add as string}
                        </Button>
                        <Button
                          variant="contained"
                          color="error"
                          onClick={handleClose}
                        >
                          {translations?.cancel as string}
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
                    <h2> {translations?.Bills}</h2>
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
              <ReceiptSummary
                handleChange={handleChange}
                discount={Number(data.discount)}
                rentCalculation={rentCalculation}
              />
              <GroupButtons className="return_page_buttons">
                <Button
                  variant="contained"
                  color="success"
                  className="add-customer-save-button"
                  // type="submit"
                  // onClick={(e) => handleSubmit(e)}
                >
                  {translations?.returnWithFullPayment}
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  className="paylater-button"
                  // type="submit"
                >
                  {translations?.returnonly}
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => router.back()}
                >
                  {translations?.cancel}
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
