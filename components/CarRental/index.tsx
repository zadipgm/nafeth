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
import { Button, Fab } from "@mui/material";
import DrawerComponent from "@/reuseableComponents/Drawer";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import CarPlateSvg from "@/public/icons/carPlateSvg";
import CarManageSvg from "@/public/icons/carManageSvg";
import CarInsuranceSvg from "@/public/icons/carInsuranceSvg";
import CarRentSvg from "@/public/icons/cars";
import EconomicSvg from "@/public/icons/Economic";
import { SearchTabsWrapper } from "../contracts/style";
import CarListView from "./ListView";
import CarGridView from "./gridView";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import ViewButton from "@/reuseableComponents/viewsButton";
import SearchComponent from "@/reuseableComponents/SearchComponent";
import MainSectionCard from "@/reuseableComponents/HeaderCards/mainSectionCard";
import { GlobalUserContext } from "@/context";
import { Title } from "../GlobalSettings/BranchManagement/style";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: any;
  page?: string;
  title: string;
  showAddButton?: boolean;
  hanldeSelected?: (param: any) => void;
  selectedCarID?: any;
}
const CarRent = ({
  cars,
  page,
  hanldeSelected,
  showAddButton,
  selectedCarID,
}: ICarProps) => {
  const router = useRouter();
  const { userName, userPassword, company } =
    React.useContext(GlobalUserContext);
  const { colors, isMobile } = useTheme();
  const [show, setShow] = React.useState(4);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [carDetails, setCarDetails] = React.useState<any>();
  const [searchvalue, setSearchvalue] = React.useState(cars.result);
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
        {page === "dashboard" ||
        page === "promotions" ||
        page === "promotions_active" ? (
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
        {page === "dashboard" ? (
          <MainSectionCard page={"dashboard"} card={header_card_dashboard} />
        ) : (
          ""
        )}

        <CardListWrapper
          bcolor={isTheme().bcolor}
          color={isTheme().color}
          className="car-management"
        >
          <Title color={colors.nafethBlue}>
            {page === "dashboard" ? (
              <h2>Available Cars</h2>
            ) : (
              <h2>Cars List</h2>
            )}
          </Title>
          <SearchTabsWrapper
            bcolor={isTheme()?.bcolor}
            color={isTheme()?.inputColor}
          >
            <ViewButton handleView={handleView} list={list} grid={grid} />
            {showAddButton && (
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
            )}
            <SearchComponent
              data={cars.result}
              currentRecords={cars.result}
              setSearchvalue={setSearchvalue}
            />
          </SearchTabsWrapper>
          {list && (
            <CarListView
              cars={searchvalue}
              page={page}
              show={show}
              handleEdit={handleEdit}
              toggleDrawer={toggleDrawer}
              hanldeSelected={hanldeSelected}
              selectedCarID={selectedCarID}
            />
          )}
          {grid && (
            <CarGridView
              cars={searchvalue}
              page={page}
              show={show}
              handleEdit={handleEdit}
              toggleDrawer={toggleDrawer}
              hanldeSelected={hanldeSelected}
              selectedCarID={selectedCarID}
            />
          )}
          <DrawerComponent
            state={state}
            toggleDrawer={toggleDrawer}
            width="600px"
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
                    onClick={() => router.push(`/cars/rent/${carDetails?.id}`)}
                  >
                    Rent
                  </Button>
                </DetailList>
              </DetailWrapper>
            </div>
          </DrawerComponent>
          {cars.result.length > 4 && (
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
