import { Button, Stack } from "@mui/material";
import * as React from "react";
import { ContractTabs } from "./style";
interface IProps {
  handleClick: (param: string) => void;
  label: string;
  title: string[];
}
const FilterTabs = ({ handleClick, label, title }: IProps) => {
  return (
    <>
      <ContractTabs>
        <Stack spacing={2} direction="row">
          {title.map((t, index) => {
            return (
              <Button
                key={index}
                variant={t === label ? "contained" : "outlined"}
                onClick={() => handleClick(t)}
              >
                {t}
              </Button>
            );
          })}
        </Stack>
      </ContractTabs>
    </>
  );
};
export default FilterTabs;
