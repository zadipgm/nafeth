import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import RentCar from "@/components/CarRental/rentCar";
import { ICategory, ICustomers, IPriceList, IidType } from "@/models/customers";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import { ICarModel } from "@/models/carmodel";
import { IAccessory } from "@/models/IAccessory";
import { ICitiesModel } from "@/models/city";
import { ICountriesModel } from "@/models/country";
const Page: NextPageWithLayout = (props: any) => {
  return (
    <RentCar
      customers={props.customer}
      car={props.car}
      car_accessories={props.accessories}
      category={props.category}
      IdType={props.idTypes}
      cities={props.cities}
      countries={props.countries}
      pricelist={props.pricelist}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  customer: ICustomers[];
  car: ICarModel;
  accessories: IAccessory[];
  category: ICategory;
  idTypes: IidType;
  cities: ICitiesModel;
  countries: ICountriesModel;
  pricelist: IPriceList;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/customers",
    company as string
  );
  const cars = await fetchData(
    userName as string,
    userPassword as string,
    `/cars/${ctx.query.id}`,
    company as string
  );
  const accessories = await fetchData(
    userName as string,
    userPassword as string,
    "/cars/Accessories",
    company as string
  );
  const categories = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Categories",
    company as string
  );
  const idType = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/IDType",
    company as string
  );
  const cityResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/cities",
    company as string
  );
  const countryResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/countries",
    company as string
  );
  const Pricelist = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Pricelist",
    company as string
  );
  const category = await categories;
  const idTypes = await idType;
  const cities = await cityResponse;
  const countries = await countryResponse;
  const pricelist = await Pricelist;
  const customer = await res;
  const car = await cars;
  const accessory = await accessories;
  return {
    props: {
      customer: customer,
      car: car,
      accessories: accessory,
      category: category,
      idTypes: idTypes,
      cities: cities,
      countries: countries,
      pricelist: pricelist,
    },
  };
};
