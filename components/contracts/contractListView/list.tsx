import { filterCar, filterCustomer } from "@/_helpers/filters";
import CarPlate from "@/components/CarRental/CarPlate";
import {
  ButtonWrapper,
  CardPlateWrapper,
  CarTypeSvgWrapper,
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
import { Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  contract: Contract;
  cars: ICarModel;
  page: string;
  customers: ICustomers;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
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
}: IProps) => {
  const router = useRouter();
  const { locale, colors } = useTheme();
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
    <ListViewContainer>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0" }}
        {...(true ? { timeout: 2000 } : {})}
      >
        <div>
          <GlobalListViewWrapper>
            <ModelListViewWrapper>
              <Tooltip content={"Contract number"} color={"success"}>
                <div className="contract">
                  <CarContractNumberSvg />
                  <span className="make-model">{contract.contractNo}</span>
                </div>
              </Tooltip>
              <CardPlateWrapper>
                <CarPlate car={carplate} />
              </CardPlateWrapper>
            </ModelListViewWrapper>
            <ReuseAbleList>
              <ReuseAbleListItem>
                <Tooltip content={"Daily Rent"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"cars"}
                    />
                  </div>
                  {contract.dailyPrice}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Weekly Price"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"carRentedSvg"}
                    />
                  </div>
                  {contract.weeklyPrice}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Monthly Price"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"carTotalSvg"}
                    />
                  </div>
                  {contract.monthlyPrice}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Customer Name"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"carduserSvg"}
                    />
                  </div>
                  {
                    filterCustomer(customers, contract.customerID)[0][
                      `fullname_${locale}`
                    ]
                  }
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Advance Amount"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"payments"}
                    />
                  </div>
                  {contract.advanceAmount}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"km out"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"carStolenSvg"}
                    />
                  </div>
                  {contract.kmOut}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"check out time"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"clockSvg"}
                    />
                  </div>
                  {contract.timeOut}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Issue Date"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"issueDateSvg"}
                    />
                  </div>
                  {contract.issueDate}
                </Tooltip>
              </ReuseAbleListItem>
              <ReuseAbleListItem>
                <Tooltip content={"Return Date"} color={"success"}>
                  <div>
                    <IconComponent
                      width={"25px"}
                      height="25px"
                      fill={colors.nafethBlue}
                      icon={"returnDateSvg"}
                    />
                  </div>
                  {contract.actualReturnDate}
                </Tooltip>
              </ReuseAbleListItem>
            </ReuseAbleList>
            <CarTypeSvgWrapper>
              <span className="make-model">
                {filterCar(cars, contract.carID)[0].make[`name_${locale}`]}{" "}
                {filterCar(cars, contract.carID)[0].model[`name_${locale}`]} /{" "}
                {filterCar(cars, contract.carID)[0].year}
              </span>

              <IconComponent
                width="100px"
                height="100px"
                fill={filterCar(cars, contract.carID)[0].color.name_en}
                stroke={colors.gray1}
                icon={filterCar(cars, contract.carID)[0].carType.name_en.trim()}
              />

              <ButtonWrapper>
                {isDisputeable && (
                  <Button
                    variant={"outlined"}
                    className="dispute"
                    endIcon={
                      <DisputeSvg
                        width="15px"
                        height="15px"
                        fill={colors.red}
                      />
                    }
                  >
                    Dispute
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
                        fill={colors.nafethBlue}
                      />
                    }
                  >
                    Edit
                  </Button>
                )}
                {isViewable && (
                  <Button
                    onClick={() =>
                      toggleDrawer(
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
                        fill={colors.nafethBlue}
                      />
                    }
                  >
                    Details
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
                    Return
                  </Button>
                )}
                {isPrintAble && (
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
                )}
              </ButtonWrapper>
            </CarTypeSvgWrapper>
          </GlobalListViewWrapper>
        </div>
      </Grow>
    </ListViewContainer>
  );
};
export default List;
