import CarPlate from "@/components/CarRental/CarPlate";
import {
  ButtonWrapper,
  CarPlateWrapper,
  CarTypeSvgWrapper,
  GlobalListViewWrapper,
  ListViewContainer,
  ModelListViewWrapper,
  ReuseAbleList,
  ReuseAbleListItem,
} from "@/components/CarRental/style";
import { Contracts, carplate } from "@/global/fakeData";
import DisputeSvg from "@/public/icons/DisputeSvg";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import DisputeContactSvg from "@/public/icons/contracts";
import { EditSvg } from "@/public/icons/editSvg";
import ReturnSvg from "@/public/icons/returnSvg";
import IconComponent from "@/reuseableComponents/IconComponent";
import { Button, Grow } from "@mui/material";
import { Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import * as React from "react";
import { useTheme } from "styled-components";
type Anchor = "top" | "left" | "bottom" | "right";
interface IProps {
  keys: string[];
  toggleDrawer: (param1: Anchor, param2: boolean, param3: any) => void;
}
const ContractListView = ({ keys, toggleDrawer }: IProps) => {
  const router = useRouter();
  const { locale, colors } = useTheme();
  return (
    <ListViewContainer>
      {Contracts.map((item: any, i: number) => {
        return (
          <Grow
            in={true}
            style={{ transformOrigin: "0 0 0" }}
            {...(true ? { timeout: 2000 } : {})}
            key={i}
          >
            <div>
              <GlobalListViewWrapper>
                <ModelListViewWrapper>
                  <Tooltip content={"Contract number"} color={"success"}>
                    <div className="contract">
                      <CarContractNumberSvg />
                      <span className="make-model">{item.contract_number}</span>
                    </div>
                  </Tooltip>
                  <CarPlateWrapper>
                    <CarPlate car={carplate} />
                  </CarPlateWrapper>
                </ModelListViewWrapper>
                <ReuseAbleList>
                  {keys.map((key: string) => {
                    return (
                      <ReuseAbleListItem>
                        <Tooltip content={key} color={"success"}>
                          <div>
                            <IconComponent
                              width={"25px"}
                              height="25px"
                              fill={colors.nafethBlue}
                              icon={
                                (key === "contract_number" &&
                                  "carContractNumberSvg") ||
                                (key === "dailyRent" && "cars") ||
                                (key === "customer_name" && "carduserSvg") ||
                                (key === "advance_amount" && "payments") ||
                                (key === "rental_cost" && "carStolenSvg") ||
                                (key === "checkout_time" && "clockSvg") ||
                                (key === "issue_date" && "issueDateSvg") ||
                                (key === "return_date" && "returnDateSvg")
                              }
                            />
                          </div>
                          {Contracts[i][key]}
                        </Tooltip>
                      </ReuseAbleListItem>
                    );
                  })}
                </ReuseAbleList>
                <CarTypeSvgWrapper>
                  <span className="make-model">
                    {item.make[`name_${locale}`]} {item.model[`name_${locale}`]}{" "}
                    / {item.year}
                  </span>

                  <IconComponent
                    width="100px"
                    height="100px"
                    fill={item.color}
                    stroke={colors.gray1}
                    icon={item.car_type}
                  />

                  <ButtonWrapper>
                    <Button
                      variant={"outlined"}
                      className="dispute"
                      endIcon={
                        <DisputeSvg
                          width="15px"
                          height="15px"
                          fill={colors.red}
                        />
                      }
                    >
                      Dispute
                    </Button>
                    <Button
                      variant={"outlined"}
                      className="retrun"
                      onClick={() => router.push("/return")}
                      endIcon={
                        <ReturnSvg
                          width="15px"
                          height="15px"
                          fill={colors.nafethBlue}
                        />
                      }
                    >
                      Return
                    </Button>
                    <Button
                      onClick={() =>
                        toggleDrawer(
                          locale === "en" ? "right" : "left",
                          true,
                          item
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
              </GlobalListViewWrapper>
            </div>
          </Grow>
        );
      })}
    </ListViewContainer>
  );
};
export default ContractListView;
