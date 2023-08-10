import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { IModuleTypes } from "@/models/module";
import { GetServerSideProps } from "next";
import { fetchModules } from "@/api/fetchapis/fetchmodules";
import { IGroups } from "@/models/groups";
import GroupEditForm from "@/components/SuperAdministrator/GroupAccessManagement/GroupEdit";
import { fetchGroups } from "@/api/fetchapis/groups";

const Page: NextPageWithLayout = ({ result }: IGroups[] | any) => {
  return <GroupEditForm title={"Group Access Edit"} result={result} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export const getServerSideProps: GetServerSideProps<{
  result: IGroups[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchGroups(
    userName as string,
    userPassword as string,
    `/settings/groups/${ctx.query.id}`,
    company as string
  );
  const result = await res;
  return { props: result };
};
