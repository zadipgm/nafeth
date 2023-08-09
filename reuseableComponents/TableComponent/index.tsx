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

import { EyeSvg } from "@/public/icons/eyeSvg";
import DublicateSvg from "@/public/icons/DublicateSvg";
import { useRouter } from "next/router";
import { Fab, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputComponent from "../InputField";
import { isTheme } from "@/_helpers/getTheme";
import { CommonContainer } from "@/PageLayout/styled.components";
import { IGroups } from "@/models/groups";
import { getName } from "@/_helpers/getName";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
interface IProps {
  tableData: any;
  headerValue: string[];
  isDeleteAble?: boolean;
}
const TableComponent = ({ tableData, headerValue, isDeleteAble }: IProps) => {
  const [search, setSearch] = React.useState(tableData);
  const router = useRouter();
  const renderTableHeader = React.useCallback(() => {
    if (tableData.length > 0) {
      return headerValue.map((key: string, index: any) => {
        return (
          <THead key={key}>
            {key.toLocaleUpperCase().replaceAll("_", " ")}
          </THead>
        );
      });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    let keys = headerValue.map((key: any, index) => key);
    let filteredData = tableData.filter((item: any, index: number) => {
      return (
        item[keys[0]].toLocaleLowerCase().includes(value) ||
        item[keys[1]].toLocaleLowerCase().includes(value) ||
        item[keys[2]].toLocaleLowerCase().includes(value)
      );
    });
    setSearch(filteredData);
  };

  const hanldeEdit = (item: any) => {
    router.push({
      pathname: `/groups/edit/${item.id}`,
    });
  };
  return (
    <CommonContainer istheme={isTheme()}>
      <InputWrapper istheme={isTheme()}>
        <Fab
          color="primary"
          aria-label="add"
          style={{ margin: "12px 0px" }}
          onClick={() => router.push("/groups/add")}
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
          {search &&
            search.map((item: any, index: number) => {
              return (
                <TRow key={index}>
                  {headerValue.map((key: any, index: any) => {
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
                          <EditSvg size={20} fill={"#0072F5"} />
                        </IconButton>
                      </Tooltip>
                      {isDeleteAble && (
                        <Tooltip content="Delete" color="error">
                          <IconButton>
                            <DeleteSvg size={20} fill="#FF0080" />
                          </IconButton>
                        </Tooltip>
                      )}
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
