import * as React from "react";
import { MenuItem, TextField } from "@mui/material";
import { Filter, SearchWrapper } from "./style";
import InputComponent from "../InputField";
import { RequestSearch } from "@/hooks/useSorting";
interface IProps {
  data: any;
  setSearchvalue: any;
  currentRecords: any;
}
const SearchComponent = ({ data, setSearchvalue, currentRecords }: IProps) => {
  const [filterKey, setFilterKey] = React.useState("id");
  const handlerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let value = e.target.value;
    let filtterArray = [];
    data?.filter((obj: any) => {
      return filtterArray.push(obj[value]);
    });
    setFilterKey(value);
  };
  const renderColumnKeys = () => {
    let header = Object?.keys(data && data[0]);
    return header?.map((key, index) => {
      return (
        <MenuItem key={index} value={key}>
          {key.charAt(0).toUpperCase() +
            key.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
        </MenuItem>
      );
    });
  };
  return (
    <>
      <Filter>
        <TextField
          select
          label="Filter By Column"
          onChange={(e) => handlerChange(e)}
        >
          {data && renderColumnKeys()}
        </TextField>
      </Filter>
      <SearchWrapper>
        <InputComponent
          classname="data-search"
          type="search"
          label={`Search record by ${filterKey}`}
          onChange={(e) =>
            RequestSearch(
              e.target.value,
              filterKey,
              currentRecords,
              setSearchvalue
            )
          }
          placeholder={
            filterKey.toLocaleLowerCase().includes("date")
              ? "search by date format yyyy-mm-dd"
              : "search"
          }
        />
      </SearchWrapper>
    </>
  );
};
export default SearchComponent;
