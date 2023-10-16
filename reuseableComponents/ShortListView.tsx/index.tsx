import {
  ContractCustomer,
  ModelListViewWrapper,
} from "@/components/CarRental/style";
import { ICarModel } from "@/models/carmodel";
import { ICustomers } from "@/models/customers";
import { IContracts } from "@/models/individualContracts";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import { Tooltip } from "@mui/material";
import * as React from "react";
import IconComponent from "../IconComponent";
import { filterCustomer } from "@/_helpers/filters";
import ListView from "./List";
import { CloseSvgWrapper } from "./style";
import CloseSvg from "@/public/icons/closeSvg";
import { useTheme } from "styled-components";
interface IProps {
  cars?: ICarModel;
  contracts?: IContracts;
  customers?: ICustomers;
  close: () => void;
}
const ShortListView = ({ cars, contracts, customers, close }: IProps) => {
  const { colors } = useTheme();
  return (
    <>
      <CloseSvgWrapper onClick={close}>
        <CloseSvg fill={colors.sideBarBgColor} />
      </CloseSvgWrapper>
      {contracts?.result?.map((contract: any, i: any) => {
        return (
          <ListView
            key={i}
            contract={contract}
            cars={cars}
            customers={customers}
            close={close}
          />
        );
      })}
    </>
  );
};
export default ShortListView;
