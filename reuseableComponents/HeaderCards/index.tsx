import * as React from "react";
import {
  Card,
  CardInnerWrapper,
  CardTitle,
  ContentWrapper,
  DashboardTitle,
  IconWrapper,
  Number,
  Wrapper,
} from "./style";
import { isTheme } from "@/_helpers/getTheme";
import OverDueSvg from "@/public/icons/overdueSvg";
import AlertSvg from "@/public/icons/alertsSvg";
import CashSvg from "@/public/icons/cashSvg";
import DisputeContactSvg from "@/public/icons/disputeContactSvg";
import { useTheme } from "styled-components";
import IconComponent from "../IconComponent";
interface ICardProps {
  color: string;
  bcolor: string;
  card_number: string;
  car_title: string;
  icon: string;
}
interface IProps {
  card: ICardProps[];
  title: string;
}
const HeaderCard = ({ card, title }: IProps) => {
  const { colors } = useTheme();
  return (
    <>
      <Wrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
        <DashboardTitle>{title}</DashboardTitle>
        <CardInnerWrapper>
          {card.map((c, key) => {
            return (
              <Card cardcolor={isTheme()?.cardcolor} icolor={c.color} key={key}>
                <IconWrapper bcolor={c.bcolor}>
                  <IconComponent
                    width="30px"
                    height="30px"
                    fill={c.color}
                    icon={c.icon}
                  />
                </IconWrapper>
                <ContentWrapper>
                  <Number color={isTheme()?.color}>{c.card_number}</Number>
                  <CardTitle color={isTheme()?.color}>{c.car_title}</CardTitle>
                </ContentWrapper>
              </Card>
            );
          })}
        </CardInnerWrapper>
      </Wrapper>
    </>
  );
};
export default HeaderCard;
