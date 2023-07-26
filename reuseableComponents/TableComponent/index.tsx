import * as React from "react";
import {
  InputWrapper,
  TData,
  THead,
  TRow,
  Table,
  ToolTipWrapper,
} from "./style";
import { Tooltip } from "@nextui-org/react";

import { EditIcon } from "@/public/icons/editSvg";
import { EyeSvg } from "@/public/icons/eyeSvg";
import { DeleteIcon } from "@/public/icons/deleteSvg";
import DublicateSvg from "@/public/icons/DublicateSvg";
import { useRouter } from "next/router";
import { Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputComponent from "../InputField";
import { isTheme } from "@/_helpers/getTheme";
import { CommonContainer } from "@/PageLayout/styled.components";
interface IProps {
  tableData: any;
  headerValue: string[];
}
const TableComponent = ({ tableData, headerValue }: IProps) => {
  const [search, setSearch] = React.useState(tableData);
  const router = useRouter();
  const renderTableHeader = React.useCallback(() => {
    return Object.keys(tableData[0]).map((key: string, index: any) => {
      return (
        <THead key={key}>{key.toLocaleUpperCase().replaceAll("_", " ")}</THead>
      );
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    let keys = Object.keys(tableData[0]).map((key: any, index) => key);
    let filteredData = tableData.filter((item: any, index: number) => {
      return (
        item[keys[0]].toLocaleLowerCase().includes(value) ||
        item[keys[1]].toLocaleLowerCase().includes(value) ||
        item[keys[2]].toLocaleLowerCase().includes(value)
      );
    });
    console.log("here is key", filteredData);
    setSearch(filteredData);
  };

  const hanldeEdit = (item: any) => {
    router.push({
      pathname: `/super_admin/branch_management/edit/${item.id}`,
    });
  };
  return (
    <CommonContainer istheme={isTheme()}>
      <InputWrapper istheme={isTheme()}>
        <Fab
          color="primary"
          aria-label="add"
          style={{ margin: "12px 0px" }}
          onClick={() => router.push("/super_admin/branch_management/add")}
        >
          <AddIcon />
        </Fab>
        <InputComponent
          type="search"
          placeholder="Search branch"
          label="Search branch"
          onChange={(e) => handleChange(e)}
          classname="search-input"
        />
      </InputWrapper>
      <Table>
        <tbody>
          <TRow>{renderTableHeader()}</TRow>
          {search.map((item: any, index: number) => {
            return (
              <TRow key={index}>
                {Object.keys(tableData[0]).map((key: any, index: any) => {
                  return <TData>{item[key]}</TData>;
                })}
                <TData>
                  <ToolTipWrapper>
                    <Tooltip content="Details" color="invert">
                      <IconButton>
                        <EyeSvg size={20} fill="#000000" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Duplicate" color="secondary">
                      <IconButton>
                        <DublicateSvg
                          width={"25px"}
                          height="25px"
                          fill={"#7828C8"}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip
                      content="Edit"
                      color="primary"
                      onClick={() => hanldeEdit(item)}
                    >
                      <IconButton>
                        <EditIcon size={20} fill={"#0072F5"} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip content="Delete" color="error">
                      <IconButton>
                        <DeleteIcon size={20} fill="#FF0080" />
                      </IconButton>
                    </Tooltip>
                  </ToolTipWrapper>
                </TData>
              </TRow>
            );
          })}
        </tbody>
      </Table>
    </CommonContainer>
  );
};
export default TableComponent;
