import { Button, Grow } from "@mui/material";
import * as React from "react";
import {
  ButtonWrapper,
  CardColor,
  CardPlateWrapper,
  CarStatus,
  CarTypeSvgWrapper,
  GlobalListViewWrapper,
  ModelListViewWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
  Status,
} from "../style";
import CarPlate from "../CarPlate";
import { Tooltip } from "@nextui-org/react";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarRentSvg from "@/public/icons/cars";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import { useTheme } from "styled-components";
import { useRouter } from "next/router";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import { EditSvg } from "@/public/icons/editSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  car: any;
  page: string | undefined;
  hanldeSelected?: (param: any) => void;

  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  selectedCarID?: any;
  i: any;
}
const List = ({
  car,
  page,
  hanldeSelected,

  handleEdit,
  toggleDrawer,
  i,
  selectedCarID,
}: IProps) => {
  const { locale, colors } = useTheme();
  const [activeID, setActiveID] = React.useState(selectedCarID);
  const router = useRouter();
  const handleCurrying = (car: any) => {
    hanldeSelected?.(car);
  };
  const handleCLick = (car: any) => {
    setActiveID(!activeID);
    handleCurrying(car);
  };
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(true ? { timeout: 2000 } : {})}
    >
      <div>
        <GlobalListViewWrapper
          className={activeID ? `active_${page}` : page}
          onClick={() => handleCLick(car)}
        >
          <ModelListViewWrapper>
            <span className="make-model">
              {car.make[`name_${locale}`]} {car.model[`name_${locale}`]}{" "}
              <span>/</span> <span className="color">{car.year}</span>
            </span>
            <CardPlateWrapper>
              <CarPlate car={car} />
            </CardPlateWrapper>
          </ModelListViewWrapper>
          <ReuseAbleList>
            <ReuseAbleListItem>
              <Tooltip content={"car fuel"} color={"success"}>
                <div>
                  <CarPetrolSvg
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                  />
                </div>
                {car.fuelType[`name_${locale}`]}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem>
              <Tooltip content={"car color"} color={"invert"}>
                <CardColor color={car.color[`name_${locale}`]}></CardColor>
                {car.color[`name_${locale}`]}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={car.mileage} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"carMileageSvg"}
                  />
                </div>
                {car.mileage}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={"dailyRent"} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"cars"}
                  />
                </div>
                {car.dailyRent}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={"weeklyRent"} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"carRentedSvg"}
                  />
                </div>
                {car.weeklyRent}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={"monthlyRent"} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"carTotalSvg"}
                  />
                </div>
                {car.monthlyRent}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={"timesRented"} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"numberOfRentedSvg"}
                  />
                </div>
                {car.timesRented}
              </Tooltip>
            </ReuseAbleListItem>
            <ReuseAbleListItem key={i}>
              <Tooltip content={"active"} color={"success"}>
                <div>
                  <IconComponent
                    width={"25px"}
                    height="25px"
                    fill={colors.nafethBlue}
                    icon={"active"}
                  />
                </div>
                {car.active}
              </Tooltip>
            </ReuseAbleListItem>
          </ReuseAbleList>
          <CarTypeSvgWrapper>
            <CarStatus>
              {page === "car-management" ? (
                <Status
                  color={
                    car.status === "Return"
                      ? colors.darkYellow
                      : car.status === "AVAILABLE"
                      ? colors.green
                      : car.status === "disputed"
                      ? colors.red
                      : colors.nafethBlue
                  }
                >
                  {car.status}
                </Status>
              ) : (
                <div></div>
              )}
              <IconComponent
                width="100px"
                height="100px"
                fill={car.color.name_en}
                stroke={colors.gray1}
                icon={car.carType.name_en.trim()}
              />
            </CarStatus>
            <ButtonWrapper className={page}>
              {page === "dashboard" && (
                <Button
                  variant="outlined"
                  className="rent"
                  onClick={() => router.push(`/cars/rent/${car.id}`)}
                  endIcon={
                    <CarRentSvg
                      width="18px"
                      height="18px"
                      fill={colors.purple}
                    />
                  }
                >
                  Rent
                </Button>
              )}
              {page === "car-management" && (
                <Button
                  variant="outlined"
                  className="edit"
                  onClick={() => handleEdit(car.id)}
                  endIcon={
                    <EditSvg
                      width="15px"
                      height="15px"
                      fill={colors.nafethBlue}
                    />
                  }
                >
                  Edit
                </Button>
              )}
              {page === "car-management" && (
                <Button
                  variant="outlined"
                  className="delete"
                  endIcon={
                    <DeleteSvg
                      width="18px"
                      height="18px"
                      fill={colors.purple}
                    />
                  }
                >
                  Delete
                </Button>
              )}
              <Button
                onClick={() =>
                  toggleDrawer(locale === "en" ? "right" : "left", true, car)
                }
                className="details"
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
          </CarTypeSvgWrapper>
        </GlobalListViewWrapper>
      </div>
    </Grow>
  );
};
export default List;
