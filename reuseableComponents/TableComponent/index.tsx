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
import { IGroups } from "@/models/groups";
import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import { fetchGroups } from "@/api/fetchapis/groups";
import PaginationComponent from "../Pagination";
import usePagination from "@/hooks/usePagination";
import DrawerComponent from "../Drawer";
import {
  CarDetailWrapper,
  CarDetailsTitle,
  DetailList,
  DetailListItem,
  Spantext,
  Strongtext,
} from "@/components/CarRental/style";
import CarRentSvg from "@/public/icons/cars";
import CarManageSvg from "@/public/icons/carManageSvg";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import CarInsuranceSvg from "@/public/icons/carInsuranceSvg";
import CarPlateSvg from "@/public/icons/carPlateSvg";
import EconomicSvg from "@/public/icons/economic";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import CarExtraKmLimitSvg from "@/public/icons/carExtraKmLimitSvg";
import { useTheme } from "styled-components";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  tableData: any;
  headerValue: string[];
  isDeleteAble?: boolean;
  isDuplicate?: boolean;
  linkPageUrl?: string;
  page_color?: string;
  sideBarTitle?: string;
}
const TableComponent = ({
  tableData,
  headerValue,
  isDeleteAble,
  isDuplicate,
  linkPageUrl,
  page_color,
  sideBarTitle,
}: IProps) => {
  const { locale } = useTheme();
  const [page, setPage] = React.useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(tableData);
  const PER_PAGE = 10;
  const dataLength = tableData?.length;
  console.log("dataLength", dataLength);
  const count = Math.ceil(dataLength / PER_PAGE);
  const _DATA = usePagination(tableData, PER_PAGE);
  const [search, setSearch] = React.useState(_DATA.currentData());
  const router = useRouter();
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
    await fetchGroups(userName, userPassWord, duplicateUrl, company);
    const res = await fetchGroups(userName, userPassWord, url, company);
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

  const handleChangePagination = (event: any, value: number) => {
    setPage(value);
    console.log("here");
    _DATA.jump(value);
    setSearch(_DATA.currentData());
  };
  const toggleDrawer = (anchor: Anchor, open: boolean, item?: any) => {
    setState({ ...state, [anchor]: open });
    console.log(item);
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
        <Pagination
          count={count}
          page={page}
          className="pagination"
          onChange={handleChangePagination}
        />
      </Table>
      <DrawerComponent state={state} toggleDrawer={toggleDrawer}>
        <div>
          <CarDetailsTitle color={page_color as string}>
            {sideBarTitle}
          </CarDetailsTitle>
          <CarDetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
            <DetailList>
              <DetailListItem>
                <CarRentSvg width="30px" height="30px" />
                <Strongtext>Daily Rent</Strongtext>
                <Spantext>{"car_specs[0].daily_rent"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarRentSvg width="30px" height="30px" />{" "}
                <Strongtext>Weekly Rent</Strongtext>
                <Spantext>{"car_specs[0].weekly_rent"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarRentSvg width="30px" height="30px" />
                <Strongtext>Monthly Rent</Strongtext>
                <Spantext>{"car_specs[0].monthly_rent"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarManageSvg width="30px" height="30px" />
                <Strongtext>Extra KM Price</Strongtext>
                <Spantext>{"car_specs[0].extra_km_price"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarMileageSvg width="30px" height="30px" />
                <Strongtext>Per Extra KM</Strongtext>
                <Spantext>{"car_specs[0].per_extra_kM"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarInsuranceSvg width="30px" height="30px" />{" "}
                <Strongtext>Insurance Provider</Strongtext>
                <Spantext>{"car_specs[0].insurance_provider"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarPlateSvg width="30px" height="30px" />{" "}
                <Strongtext>Plate Type</Strongtext>
                <Spantext>{"car_specs[0].plate_type"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <EconomicSvg width="30px" height="30px" />
                <Strongtext>Car Type</Strongtext>
                <Spantext>{"car_specs[0].car_type"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarPetrolSvg width="30px" height="30px" />
                <Strongtext>Fuel Type</Strongtext>
                <Spantext>{"car_specs[0].fuel_type"}</Spantext>
              </DetailListItem>
              <DetailListItem>
                <CarExtraKmLimitSvg width="30px" height="30px" />
                <Strongtext>Daily KM Limit</Strongtext>
                <Spantext>{"car_specs[0].dail_km_limit"}</Spantext>
              </DetailListItem>
            </DetailList>
          </CarDetailWrapper>
        </div>
      </DrawerComponent>
    </CommonContainer>
  );
};
export default TableComponent;
