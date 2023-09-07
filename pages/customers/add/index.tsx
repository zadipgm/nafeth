import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import CustomersList from "@/components/customers";
import AddCustomer from "@/components/customers/add";
import { ICategory, IPriceList, IidType } from "@/models/customers";
import { ICitiesModel } from "@/models/city";
import { ICountriesModel } from "@/models/country";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <AddCustomer
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
    "/lookup/Categories",
    company as string
  );
  const result = await fetchData(
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
  const category = await res;
  const idTypes = await result;
  const cities = await cityResponse;
  const countries = await countryResponse;
  const pricelist = await Pricelist;
  console.log(category, idTypes);
  return {
    props: {
      category: category,
      idTypes: idTypes,
      cities: cities,
      countries: countries,
      pricelist: Pricelist,
    },
  };
};
