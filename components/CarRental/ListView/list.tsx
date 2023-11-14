import { Button, Grow } from "@mui/material";
import * as React from "react";
import {
  ButtonWrapper,
  CardColor,
  CardMakeModel,
  CardPlateWrapper,
  CarStatus,
  CarTypeSvgWrapper,
  GlobalListViewWrapper,
  ModelListViewWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
  Status,
} from "../style";
import CarPlate from "../CarPlate";
import { Tooltip } from "@nextui-org/react";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarRentSvg from "@/public/icons/cars";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import { EditSvg } from "@/public/icons/editSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  car: any;
  page: string | undefined;
  hanldeSelected?: (param: any) => void;

  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  selectedCarID?: any;
  i: any;
}
const List = ({
  car,
  page,
  hanldeSelected,
  handleEdit,
  toggleDrawer,
  i,
  selectedCarID,
}: IProps) => {
  const { locale, colors, translations } = useTheme();
  const [activeID, setActiveID] = React.useState(selectedCarID);
  const router = useRouter();
  const handleCurrying = (car: any) => {
    hanldeSelected?.(car);
  };
  const handleCLick = (car: any) => {
    setActiveID(!activeID);
    handleCurrying(car);
  };
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 2000 } : {})}
    >
      <div>
        <GlobalListViewWrapper
          className={activeID ? `active_${page}` : page}
          onClick={() => handleCLick(car)}
        >
          <ModelListViewWrapper>
            <CardMakeModel>
              <div>
                {car.make[`name_${locale}`]} {car.model[`name_${locale}`]} /{" "}
                <span className="year">{car.year}</span>
              </div>
            </CardMakeModel>
            <CardPlateWrapper>
              <CarPlate car={car} />
            </CardPlateWrapper>
          </ModelListViewWrapper>
          <ReuseAbleList>
            <Tooltip
              content={"Fuel Type"}
              color={"primary"}
              className={page}
              placement={"top"}
            >
              <ReuseAbleListItem>
                <CarPetrolSvg
                  width={"25px"}
                  height="25px"
                  fill={colors.sideBarBgColor}
                />
                {car.fuelType[`name_${locale}`]}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"color"}
              color={"primary"}
              className={page}
              placement={"top"}
            >
              <ReuseAbleListItem>
                <CardColor color={car.color[`name_${locale}`]}></CardColor>
                {car.color[`name_${locale}`]}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"Mileage"}
              color={"primary"}
              className={page}
              placement={"top"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"carMileageSvg"}
                  />
                </div>
                {car.mileage}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"Daily Rent"}
              color={"primary"}
              className={page}
              placement={"top"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"cars"}
                  />
                </div>
                {car.dailyRent}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"Weekly Rent"}
              color={"primary"}
              className={page}
              placement={"bottom"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"carRentedSvg"}
                  />
                </div>
                {car.weeklyRent}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"Monthly Rent"}
              color={"primary"}
              className={page}
              placement={"bottom"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"carTotalSvg"}
                  />
                </div>
                {car.monthlyRent}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"Times Rented"}
              color={"primary"}
              className={page}
              placement={"bottom"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"numberOfRentedSvg"}
                  />
                </div>
                {car.timesRented}
              </ReuseAbleListItem>
            </Tooltip>
            <Tooltip
              content={"transmission"}
              color={"primary"}
              className={page}
              placement={"bottom"}
            >
              <ReuseAbleListItem key={i}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.sideBarBgColor}
                    icon={"carSteeringSvg"}
                  />
                </div>
                {car.transmission[`name_${locale}`]}
              </ReuseAbleListItem>
            </Tooltip>
          </ReuseAbleList>
          <CarTypeSvgWrapper>
            <CarStatus>
              {page === "car-management" ? (
                <Status
                  color={
                    car.status === "RENTED"
                      ? colors.darkYellow
                      : car.status === "AVAILABLE"
                      ? colors.green
                      : car.status === "DISPUTED"
                      ? colors.red
                      : colors.sideBarBgColor
                  }
                >
                  {car.status === "RENTED"
                    ? translations?.rented
                    : translations?.available}
                </Status>
              ) : (
                <div></div>
              )}
              <IconComponent
                width="100px"
                height="100px"
                fill={car.color.name_en}
                stroke={colors.gray1}
                icon={car.carType.name_en.trim()}
              />
            </CarStatus>
            <ButtonWrapper className={page}>
              {page === "dashboard" && (
                <Button
                  variant="outlined"
                  className="rent"
                  onClick={() => router.push(`/cars/rent/${car.id}`)}
                  endIcon={
                    <CarRentSvg
                      width="18px"
                      height="18px"
                      fill={colors.purple}
                    />
                  }
                >
                  {translations?.rent}
                </Button>
              )}
              {page === "car-management" && (
                <Button
                  variant="outlined"
                  className="edit"
                  onClick={() => handleEdit(car.id)}
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
              {page === "car-management" && (
                <Button
                  variant="outlined"
                  className="delete"
                  endIcon={
                    <DeleteSvg
                      width="18px"
                      height="18px"
                      fill={colors.purple}
                    />
                  }
                >
                  {translations?.delete}
                </Button>
              )}
              <Button
                onClick={() =>
                  toggleDrawer(locale === "en" ? "right" : "left", true, car)
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
            </ButtonWrapper>
          </CarTypeSvgWrapper>
        </GlobalListViewWrapper>
      </div>
    </Grow>
  );
};
export default List;
