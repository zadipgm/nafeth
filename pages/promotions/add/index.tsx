import type { ReactElement } from "react";
import Layout from "@/PageLayout";
import { NextPageWithLayout } from "@/pages/_app";
import AddPromotionList from "@/components/promotions/add";
import { ICarModel } from "@/models/carmodel";
import { GetServerSideProps } from "next";
import { fetchData } from "@/api/fetchapis/fetchData";
const Page: NextPageWithLayout = (result: any) => {
  return <AddPromotionList cars={result} />;
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Page;
export const getServerSideProps: GetServerSideProps<{
  result: ICarModel[];
}> = async (ctx) => {
  let userName = ctx.req.cookies.userName;
  let userPassword = ctx.req.cookies.userPassword;
  let company = ctx.req.cookies.company;
  const res = await fetchData(
    userName as string,
    userPassword as string,
    "/cars/Cars",
    company as string
  );
  const result = await res;

  return { props: result };
};
