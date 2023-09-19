import * as React from "react";
import {
  ButtonWrapper,
  CarColor,
  ListViewContainer,
  GlobalListViewWrapper,
  ModelListViewWrapper,
  CarPlateWrapper,
  CarTypeSvgWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
} from "../style";
import CarRentSvg from "@/public/icons/cars";
import CarPlate from "../CarPlate";
import { carplate } from "@/global/fakeData";
import { useTheme } from "styled-components";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import { Tooltip } from "@nextui-org/react";
import { Button, Grow } from "@mui/material";
import { useRouter } from "next/router";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import List from "./list";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page?: string;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  keys: string[];
  hanldeSelected?: ((param: any) => void | undefined) | undefined;
  selectedCarID?: any;
}
const CarListView = ({
  cars,
  page,
  toggleDrawer,
  handleEdit,
  keys,
  hanldeSelected,
  selectedCarID,
}: ICarProps) => {
  console.log("CarListView", cars);
  return (
    <ListViewContainer>
      {cars.map((car: any, i: any) => {
        return (
          <List
            key={i}
            car={car}
            cars={cars}
            page={page}
            keys={keys}
            hanldeSelected={hanldeSelected}
            handleEdit={handleEdit}
            toggleDrawer={toggleDrawer}
            i={i}
            selectedCarID={selectedCarID?.includes(`${car.id}`)}
          />
        );
      })}
    </ListViewContainer>
  );
};
export default CarListView;
