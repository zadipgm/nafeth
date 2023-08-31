import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import UserList from "@/components/GlobalSettings/usersSettings";
import { IUser } from "@/models/userModel";

const Page: NextPageWithLayout = ({ result }: any) => {
  return <UserList data={result} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
export const getServerSideProps: GetServerSideProps<{
  result: IUser[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/settings/Users",
    company as string
  );
  const result = await res;

  return { props: result };
};
