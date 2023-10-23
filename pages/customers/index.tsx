import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import CustomersList from "@/components/customers";
import { ICustomers } from "@/models/customers";

const Page: NextPageWithLayout = (props) => {
  return (
    <CustomersList
      editable={true}
      isAddbutton={true}
      deleteable={true}
      details={true}
      page_color={"#283b58"}
      customers={props as ICustomers}
      listtype=""
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  result: ICustomers[];
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
  const result = await res;
  return { props: result };
};
