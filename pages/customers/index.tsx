import type { ReactElement } from "react";

import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
import CustomersList from "@/components/customers";

const Page: NextPageWithLayout = () => {
  return (
    <CustomersList
      addable={false}
      editable={true}
      deleteable={true}
      details={true}
      page_color={"#1281C4"}
      title={"Customers List"}
    />
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
// export const getServerSideProps: GetServerSideProps<{
//   result: IUser[];
// }> = async (ctx) => {
//   let userName = ctx.req.cookies.userName;
//   let userPassword = ctx.req.cookies.userPassword;
//   let company = ctx.req.cookies.company;
//   const res = await fetchData(
//     userName as string,
//     userPassword as string,
//     "/settings/Users",
//     company as string
//   );
//   const result = await res;

//   return { props: result };
// };
