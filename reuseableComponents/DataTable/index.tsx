import * as React from "react";
import {
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
  TableDataWrapper,
  ToolTipWrapper,
  DataTableContainer,
  TableWrapper,
  THeader,
} from "./style";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import { Button, ButtonGroup, Fab, IconButton } from "@mui/material";
import { filterByLocale } from "@/hooks/filterByLocale";
import { HandleAscending, HandleDescending } from "@/hooks/useSorting";
import SortUp from "@/public/icons/sortUp";
import SortDown from "@/public/icons/sortDown";
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
  ButtonWrapper,
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsTitle,
  Spantext,
  Strongtext,
} from "@/components/CarRental/style";
import { isTheme } from "@/_helpers/getTheme";
import ViewButton from "../viewsButton";
import SearchComponent from "../SearchComponent";
import { SearchTabsWrapper } from "@/components/contracts/style";
import { GroupButtons } from "@/components/GlobalSettings/compnaySettings/style";
import { CloseIconWrapper } from "@/components/header/styled.components";
import CloseSvg from "@/public/icons/closeSvg";

interface IProps {
  data?: any;
  linkPageUrl?: string;
  showFilter: boolean;
  isEditAble?: boolean;
  isViewAble?: boolean;
  isDeleteAble?: boolean;
  classname?: string;
  isDuplicate?: boolean;
  page_color?: string;
  sideBarTitle?: string;
  size?: string;
  showAddButton?: boolean;
  addButtonText?: string;
  paymentButton?: boolean;
  viewButtons?: boolean;
  handleClose?: () => void;
  isSelectable?: boolean;
  handleSelect?: (param: number) => void;
  showCloseIcon?: boolean;
  keys?: string[];
}
type Anchor = "top" | "left" | "bottom" | "right";
const DataTable = ({
  data,
  linkPageUrl,
  showFilter,
  isEditAble,
  isViewAble,
  isDeleteAble,
  page_color,
  isDuplicate,
  size,
  sideBarTitle,
  addButtonText,
  showAddButton,
  classname,
  viewButtons,
  handleClose,
  isSelectable,
  showCloseIcon,
  handleSelect,
  keys,
}: IProps) => {
  const { colors, locale, translations, isLTR } = useTheme();
  const router = useRouter();
  const [searchvalue, setSearchvalue] = React.useState([]);
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
    setSearchvalue(data);
  }, [data]);
  React.useEffect(() => {
    let value = currentRecords;
    setSearchvalue(value);
  }, [indexOfLastRecord, indexOfFirstRecord]);

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
    return filterByLocale(locale, keys).map((key: any, index: any) => {
      return (
        <THeader key={key} className="table-header">
          <TableDataWrapper>
            <Data>{key.toUpperCase().replaceAll("_", " ")}</Data>
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
        </THeader>
      );
    });
  };

  const hanldeEdit = (id: any) => {
    router.push({
      pathname: `/${linkPageUrl}/edit/${id}`,
    });
  };
  const handleSelectedContract = (id: number) => {
    handleSelect?.(id);
    setTimeout(() => {
      handleClose?.();
    }, 500);
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
      {showCloseIcon && (
        <CloseIconWrapper onClick={handleClose}>
          <CloseSvg />
        </CloseIconWrapper>
      )}
      {showFilter && (
        <SearchTabsWrapper
          bcolor={isTheme()?.bcolor}
          color={isTheme()?.inputColor}
        >
          {viewButtons && (
            <ViewButton handleView={handleView} list={list} grid={grid} />
          )}

          {showAddButton && (
            <Fab
              aria-label={"add"}
              style={{
                backgroundColor: `${page_color}`,
                color: "white",
                borderRadius: "8px",
                flexGrow: "1",
                flexBasis: "250px",
                fontSize: `${isLTR ? "16px" : "18px"}`,
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
            keys={keys}
            classname={classname}
          />
        </SearchTabsWrapper>
      )}
      {list && (
        <TableWrapper className={classname}>
          <Table>
            <tbody>
              <Row>{renderTableHeader()}</Row>
              {searchvalue &&
                searchvalue
                  ?.slice(0, recordsPerPage as number)
                  ?.map((item: any, index: any) => {
                    return (
                      <Row key={item.nationalID ? item.nationalID : item.id}>
                        {filterByLocale(locale, keys).map(
                          (key: any, i: any) => {
                            return (
                              <TableData key={i}>
                                {`${typeof item[key]}` === "object"
                                  ? `${item[key]?.[`name_${locale}`]}`
                                  : `${item[key]}`}{" "}
                              </TableData>
                            );
                          }
                        )}
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
                            {isSelectable && (
                              <ButtonGroup
                                variant="contained"
                                color="primary"
                                onClick={() =>
                                  handleSelectedContract(
                                    item.contractNo ? item.contractNo : item.id
                                  )
                                }
                              >
                                <Button>{translations?.select}</Button>
                              </ButtonGroup>
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
                    );
                  })}
            </tbody>
          </Table>
        </TableWrapper>
      )}
      {drawerData && (
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
      {data?.length >= 10 && (
        <PaginationWrapper>
          <PaginationOuterDiv>
            <Pagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </PaginationOuterDiv>
        </PaginationWrapper>
      )}
    </DataTableContainer>
  );
};
export default DataTable;
