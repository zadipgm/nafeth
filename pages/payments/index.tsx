import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import Payments from "@/components/payments";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import { IPayments } from "@/models/payments";

const Page: NextPageWithLayout = (props: any) => {
  return <Payments payments={props} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  list: IPayments[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/payments",
    company as string
  );
  const list = await res;
  return { props: list };
};
