import * as React from "react";
import { MenuItem, TextField } from "@mui/material";
import { Filter, SearchWrapper } from "./style";
import InputComponent from "../InputField";
import { RequestSearch } from "@/hooks/useSorting";
import SelectField from "../customeSelectField/select";
import InputField from "../customInputField/input";
import { useTheme } from "styled-components";
interface IProps {
  data: any;
  setSearchvalue: any;
  currentRecords: any;
  keys?: string[];
  classname?: string;
}
const SearchComponent = ({
  data,
  setSearchvalue,
  currentRecords,
  keys,
  classname,
}: IProps) => {
  const { translations } = useTheme();
  const [filterKey, setFilterKey] = React.useState("");
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
    let header = keys;
    return header?.map((key, index) => {
      return (
        <option key={index} value={key}>
          {key.charAt(0).toUpperCase() +
            key.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2")}
        </option>
      );
    });
  };
  return (
    <>
      <Filter className={classname}>
        <SelectField
          required={true}
          label={translations?.filterByColumn as string}
          onChange={(e) => handlerChange(e)}
          defaultValue={""}
        >
          <>
            <option value="" disabled>
              {translations?.selectColumntofilter}...
            </option>
            {data && renderColumnKeys()}
          </>
        </SelectField>
      </Filter>
      <SearchWrapper className={classname}>
        <InputField
          classname="data-search"
          type="search"
          label={
            filterKey === ""
              ? (`Please first ${translations?.selectColumntofilter}` as string)
              : (`${translations?.searchRecordBy} ${filterKey}` as string)
          }
          onChange={(e) =>
            RequestSearch(
              e.target.value,
              filterKey,
              currentRecords,
              setSearchvalue
            )
          }
          disabled={filterKey === "" ? true : false}
          placeholder={
            filterKey.toLocaleLowerCase().includes("date")
              ? `${translations?.searchbydateformat} yyyy-mm-dd`
              : `${translations?.search}`
          }
        />
      </SearchWrapper>
    </>
  );
};
export default SearchComponent;
