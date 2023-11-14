import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { ICarModel } from "@/models/carmodel";
import { fetchData } from "@/api/fetchapis/fetchData";
import { GetServerSideProps } from "next";
import Dashboard from "@/components/DashboardComponent";
const Page: NextPageWithLayout = (result: any) => {
  return <Dashboard cars={result} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  result: ICarModel[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/Cars/available",
    company as string
  );
  const result = await res;

  return { props: result };
};
