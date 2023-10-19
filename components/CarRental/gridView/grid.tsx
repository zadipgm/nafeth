import { ICarModel } from "@/models/carmodel";
import { Button, Grow } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import {
  ButtonWrapper,
  CardWrapper,
  CardColor,
  CardMakeModel,
  CardMakeModelWrapper,
  CardPlateWrapper,
  CardSpecsWrapper,
  CardTransmitionWrapper,
  CardTypeIconWrapper,
  Span,
  Strong,
} from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { Tooltip } from "@nextui-org/react";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarPlate from "../CarPlate";
import CarRentSvg from "@/public/icons/cars";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import NumberOfRentedSvg from "@/public/icons/numberOfRentedSvg";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import React from "react";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  car: any;
  page: string | undefined;
  hanldeSelected?: (param: any) => void;
  cars: any;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  selectedCarID?: any;
  i: any;
}
const Grid = ({
  car,
  page,
  hanldeSelected,
  toggleDrawer,
  handleEdit,
  selectedCarID,
  i,
}: ICarProps) => {
  const { colors, locale } = useTheme();
  const router = useRouter();
  const [activeID, setActiveID] = React.useState(selectedCarID);
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
      key={i}
      onClick={() => handleCLick(car)}
      className={activeID ? `active_${page}` : page}
    >
      <CardWrapper
        bcolor={isTheme().cardcolor}
        color={isTheme().color}
        key={car.id}
      >
        <CardMakeModelWrapper>
          <Tooltip content={"car make/model"} color={"primary"}>
            <CardMakeModel color={isTheme().color}>
              <div>
                {car.make[`name_${locale}`]} {car.model[`name_${locale}`]} /{" "}
                <span className="year">{car.year}</span>
              </div>
            </CardMakeModel>
          </Tooltip>
          <Tooltip content="Car Color" color={"primary"}>
            <CardColor color={car.color.name_en}></CardColor>
          </Tooltip>
        </CardMakeModelWrapper>
        <Tooltip content="Daily Rent" color={"error"}>
          <Strong color={isTheme().color}>{car.dailyRent}</Strong>
          <Span color={isTheme().color}>/day</Span>
        </Tooltip>
        <CardTypeIconWrapper>
          <Tooltip content={car.carType.name_en} color={"primary"}>
            <IconComponent
              width="100px"
              height="100px"
              fill={car.color.name_en}
              stroke={colors.gray1}
              icon={car.carType.name_en.trim()}
            />
          </Tooltip>
          <CardPlateWrapper className="car-page">
            <CarPlate car={car} />
          </CardPlateWrapper>
        </CardTypeIconWrapper>
        <CardSpecsWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Weekly Rent" color={"primary"}>
              <CarRentSvg
                width="25px"
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{car.weeklyRent}</p>
            </Tooltip>
          </CardTransmitionWrapper>
          <CardTransmitionWrapper>
            <Tooltip content="Fuel Type" color={"primary"}>
              <CarPetrolSvg
                width="25px"
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{car.fuelType.name_en}</p>
            </Tooltip>
          </CardTransmitionWrapper>{" "}
          <CardTransmitionWrapper>
            <Tooltip content="Time Rented" color={"primary"}>
              <NumberOfRentedSvg
                width="25px"
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{car.timesRented}</p>
            </Tooltip>
          </CardTransmitionWrapper>{" "}
          <CardTransmitionWrapper>
            <Tooltip content="Mileage" color={"primary"}>
              <CarMileageSvg
                width="25px"
                height="25px"
                fill={colors.sideBarBgColor}
              />
              <p>{car.mileage}</p>
            </Tooltip>
          </CardTransmitionWrapper>
        </CardSpecsWrapper>
        <ButtonWrapper>
          {page === "dashboard" && (
            <Button
              variant="outlined"
              className="rent"
              onClick={() => router.push(`/cars/rent/${car.id}`)}
              endIcon={
                <CarRentSvg width="18px" height="18px" fill={colors.purple} />
              }
            >
              Rent
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
              Edit
            </Button>
          )}
          {page === "car-management" && (
            <Button
              variant="outlined"
              className="delete"
              onClick={() => router.push("/cars/rent")}
              endIcon={
                <DeleteSvg width="18px" height="18px" fill={colors.red} />
              }
            >
              Delete
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
            Details
          </Button>
        </ButtonWrapper>
      </CardWrapper>
    </Grow>
  );
};
export default Grid;
