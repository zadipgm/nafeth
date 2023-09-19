import * as React from "react";
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
  CarWrapper,
  Span,
  Strong,
} from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { ICarModel } from "@/models/carmodel";
import { Button, Grow } from "@mui/material";
import { Tooltip } from "@nextui-org/react";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarPlate from "../CarPlate";
import CarRentSvg from "@/public/icons/cars";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import NumberOfRentedSvg from "@/public/icons/numberOfRentedSvg";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import Grid from "./grid";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: ICarModel;
  page?: string;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  hanldeSelected?: (param: any) => void;
  selectedCarID?: any;
}
const CarGridView = ({
  cars,
  page,
  toggleDrawer,
  handleEdit,
  hanldeSelected,
  selectedCarID,
}: ICarProps) => {
  return (
    <CarWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
      {cars.result.map((car, i) => {
        return (
          <Grid
            key={i}
            car={car}
            cars={cars}
            page={page}
            hanldeSelected={hanldeSelected}
            handleEdit={handleEdit}
            toggleDrawer={toggleDrawer}
            i={i}
            selectedCarID={selectedCarID?.includes(`${car.id}`)}
          />
        );
      })}
    </CarWrapper>
  );
};
export default CarGridView;
