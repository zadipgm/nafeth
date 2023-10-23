import {
  Label,
  RentContainer,
  SelectedList,
  SelectedListItem,
  Value,
} from "@/components/CarRental/style";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
interface IProps {
  contract: any;
}
const RentalDetails = ({ contract }: IProps) => {
  const { colors, translations } = useTheme();
  return (
    <RentContainer className="rent_account">
      <Title color={colors.sideBarBgColor}>
        <h2> {translations?.rentalDetails}</h2>
      </Title>
      <SelectedList className="return_list">
        <SelectedListItem>
          <Label> {translations?.dailyRent}</Label>
          <Value>{contract.result[0].dailyPrice}</Value>
        </SelectedListItem>
        <SelectedListItem>
          <Label> {translations?.dailyKMLimit}</Label>
          <Value>{contract.result[0].kmLimit}</Value>
        </SelectedListItem>

        <SelectedListItem>
          <Label> {translations?.graceHours}</Label>
          <Value>{contract.result[0].graceHours}</Value>
        </SelectedListItem>
        <SelectedListItem>
          <Label> {translations?.graceCharge}</Label>
          <Value>{contract.result[0].graceHoursPrice}</Value>
        </SelectedListItem>
        <SelectedListItem>
          <Label> {translations?.extraKmPrice}</Label>
          <Value>{contract.result[0].extraKmPrice}</Value>
        </SelectedListItem>
      </SelectedList>
    </RentContainer>
  );
};
export default RentalDetails;
