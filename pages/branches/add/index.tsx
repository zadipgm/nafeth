import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddBranch from "@/components/GlobalSettings/BranchManagement/AddBranch";
import { ICountriesModel } from "@/models/country";
import { GetServerSideProps } from "next";
import { ICitiesModel } from "@/models/city";
import { IRegions } from "@/models/regions";
import { fetchData } from "@/api/fetchapis/fetchData";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <AddBranch
      countries={props.countries}
      cities={props.cities}
      regions={props.regions}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  countries: ICountriesModel;
  cities: ICitiesModel;
  regions: IRegions;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;

  const countryResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/countries",
    company as string
  );
  const cityResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/cities",
    company as string
  );
  const regionResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/regions",
    company as string
  );
  const countries = await countryResponse;
  const cities = await cityResponse;
  const regions = await regionResponse;
  return { props: { countries: countries, cities: cities, regions: regions } };
};
