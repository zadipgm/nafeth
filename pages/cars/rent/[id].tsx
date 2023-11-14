import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import RentCar from "@/components/CarRental/rentCar";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import { ICarModel } from "@/models/carmodel";
import { RentCarDataProvider } from "@/context/rentPageLookup";
const Page: NextPageWithLayout = (props: any) => {
  return (
    <RentCarDataProvider>
      <RentCar car={props.car} />
    </RentCarDataProvider>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  car: ICarModel;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;

  const cars = await fetchData(
    userName as string,
    userPassword as string,
    `/cars/${ctx.query.id}`,
    company as string
  );

  const car = await cars;

  return {
    props: {
      car: car,
    },
  };
};
