import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import CustomersList from "@/components/customers";
import EditCustomer from "@/components/customers/edit";
import {
  ICategory,
  ICustomers,
  IPriceList,
  IidType,
  customer,
} from "@/models/customers";
import { ICountriesModel } from "@/models/country";
import { ICitiesModel } from "@/models/city";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <EditCustomer
      customer={props.customer}
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
  customer: ICustomers;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const customers = await fetchData(
    userName as string,
    userPassword as string,
    `/customers/${ctx.query.id}`,
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
  const customer = await customers;
  return {
    props: {
      customer: customer,
      category: category,
      idTypes: idTypes,
      cities: cities,
      countries: countries,
      pricelist: pricelist,
    },
  };
};
