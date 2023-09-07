import * as React from "react";
import {
  DetailWrapper,
  DetailsTitle,
  CardListWrapper,
  Container,
  DetailList,
  DetailListItem,
  Spantext,
  Strongtext,
  ViewsWrapper,
  GridViewWrapper,
  ListViewWrapper,
} from "./style";
import { useRouter } from "next/router";
import AddIcon from "@mui/icons-material/Add";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import {
  Car_chart_data,
  header_card,
  header_card_dashboard,
} from "@/global/fakeData";
import { Tooltip } from "@nextui-org/react";
import { Button, Fab, Grow } from "@mui/material";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import InputComponent from "@/reuseableComponents/InputField";
import DrawerComponent from "@/reuseableComponents/Drawer";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import CarPlateSvg from "@/public/icons/carPlateSvg";
import CarManageSvg from "@/public/icons/carManageSvg";
import CarInsuranceSvg from "@/public/icons/carInsuranceSvg";
import CarRentSvg from "@/public/icons/cars";
import { ICarModel } from "@/models/carmodel";
import EconomicSvg from "@/public/icons/Economic";
import { SearchBarWrapper, SearchTabsWrapper } from "../contracts/style";
import CarListView from "./ListView";
import CarGridView from "./gridView";
import GridView from "@/public/icons/gridView";
import ListView from "@/public/icons/tableView";
import CarMileageSvg from "@/public/icons/carMileageSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page?: string;
  title: string;
}
const CarRent = ({ cars, page, title }: ICarProps) => {
  const router = useRouter();
  const { colors, locale, isMobile } = useTheme();
  const [label, setLabel] = React.useState("sedan");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [all, setSedan] = React.useState(true);
  const [company, setPickup] = React.useState(false);
  const [individual, setSuv] = React.useState(false);
  const [economic, setEconomic] = React.useState(false);
  const [carDetails, setCarDetails] = React.useState<any>();
  const [show, setShow] = React.useState(8);
  const [list, setList] = React.useState(true);
  const [grid, setGrid] = React.useState(false);
  const toggleDrawer = (anchor: Anchor, open: boolean, car?: any) => {
    console.log("toggleDrawer", car);
    setCarDetails(car);
    setState({ ...state, [anchor]: open });
  };
  const handleEdit = (id: number) => {
    router.push({
      pathname: `/cars/edit/${id}`,
    });
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
    <>
      <Container>
        {page === "dashboard" ? (
          ""
        ) : (
          <HeaderCard
            title={"Car Management"}
            card={header_card}
            chart_data={Car_chart_data}
            chartTitle="Car summary"
            page="car-management"
          />
        )}
        <CardListWrapper
          bcolor={isTheme().bcolor}
          color={isTheme().color}
          className="car-management"
        >
          <SearchTabsWrapper
            bcolor={isTheme()?.bcolor}
            color={isTheme()?.inputColor}
          >
            <ViewsWrapper>
              <Tooltip content={"Grid View"} color={"success"}>
                <GridViewWrapper
                  onClick={() => handleView("grid")}
                  className={grid ? "active" : ""}
                >
                  <GridView
                    width="35px"
                    height="35px"
                    fill={colors.nafethBlue}
                  />
                </GridViewWrapper>
              </Tooltip>
              <Tooltip content={"List View"} color={"success"}>
                <ListViewWrapper
                  onClick={() => handleView("list")}
                  className={list ? "active" : ""}
                >
                  <ListView
                    width="40px"
                    height="40px"
                    fill={colors.nafethBlue}
                  />
                </ListViewWrapper>
              </Tooltip>
            </ViewsWrapper>
            <SearchBarWrapper
              bcolor={isTheme()?.bcolor}
              color={isTheme()?.inputColor}
              className={page}
            >
              <Fab
                aria-label={"add"}
                style={{
                  margin: "12px 0px",
                  backgroundColor: `${colors.nafethBlue}`,
                  color: "white",
                  width: `${isMobile ? "100%" : "17%"}`,
                  borderRadius: "8px",
                }}
                onClick={() => router.push(`/cars/add` as string)}
              >
                Add Car
                <AddIcon />
              </Fab>
              <InputComponent
                type="search"
                placeholder="Search car by plate number or car model"
                label="Search Cars by plate number or car model"
                classname="search-input-car"
              />
            </SearchBarWrapper>
          </SearchTabsWrapper>
          {list && (
            <CarListView
              cars={cars}
              page={page}
              show={show}
              handleEdit={handleEdit}
              toggleDrawer={toggleDrawer}
              keys={[
                "mileage",
                "dailyRent",
                "weeklyRent",
                "monthlyRent",
                "timesRented",
                "active",
              ]}
            />
          )}
          {grid && (
            <CarGridView
              cars={cars}
              page={page}
              show={show}
              handleEdit={handleEdit}
              toggleDrawer={toggleDrawer}
            />
          )}
          <DrawerComponent
            state={state}
            toggleDrawer={toggleDrawer}
            width="400px"
          >
            <div>
              <DetailsTitle color={colors.nafethBlue}>Car Details</DetailsTitle>
              <DetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
                <DetailList>
                  <DetailListItem>
                    <CarRentSvg width="30px" height="30px" />
                    <Strongtext>Daily Rent</Strongtext>
                    <Spantext>{carDetails?.dailyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarRentSvg width="30px" height="30px" />{" "}
                    <Strongtext>Weekly Rent</Strongtext>
                    <Spantext>{carDetails?.weeklyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarRentSvg width="30px" height="30px" />
                    <Strongtext>Monthly Rent</Strongtext>
                    <Spantext>{carDetails?.monthlyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarManageSvg width="30px" height="30px" />
                    <Strongtext>Daily KM Limit</Strongtext>
                    <Spantext>{carDetails?.dailyKMlimit}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarMileageSvg width="30px" height="30px" />
                    <Strongtext>Per Extra KM</Strongtext>
                    <Spantext>{carDetails?.perExtraKM}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarInsuranceSvg width="30px" height="30px" />{" "}
                    <Strongtext>Insurance Provider</Strongtext>
                    <Spantext>{carDetails?.insurance.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarPlateSvg width="30px" height="30px" />{" "}
                    <Strongtext>Plate Type</Strongtext>
                    <Spantext>{carDetails?.plateType.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <EconomicSvg width="30px" height="30px" />
                    <Strongtext>Car Type</Strongtext>
                    <Spantext>{carDetails?.carType.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <CarPetrolSvg width="30px" height="30px" />
                    <Strongtext>Fuel Type</Strongtext>
                    <Spantext>{carDetails?.fuelType.name_en}</Spantext>
                  </DetailListItem>
                  <Button
                    variant="contained"
                    className="rent-button"
                    onClick={() => router.push("/cars/rent/")}
                  >
                    Rent
                  </Button>
                </DetailList>
              </DetailWrapper>
            </div>
          </DrawerComponent>
          {show === cars.result.length ? (
            ""
          ) : (
            <Button
              variant={"contained"}
              onClick={() => setShow(show + 4)}
              className="load-more"
              endIcon={
                <ArrowCircleSvg
                  width="15px"
                  height="15px"
                  fill={colors.white}
                />
              }
            >
              View more
            </Button>
          )}
        </CardListWrapper>
      </Container>
    </>
  );
};
export default CarRent;
