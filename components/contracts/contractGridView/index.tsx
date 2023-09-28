import * as React from "react";
import { isTheme } from "@/_helpers/getTheme";
import { CarWrapper } from "@/components/CarRental/style";
import Grid from "./grid";
import { Contract } from "@/models/individualContracts";
import { ICustomers } from "@/models/customers";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page: string;
  contracts: any;
  show: number;
  customers: ICustomers;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
}
const ContractGridView = ({
  cars,
  page,
  show,
  toggleDrawer,
  handleEdit,
  contracts,
  customers,
  isViewable,
  isEditable,
  isDisputeable,
  isExtendable,
  isReturnable,
  isPrintAble,
}: ICarProps) => {
  return (
    <CarWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
      {contracts.slice(0, show).map((contract: any, i: number) => {
        return (
          <Grid
            key={i}
            contract={contract}
            cars={cars}
            page={page}
            handleEdit={handleEdit}
            customers={customers} // toggleDrawer={toggleDrawer}
            isViewable={isViewable}
            isEditable={isEditable}
            isExtendable={isExtendable}
            isDisputeable={isDisputeable}
            isReturnable={isReturnable}
            isPrintAble={isPrintAble}
          />
        );
      })}
    </CarWrapper>
  );
};
export default ContractGridView;
