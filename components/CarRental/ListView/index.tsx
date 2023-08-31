import { ICarModel } from "@/models/carmodel";
import * as React from "react";
import {
  ButtonWrapper,
  CarColor,
  CarListViewContainer,
  CarListViewWrapper,
  CarMakeModel,
  CarMakeModelWrapper,
  CarModelListViewWrapper,
  CarPlateWrapper,
  CarTypeSvgWrapper,
  Colors,
  ReuseAbleList,
  ReuseAbleListItem,
} from "../style";
import CarRentSvg from "@/public/icons/cars";
import CarPlate from "../CarPlate";
import { carplate } from "@/global/fakeData";
import { useTheme } from "styled-components";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarMileageSvg from "@/public/icons/carMileageSvg";
import CarPetrolSvg from "@/public/icons/carPetrolSvg";
import { Tooltip } from "@nextui-org/react";
import { isTheme } from "@/_helpers/getTheme";
import CarRented from "@/public/icons/carRentedSvg";
import NumberOfRentedSvg from "@/public/icons/numberOfRentedSvg";
import { Button, Grow } from "@mui/material";
import { useRouter } from "next/router";
import { EditSvg } from "@/public/icons/editSvg";
import { DeleteSvg } from "@/public/icons/deleteSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import CarYearSvg from "@/public/icons/carYearSvg";
import AvailableCarSvg from "@/public/icons/availableCars";
import ActiveSvg from "@/public/icons/active";
import CarTotalSvg from "@/public/icons/carTotalSvg";
type Anchor = "top" | "left" | "bottom" | "right";
interface ICarProps {
  cars: ICarModel;
  page?: string;
  show: number;
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
  handleEdit: (param: any) => void;
}
const CarListView = ({
  cars,
  page,
  toggleDrawer,
  handleEdit,
  show,
}: ICarProps) => {
  const { locale, colors } = useTheme();
  const router = useRouter();
  return (
    <CarListViewContainer>
      {cars.result.slice(0, show).map((car, index) => {
        return (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 2000 } : {})}
            key={index}
          >
            <CarListViewWrapper>
              <CarModelListViewWrapper>
                <span className="make-model">
                  {car.make[`name_${locale}`]} {car.model[`name_${locale}`]} /{" "}
                  {car.year}
                </span>
                <CarPlateWrapper>
                  <CarPlate car={carplate} />
                </CarPlateWrapper>
              </CarModelListViewWrapper>
              <ReuseAbleList>
                <ReuseAbleListItem>
                  <Tooltip content={"car mileage"} color={"success"}>
                    <div>
                      <CarMileageSvg
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.mileage}
                  </Tooltip>
                </ReuseAbleListItem>
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
                <ReuseAbleListItem>
                  <Tooltip content={"times rented"} color={"success"}>
                    <div>
                      <NumberOfRentedSvg
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.timesRented}
                  </Tooltip>
                </ReuseAbleListItem>
                <ReuseAbleListItem>
                  <Tooltip content={"times rented"} color={"success"}>
                    <div>
                      <ActiveSvg
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.active === "Y" ? "Active" : "In-Active"}
                  </Tooltip>
                </ReuseAbleListItem>
                <ReuseAbleListItem>
                  <Tooltip content={"car daily rent"} color={"success"}>
                    <div>
                      <CarRented
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.dailyRent}/day
                  </Tooltip>
                </ReuseAbleListItem>
                <ReuseAbleListItem>
                  <Tooltip content={"car weekly rent"} color={"success"}>
                    <div>
                      <CarRentSvg
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.weeklyRent}
                  </Tooltip>
                </ReuseAbleListItem>
                <ReuseAbleListItem>
                  <Tooltip content={"car Monthly rent"} color={"success"}>
                    <div>
                      <CarTotalSvg
                        width={"25px"}
                        height="25px"
                        fill={colors.nafethBlue}
                      />
                    </div>
                    {car.monthlyRent}
                  </Tooltip>
                </ReuseAbleListItem>
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
                      onClick={() => router.push("/cars/rent")}
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
                      toggleDrawer(
                        locale === "en" ? "right" : "left",
                        true,
                        car
                      )
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
            </CarListViewWrapper>
          </Grow>
        );
      })}
    </CarListViewContainer>
  );
};
export default CarListView;
