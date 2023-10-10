import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";

import AddCar from "@/components/CarRental/add";
import { fetchData } from "@/api/fetchapis/fetchData";
import { GetServerSideProps } from "next";
import { ILookUp } from "@/models/lookup";
import EditCar from "@/components/CarRental/edit";
import { ICarModel } from "@/models/carmodel";
const Page: NextPageWithLayout = (props: any) => {
  return (
    <EditCar
      cars={props.car}
      carTransmission={props.carTransmission}
      carInsuranceType={props.carInsuranceType}
      carPlateType={props.carPlateType}
      branches={props.branches}
      carInsurance={props.carInsurance}
      carFuel={props.carFuel}
      carColor={props.carColor}
      carType={props.carType}
      carMake={props.carMake}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  carTransmission: ILookUp;
  carInsuranceType: ILookUp;
  carPlateType: ILookUp;
  branches: ILookUp;
  carInsurance: ILookUp;
  carFuel: ILookUp;
  carColor: ILookUp;
  carType: ILookUp;
  carMake: ILookUp;
  car: ICarModel;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const car = await fetchData(
    userName as string,
    userPassword as string,
    `/cars/${ctx.query.id}`,
    company as string
  );
  const CarTransmission = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarTransmission",
    company as string
  );
  const CarInsuranceType = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarInsuranceType",
    company as string
  );
  const CarPlateType = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarPlateType",
    company as string
  );
  const Branches = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Branches",
    company as string
  );
  const CarInsurance = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarInsurance",
    company as string
  );
  const CarFuel = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarFuel",
    company as string
  );
  const CarColor = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarColor",
    company as string
  );
  const CarType = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarType",
    company as string
  );
  const CarMake = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/CarMake",
    company as string
  );
  const cars = await car;
  const carTransmission = await CarTransmission;
  const carInsuranceType = await CarInsuranceType;
  const carPlateType = await CarPlateType;
  const branches = await Branches;
  const carInsurance = await CarInsurance;
  const carFuel = await CarFuel;
  const carColor = await CarColor;
  const carType = await CarType;
  const carMake = await CarMake;
  return {
    props: {
      car: cars,
      carTransmission: carTransmission,
      carInsuranceType: carInsuranceType,
      carPlateType: carPlateType,
      branches: branches,
      carInsurance: carInsurance,
      carFuel: carFuel,
      carColor: carColor,
      carType: carType,
      carMake: carMake,
    },
  };
};
