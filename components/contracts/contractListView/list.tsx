import { filterCar, filterCustomer } from "@/_helpers/filters";
import CarPlate from "@/components/CarRental/CarPlate";
import {
  ButtonWrapper,
  CardPlateWrapper,
  CarTypeSvgWrapper,
  ContractCustomer,
  GlobalListViewWrapper,
  ListViewContainer,
  ModelListViewWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
} from "@/components/CarRental/style";
import { ICarModel } from "@/models/carmodel";
import { ICustomers } from "@/models/customers";
import { Contract, IContracts } from "@/models/individualContracts";
import DisputeSvg from "@/public/icons/DisputeSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import CalendarSvg from "@/public/icons/calendarSvg";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import { EditSvg } from "@/public/icons/editSvg";
import PrintSvg from "@/public/icons/printSvg";
import ReturnSvg from "@/public/icons/returnSvg";
import IconComponent from "@/reuseableComponents/IconComponent";
import { Button, Grow } from "@mui/material";
import { Tooltip, red } from "@nextui-org/react";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  contract: Contract;
  cars: ICarModel;
  page: string;
  customers?: ICustomers;
  toggleDrawer?: (param1: Anchor, param2: boolean, param3: any) => void;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
  editLink: string;
}
const List = ({
  toggleDrawer,
  contract,
  cars,
  customers,
  page,
  isViewable,
  isEditable,
  isDisputeable,
  isExtendable,
  isReturnable,
  isPrintAble,
  editLink,
}: IProps) => {
  const router = useRouter();
  const { locale, colors, translations } = useTheme();
  const carplate = {
    plateText1_ar: filterCar(cars, contract?.carID)?.[0].plateText1_ar,
    plateText2_ar: filterCar(cars, contract?.carID)?.[0].plateText2_ar,
    plateText3_ar: filterCar(cars, contract?.carID)?.[0].plateText3_ar,
    plateNo: filterCar(cars, contract.carID)?.[0].plateNo,
    plateText1_en: filterCar(cars, contract.carID)?.[0].plateText1_en,
    plateText2_en: filterCar(cars, contract.carID)?.[0].plateText2_en,
    plateText3_en: filterCar(cars, contract.carID)?.[0].plateText3_en,
  };
  return (
    <ListViewContainer>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <div>
          <GlobalListViewWrapper className="contract-list-view">
            <ModelListViewWrapper className="contract-number">
              <Tooltip
                content={"Contract number"}
                color={"primary"}
                className={page}
                placement={"top"}
              >
                <div className="contract">
                  <CarContractNumberSvg
                    fill={colors.sideBarBgColor}
                    width="40px"
                    height="40px"
                  />
                  <span className="make-model">{contract.contractNo}</span>
                </div>
              </Tooltip>
              <ContractCustomer>
                <IconComponent
                  width={"25px"}
                  height="25px"
                  fill={colors.sideBarBgColor}
                  icon={"carduserSvg"}
                />

                <span className="contract-customer">
                  {
                    filterCustomer(customers!, contract.customerID)[0][
                      `fullname_${locale}`
                    ]
                  }
                </span>
              </ContractCustomer>

              <CardPlateWrapper>
                <CarPlate car={carplate} />
              </CardPlateWrapper>
            </ModelListViewWrapper>
            <ReuseAbleList>
              <Tooltip
                content={page === "disputed" ? "Oil Change Cost" : "Daily Rent"}
                color={"primary"}
                className={page}
                placement={"top"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={page === "disputed" ? "carWorkshopSvg" : "cars"}
                    />
                  </div>
                  {page === "disputed"
                    ? contract.oilChangeCost
                    : contract.dailyPrice}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                placement={"top"}
                content={
                  page === "disputed" ? "Spare parts cost" : "Weekly Price"
                }
                color={"primary"}
                className={page}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={
                        page === "disputed" ? "availableCars" : "carRentedSvg"
                      }
                    />
                  </div>
                  {page === "disputed"
                    ? contract.sparePartsCost
                    : contract.weeklyPrice}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                placement={"top"}
                content={
                  page === "disputed"
                    ? "Disputed Billing Status"
                    : "Monthly Price"
                }
                color={"primary"}
                className={page}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={"carTotalSvg"}
                    />
                  </div>
                  <span
                    style={{
                      color:
                        contract.disputedBillingStatus === "freeze"
                          ? "red"
                          : "green",
                      fontWeight: 600,
                    }}
                  >
                    {page === "disputed"
                      ? contract.disputedBillingStatus
                      : contract.monthlyPrice}
                  </span>
                </ReuseAbleListItem>
              </Tooltip>

              <Tooltip
                content={page === "disputed" ? "Damage Cost" : "Advance Amount"}
                color={"primary"}
                className={page}
                placement={"bottom"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={page === "disputed" ? "carAccidentSvg" : "payments"}
                    />
                  </div>
                  {page === "disputed"
                    ? contract.damageCost
                    : contract.advanceAmount}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                content={page === "disputed" ? "Km In" : "km out"}
                color={"primary"}
                className={page}
                placement={"bottom"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={"carStolenSvg"}
                    />
                  </div>
                  {page === "disputed" ? contract.disputedKMIn : contract.kmOut}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                content={"check out time"}
                color={"primary"}
                className={page}
                placement={"bottom"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={"clockSvg"}
                    />
                  </div>
                  {contract.timeOut}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                content={"Issue Date"}
                color={"primary"}
                className={page}
                placement={"bottom"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={"issueDateSvg"}
                    />
                  </div>
                  {contract.issueDate}
                </ReuseAbleListItem>
              </Tooltip>
              <Tooltip
                content={"Return Date"}
                color={"primary"}
                className={page}
                placement={"bottom"}
              >
                <ReuseAbleListItem>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.sideBarBgColor}
                      icon={"returnDateSvg"}
                    />
                  </div>
                  {page === "disputed"
                    ? contract.disputedSubmitedDatetime
                    : contract.actualReturnDate}
                </ReuseAbleListItem>
              </Tooltip>
            </ReuseAbleList>
            <CarTypeSvgWrapper>
              <span className="make-model">
                {filterCar(cars, contract.carID)?.[0].make[`name_${locale}`]}{" "}
                {filterCar(cars, contract.carID)?.[0].model[`name_${locale}`]} /{" "}
                <span className="color">
                  {filterCar(cars, contract.carID)?.[0].year}
                </span>
              </span>

              <IconComponent
                width="100px"
                height="100px"
                fill={filterCar(cars, contract.carID)?.[0].color.name_en}
                stroke={colors.gray1}
                icon={filterCar(
                  cars,
                  contract.carID
                )?.[0].carType.name_en.trim()}
              />

              <ButtonWrapper>
                {isDisputeable && (
                  <Button
                    variant={"outlined"}
                    className="dispute"
                    onClick={() =>
                      router.push(`/disputecontracts/${contract.contractNo}`)
                    }
                    endIcon={
                      <DisputeSvg
                        width="15px"
                        height="15px"
                        fill={colors.red}
                      />
                    }
                  >
                    {translations?.dispute}
                  </Button>
                )}

                {isExtendable && (
                  <Button
                    variant={"outlined"}
                    className="extention"
                    onClick={() =>
                      router.push(`/extention/${contract.contractNo}`)
                    }
                    endIcon={
                      <CalendarSvg
                        width="15px"
                        height="15px"
                        fill={colors.purple}
                      />
                    }
                  >
                    {translations?.extention}
                  </Button>
                )}

                {isEditable && (
                  <Button
                    variant={"outlined"}
                    className="edit"
                    onClick={() =>
                      router.push(`/${editLink}/${contract.contractNo}`)
                    }
                    endIcon={
                      <EditSvg
                        width="15px"
                        height="15px"
                        fill={colors.sideBarBgColor}
                      />
                    }
                  >
                    {translations?.edit}
                  </Button>
                )}
                {isViewable && (
                  <Button
                    onClick={() =>
                      toggleDrawer?.(
                        locale === "en" ? "right" : "left",
                        true,
                        contract
                      )
                    }
                    className="details"
                    variant="outlined"
                    endIcon={
                      <ArrowCircleSvg
                        width="15px"
                        height="15px"
                        fill={colors.sideBarBgColor}
                      />
                    }
                  >
                    {translations?.details}
                  </Button>
                )}
                {isReturnable && (
                  <Button
                    variant={"outlined"}
                    className="retrun"
                    onClick={() =>
                      router.push(`/return/${contract.contractNo}`)
                    }
                    endIcon={
                      <ReturnSvg
                        width="15px"
                        height="15px"
                        fill={colors.darkYellow}
                      />
                    }
                  >
                    {translations?.return}
                  </Button>
                )}
                {/* {isPrintAble && (
                  <Button
                    variant={"outlined"}
                    className="print"
                    // onClick={() =>
                    //   router.push(`/return/${contract.contractNo}`)
                    // }
                    endIcon={
                      <PrintSvg width="15px" height="15px" fill={colors.cyan} />
                    }
                  >
                    Print
                  </Button>
                )} */}
              </ButtonWrapper>
            </CarTypeSvgWrapper>
          </GlobalListViewWrapper>
        </div>
      </Grow>
    </ListViewContainer>
  );
};
export default List;
