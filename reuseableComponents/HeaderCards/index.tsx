import * as React from "react";
import {
  Card,
  CardContainer,
  CardInnerWrapper,
  CardTitle,
  ContentWrapper,
  DashboardTitle,
  HeaderCardsSection,
  HeaderContainer,
  IconWrapper,
  Number,
  Wrapper,
} from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
import Grow from "@mui/material/Grow";
import { PieChart } from "@mui/x-charts/PieChart";
import CarEvaluiation from "@/components/CarRental/CarEvaluation";
import MUIPaiChart from "../MuiCharts";
import { LineChart } from "@mui/x-charts/LineChart";
import MuiLineChart from "../lineChart";
import MainSectionCard from "./mainSectionCard";

interface ICardProps {
  color: string;
  bcolor: string;
  card_number: string;
  car_title: string;
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
        {/* <MUIPaiChart
          chart_data={chart_data}
          title={chartTitle}
          classname={page}
        /> */}
        <MainSectionCard card={card} page={page} />
      </HeaderContainer>
    </>
  );
};
export default HeaderCard;
