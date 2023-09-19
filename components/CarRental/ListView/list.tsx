import { Button, Grow } from "@mui/material";
import * as React from "react";
import {
  ButtonWrapper,
  CarColor,
  CarPlateWrapper,
  CarTypeSvgWrapper,
  GlobalListViewWrapper,
  ModelListViewWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
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
  cars: any;
  keys: string[];
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
  selectedCarID?: any;
  i: any;
}
const List = ({
  car,
  page,
  hanldeSelected,
  cars,
  keys,
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
              {car.make[`name_${locale}`]} {car.model[`name_${locale}`]} /{" "}
              {car.year}
            </span>
            <CarPlateWrapper>
              <CarPlate car={car} />
            </CarPlateWrapper>
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
                <CarColor color={car.color[`name_${locale}`]}></CarColor>
                {car.color[`name_${locale}`]}
              </Tooltip>
            </ReuseAbleListItem>
            {keys.map((key: string, i) => {
              return (
                <ReuseAbleListItem key={i}>
                  <Tooltip content={key} color={"success"}>
                    <div>
                      <IconComponent
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                        icon={
                          (key === "mileage" && "carMileageSvg") ||
                          (key === "dailyRent" && "cars") ||
                          (key === "weeklyRent" && "carRentedSvg") ||
                          (key === "monthlyRent" && "carTotalSvg") ||
                          (key === "timesRented" && "numberOfRentedSvg") ||
                          (key === "active" && "active")
                        }
                      />
                    </div>
                    {cars?.[i][key] === "Y"
                      ? "Active"
                      : cars?.[i][key] === "N"
                      ? "In-Active"
                      : cars?.[i][key]}
                  </Tooltip>
                </ReuseAbleListItem>
              );
            })}
          </ReuseAbleList>
          <CarTypeSvgWrapper>
            <IconComponent
              width="100px"
              height="100px"
              fill={car.color.name_en}
              stroke={colors.gray1}
              icon={car.carType.name_en.trim()}
            />

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
