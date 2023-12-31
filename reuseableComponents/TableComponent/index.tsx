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
import { Fab, IconButton, Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import InputComponent from "../InputField";
import { isTheme } from "@/_helpers/getTheme";
import { CommonContainer } from "@/PageLayout/styled.components";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import usePagination from "@/hooks/usePagination";
import DrawerComponent from "../Drawer";
import {
  DetailWrapper,
  DetailsTitle,
  DetailList,
  DetailListItem,
  Spantext,
  Strongtext,
} from "@/components/CarRental/style";
import { useTheme } from "styled-components";
import { fetchData } from "@/api/fetchapis/fetchData";
import FilterTabs from "../filterTabs";
import axios from "axios";
import { Delete } from "@/api/delete";
import Swal from "sweetalert2";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  tableData: any;
  headerValue: string[];
  isDeleteAble?: boolean;
  isDuplicate?: boolean;
  linkPageUrl?: string;
  page_color?: string;
  sideBarTitle?: string;
  size?: string;
  isEditAble?: boolean;
  showAddButton?: boolean;
  addButtonText?: string;
  isViewAble?: boolean;
}
const TableComponent = ({
  tableData,
  headerValue,
  isDeleteAble,
  isDuplicate,
  linkPageUrl,
  page_color,
  sideBarTitle,
  size,
  isEditAble,
  showAddButton,
  addButtonText,
  isViewAble = true,
}: IProps) => {
  const { locale } = useTheme();
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const PER_PAGE = 10;
  const dataLength = tableData?.length;
  const count = Math.ceil(dataLength / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);
  const [search, setSearch] = React.useState(_DATA.currentData());
  const [drawerData, setDrawerData] = React.useState<any>();
  const router = useRouter();
  const [label, setLabel] = React.useState("Payables");

  const renderTableHeader = React.useCallback(() => {
    if (tableData?.length > 0) {
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
    await fetchData(userName, userPassWord, duplicateUrl, company);
    const res = await fetchData(userName, userPassWord, url, company);
    setSearch(res.result);
  };
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let value = e.target.value;
    let keys = headerValue.map((key: any, index) => key);
    let filteredData = _DATA
      .currentData()
      .filter((item: any, index: number) => {
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
  const hanldeDelete = (id: any) => {
    let userName = getName() as string;
    let userPassWord = getPassword() as string;
    let company = getCompany() as string;
    let url = `cars/Accessories/${id}`;
    Delete(userName, userPassWord, url, company).then((res: any) => {
      if (res.status == 200) {
        Swal.fire("Thank you!", "Accessory  has been Deleted!.", "success");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
    let list = search?.filter((item: any) => item.id != id);
    setSearch(list);
  };
  const handleChangePagination = (event: any, value: number) => {
    setPage(value);
    _DATA.jump(value);
    setSearch(_DATA.currentData());
  };
  const toggleDrawer = (anchor: Anchor, open: boolean, item?: any) => {
    setDrawerData(item);
    setState({ ...state, [anchor]: open });
  };
  return (
    <CommonContainer istheme={isTheme()}>
      <InputWrapper istheme={isTheme()}>
        {showAddButton && (
          <Fab
            aria-label={"add"}
            style={{
              margin: "12px 0px",
              backgroundColor: `${page_color}`,
              color: "white",
              width: "12%",
              borderRadius: "8px",
            }}
            onClick={() => router.push(`/${linkPageUrl}/add` as string)}
          >
            {addButtonText} <AddIcon />
          </Fab>
        )}
        <InputComponent
          type="search"
          placeholder="Search "
          label="Search "
          onChange={(e) => handleChange(e)}
          classname="search-input-table"
        />
      </InputWrapper>
      <Table color={page_color as string}>
        <tbody>
          <TRow>{renderTableHeader()}</TRow>
          {search?.length > 0 &&
            search?.map((item: any, index: number) => {
              return (
                <TRow key={index}>
                  {headerValue.map((key: any, index: any) => {
                    return <TData>{item[key]}</TData>;
                  })}
                  <TData>
                    <ToolTipWrapper>
                      {isViewAble && (
                        <Tooltip
                          content="Details"
                          color="invert"
                          onClick={() =>
                            toggleDrawer(
                              locale === "en" ? "right" : "left",
                              true,
                              item
                            )
                          }
                        >
                          <IconButton>
                            <EyeSvg size={20} fill={page_color} />
                          </IconButton>
                        </Tooltip>
                      )}
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
                      {isEditAble && (
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
                      )}
                      {isDeleteAble && (
                        <Tooltip
                          content="Delete"
                          color="error"
                          onClick={() => hanldeDelete(item.id)}
                        >
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
        <Pagination
          count={count}
          page={page}
          className="pagination"
          onChange={handleChangePagination}
        />
      </Table>
      {state.right && (
        <DrawerComponent
          state={state}
          toggleDrawer={toggleDrawer}
          width={size}
          item={drawerData}
        >
          <div>
            <DetailsTitle color={page_color as string}>
              {sideBarTitle}
            </DetailsTitle>
            <DetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
              {drawerData && (
                <DetailList>
                  {Object.keys(search[0]).map((key: string, i) => {
                    return key === "city" ||
                      key === "country" ||
                      key === "region" ||
                      key === "baseBranch" ||
                      key === "group" ||
                      key === "manager" ||
                      key === "menu" ? (
                      ""
                    ) : (
                      <DetailListItem>
                        <Strongtext>{key}</Strongtext>
                        <Spantext>{drawerData[key]}</Spantext>
                      </DetailListItem>
                    );
                  })}
                </DetailList>
              )}
            </DetailWrapper>
          </div>
        </DrawerComponent>
      )}
    </CommonContainer>
  );
};
export default TableComponent;
