import * as React from "react";
import {
  ALsaudia,
  ButtonWrapper,
  Car,
  CarColor,
  CarDetailWrapper,
  CarDetailsTitle,
  CarMakeModel,
  CarMakeModelWrapper,
  CarPlateIcon,
  CarRentPageTitle,
  CarSpecsWrapper,
  CarTransmitionWrapper,
  CarTypeIconWrapper,
  CarWrapper,
  CardListWrapper,
  Container,
  DetailList,
  DetailListItem,
  Span,
  Spantext,
  Strong,
  Strongtext,
  TD,
  Table,
} from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import { Car_chart_data, car_specs, header_card } from "@/global/fakeData";
import CarYearSvg from "@/public/icons/carYearSvg";
import NumberOfRentedSvg from "@/public/icons/numberOfRentedSvg";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import { Tooltip } from "@nextui-org/react";
import { Button, Grow } from "@mui/material";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import IconComponent from "@/reuseableComponents/IconComponent";
import { SearchTabsWrapper } from "../Dashboard/style";
import InputComponent from "@/reuseableComponents/InputField";
import FilterTabs from "@/reuseableComponents/filterTabs";
import DrawerComponent from "@/reuseableComponents/Drawer";
import SaLogoSvg from "@/public/icons/saLogoSvg";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import { GlobalUserContext } from "@/context";
import EconomicSvg from "@/public/icons/economic";
import CarPlateSvg from "@/public/icons/carPlateSvg";
import CarManagementSvg from "@/public/icons/carManagementSvg";
import CarManageSvg from "@/public/icons/carManageSvg";
import CarInsuranceSvg from "@/public/icons/carInsuranceSvg";
import CarExtraKmLimitSvg from "@/public/icons/carExtraKmLimitSvg";
import CarRentSvg from "@/public/icons/cars";
type Anchor = "top" | "left" | "bottom" | "right";
const CarRent = () => {
  const { colors, locale } = useTheme();
  const { menu } = React.useContext(GlobalUserContext);
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
  const handleClick = (value: string) => {
    console.log(value);
    setLabel(value);
    if (value === "sedan") {
      setSedan(true);
      setSuv(false);
      setPickup(false);
      setEconomic(false);
    }
    if (value === "suv") {
      setSedan(false);
      setSuv(true);
      setPickup(false);
      setEconomic(false);
    }
    if (value === "pickup") {
      setSedan(false);
      setSuv(false);
      setPickup(true);
      setEconomic(false);
    }
    if (value === "economic") {
      setSedan(false);
      setSuv(false);
      setPickup(false);
      setEconomic(true);
    }
  };
  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
    console.log(state);
  };

  return (
    <Container>
      <HeaderCard
        title="Rent a Car"
        card={header_card}
        chart_data={Car_chart_data}
      />
      <CardListWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <CarRentPageTitle>Available Cars</CarRentPageTitle>
        <SearchTabsWrapper
          bcolor={isTheme()?.bcolor}
          color={isTheme()?.inputColor}
        >
          {/* // contract tabs */}
          <FilterTabs
            title={["sedan", "suv", "pick up", "economic"]}
            handleClick={handleClick}
            label={label}
            classname="car-tabs"
          />
          <InputComponent
            type="search"
            placeholder="Search car by plate number or car model"
            label="Search Cars"
            // onChange={(e) => handleChange(e)}
            classname="search-input-car"
          />
        </SearchTabsWrapper>
        <CarWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
          {car_specs.map((car, index) => {
            return (
              <Grow
                in={true}
                style={{ transformOrigin: "0 0 0" }}
                {...(true ? { timeout: 2000 } : {})}
                key={index}
              >
                <Car
                  bcolor={isTheme().cardcolor}
                  color={isTheme().color}
                  key={index}
                >
                  <CarMakeModelWrapper>
                    <CarMakeModel color={isTheme().color}>
                      <IconComponent
                        width="30px"
                        height="30px"
                        fill={isTheme().color}
                        icon={car.icon}
                      />{" "}
                      <div>{car.make_model}</div>
                    </CarMakeModel>
                    <CarColor color={car.color}></CarColor>
                  </CarMakeModelWrapper>
                  <Strong color={isTheme().color}>{car.rent_per_day}</Strong>
                  <Span color={isTheme().color}>/day</Span>
                  <CarTypeIconWrapper>
                    <div>
                      <IconComponent
                        width="100px"
                        height="100"
                        fill={isTheme().color}
                        icon={car.car_type}
                      />
                    </div>
                    <Table color={isTheme().color}>
                      <tbody>
                        <tr>
                          <TD className="border-bottom">١٣٥٧</TD>
                          <TD className="border-bottom">اات</TD>
                          <TD className="alsaudia" color={isTheme().color}>
                            <SaLogoSvg fill={isTheme().color} />
                            <ALsaudia color={isTheme().color}>
                              السعودية
                            </ALsaudia>
                          </TD>
                        </tr>
                        <tr>
                          <TD>1357</TD>
                          <TD>caa</TD>
                          <TD className="KSA">
                            <p>
                              K<br></br>S<br></br>A
                            </p>
                          </TD>
                        </tr>
                      </tbody>
                    </Table>
                  </CarTypeIconWrapper>
                  <CarSpecsWrapper>
                    <CarTransmitionWrapper>
                      <Tooltip content="Car Year" color={"warning"}>
                        <CarYearSvg
                          width="25px"
                          height="25px"
                          fill={isTheme().color}
                        />
                        <p>{car.year}</p>
                      </Tooltip>
                    </CarTransmitionWrapper>{" "}
                    <CarTransmitionWrapper>
                      <Tooltip content="Fuel Type" color={"success"}>
                        <CarPetrolSvg
                          width="25px"
                          height="25px"
                          fill={isTheme().color}
                        />
                        <p>{car.fuel_type}</p>
                      </Tooltip>
                    </CarTransmitionWrapper>{" "}
                    <CarTransmitionWrapper>
                      <Tooltip content="Time Rented" color={"primary"}>
                        <NumberOfRentedSvg
                          width="25px"
                          height="25px"
                          fill={isTheme().color}
                        />
                        <p>{car.rented_times}</p>
                      </Tooltip>
                    </CarTransmitionWrapper>{" "}
                    <CarTransmitionWrapper>
                      <Tooltip content="Mileage" color={"secondary"}>
                        <CarMileageSvg
                          width="25px"
                          height="25px"
                          fill={isTheme().color}
                        />
                        <p>{car.mileage}</p>
                      </Tooltip>
                    </CarTransmitionWrapper>
                  </CarSpecsWrapper>
                  <ButtonWrapper>
                    <Button variant="outlined" className="detail">
                      Rent
                    </Button>
                    <Button
                      onClick={() =>
                        toggleDrawer(locale === "en" ? "right" : "left", true)
                      }
                      className="detail"
                      variant="outlined"
                      endIcon={
                        <ArrowCircleSvg
                          width="15px"
                          height="15px"
                          fill={colors.nafethBlue}
                        />
                      }
                    >
                      Details
                    </Button>
                  </ButtonWrapper>
                </Car>
              </Grow>
            );
          })}
        </CarWrapper>
        <DrawerComponent state={state} toggleDrawer={toggleDrawer}>
          <div>
            <CarDetailsTitle>Car Details</CarDetailsTitle>
            <CarDetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
              <DetailList>
                <DetailListItem>
                  <CarRentSvg width="30px" height="30px" />
                  <Strongtext>Daily Rent</Strongtext>
                  <Spantext>{car_specs[0].daily_rent}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarRentSvg width="30px" height="30px" />{" "}
                  <Strongtext>Weekly Rent</Strongtext>
                  <Spantext>{car_specs[0].weekly_rent}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarRentSvg width="30px" height="30px" />
                  <Strongtext>Monthly Rent</Strongtext>
                  <Spantext>{car_specs[0].monthly_rent}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarManageSvg width="30px" height="30px" />
                  <Strongtext>Extra KM Price</Strongtext>
                  <Spantext>{car_specs[0].extra_km_price}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarMileageSvg width="30px" height="30px" />
                  <Strongtext>Per Extra KM</Strongtext>
                  <Spantext>{car_specs[0].per_extra_kM}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarInsuranceSvg width="30px" height="30px" />{" "}
                  <Strongtext>Insurance Provider</Strongtext>
                  <Spantext>{car_specs[0].insurance_provider}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarPlateSvg width="30px" height="30px" />{" "}
                  <Strongtext>Plate Type</Strongtext>
                  <Spantext>{car_specs[0].plate_type}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <EconomicSvg width="30px" height="30px" />
                  <Strongtext>Car Type</Strongtext>
                  <Spantext>{car_specs[0].car_type}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarPetrolSvg width="30px" height="30px" />
                  <Strongtext>Fuel Type</Strongtext>
                  <Spantext>{car_specs[0].fuel_type}</Spantext>
                </DetailListItem>
                <DetailListItem>
                  <CarExtraKmLimitSvg width="30px" height="30px" />
                  <Strongtext>Daily KM Limit</Strongtext>
                  <Spantext>{car_specs[0].dail_km_limit}</Spantext>
                </DetailListItem>
                <Button variant="contained" className="rent-button">
                  Rent
                </Button>
              </DetailList>
            </CarDetailWrapper>
          </div>
        </DrawerComponent>
      </CardListWrapper>
    </Container>
  );
};
export default CarRent;
