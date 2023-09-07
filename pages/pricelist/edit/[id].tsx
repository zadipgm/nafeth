import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import { IPrices } from "@/models/pricelist";
import EditList from "@/components/customers/priceList/edit";
const Page: NextPageWithLayout = (props: any) => {
  return <EditList list={props.list as IPrices} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  list: IPrices[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    `/customers/Pricelist/${ctx.query.id}`,
    company as string
  );
  const list = await res;
  return {
    props: {
      list: list,
    },
  };
};
