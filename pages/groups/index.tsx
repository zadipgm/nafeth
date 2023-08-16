import React, { useContext, type ReactElement } from "react";
import { encode as base64_encode } from "base-64";
import Layout from "@/PageLayout";
import GroupAccessManagement from "@/components/GlobalSettings/GroupAccessManagement";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { IGroups } from "@/models/groups";
import { fetchGroups } from "@/api/fetchapis/groups";

const Page: NextPageWithLayout = (data: any) => {
  return <GroupAccessManagement data={data} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  data: IGroups[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchGroups(
    userName as string,
    userPassword as string,
    "/settings/groups",
    company as string
  );
  const data = await res;
  return { props: data };
};
