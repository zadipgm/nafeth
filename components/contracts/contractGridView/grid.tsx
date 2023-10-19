import { ICarModel } from "@/models/carmodel";
import { Button, Grow } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";

import { isTheme } from "@/_helpers/getTheme";
import { Tooltip } from "@nextui-org/react";
import IconComponent from "@/reuseableComponents/IconComponent";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import React from "react";
import {
  ButtonWrapper,
  CardColor,
  CardMakeModel,
  CardMakeModelWrapper,
  CardPlateWrapper,
  CardSpecsWrapper,
  CardTransmitionWrapper,
  CardTypeIconWrapper,
  CardWrapper,
  ContractNumber,
  Span,
  Strong,
} from "@/components/CarRental/style";
import CarPlate from "@/components/CarRental/CarPlate";
import { Contract } from "@/models/individualContracts";
import ReturnSvg from "@/public/icons/returnSvg";
import DisputeSvg from "@/public/icons/DisputeSvg";
import { ICustomers } from "@/models/customers";
import { filterCar, filterCustomer } from "@/_helpers/filters";
import IssueDateSvg from "@/public/icons/issueDateSvg";
import ReturnDateSvg from "@/public/icons/returnDateSvg";
import CalendarSvg from "@/public/icons/calendarSvg";
import { EditSvg } from "@/public/icons/editSvg";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  cars: ICarModel;
  contract: Contract;
  customers: ICustomers;
  page: string;
  handleEdit?: any;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
}
const Grid = ({
  cars,
  contract,
  customers,
  page,
  isViewable,
  isEditable,
  isDisputeable,
  isExtendable,
  isReturnable,
  isPrintAble,
}: IProps) => {
  const { colors, locale } = useTheme();
  const router = useRouter();
  const carplate = {
    plateText1_ar: filterCar(cars, contract.carID)[0].plateText1_ar,
    plateText2_ar: filterCar(cars, contract.carID)[0].plateText2_ar,
    plateText3_ar: filterCar(cars, contract.carID)[0].plateText3_ar,
    plateNo: filterCar(cars, contract.carID)[0].plateNo,
    plateText1_en: filterCar(cars, contract.carID)[0].plateText1_en,
    plateText2_en: filterCar(cars, contract.carID)[0].plateText2_en,
    plateText3_en: filterCar(cars, contract.carID)[0].plateText3_en,
  };
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 2000 } : {})}
      className="contract-grid"
    >
      <CardWrapper
        bcolor={isTheme().cardcolor}
        color={isTheme().color}
        key={contract.contractNo}
      >
        <CardMakeModelWrapper>
          <Tooltip content={"Contract Number"} color={"primary"}>
            <CardMakeModel color={isTheme().color}>
              <ContractNumber>
                <CarContractNumberSvg
                  fill={colors.sideBarBgColor}
                  width="40px"
                  height="40px"
                />
                {contract.contractNo}
              </ContractNumber>
            </CardMakeModel>
          </Tooltip>
          <Tooltip
            content="Customer Name"
            color={"primary"}
            className="customer_full_name"
          >
            <IconComponent
              width={"25px"}
              height="25px"
              fill={colors.sideBarBgColor}
              icon={"carduserSvg"}
            />
            {
              filterCustomer(customers, contract.customerID)[0][
                `fullname_${locale}`
              ]
            }
          </Tooltip>
        </CardMakeModelWrapper>

        <Tooltip content="Daily Rent" color={"primary"} placement={"bottom"}>
          <Strong color={isTheme().color}>{contract.dailyPrice}</Strong>
          <Span color={isTheme().color}>/day</Span>
        </Tooltip>
        <CardTypeIconWrapper>
          <Tooltip
            content={
              filterCar(cars, contract.carID)[0].carType[`name_${locale}`]
            }
            color={"primary"}
          >
            <IconComponent
              width="100px"
              height="100px"
              fill={filterCar(cars, contract.carID)[0].color[`name_${locale}`]}
              stroke={colors.gray1}
              icon={filterCar(cars, contract.carID)[0].carType[
                `name_${locale}`
              ].trim()}
            />
          </Tooltip>
          <CardPlateWrapper className="car-page">
            <CarPlate car={carplate} />
          </CardPlateWrapper>
        </CardTypeIconWrapper>
        <CardSpecsWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Issue Date" color={"primary"}>
              <IssueDateSvg
                width={"25px"}
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{contract.issueDate}</p>
            </Tooltip>
          </CardTransmitionWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Return Date" color={"primary"}>
              <ReturnDateSvg
                width={"25px"}
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{contract.actualReturnDate}</p>
            </Tooltip>
          </CardTransmitionWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Weekly Rent" color={"primary"}>
              <IconComponent
                width={"25px"}
                height="25px"
                fill={colors.sideBarBgColor}
                icon={"carRentedSvg"}
              />
              <p>{contract.weeklyPrice}</p>
            </Tooltip>
          </CardTransmitionWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Monthly Rent" color={"primary"}>
              <IconComponent
                width={"25px"}
                height="25px"
                fill={colors.sideBarBgColor}
                icon={"carTotalSvg"}
              />
              <p>{contract.monthlyPrice}</p>
            </Tooltip>
          </CardTransmitionWrapper>
        </CardSpecsWrapper>
        <ButtonWrapper className="contract-grid">
          {isDisputeable && (
            <Button
              variant={"outlined"}
              className="dispute grid"
              onClick={() =>
                router.push(`/disputecontracts/${contract.contractNo}`)
              }
              endIcon={
                <DisputeSvg width="15px" height="15px" fill={colors.red} />
              }
            >
              Dispute
            </Button>
          )}
          {isExtendable && (
            <Button
              variant={"outlined"}
              className="extention grid"
              onClick={() => router.push(`/extention/${contract.contractNo}`)}
              endIcon={
                <CalendarSvg width="15px" height="15px" fill={colors.purple} />
              }
            >
              Extention
            </Button>
          )}
          {isEditable && (
            <Button
              variant={"outlined"}
              className="edit"
              endIcon={
                <EditSvg
                  width="15px"
                  height="15px"
                  fill={colors.sideBarBgColor}
                />
              }
            >
              Edit
            </Button>
          )}
          {isViewable && (
            <Button
              variant={"outlined"}
              className="details grid"
              // onClick={() => toggleDrawer("right", true)}
              endIcon={
                <ArrowCircleSvg
                  width="15px"
                  height="15px"
                  fill={colors.sideBarBgColor}
                />
              }
            >
              Details
            </Button>
          )}

          {isReturnable && (
            <Button
              variant={"outlined"}
              className="retrun grid"
              onClick={() => router.push(`/return/${contract.contractNo}`)}
              endIcon={
                <ReturnSvg
                  width="15px"
                  height="15px"
                  fill={colors.darkYellow}
                  stroke={colors.darkYellow}
                />
              }
            >
              Return
            </Button>
          )}
          {/* {isPrintAble && (
            <Button
              variant={"outlined"}
              className="print"
              onClick={() => window.print()}
              endIcon={
                <ReturnSvg width="15px" height="15px" fill={colors.cyan} />
              }
            >
              Print
            </Button>
          )} */}
        </ButtonWrapper>
      </CardWrapper>
    </Grow>
  );
};
export default Grid;
