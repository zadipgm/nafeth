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
import { SearchTabsWrapper } from "../contracts/style";
import CarListView from "./ListView";
import CarGridView from "./gridView";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import ViewButton from "@/reuseableComponents/viewsButton";
import SearchComponent from "@/reuseableComponents/SearchComponent";
import MainSectionCard from "@/reuseableComponents/HeaderCards/mainSectionCard";
import { Title } from "../GlobalSettings/BranchManagement/style";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import MUIPaiChart from "@/reuseableComponents/MuiCharts";
import { carKeys } from "@/constants";
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

  const { colors, isMobile, isLTR, translations } = useTheme();
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
  const hanldeShowMore = (val: number) => {
    if (cars?.result?.length > show) {
      let diffrence = cars.result.length - show;
      if (diffrence >= 4) {
        setShow((prev: number) => prev + val);
      } else {
        setShow(cars.result.length);
      }
    }
  };
  return (
    <>
      {/* ||
        page === "promotions" ||
        page === "promotions_active" */}
      <Container>
        {page === "dashboard" ? (
          <HeaderCard
            title={""}
            card={header_card_dashboard.slice(0, 4)}
            chart_data={Car_chart_data}
            chartTitle="Car summary"
            page="das"
          />
        ) : (
          <HeaderCard
            title={""}
            card={header_card.slice(0, 4)}
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
          <Title color={colors.sideBarBgColor}>
            {page === "dashboard" ? (
              <h2>{isLTR ? "Available Cars" : "السيارات المتوفرة"}</h2>
            ) : (
              <h2>{isLTR ? "Car List" : "قائمة سيارة"}</h2>
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
                  backgroundColor: `${colors.sideBarBgColor}`,
                  color: "white",
                  width: `${isMobile ? "100%" : "17%"}`,
                  borderRadius: "8px",
                }}
                className="add_button_filter"
                onClick={() => router.push(`/cars/add` as string)}
              >
                {translations?.addCar}
                <AddIcon />
              </Fab>
            )}
            <SearchComponent
              data={cars.result}
              currentRecords={cars.result}
              setSearchvalue={setSearchvalue}
              keys={carKeys}
              classname="small_size"
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
            item={carDetails}
          >
            <div>
              <DetailsTitle color={colors.sideBarBgColor}>
                {translations?.carDetails}
              </DetailsTitle>
              <DetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
                <DetailList className="car_page">
                  <DetailListItem>
                    <Strongtext>{translations?.dailyRent}</Strongtext>
                    <Spantext>{carDetails?.dailyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.weeklyRent}</Strongtext>
                    <Spantext>{carDetails?.weeklyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.monthlyRent}</Strongtext>
                    <Spantext>{carDetails?.monthlyRent}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.dailyKMLimit}</Strongtext>
                    <Spantext>{carDetails?.dailyKMlimit}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.perExtraKM}</Strongtext>
                    <Spantext>{carDetails?.perExtraKM}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.insuranceProvider}</Strongtext>
                    <Spantext>{carDetails?.insurance.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.plateType}</Strongtext>
                    <Spantext>{carDetails?.plateType.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.carType}</Strongtext>
                    <Spantext>{carDetails?.carType.name_en}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>{translations?.fuelType}</Strongtext>
                    <Spantext>{carDetails?.fuelType.name_en}</Spantext>
                  </DetailListItem>
                  <Button
                    variant="contained"
                    className="rent-button"
                    onClick={() => router.push(`/cars/rent/${carDetails?.id}`)}
                  >
                    {translations?.rent}
                  </Button>
                </DetailList>
              </DetailWrapper>
            </div>
          </DrawerComponent>
          {cars.result?.length > 4 && (
            <Button
              variant={"contained"}
              onClick={() => hanldeShowMore(4)}
              className="load-more"
              endIcon={
                <ArrowCircleSvg
                  width="15px"
                  height="15px"
                  fill={colors.white}
                />
              }
              disabled={cars?.result?.length === show ? true : false}
            >
              {translations?.viewMore}
            </Button>
          )}
        </CardListWrapper>
      </Container>
    </>
  );
};
export default CarRent;
