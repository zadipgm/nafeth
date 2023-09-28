import * as React from "react";
import CarRent from "../CarRental";
import { ICarModel } from "@/models/carmodel";
import { Title } from "../GlobalSettings/BranchManagement/style";
import { useTheme } from "styled-components";
interface ICarProps {
  cars: ICarModel;
}
const Dashboard = ({ cars }: ICarProps) => {
  const { colors } = useTheme();
  return (
    <>
      <Title color={colors.darkBlue}>
        <h2> Welcome to the Kaleen Car Rental</h2>
      </Title>
      <CarRent cars={cars} page={"dashboard"} title={"Available Cars"} />
    </>
  );
};
export default Dashboard;
