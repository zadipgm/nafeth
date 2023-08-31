import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddUser from "@/components/GlobalSettings/usersSettings/addUser";
import { IBaseBranch, IGroup, IManager } from "@/models/userModel";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <AddUser
      manager={props.manager}
      baseBranch={props.baseBranch}
      group={props.group}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  manager: IManager;
  baseBranch: IBaseBranch;
  group: IGroup;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;

  const managerResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Managers",
    company as string
  );
  const baseBranchResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Branches",
    company as string
  );
  const groupResponse = await fetchData(
    userName as string,
    userPassword as string,
    "/lookup/Groups",
    company as string
  );
  const manager = await managerResponse;
  const baseBranch = await baseBranchResponse;
  const group = await groupResponse;
  return { props: { manager: manager, baseBranch: baseBranch, group: group } };
};
