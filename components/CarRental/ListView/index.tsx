import * as React from "react";
import { ListViewContainer } from "../style";
import List from "./list";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page?: string;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  hanldeSelected?: ((param: any) => void | undefined) | undefined;
  selectedCarID?: any;
  show: number;
}
const CarListView = ({
  cars,
  page,
  show,
  toggleDrawer,
  handleEdit,
  hanldeSelected,
  selectedCarID,
}: ICarProps) => {
  console.log("CarListView", cars);
  return (
    <ListViewContainer>
      {cars.slice(0, show)?.map((car: any, i: any) => {
        return (
          <List
            key={i}
            car={car}
            page={page}
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
