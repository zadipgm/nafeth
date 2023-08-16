import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchModules } from "@/api/fetchapis/fetchmodules";
import { IBaseBranch, IGroup, IManager, IUser } from "@/models/userModel";
import EditUser from "@/components/GlobalSettings/usersSettings/editUser";

const Page: NextPageWithLayout = (props: any) => {
  return (
    <EditUser
      result={props.result.result}
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
  result: IUser[];
  manager: IManager;
  baseBranch: IBaseBranch;
  group: IGroup;
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchModules(
    userName as string,
    userPassword as string,
    `/settings/Users/${ctx.query.id}`,
    company as string
  );
  const managerResponse = await fetchModules(
    userName as string,
    userPassword as string,
    "/lookup/Managers",
    company as string
  );
  const baseBranchResponse = await fetchModules(
    userName as string,
    userPassword as string,
    "/lookup/Branches",
    company as string
  );
  const groupResponse = await fetchModules(
    userName as string,
    userPassword as string,
    "/lookup/Groups",
    company as string
  );
  const result = await res;
  const manager = await managerResponse;
  const baseBranch = await baseBranchResponse;
  const group = await groupResponse;

  return {
    props: {
      result: result,
      manager: manager,
      baseBranch: baseBranch,
      group: group,
    },
  };
};
