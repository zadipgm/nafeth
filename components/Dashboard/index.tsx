import * as React from "react";
import CarRent from "../CarRental";
import { ICarModel } from "@/models/carmodel";
import { Title } from "../GlobalSettings/BranchManagement/style";
import { useTheme } from "styled-components";
interface ICarProps {
  cars: ICarModel;
}
const Dashboard = ({ cars }: ICarProps) => {
  const { colors, translations } = useTheme();
  return (
    <>
      {/* <Title color={colors.darkBlue}>
        <h2>{translations?.welcomeNote}</h2>
      </Title> */}
      <CarRent cars={cars} page={"dashboard"} title={"Available Cars"} />
    </>
  );
};
export default Dashboard;
