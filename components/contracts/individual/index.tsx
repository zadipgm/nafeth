import * as React from "react";
import {
  ContactNumberWrapper,
  Container,
  ContractCard,
  ContractWrapper,
  ContractsTitle,
  DataWrapper,
  Keys,
  ListWrapper,
  SearchTabsWrapper,
  SvgKeysWrapper,
} from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import InputComponent from "@/reuseableComponents/InputField";
import {
  Contracts,
  Contracts_chart_data,
  chart_dataset,
  contract_header_card,
  header_card,
  header_card_dashboard,
} from "@/global/fakeData";
import Button from "@mui/material/Button";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import DrawerComponent from "@/reuseableComponents/Drawer";
import Link from "next/link";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import FilterTabs from "@/reuseableComponents/filterTabs";
import { Grow } from "@mui/material";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { GroupButtons } from "@/components/GlobalSettings/compnaySettings/style";
import {
  ButtonWrapper,
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsTitle,
  GridViewWrapper,
  ListViewWrapper,
  Spantext,
  Strongtext,
  ViewsWrapper,
} from "@/components/CarRental/style";
import { useRouter } from "next/router";
import ReturnSvg from "@/public/icons/returnSvg";
import { List, ListItem } from "@/components/customers/style";
import { Tooltip } from "@nextui-org/react";
import CarPlate from "@/components/CarRental/CarPlate";
import CarYearSvg from "@/public/icons/carYearSvg";
import CardUserSvg from "@/public/icons/carduserSvg";
import IssueDateSvg from "@/public/icons/issueDateSvg";
import ReturnDateSvg from "@/public/icons/returnDateSvg";
import SedanSvg from "@/public/icons/Sedan";
import SuvSvg from "@/public/icons/SUV";
import DisputeSvg from "@/public/icons/DisputeSvg";
import ContractListView from "../contractListView";
import GridView from "@/public/icons/gridView";
import ListView from "@/public/icons/tableView";
type Anchor = "top" | "left" | "bottom" | "right";
const ContractPage = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { colors, locale }: any = useTheme();
  const [show, setShow] = React.useState(8);
  const [label, setLabel] = React.useState("all");
  const router = useRouter();
  const [all, setAll] = React.useState(true);
  const [company, setCompany] = React.useState(false);
  const [individual, setIndividual] = React.useState(false);
  const icon = ["idSvg", "lexusSvg", "USERS", "issueDateSvg", "returnDateSvg"];
  const [list, setList] = React.useState(true);
  const [grid, setGrid] = React.useState(false);

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
  };
  const car = {
    plateText1_ar: "ا",
    plateText2_ar: "ا",
    plateText3_ar: "ن",
    plateNo: "4321",
    plateText1_en: "A",
    plateText2_en: "A",
    plateText3_en: "N",
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
      {/* <HeaderCard
        card={header_card_dashboard}
        page={"contracts"}
        title="Open Contracts"
        chartTitle="Contracts"
        chart_data={Contracts_chart_data}
      /> */}
      <Container>
        <ListWrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
          <Title color={colors.nafethBlue}>
            <h2>Contracts</h2>
          </Title>
          <ContractsTitle></ContractsTitle>

          <SearchTabsWrapper
            bcolor={isTheme()?.bcolor}
            color={isTheme()?.color}
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
            <InputComponent
              type="search"
              placeholder="Search contract"
              label="Search contract"
              // onChange={(e) => handleChange(e)}
              classname="search-input-dashboard"
            />
          </SearchTabsWrapper>
          {list && (
            <ContractListView
              // show={show}

              toggleDrawer={toggleDrawer}
              keys={[
                "contract_number",
                "dailyRent",
                "customer_name",
                "advance_amount",
                "rental_cost",
                "checkout_time",
                "issue_date",
                "return_date",
                "active",
              ]}
            />
          )}
          {grid && (
            <ContractWrapper>
              {Contracts.slice(0, show).map((item: any, i) => {
                return (
                  <Grow
                    in={true}
                    style={{ transformOrigin: "0 0 " }}
                    {...(true ? { timeout: 2000 } : {})}
                    key={i}
                  >
                    <ContractCard
                      cardcolor={isTheme()?.cardcolor}
                      color={isTheme()?.color}
                      key={i}
                    >
                      <SvgKeysWrapper
                        className="contract_number"
                        color={isTheme()?.color}
                      >
                        <ContactNumberWrapper>
                          <Tooltip content="Car Plate" color={"warning"}>
                            <CarPlate car={car} classname="contract-page" />
                          </Tooltip>
                        </ContactNumberWrapper>
                      </SvgKeysWrapper>
                      <List className="contract-list">
                        <Tooltip content="Contract Number" color={"secondary"}>
                          <ListItem>
                            <CarContractNumberSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>{Contracts[0].contract_number}</span>
                          </ListItem>
                        </Tooltip>
                        <Tooltip content="Make/Model" color={"error"}>
                          <ListItem>
                            <CarYearSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>
                              {Contracts[0].make?.name_en}{" "}
                              {Contracts[0].model?.name_en}
                              {Contracts[0].year}
                            </span>
                          </ListItem>
                        </Tooltip>

                        <Tooltip content="Customer Name" color={"secondary"}>
                          <ListItem>
                            <CardUserSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>{Contracts[0].customer_name}</span>
                          </ListItem>
                        </Tooltip>
                        <Tooltip content="Issue Date" color={"primary"}>
                          <ListItem>
                            <IssueDateSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>{Contracts[0].issue_date}</span>
                          </ListItem>
                        </Tooltip>
                        <Tooltip content="Return Date" color={"invert"}>
                          <ListItem>
                            <ReturnDateSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>{Contracts[0].return_date}</span>
                          </ListItem>
                        </Tooltip>

                        <Tooltip content="Car type" color={"secondary"}>
                          <ListItem>
                            <SuvSvg
                              width="25px"
                              height="25px"
                              fill={colors.nafethBlue}
                            />
                            <span>{Contracts[0].car_type}</span>
                          </ListItem>
                        </Tooltip>
                      </List>
                      <ButtonWrapper>
                        <Button
                          variant={"outlined"}
                          className="details"
                          onClick={() => toggleDrawer("right", true)}
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
                        </Button>{" "}
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
                      </ButtonWrapper>
                    </ContractCard>
                  </Grow>
                );
              })}
            </ContractWrapper>
          )}
          <DrawerComponent
            state={state}
            toggleDrawer={toggleDrawer}
            width="400px"
          >
            <div>
              <DetailsTitle color={colors.nafethBlue}>
                Contract Details
              </DetailsTitle>
              <DetailWrapper color={isTheme().color} bcolor={isTheme().bcolor}>
                <DetailList>
                  <DetailListItem>
                    <Strongtext>Customer ID</Strongtext>
                    <Spantext>{"10000016"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Checkout time</Strongtext>
                    <Spantext>{"11:18"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Issue Branch</Strongtext>
                    <Spantext>{"Head Branch"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Daily rent</Strongtext>
                    <Spantext>{"120"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Advance Amount</Strongtext>
                    <Spantext>{"200"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Actual Days</Strongtext>
                    <Spantext>{2}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext> KM Out</Strongtext>
                    <Spantext>{"2000"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext>Nationality</Strongtext>
                    <Spantext>{"Pakistani"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext> Car Type</Strongtext>
                    <Spantext>{"SUV"}</Spantext>
                  </DetailListItem>
                  <DetailListItem>
                    <Strongtext> Rental Cost</Strongtext>
                    <Spantext>{"2700"}</Spantext>
                  </DetailListItem>{" "}
                  <DetailListItem>
                    <Strongtext> Contract extensions</Strongtext>
                    <Spantext>{"0"}</Spantext>
                  </DetailListItem>{" "}
                  <DetailListItem>
                    <Strongtext> Issued by</Strongtext>
                    <Spantext>{"225544888"}</Spantext>
                  </DetailListItem>
                </DetailList>
              </DetailWrapper>
            </div>
          </DrawerComponent>
          {show === Contracts.length ? (
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
        </ListWrapper>
      </Container>
    </>
  );
};
export default ContractPage;
