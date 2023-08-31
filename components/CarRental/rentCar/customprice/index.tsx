import * as React from "react";
import {
  CarDetailsSubTitle,
  CarDetailsTitle,
  ModalHeader,
  RentList,
  RentListItem,
} from "../../style";
import CloseSvg from "@/public/icons/closeSvg";
import InputComponent from "@/reuseableComponents/InputField";
import { GroupButtons } from "@/components/GlobalSettings/compnaySettings/style";
import { Button } from "@mui/material";
interface IProps {
  handleClose: () => void;
}
const CustomPrice = ({ handleClose }: IProps) => {
  return (
    <>
      <ModalHeader>
        <h3>Custom Price</h3>
        <div onClick={() => handleClose()}>
          <CloseSvg />
        </div>
      </ModalHeader>

      <RentList className="custom-price">
        <RentListItem>
          <InputComponent
            type="text"
            label="Daily Rent"
            defaultValue={"100"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Weekly Rent"
            defaultValue={"80.00"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Monthly Rent"
            defaultValue={"70.00"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="min Rate"
            defaultValue={"80.00"}
            disabled={true}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Full Tank Price"
            defaultValue={"0"}
            required
          />
        </RentListItem>
      </RentList>
      <RentList className="custom-price">
        <RentListItem>
          <InputComponent
            type="text"
            label="Extra Hour"
            defaultValue={"3.00"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Extra per Hour"
            defaultValue={"23.00"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Per KM Parice"
            defaultValue={"0.25"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Daily KM Limit"
            defaultValue={"200"}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="KM out"
            defaultValue={"1"}
            required
          />
        </RentListItem>
      </RentList>
      <GroupButtons>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleClose()}
        >
          Save
        </Button>
        <Button variant="contained" color="error" onClick={() => handleClose()}>
          Cancel
        </Button>
      </GroupButtons>
    </>
  );
};
export default CustomPrice;
