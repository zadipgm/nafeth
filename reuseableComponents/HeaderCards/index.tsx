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
}
const HeaderCard = ({ card, title, chart_data }: IProps) => {
  const { colors } = useTheme();
  return (
    <>
      <HeaderContainer>
        <MUIPaiChart chart_data={chart_data} title={"Car Types"} />
        <Wrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
          <HeaderCardsSection>
            <CardContainer>
              <DashboardTitle>{title}</DashboardTitle>
              <CardInnerWrapper>
                {card.map((c, key) => {
                  return (
                    <Grow
                      in={true}
                      style={{ transformOrigin: "0 0 0" }}
                      {...(true ? { timeout: 2000 } : {})}
                    >
                      <Card
                        cardcolor={isTheme()?.cardcolor}
                        icolor={c.color}
                        key={key}
                      >
                        <IconWrapper bcolor={c.bcolor}>
                          <IconComponent
                            width="50px"
                            height="50px"
                            fill={c.color}
                            icon={c.icon}
                          />
                        </IconWrapper>
                        <ContentWrapper>
                          <Number color={isTheme()?.color}>
                            {c.card_number}
                          </Number>
                          <CardTitle color={isTheme()?.color}>
                            {c.car_title}
                          </CardTitle>
                        </ContentWrapper>
                      </Card>
                    </Grow>
                  );
                })}
              </CardInnerWrapper>
            </CardContainer>
            <CarEvaluiation />
          </HeaderCardsSection>
        </Wrapper>
      </HeaderContainer>
    </>
  );
};
export default HeaderCard;
