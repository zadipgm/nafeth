import * as React from "react";
import {
  ALsaudia,
  ButtonWrapper,
  Car,
  CarColor,
  CarMakeModel,
  CarMakeModelWrapper,
  CarRentPageTitle,
  CarSpecsWrapper,
  CarTransmitionWrapper,
  CarTypeIconWrapper,
  CarWrapper,
  CardListWrapper,
  Container,
  Span,
  Strong,
  TD,
  Table,
} from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import { car_specs, header_card } from "@/global/fakeData";
import CarYearSvg from "@/public/icons/carYearSvg";
import NumberOfRentedSvg from "@/public/icons/numberOfRentedSvg";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import { Tooltip } from "@nextui-org/react";
import { Button } from "@mui/material";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import IconComponent from "@/reuseableComponents/IconComponent";
import { SearchTabsWrapper } from "../Dashboard/style";
import InputComponent from "@/reuseableComponents/InputField";
import FilterTabs from "@/reuseableComponents/filterTabs";
import DrawerComponent from "@/reuseableComponents/Drawer";
import SaLogoSvg from "@/public/icons/saLogoSvg";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
type Anchor = "top" | "left" | "bottom" | "right";
const CarRent = () => {
  const { colors, locale } = useTheme();
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
      <HeaderCard title="Rent a Car" card={header_card} />
      <CardListWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
        <CarRentPageTitle>Available Cars</CarRentPageTitle>
        <SearchTabsWrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
          {/* // contract tabs */}
          <FilterTabs
            title={["sedan", "suv", "pick up", "economic"]}
            handleClick={handleClick}
            label={label}
          />
          <InputComponent
            type="search"
            placeholder="Search car by plate number or car model"
            label="Search Cars"
            // onChange={(e) => handleChange(e)}
            classname="search-input"
          />
        </SearchTabsWrapper>
        <CarWrapper bcolor={isTheme().bcolor} color={isTheme().color}>
          {car_specs.map((car, index) => {
            return (
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
                      icon={car.type}
                    />
                  </div>
                  <Table color={isTheme().color}>
                    <tbody>
                      <tr>
                        <TD className="border-bottom">١٣٥٧</TD>
                        <TD className="border-bottom">اات</TD>
                        <TD className="alsaudia" color={isTheme().color}>
                          <SaLogoSvg fill={isTheme().color} />
                          <ALsaudia color={isTheme().color}>السعودية</ALsaudia>
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
                  {/* <NumberPlateContainer>
                    <div>
                      <NumberPlateArabic color={isTheme().color}>
                        <Parent>
                          <Child className="arabic">١٣٥٧</Child>
                        </Parent>
                        <Parent>
                          <Child className="arabic_1">اات</Child>
                        </Parent>
                      </NumberPlateArabic>
                      <NumberPlateEnglish color={isTheme().color}>
                        <Parent>
                          <Child className="english">1357</Child>
                        </Parent>
                        <Parent>
                          <Child className="english_1">caa</Child>
                        </Parent>
                      </NumberPlateEnglish>
                    </div>
                    <CarPlateIcon color={isTheme().color}>
                      <SaLogoSvg />
                      <ALsaudia color={isTheme().color}>السعودية</ALsaudia>
                      <p>
                        K<br></br>S<br></br>A
                      </p>
                    </CarPlateIcon>
                  </NumberPlateContainer> */}
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
            );
          })}
        </CarWrapper>
        <DrawerComponent state={state} toggleDrawer={toggleDrawer} />
      </CardListWrapper>
    </Container>
  );
};
export default CarRent;
