import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { IModuleTypes } from "@/models/module";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import GroupAddForm from "@/components/GlobalSettings/GroupAccessManagement/GroupAdd";

const Page: NextPageWithLayout = ({ result }: any) => {
  return <GroupAddForm title="Add Group" data={result} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  result: IModuleTypes[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/settings/modules",
    company as string
  );
  const result = await res;

  return { props: result };
};
