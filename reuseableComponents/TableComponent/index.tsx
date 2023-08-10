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
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import { fetchGroups } from "@/api/fetchapis/groups";
interface IProps {
  tableData: any;
  headerValue: string[];
  isDeleteAble?: boolean;
  isDuplicate?: boolean;
  linkPageUrl?: string;
  page_color?: string;
}
const TableComponent = ({
  tableData,
  headerValue,
  isDeleteAble,
  isDuplicate,
  linkPageUrl,
  page_color,
}: IProps) => {
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
  const handleDuplicates = async (item: any) => {
    let userName = getName() as string;
    let userPassWord = getPassword() as string;
    let company = getCompany() as string;
    let duplicateUrl = `/settings/groups/${item.groupId}/duplicate`;
    let url = "/settings/groups";
    await fetchGroups(userName, userPassWord, duplicateUrl, company);
    const res = await fetchGroups(userName, userPassWord, url, company);
    setSearch(res.result);
  };

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

  const hanldeEdit = (id: any) => {
    router.push({
      pathname: `/${linkPageUrl}/edit/${id}`,
    });
  };
  return (
    <CommonContainer istheme={isTheme()}>
      <InputWrapper istheme={isTheme()}>
        <Fab
          aria-label={"add"}
          style={{
            margin: "12px 0px",
            backgroundColor: `${page_color}`,
            color: "white",
          }}
          onClick={() => router.push(`/${linkPageUrl}/add` as string)}
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
          {search.length > 0 &&
            search?.map((item: any, index: number) => {
              return (
                <TRow key={index}>
                  {headerValue.map((key: any, index: any) => {
                    return <TData>{item[key]}</TData>;
                  })}
                  <TData>
                    <ToolTipWrapper>
                      <Tooltip content="Details" color="invert">
                        <IconButton>
                          <EyeSvg size={20} fill={page_color} />
                        </IconButton>
                      </Tooltip>
                      {isDuplicate && (
                        <Tooltip
                          content="Duplicate"
                          color="secondary"
                          onClick={() => handleDuplicates(item)}
                        >
                          <IconButton>
                            <DublicateSvg
                              width={"25px"}
                              height="25px"
                              fill={page_color}
                            />
                          </IconButton>
                        </Tooltip>
                      )}
                      <Tooltip
                        content="Edit"
                        color="primary"
                        onClick={() =>
                          hanldeEdit(item.id ? item.id : item.groupId)
                        }
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
