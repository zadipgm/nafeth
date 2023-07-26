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
} from "./style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import InputComponent from "@/reuseableComponents/InputField";
import { Contracts, header_card } from "@/global/fakeData";
import Button from "@mui/material/Button";
import IconComponent from "@/reuseableComponents/IconComponent";
import CarContractNumberSvg from "@/public/icons/carContractNumberSvg";
import DrawerComponent from "@/reuseableComponents/Drawer";
import Link from "next/link";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import HeaderCard from "@/reuseableComponents/HeaderCards";
import FilterTabs from "@/reuseableComponents/filterTabs";
type Anchor = "top" | "left" | "bottom" | "right";
const Dashboard = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { colors, locale }: any = useTheme();
  const [show, setShow] = React.useState(8);
  const [label, setLabel] = React.useState("all");
  const [all, setAll] = React.useState(true);
  const [company, setCompany] = React.useState(false);
  const [individual, setIndividual] = React.useState(false);
  const icon = [
    "idSvg",
    "lexusSvg",
    "usersSvg",
    "issueDateSvg",
    "returnDateSvg",
  ];
  const handleClick = (value: string) => {
    setLabel(value);
    if (value === "all") {
      setAll(true);
      setIndividual(false);
      setCompany(false);
    }
    if (value === "company") {
      setAll(false);
      setIndividual(false);
      setCompany(true);
    }
    if (value === "individual") {
      setAll(false);
      setIndividual(true);
      setCompany(false);
    }
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => {
    setState({ ...state, [anchor]: open });
    console.log(state);
  };
  return (
    <>
      <Container>
        <HeaderCard card={header_card} title="Welcome Muhammad" />
        <ListWrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
          <ContractsTitle>Available Contracts</ContractsTitle>
          <SearchTabsWrapper
            bcolor={isTheme()?.bcolor}
            color={isTheme()?.color}
          >
            {/* // contract tabs */}

            <FilterTabs
              title={["all", "company", "individual"]}
              label={label}
              handleClick={handleClick}
            />
            <InputComponent
              type="search"
              placeholder="Search contract"
              label="Search contract"
              // onChange={(e) => handleChange(e)}
              classname="search-input"
            />
          </SearchTabsWrapper>
          <ContractWrapper>
            {Contracts.slice(0, show).map((item: any, i) => {
              return (
                <ContractCard
                  cardcolor={isTheme()?.cardcolor}
                  color={isTheme()?.color}
                  key={i}
                  onClick={() =>
                    toggleDrawer(locale === "en" ? "right" : "left", true)
                  }
                >
                  <SvgKeysWrapper
                    className="contract_number"
                    color={isTheme()?.color}
                  >
                    <ContactNumberWrapper>
                      <CarContractNumberSvg
                        width="30px"
                        height="30px"
                        fill={isTheme().color}
                      />
                      <Keys>{"Contract Number"}</Keys>
                    </ContactNumberWrapper>
                    <div>{item.contract_number}</div>
                  </SvgKeysWrapper>
                  {Object.keys(Contracts[i])
                    .filter((key) => key !== "contract_number")
                    .map((key, index) => {
                      return (
                        <>
                          <DataWrapper>
                            <SvgKeysWrapper>
                              <IconComponent
                                width="30px"
                                height="30px"
                                icon={icon[index]}
                                fill={isTheme().color}
                              />

                              <Keys>{key.replaceAll("_", " ")}</Keys>
                            </SvgKeysWrapper>
                            <div>{item[key]}</div>
                          </DataWrapper>
                        </>
                      );
                    })}
                  <Link href={"#"} onClick={() => toggleDrawer("right", true)}>
                    <ArrowCircleSvg />
                  </Link>
                </ContractCard>
              );
            })}
          </ContractWrapper>
          <DrawerComponent state={state} toggleDrawer={toggleDrawer} />
          {show === Contracts.length ? (
            ""
          ) : (
            <Button
              variant={"contained"}
              onClick={() => setShow(show + 4)}
              className="load-more"
            >
              Load More
            </Button>
          )}
        </ListWrapper>
      </Container>
    </>
  );
};
export default Dashboard;
