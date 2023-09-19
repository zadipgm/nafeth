import { ICarModel } from "@/models/carmodel";
import { Button, Grow } from "@mui/material";
import { useRouter } from "next/router";
import { useTheme } from "styled-components";
import {
  ButtonWrapper,
  Car,
  CarColor,
  CarMakeModel,
  CarMakeModelWrapper,
  CarPlateWrapper,
  CarSpecsWrapper,
  CarTransmitionWrapper,
  CarTypeIconWrapper,
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
      <Car bcolor={isTheme().cardcolor} color={isTheme().color} key={car.id}>
        <CarMakeModelWrapper>
          <Tooltip content={"car make/model"} color={"success"}>
            <CarMakeModel color={isTheme().color}>
              <div>
                {car.make.name_en} {car.model.name_en}/
                <span className="year">{car.year}</span>
              </div>
            </CarMakeModel>
          </Tooltip>
          <Tooltip content="Car Color" color={"warning"}>
            <CarColor color={car.color.name_en}></CarColor>
          </Tooltip>
        </CarMakeModelWrapper>
        <Tooltip content="Daily Rent" color={"error"}>
          <Strong color={isTheme().color}>{car.dailyRent}</Strong>
          <Span color={isTheme().color}>/day</Span>
        </Tooltip>
        <CarTypeIconWrapper>
          <Tooltip content={car.carType.name_en} color={"success"}>
            <IconComponent
              width="100px"
              height="100px"
              fill={car.color.name_en}
              stroke={colors.gray1}
              icon={car.carType.name_en.trim()}
            />
          </Tooltip>
          <CarPlateWrapper className="car-page">
            <CarPlate car={car} />
          </CarPlateWrapper>
        </CarTypeIconWrapper>
        <CarSpecsWrapper>
          <CarTransmitionWrapper>
            <Tooltip content="Weekly Rent" color={"warning"}>
              <CarRentSvg width="25px" height="25px" fill={isTheme().color} />
              <p>{car.weeklyRent}</p>
            </Tooltip>
          </CarTransmitionWrapper>
          <CarTransmitionWrapper>
            <Tooltip content="Fuel Type" color={"success"}>
              <CarPetrolSvg width="25px" height="25px" fill={isTheme().color} />
              <p>{car.fuelType.name_en}</p>
            </Tooltip>
          </CarTransmitionWrapper>{" "}
          <CarTransmitionWrapper>
            <Tooltip content="Time Rented" color={"primary"}>
              <NumberOfRentedSvg
                width="25px"
                height="25px"
                fill={isTheme().color}
              />
              <p>{car.timesRented}</p>
            </Tooltip>
          </CarTransmitionWrapper>{" "}
          <CarTransmitionWrapper>
            <Tooltip content="Mileage" color={"secondary"}>
              <CarMileageSvg
                width="25px"
                height="25px"
                fill={isTheme().color}
              />
              <p>{car.mileage}</p>
            </Tooltip>
          </CarTransmitionWrapper>
        </CarSpecsWrapper>
        <ButtonWrapper>
          {page === "dashboard" && (
            <Button
              variant="outlined"
              className="rent"
              onClick={() => router.push("/cars/rent")}
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
                <EditSvg width="15px" height="15px" fill={colors.nafethBlue} />
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
                <DeleteSvg width="18px" height="18px" fill={colors.purple} />
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
                fill={colors.nafethBlue}
              />
            }
          >
            Details
          </Button>
        </ButtonWrapper>
      </Car>
    </Grow>
  );
};
export default Grid;
