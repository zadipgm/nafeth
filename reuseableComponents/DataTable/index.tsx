import * as React from "react";
import {
  Wrapper,
  Table,
  TableData,
  Row,
  Data,
  PaginationWrapper,
  PaginationOuterDiv,
  CardViewContainer,
  CardList,
  CardListItems,
  CardListItemsWrapper,
  Button,
  DataViewWrapper,
  TableDataWrapper,
  ToolTipWrapper,
  DataTableContainer,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { Fab, IconButton, MenuItem, TextField } from "@mui/material";
import { filterByLocale } from "@/hooks/filterByLocale";
import {
  HandleAscending,
  HandleDescending,
  RequestSearch,
} from "@/hooks/useSorting";
import SortUp from "@/public/icons/sortUp";
import SortDown from "@/public/icons/sortDown";
import ListView from "@/public/icons/tableView";
import GridView from "@/public/icons/gridView";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import CardUserSvg from "@/public/icons/carduserSvg";
import IDsvg from "@/public/icons/idSvg";
import CalendarSvg from "@/public/icons/calendarSvg";
import Pagination from "../Pagnation";
import { Tooltip } from "@nextui-org/react";
import { EyeSvg } from "@/public/icons/eyeSvg";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import DublicateSvg from "@/public/icons/DublicateSvg";
import { Delete } from "@/api/delete";
import Swal from "sweetalert2";
import DrawerComponent from "../Drawer";
import {
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsTitle,
  Spantext,
  Strongtext,
} from "@/components/CarRental/style";
import { isTheme } from "@/_helpers/getTheme";
import ViewButton from "../viewsButton";
import InputComponent from "../InputField";
import SearchComponent from "../SearchComponent";

interface IProps {
  data?: any;
  linkPageUrl?: string;
  showFilter: boolean;
  isEditAble?: boolean;
  nestedTable?: boolean;
  isViewAble?: boolean;
  isDeleteAble?: boolean;
  classname?: string;
  isDuplicate?: boolean;
  page_color?: string;
  sideBarTitle?: string;
  size?: string;
  showAddButton?: boolean;
  addButtonText?: string;
}
type Anchor = "top" | "left" | "bottom" | "right";
const DataTable = ({
  data,
  linkPageUrl,
  showFilter,
  isEditAble,
  nestedTable,
  isViewAble,
  isDeleteAble,
  page_color,
  isDuplicate,
  size,
  sideBarTitle,
  addButtonText,
  showAddButton,
}: IProps) => {
  const { colors, locale } = useTheme();
  const router = useRouter();
  const [searchvalue, setSearchvalue] = React.useState(data);
  const [filterKey, setFilterKey] = React.useState("id");
  const [active, setActive] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [recordsPerPage, setRecordPerPage] = React.useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data?.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data?.length / recordsPerPage);
  const [drawerData, setDrawerData] = React.useState<any>();
  const [list, setList] = React.useState(true);
  const [grid, setGrid] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  React.useEffect(() => {
    let value = currentRecords;
    setSearchvalue(value);
  }, [indexOfLastRecord, indexOfFirstRecord]);

  const handlerChangeRows = (e: any) => {
    let value = e.target.value;
    setRecordPerPage(value);
  };
  const toggleDrawer = (anchor: Anchor, open: boolean, item?: any) => {
    setDrawerData(item);
    setState({ ...state, [anchor]: open });
  };

  // hanlde duplicate.....
  const handleDuplicates = async (item: any) => {
    let userName = getName() as string;
    let userPassWord = getPassword() as string;
    let company = getCompany() as string;
    let duplicateUrl = `/settings/groups/${item.groupId}/duplicate`;
    let url = "/settings/groups";
    await fetchData(userName, userPassWord, duplicateUrl, company);
    const res = await fetchData(userName, userPassWord, url, company);
    setSearchvalue(res.result);
  };

  const renderTableHeader = () => {
    let header = Object?.keys(data && data[0]);
    let filterHeader = header.filter((id) => id != "id");
    filterHeader.push("Actions");
    console.log(filterHeader);
    return filterByLocale(locale, filterHeader).map((key: any, index: any) => {
      return (
        <TableData key={index} className="table-header">
          <TableDataWrapper>
            <Data>{key.toUpperCase()}</Data>
            {key.toUpperCase() === "ACTIONS" ? (
              ""
            ) : (
              <div>
                <span
                  onClick={() => HandleAscending(key, setSearchvalue, data)}
                >
                  <SortUp fill={colors.gray1} width="15px" height="15px" />
                </span>
                <span
                  onClick={() => HandleDescending(key, setSearchvalue, data)}
                >
                  <SortDown fill={colors.gray1} width="15px" height="15px" />
                </span>
              </div>
            )}
          </TableDataWrapper>
        </TableData>
      );
    });
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
        console.log(res, "reeeee");
        Swal.fire("Thank you!", "Accessory  has been Deleted!.", "success");
      } else {
        console.log(res);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    });
    let list = searchvalue?.filter((item: any) => item.id != id);
    setSearchvalue(list);
  };
  const renderTableNestedHeader = () => {
    if (data[0]?.procedures !== null) {
      let header = Object?.keys(data && data[0]?.procedures[0]);
      return (
        header &&
        header?.map((key, index) => {
          return (
            <TableData className="table-header" key={index}>
              {key.toUpperCase()}
            </TableData>
          );
        })
      );
    }
  };

  const handleView = (val: string) => {
    if (val === "grid") {
      setGrid(true);
      setList(false);
    }
    if (val === "list") {
      setGrid(false);
      setList(true);
    }
  };
  return (
    <DataTableContainer>
      {showFilter && (
        <Wrapper>
          <DataViewWrapper>
            <ViewButton handleView={handleView} list={list} grid={grid} />
          </DataViewWrapper>
          {showAddButton && (
            <Fab
              aria-label={"add"}
              style={{
                backgroundColor: `${page_color}`,
                color: "white",
                width: "15%",
                borderRadius: "8px",
              }}
              onClick={() => router.push(`/${linkPageUrl}/add` as string)}
            >
              {addButtonText} <AddIcon />
            </Fab>
          )}

          <SearchComponent
            data={data}
            setSearchvalue={setSearchvalue}
            currentRecords={currentRecords}
          />
        </Wrapper>
      )}
      {list && (
        <Table>
          <Row>{renderTableHeader()}</Row>
          {searchvalue &&
            searchvalue
              ?.slice(0, recordsPerPage as number)
              ?.map((item: any, index: any) => {
                let keys = Object?.keys(item)?.filter((id) => id !== "id");
                return (
                  <>
                    <Row key={item.nationalID}>
                      {filterByLocale(locale, keys).map((key: any, i: any) => {
                        return <TableData key={i}>{`${item[key]}`}</TableData>;
                      })}
                      <TableData>
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
                      </TableData>
                    </Row>
                    <Row className={active === item.id ? "show" : "hide"}>
                      <br></br>
                      {nestedTable &&
                        data[0]?.procedures !== null &&
                        data[0]?.procedures.length > 1 && (
                          <Row> {renderTableNestedHeader()}</Row>
                        )}
                      {item.procedures &&
                        item.procedures.map((detail: any) => {
                          return (
                            <Row key={item.id} className="details-row">
                              {Object.keys(detail).map((detail_key, i) => {
                                return (
                                  <TableData key={i}>
                                    {detail[detail_key]}
                                  </TableData>
                                );
                              })}
                            </Row>
                          );
                        })}
                      <br></br>
                    </Row>
                  </>
                );
              })}
        </Table>
      )}
      {state.right && (
        <DrawerComponent state={state} toggleDrawer={toggleDrawer} width={size}>
          <div>
            <DetailsTitle color={page_color as string}>
              {sideBarTitle}
            </DetailsTitle>
            <DetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
              {drawerData && (
                <DetailList>
                  {Object.keys(searchvalue[0]).map((key: string, i) => {
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
      {grid && (
        <CardViewContainer>
          <CardList>
            {searchvalue.slice(0, recordsPerPage as number).map((item: any) => {
              let keys = Object.keys(item).filter(
                (procedure) => procedure !== "procedures"
              );
              return (
                <>
                  <CardListItems
                    key={item.id}
                    className={item.status === "In-active" ? "in-active" : ""}
                  >
                    <CardListItemsWrapper className="card-name">
                      <CardUserSvg />
                      <span>{item?.name_en || item?.company_en}</span>
                    </CardListItemsWrapper>
                    <CardListItemsWrapper>
                      <IDsvg />
                      <span>{item.id}</span>
                    </CardListItemsWrapper>
                    {item?.expire_date && (
                      <CardListItemsWrapper>
                        <CalendarSvg fill={colors.darkBlue} />
                        <span>{item?.expire_date}</span>
                      </CardListItemsWrapper>
                    )}
                  </CardListItems>
                </>
              );
            })}
          </CardList>
          {recordsPerPage === searchvalue.length ? (
            <Button onClick={() => setRecordPerPage(recordsPerPage + 5)}>
              view more
            </Button>
          ) : (
            ""
          )}
        </CardViewContainer>
      )}
      <PaginationWrapper>
        <PaginationOuterDiv>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </PaginationOuterDiv>
      </PaginationWrapper>
    </DataTableContainer>
  );
};
export default DataTable;