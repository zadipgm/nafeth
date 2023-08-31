import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import {
  Card,
  CardContainer,
  CardInnerWrapper,
  CardTitle,
  ContentWrapper,
  DashboardTitle,
  HeaderCardsSection,
  IconWrapper,
  Number,
  Wrapper,
} from "./style";
import { Grow } from "@mui/material";
import IconComponent from "../IconComponent";
import CarEvaluiation from "@/components/CarRental/CarEvaluation";
interface ICardProps {
  color: string;
  bcolor: string;
  card_number: string;
  car_title: string;
  icon: string;
}
interface IProps {
  page: string;
  card: ICardProps[];
}
const MainSectionCard = ({ card, page }: IProps) => {
  return (
    <Wrapper
      bcolor={isTheme()?.bcolor}
      color={isTheme()?.color}
      className={page}
    >
      <HeaderCardsSection>
        <CardContainer className={page}>
          <DashboardTitle>{"Status"}</DashboardTitle>
          <CardInnerWrapper className={page}>
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
                    className={page}
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
                      <Number color={isTheme()?.color}>{c.card_number}</Number>
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
        {page === "contracts" || page === "car-management" ? (
          ""
        ) : (
          <CarEvaluiation />
        )}
      </HeaderCardsSection>
    </Wrapper>
  );
};
export default MainSectionCard;
