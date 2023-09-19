import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  AccessoriesContainer,
  AccessoriesWrapper,
  ButtonWrapper,
} from "../../style";
import { Button } from "@mui/material";
import { IAccessory } from "@/models/IAccessory";
interface IProps {
  setAccessories: (param: boolean) => void;
  car_accessories: IAccessory;
  getCar_accessories: (param: any) => void;
  caraccessories: any;
}
const AddAccessories = ({
  setAccessories,
  car_accessories,
  getCar_accessories,
  caraccessories,
}: IProps) => {
  const { colors, locale } = useTheme();
  console.log("here is car accessories", caraccessories);
  const [allchecked, setAllChecked] = React.useState<string[]>(caraccessories);
  const handleChange = (e: { target: { checked: boolean; value: string } }) => {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item: any) => item !== e.target.value));
    }
  };
  const handleSave = () => {
    getCar_accessories(allchecked);
    setAccessories(false);
  };
  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Add Accessories</h2>
      </Title>
      <AccessoriesWrapper>
        {car_accessories.result.map((acc) => {
          return (
            <AccessoriesContainer key={acc.id}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={allchecked.includes(`${acc.id}`)}
                      color="secondary"
                      value={acc.id}
                      onChange={handleChange}
                    />
                  }
                  label=""
                />
              </FormGroup>

              <strong>Accessories:</strong>
              <span>{acc[`accessories_${locale}`]}</span>
              <strong>Description:</strong>
              <span> {acc[`description_${locale}`]}</span>
              <strong>Cost:</strong>
              <span>{acc.cost}</span>
            </AccessoriesContainer>
          );
        })}
      </AccessoriesWrapper>
      <ButtonWrapper className="accessory">
        <Button variant="contained" color="success" onClick={handleSave}>
          save Accessories
        </Button>
      </ButtonWrapper>
    </>
  );
};
export default AddAccessories;
