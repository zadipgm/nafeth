import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import EditBranch from "@/components/SuperAdministrator/BranchManagement/EditBranch";
import { NextPageWithLayout } from "@/pages/_app";
import React from "react";
import { GetServerSideProps } from "next";
import { IBranchModel } from "@/models/branch";
import { fetchBranches } from "@/api/fetchapis/fetchBranches";
import { fetchCountries } from "@/api/fetchapis/fetchCountries";
import { fetchCities } from "@/api/fetchapis/fetchCities";
import { fetchRegions } from "@/api/fetchapis/fetchRegions";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <EditBranch
      branches={props.branches}
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
  branches: IBranchModel;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchBranches(
    userName as string,
    userPassword as string,
    `/settings/branches/${ctx.query.id}`,
    company as string
  );
  const countryResponse = await fetchCountries(
    userName as string,
    userPassword as string,
    "/lookup/countries",
    company as string
  );
  const cityResponse = await fetchCities(
    userName as string,
    userPassword as string,
    "/lookup/cities",
    company as string
  );
  const regionResponse = await fetchRegions(
    userName as string,
    userPassword as string,
    "/lookup/regions",
    company as string
  );
  const countries = await countryResponse;
  const cities = await cityResponse;
  const regions = await regionResponse;
  const branches = await res;
  console.log(branches.result);
  return {
    props: {
      branches: branches,
      countries: countries,
      cities: cities,
      regions: regions,
    },
  };
};
