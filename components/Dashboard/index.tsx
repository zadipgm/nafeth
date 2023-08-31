import { Car_chart_data, header_card } from "@/global/fakeData";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import BasicBars from "@/reuseableComponents/barChart";
import * as React from "react";
import CarRent from "../CarRental";
import { ICarModel } from "@/models/carmodel";
interface ICarProps {
  cars: ICarModel;
}
const Dashboard = ({ cars }: ICarProps) => {
  return (
    <>
      <CarRent cars={cars} page={"dashboard"} title={"Available Cars"} />
      {/* <BasicBars /> */}
    </>
  );
};
export default Dashboard;
