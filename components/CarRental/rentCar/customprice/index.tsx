import * as React from "react";
import { ModalHeader } from "../../style";
import CloseSvg from "@/public/icons/closeSvg";
import {
  FormBox,
  FormBoxWrapper,
  FormWrapper,
  GroupButtons,
} from "@/components/GlobalSettings/compnaySettings/style";
import { Box, Button } from "@mui/material";
import { ICarModel } from "@/models/carmodel";
import { useTheme } from "styled-components";
import InputField from "@/reuseableComponents/customInputField/input";
interface IProps {
  handleClose: () => void;
  car: ICarModel;
  getCustomPrice: (price: any) => void;
}
const CustomPrice = ({ handleClose, car, getCustomPrice }: IProps) => {
  const { translations } = useTheme();
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
  const handleSave = (e: any) => {
    e.preventDefault();
    let newobjec = data;
    getCustomPrice(newobjec);
    handleClose();
  };
  return (
    <>
      <ModalHeader>
        <span>{translations?.customePrice}</span>
        <div onClick={() => handleClose()}>
          <CloseSvg />
        </div>
      </ModalHeader>
      <FormBoxWrapper className="custome-price">
        <FormBox>
          <InputField
            type="text"
            label={translations?.dailyRent as string}
            defaultValue={data.dailyRent}
            name="dailyRent"
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            label={translations?.weeklyRent as string}
            defaultValue={data.weeklyRent}
            name="weeklyRent"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.monthlyRent as string}
            defaultValue={data.monthlyRent}
            name="monthlyRent"
            onChange={handleChange}
            required
          />
          <InputField
            type="text"
            label={translations?.minRate as string}
            defaultValue={data.minDailyRent}
            name="minDailyRent"
            onChange={handleChange}
            disabled={true}
            required
          />

          <InputField
            type="text"
            label={translations?.fullTankPrice as string}
            defaultValue={data.fullFuelCost}
            name="fullFuelCost"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.graceHours as string}
            defaultValue={data.graceHours}
            name="graceHours"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.extraperHour as string}
            defaultValue={data.graceCharge}
            name="graceCharge"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.perkMprice as string}
            defaultValue={data.perExtraKM}
            name="perExtraKM"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.dailyKMLimit as string}
            defaultValue={data.dailyKMlimit}
            name="dailyKMlimit"
            onChange={handleChange}
            required
          />

          <InputField
            type="text"
            label={translations?.kmout as string}
            defaultValue={data.mileage}
            name="mileage"
            onChange={handleChange}
            required
          />
        </FormBox>
      </FormBoxWrapper>
      <GroupButtons>
        <Button
          variant="contained"
          color="success"
          onClick={(e) => handleSave(e)}
        >
          {translations?.save}
        </Button>
        <Button variant="contained" color="error" onClick={() => handleClose()}>
          {translations?.cancel}
        </Button>
      </GroupButtons>
    </>
  );
};
export default CustomPrice;
