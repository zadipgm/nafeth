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
import { ICarModel } from "@/models/carmodel";
interface IProps {
  handleClose: () => void;
  car: ICarModel;
  getCustomPrice: (price: any) => void;
}
const CustomPrice = ({ handleClose, car, getCustomPrice }: IProps) => {
  const obj = {
    mileage: car.result[0].mileage,
    dailyRent: car.result[0].dailyRent,
    weeklyRent: car.result[0].weeklyRent,
    monthlyRent: car.result[0].monthlyRent,
    minDailyRent: car.result[0].minDailyRent,
    perExtraKM: car.result[0].perExtraKM,
    dailyKMlimit: car.result[0].dailyKMlimit,
    graceHours: car.result[0].graceHours,
    graceCharge: car.result[0].graceCharge,
    fullFuelCost: car.result[0].fullFuelCost,
  };
  const [data, setData] = React.useState(obj);
  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSave = () => {
    let newobjec = data;
    getCustomPrice(newobjec);
    handleClose();
  };
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
            defaultValue={data.dailyRent}
            name="dailyRent"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Weekly Rent"
            defaultValue={data.weeklyRent}
            name="weeklyRent"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Monthly Rent"
            defaultValue={data.monthlyRent}
            name="monthlyRent"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="min Rate"
            defaultValue={data.minDailyRent}
            name="minDailyRent"
            onChange={handleChange}
            disabled={true}
            variant="filled"
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Full Tank Price"
            defaultValue={data.fullFuelCost}
            name="fullFuelCost"
            onChange={handleChange}
            required
          />
        </RentListItem>
      </RentList>
      <RentList className="custom-price">
        <RentListItem>
          <InputComponent
            type="text"
            label="Extra Hour"
            defaultValue={data.graceHours}
            name="graceHours"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Extra per Hour"
            defaultValue={data.graceCharge}
            name="graceCharge"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Per KM price"
            defaultValue={data.perExtraKM}
            name="perExtraKM"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="Daily KM Limit"
            defaultValue={data.dailyKMlimit}
            name="dailyKMlimit"
            onChange={handleChange}
            required
          />
        </RentListItem>
        <RentListItem>
          <InputComponent
            type="text"
            label="KM out"
            defaultValue={data.mileage}
            name="mileage"
            onChange={handleChange}
            required
          />
        </RentListItem>
      </RentList>
      <GroupButtons>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleSave()}
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
