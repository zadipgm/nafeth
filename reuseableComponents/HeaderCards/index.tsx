import * as React from "react";
import { DashboardTitle, HeaderContainer } from "./style";
import { useTheme } from "styled-components";
import MainSectionCard from "./mainSectionCard";
import MUIPaiChart from "../MuiCharts";

interface ICardProps {
  color: string;
  bcolor: string;
  card_number: string;
  car_title_en: string;
  car_title_ar: string;
  icon: string;
}
interface IChartData {
  id: number;
  label: string;
  value: number;
}
interface IProps {
  card: ICardProps[];
  title: string;
  chart_data: IChartData[];
  page: string;
  chartTitle: string;
}
const HeaderCard = ({ card, title, chart_data, page, chartTitle }: IProps) => {
  const { colors } = useTheme();
  return (
    <>
      <DashboardTitle>{title}</DashboardTitle>
      <HeaderContainer>
        <MainSectionCard card={card} page={page} />
        {page === "car-management" && (
          <MUIPaiChart
            chart_data={chart_data}
            title={chartTitle}
            classname={page}
          />
        )}
      </HeaderContainer>
    </>
  );
};
export default HeaderCard;
