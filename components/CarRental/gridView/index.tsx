import * as React from "react";
import { CarWrapper } from "../style";
import { isTheme } from "@/_helpers/getTheme";
import Grid from "./grid";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page?: string;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  hanldeSelected?: (param: any) => void;
  selectedCarID?: any;
  show: number;
}
const CarGridView = ({
  cars,
  page,
  toggleDrawer,
  handleEdit,
  hanldeSelected,
  selectedCarID,
  show,
}: ICarProps) => {
  return (
    <CarWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
      {cars.slice(0, show)?.map((car: any, i: number) => {
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
