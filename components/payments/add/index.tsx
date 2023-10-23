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
import DataTable from "@/reuseableComponents/DataTable";
import { Contract } from "@/models/individualContracts";
import { filterCar, filterCustomer } from "@/_helpers/filters";
import { IUser } from "@/models/userModel";
import { ICustomers } from "@/models/customers";
import { ICarModel } from "@/models/carmodel";
import { createPost } from "@/api/postApis/createBranch";
import Swal from "sweetalert2";
import { carKeys, contractKeys, customersKeys, userKeys } from "@/constants";
const AddPayment = () => {
  let obj = {
    date: "",
    type: 0,
    category: 0,
    activity: 0,
    contractNo: "",
    customerID: 0,
    carID: 0,
    userID: 0,
    amount: 0,
    payMethod: 0,
    checkNo: "",
    checkDate: "",
    bankId: 0,
    comments: "",
    status: "",
    branchId: 0,
    createdBy: "",
  };
  const router = useRouter();
  const AppDataContext: AppContexts = useAppData();
  const [data, setData] = React.useState(obj);
  const { locale, translations, colors } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openCarModal, setOpenCarModal] = React.useState(false);
  const [openUserModal, setOpenUserModal] = React.useState(false);
  const [openCustomerModal, setOpenCustomerModal] = React.useState(false);
  const [category, setCategory] = React.useState(0);
  const [paymentTypes, setPaymentType] = React.useState(0);
  const [BankPaymentTypes, setBankPaymentTypes] = React.useState(1);
  const [activity, setActivity] = React.useState<ILookUp>();
  const [c_number, setC_number] = React.useState<Contract | any>();
  const [u_number, setU_number] = React.useState<IUser | any>();
  const [c_customer, setC_customer] = React.useState<ICustomers | any>();
  const [c_car, setC_car] = React.useState<ICarModel | any>();
  const [paymentStatus, setPaymentStatus] = React.useState("");
  let username = getName() as string;
  let password = getPassword() as string;
  let company = getCompany() as string;
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenCarModal = () => {
    setOpenCarModal(true);
  };
  const handleClose = () => {
    setOpen(false);
    setOpenUserModal(false);
    setOpenCustomerModal(false);
    setOpenCarModal(false);
  };
  const handleOpenUser = () => {
    setOpenUserModal(true);
  };
  const handleOpenCustomer = () => {
    setOpenCustomerModal(true);
  };
  // onchange handler
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // filter contract and set state----------
  const handleContractNumber = (number: number) => {
    let filterContract = AppDataContext.contracts?.result.filter(
      (item) => item.contractNo === number
    );
    setC_number(filterContract);
  };
  // filter user and set state----------
  const handleUser = (number: number) => {
    console.log(number);
    let filterUser = AppDataContext.user?.result.filter(
      (item) => item.id === number
    );
    setU_number(filterUser);
  };
  // filter customer and set state----------
  const handleCustomer = (number: number) => {
    console.log(number);
    let filterCustomer = AppDataContext.Customers?.result.filter(
      (item) => item.id === number
    );
    setC_customer(filterCustomer);
  };
  // filter car and set state----------
  const handleCar = (number: number) => {
    console.log(number);
    let filterCar = AppDataContext.cars?.result.filter(
      (item) => item.id === number
    );
    console.log(filterCar);
    setC_car(filterCar);
  };
  // payment methods type bank cheuq cash ------------
  const handleBankPaymentType = (e: { target: { value: number } }) => {
    let val = e.target.value;
    setBankPaymentTypes(val);
  };

  // Payment Category contract, car, customer, branch etc...-------------

  const handleCategoryField = async (e: any) => {
    let id = e.target.value;
    await fetchData(
      username,
      password,
      `/lookup/PaymentActivity/${id}?paytype=${paymentTypes}`,
      company
    ).then((data) => setActivity(data));
    setCategory(id);
  };

  // Payment Type receivable or payable

  const handlePayment = async (e: { target: { value: any } }) => {
    let val = e.target.value;
    setPaymentType(val);
    await fetchData(
      username,
      password,
      `/lookup/PaymentActivity/3?paytype=${val}`,
      company
    ).then((data) => setActivity(data));
  };

  // submit payment------------------------------

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let body = {
      date: data.date,
      type: Number(paymentTypes),
      category: category,
      activity: data.activity === 0 ? activity?.result[0].id : data.activity,
      contractNo: c_number !== undefined ? c_number[0]?.contractNo : 0,
      customerID:
        c_number !== undefined
          ? c_number[0]?.customerID
          : c_customer !== undefined
          ? c_customer[0]?.id
          : 0,
      carID:
        c_number !== undefined
          ? c_number[0]?.carID
          : c_car !== undefined
          ? c_car[0]?.id
          : 0,
      userID: u_number !== undefined ? u_number[0]?.id : 0,
      amount: Number(data.amount),
      payMethod: BankPaymentTypes,
      checkNo: data.checkNo,
      checkDate: data.checkDate,
      bankId: data.bankId,
      comments: data.comments,
      status: paymentStatus,
      branchId: 1,
    };

    await createPost(username, password, "payments", company, body).then(
      (res: any) => {
        if (res.status == 200) {
          Swal.fire("Thank you!", "Payment has been Created!.", "success");
          router.push("/payments");
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
    console.log("here is iddd", body);
  };
  return (
    <AddPaymentContainer>
      <Title color={colors.sideBarBgColor}>
        <h2>{translations?.addNewPayment}</h2>
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
          onSubmit={(e) => handleSubmit(e)}
        >
          <FormBoxWrapper>
            <FormBox>
              <InputField
                label={translations?.date as string}
                type="date"
                name={"date"}
                defaultValue={formattedDate(new Date())}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label={translations?.type as string}
                name="type"
                onChange={handlePayment}
                defaultValue={""}
                required={true}
              >
                <>
                  <option value="" disabled>
                    {translations?.selectType as string}
                  </option>
                  {AppDataContext?.paymentType?.result.map((option) => (
                    <option key={option.name_en} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              <SelectField
                label={translations?.category as string}
                name="category"
                onChange={handleCategoryField}
                required={true}
                defaultValue={""}
              >
                <>
                  <option value="" disabled>
                    {translations?.selectCategory as string}
                  </option>
                  {AppDataContext?.paymentCategory?.result.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              {category !== 0 && (
                <SelectField
                  label={translations?.activity as string}
                  name="activity"
                  onChange={handleChange}
                  defaultValue={""}
                  required={true}
                  disabled={
                    activity?.result[0].name_en.toLocaleLowerCase() ===
                      "contract" ||
                    activity?.result[0].name_en.toLocaleLowerCase() === "car" ||
                    activity?.result[0].name_en.toLocaleLowerCase() ===
                      "reservation" ||
                    (activity?.result.length === 1 &&
                      activity?.result[0].name_en.toLocaleLowerCase() ===
                        "petty cash") ||
                    activity?.result[0].name_en.toLocaleLowerCase() ===
                      "customer"
                  }
                >
                  <>
                    {Number(category) === 3 && (
                      <option value="" disabled>
                        Select Activity
                      </option>
                    )}
                    {activity?.result?.map((option) => (
                      <option key={option.name_en} value={option.id}>
                        {option[`name_${locale}`]}
                      </option>
                    ))}
                  </>
                </SelectField>
              )}
              {Number(category) === 4 && (
                <ButtonWrapper className="contract-search-payment">
                  <Button variant="contained" onClick={handleOpenCustomer}>
                    {"Search Customer"}
                  </Button>
                </ButtonWrapper>
              )}
              {Number(category) === 3 && (
                <ButtonWrapper className="contract-search-payment">
                  <Button variant="contained" onClick={handleOpenUser}>
                    {"Search user"}
                  </Button>
                </ButtonWrapper>
              )}
              {Number(category) === 5 && (
                <ButtonWrapper className="contract-search-payment">
                  <Button variant="contained" onClick={handleOpenCarModal}>
                    {"Search Car"}
                  </Button>
                </ButtonWrapper>
              )}
              {Number(category) === 1 && (
                <>
                  <ButtonWrapper className="contract-search-payment">
                    <Button variant="contained" onClick={handleOpen}>
                      {translations?.searchContract}
                    </Button>
                  </ButtonWrapper>
                  {c_customer?.length > 0 && (
                    <InputField
                      label={translations?.customerName as string}
                      type="text"
                      name={"customerID"}
                      onChange={handleChange}
                      defaultValue={
                        filterCustomer(
                          AppDataContext?.Customers!,
                          c_customer[0].id
                        )[0].fullname_en
                      }
                      required={true}
                    />
                  )}
                  {c_number?.length > 0 && (
                    <>
                      <InputField
                        label={translations?.customerName as string}
                        type="text"
                        name={"customerID"}
                        onChange={handleChange}
                        defaultValue={
                          filterCustomer(
                            AppDataContext?.Customers!,
                            c_number[0].customerID
                          )[0].fullname_en
                        }
                        required={true}
                      />
                      <CarPlateWrapper>
                        <CarPlate
                          car={
                            filterCar(
                              AppDataContext?.cars!,
                              c_number[0].carID
                            )[0]
                          }
                        />
                      </CarPlateWrapper>
                    </>
                  )}
                </>
              )}
              {Number(category) === 3 && u_number?.length > 0 && (
                <>
                  <InputField
                    label={translations?.empOrUser as string}
                    type="text"
                    name={"userID"}
                    placeholder="name"
                    defaultValue={u_number[0][`fullname_${locale}`]}
                    onChange={handleChange}
                    required={true}
                    disabled={u_number[0].fullname_en.length > 0 ? true : false}
                  />
                </>
              )}
              {Number(category) === 4 && c_customer?.length > 0 && (
                <>
                  <InputField
                    label={translations?.customerName as string}
                    type="text"
                    name={"customerID"}
                    placeholder="name"
                    defaultValue={c_customer[0][`fullname_${locale}`]}
                    onChange={handleChange}
                    required={true}
                    disabled={
                      c_customer[0].fullname_en.length > 0 ? true : false
                    }
                  />
                </>
              )}
              {Number(category) === 5 && c_car?.length > 0 && (
                <CarPlateWrapper>
                  <CarPlate
                    car={filterCar(AppDataContext?.cars!, c_car[0].id)[0]}
                  />
                </CarPlateWrapper>
              )}

              <InputField
                label={translations?.ammount as string}
                type="text"
                name={"amount"}
                defaultValue={"0"}
                onChange={handleChange}
                required={true}
              />
              <SelectField
                label={translations?.paymentMethode as string}
                name="payMethod"
                onChange={handleBankPaymentType}
                defaultValue={""}
                required={true}
              >
                <>
                  <option value={""} disabled>
                    {translations?.pleaseSelectPaymentStatus}
                  </option>
                  {AppDataContext?.paymentMethods?.result?.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option[`name_${locale}`]}
                    </option>
                  ))}
                </>
              </SelectField>
              {Number(BankPaymentTypes) !== 6 && (
                <InputField
                  label={translations?.transactionDate as string}
                  type="date"
                  name={"checkDate"}
                  onChange={handleChange}
                  defaultValue={formattedDate(new Date())}
                  required={true}
                />
              )}
              {Number(BankPaymentTypes) === 6 && (
                <InputField
                  label={translations?.chequeDate as string}
                  type="date"
                  name={"checkDate"}
                  defaultValue={formattedDate(new Date())}
                  onChange={handleChange}
                  required={true}
                />
              )}
              {Number(BankPaymentTypes) === 5 ||
              Number(BankPaymentTypes) === 2 ||
              Number(BankPaymentTypes) === 3 ||
              Number(BankPaymentTypes) === 7 ? (
                <InputField
                  label={translations?.transactionNumber as string}
                  type="text"
                  placeholder="123456"
                  name={"checkNo"}
                  onChange={handleChange}
                  required={true}
                />
              ) : (
                ""
              )}
              {Number(BankPaymentTypes) === 6 && (
                <InputField
                  label={translations?.chequeNumber as string}
                  type="text"
                  placeholder="123456"
                  name={"checkNo"}
                  onChange={handleChange}
                  required={true}
                />
              )}
              {Number(BankPaymentTypes) === 5 ||
              Number(BankPaymentTypes) === 2 ||
              Number(BankPaymentTypes) === 3 ||
              Number(BankPaymentTypes) === 7 ||
              Number(BankPaymentTypes) === 6 ? (
                <SelectField
                  label={translations?.bankName as string}
                  name="bankId"
                  onChange={handleChange}
                  defaultValue={""}
                  required={true}
                >
                  <>
                    <option value="" disabled>
                      {"Select Bank..." as string}
                    </option>
                    {AppDataContext?.banks?.result.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option[`name_${locale}`]}
                      </option>
                    ))}
                  </>
                </SelectField>
              ) : (
                ""
              )}
              <InputField
                label={translations?.Comments as string}
                type="text"
                name={"comments"}
                onChange={handleChange}
                required={true}
              />
            </FormBox>
          </FormBoxWrapper>
          <GroupButtons>
            <Button
              variant="contained"
              color="success"
              type="submit"
              onClick={() => setPaymentStatus("paid")}
            >
              {translations?.payNow as string}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => router.back()}
            >
              {translations?.cancel as string}
            </Button>
          </GroupButtons>
          {/* ------------------------Contract modal---------------- */}
          <ModalComponent open={open} handleClose={handleClose} size={"md"}>
            <>
              {open && (
                <DataTable
                  viewButtons={false}
                  data={AppDataContext?.contracts?.result}
                  showFilter={true}
                  isDeleteAble={false}
                  isEditAble={false}
                  isViewAble={false}
                  isDuplicate={false}
                  page_color={colors.sideBarBgColor}
                  showAddButton={false}
                  handleClose={handleClose}
                  isSelectable={true}
                  handleSelect={handleContractNumber}
                  showCloseIcon={true}
                  keys={contractKeys}
                  classname="small_size"
                />
              )}
            </>
          </ModalComponent>
          {/* ------------------------car modal---------------- */}
          <ModalComponent
            open={openCarModal}
            handleClose={handleClose}
            size={"md"}
          >
            <>
              {openCarModal && (
                <DataTable
                  viewButtons={false}
                  data={AppDataContext?.cars?.result}
                  showFilter={true}
                  isDeleteAble={false}
                  isEditAble={false}
                  isViewAble={false}
                  isDuplicate={false}
                  page_color={colors.sideBarBgColor}
                  showAddButton={false}
                  handleClose={handleClose}
                  isSelectable={true}
                  handleSelect={handleCar}
                  showCloseIcon={true}
                  keys={carKeys}
                  classname="small_size"
                />
              )}
            </>
          </ModalComponent>
          {/* ------------------------user modal---------------- */}
          <ModalComponent
            open={openUserModal}
            handleClose={handleClose}
            size={"md"}
          >
            <>
              {openUserModal && (
                <DataTable
                  viewButtons={false}
                  data={AppDataContext?.user?.result}
                  showFilter={true}
                  isDeleteAble={false}
                  isEditAble={false}
                  isViewAble={false}
                  isDuplicate={false}
                  page_color={colors.sideBarBgColor}
                  showAddButton={false}
                  handleClose={handleClose}
                  isSelectable={true}
                  handleSelect={handleUser}
                  showCloseIcon={true}
                  keys={userKeys}
                  classname="small_size"
                />
              )}
            </>
          </ModalComponent>
          {/* ------------------------customer modal---------------- */}
          <ModalComponent
            open={openCustomerModal}
            handleClose={handleClose}
            size={"md"}
          >
            <>
              {openCustomerModal && (
                <DataTable
                  viewButtons={false}
                  data={AppDataContext?.Customers?.result}
                  showFilter={true}
                  isDeleteAble={false}
                  isEditAble={false}
                  isViewAble={false}
                  isDuplicate={false}
                  page_color={colors.sideBarBgColor}
                  showAddButton={false}
                  handleClose={handleClose}
                  isSelectable={true}
                  handleSelect={handleCustomer}
                  showCloseIcon={true}
                  keys={customersKeys}
                  classname="small_size"
                />
              )}
            </>
          </ModalComponent>
        </Box>
      </FormWrapper>
    </AddPaymentContainer>
  );
};
export default AddPayment;
