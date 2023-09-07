import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import EditLoyalityList from "@/components/customers/loyaltyProgram/edit";
import { ILoyality } from "@/models/loyality";
const Page: NextPageWithLayout = (props: any) => {
  return <EditLoyalityList list={props.list} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  list: ILoyality[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    `/customers/Loyality/${ctx.query.id}`,
    company as string
  );
  const list = await res;
  return {
    props: {
      list: list,
    },
  };
};
