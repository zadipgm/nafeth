import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import {
  Card,
  CardInnerWrapper,
  ContentWrapper,
  HeaderCardWrapper,
  HeaderCardsSection,
  IconWrapper,
  Viewmore,
} from "./style";
import { Grow, colors } from "@mui/material";
import IconComponent from "../IconComponent";
import { useTheme } from "styled-components";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
interface ICardProps {
  color: string;
  bcolor: string;
  card_number: string;
  car_title_en: string;
  car_title_ar: string;
  icon: string;
}
interface IProps {
  page: string;
  card: ICardProps[];
}
const MainSectionCard = ({ card, page }: IProps) => {
  const { locale, colors } = useTheme();
  return (
    <HeaderCardsSection>
      <CardInnerWrapper className={page}>
        {card.map((c, key) => {
          return (
            <Grow
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 2000 } : {})}
              className={page}
            >
              <HeaderCardWrapper>
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
                    <p>{c[`car_title_${locale}`]}</p>
                    {c.card_number}
                  </ContentWrapper>
                </Card>
                <Viewmore>
                  <p>view more</p>
                  <ArrowCircleSvg
                    width="15px"
                    height="15px"
                    fill={colors.gray1}
                  />
                </Viewmore>
              </HeaderCardWrapper>
            </Grow>
          );
        })}
      </CardInnerWrapper>
    </HeaderCardsSection>
  );
};
export default MainSectionCard;
