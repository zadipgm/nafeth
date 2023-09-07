import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import EditLoyalityList from "@/components/customers/loyaltyProgram/edit";
import { ILoyality } from "@/models/loyality";
import EditAccessoryList from "@/components/CarRental/caraccessories/edit";
import { IAccessory } from "@/models/IAccessory";
const Page: NextPageWithLayout = (props: any) => {
  return <EditAccessoryList list={props.list} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  list: IAccessory[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    `/cars/Accessories/${ctx.query.id}`,
    company as string
  );
  const list = await res;
  return {
    props: {
      list: list,
    },
  };
};
