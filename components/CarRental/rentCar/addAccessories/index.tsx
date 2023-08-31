import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import * as React from "react";
import { useTheme } from "styled-components";
import { AccessoriesContainer, AccessoriesWrapper } from "../../style";
import { Button } from "@mui/material";
interface IProps {
  setAccessories: (param: boolean) => void;
}
const AddAccessories = ({ setAccessories }: IProps) => {
  const { colors } = useTheme();
  return (
    <>
      <Title color={colors.nafethBlue}>
        <h2>Add Accessories</h2>
      </Title>
      <AccessoriesWrapper>
        <AccessoriesContainer>
          <input type="checkbox" />
          <strong>Accessories:</strong>
          <span>Tyre</span>
          <strong>Description:</strong>
          <span> Car Tyre</span>
          <strong>Price:</strong>
          <span>225</span>
        </AccessoriesContainer>
        <AccessoriesContainer>
          <input type="checkbox" />
          <strong>Accessories:</strong>
          <span>Seat</span>
          <strong>Description:</strong>
          <span>Child Seat</span>
          <strong>Price:</strong>
          <span>250</span>
        </AccessoriesContainer>
        <AccessoriesContainer>
          <input type="checkbox" />
          <strong>Accessories:</strong>
          <span>Tools</span>
          <strong>Description:</strong>
          <span>Car ToolKit</span>
          <strong>Price:</strong>
          <span>50</span>
        </AccessoriesContainer>
        <Button
          variant="contained"
          color="success"
          onClick={() => setAccessories(false)}
        >
          save
        </Button>
      </AccessoriesWrapper>
    </>
  );
};
export default AddAccessories;
