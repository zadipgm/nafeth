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
import { Grow } from "@mui/material";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  ButtonWrapper,
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsTitle,
  Spantext,
  Strongtext,
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
import SuvSvg from "@/public/icons/SUV";
import DisputeSvg from "@/public/icons/DisputeSvg";
import ContractListView from "../contractListView";
import ViewButton from "@/reuseableComponents/viewsButton";
import SearchComponent from "@/reuseableComponents/SearchComponent";
import { Contract, IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory, IAccessoryResult } from "@/models/IAccessory";
import { filterBranch, filterCar, filterCustomer } from "@/_helpers/filters";
import CarRentSvg from "@/public/icons/cars";
import CarRented from "@/public/icons/carRentedSvg";
import { IBranchModel } from "@/models/branch";
import ContractGridView from "../contractGridView";

interface IProps {
  contracts: IContracts;
  cars: ICarModel;
  customers: ICustomers;
  priceList: IPriceList;
  accessories: IAccessory;
  branches: IBranchModel;
  page: string;
  title: string;
  isViewable: boolean;
  isEditable: boolean;
  isExtendable: boolean;
  isDisputeable: boolean;
  isReturnable: boolean;
  isPrintAble: boolean;
  editLink: string;
}
type Anchor = "top" | "left" | "bottom" | "right";
const ContractPage = ({
  contracts,
  cars,
  customers,
  priceList,
  accessories,
  branches,
  page,
  title,
  isViewable,
  isEditable,
  isDisputeable,
  isExtendable,
  isReturnable,
  isPrintAble,
  editLink,
}: IProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { colors, locale } = useTheme();
  const [show, setShow] = React.useState(4);
  const router = useRouter();
  const [list, setList] = React.useState(true);
  const [grid, setGrid] = React.useState(false);
  const [details, setDetails] = React.useState<Contract>();
  const [searchvalue, setSearchvalue] = React.useState(contracts.result);
  const toggleDrawer = (anchor: Anchor, open: boolean, item: Contract) => {
    setDetails(item);
    setState({ ...state, [anchor]: open });
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
        <ListWrapper bcolor={isTheme()?.bcolor} color={isTheme()?.color}>
          <Title
            color={
              page === "return"
                ? colors.darkYellow
                : page === "individual"
                ? colors.nafethBlue
                : colors.red
            }
          >
            <h2>{title}</h2>
          </Title>
          <ContractsTitle></ContractsTitle>

          <SearchTabsWrapper
            bcolor={isTheme()?.bcolor}
            color={isTheme()?.color}
          >
            <ViewButton handleView={handleView} list={list} grid={grid} />
            <SearchComponent
              data={contracts.result}
              currentRecords={contracts.result}
              setSearchvalue={setSearchvalue}
            />
          </SearchTabsWrapper>
          {list && (
            <ContractListView
              cars={cars}
              contracts={searchvalue}
              customers={customers}
              show={show}
              page={page}
              handleEdit={() => console.log("hello")}
              toggleDrawer={toggleDrawer}
              isViewable={isViewable}
              isEditable={isEditable}
              isExtendable={isExtendable}
              isDisputeable={isDisputeable}
              isReturnable={isReturnable}
              isPrintAble={isPrintAble}
              editLink={editLink}
            />
          )}
          {grid && (
            <ContractGridView
              cars={cars}
              show={show}
              page={page}
              contracts={searchvalue}
              customers={customers}
              handleEdit={() => console.log("hello")}
              toggleDrawer={toggleDrawer}
              isViewable={isViewable}
              isEditable={isEditable}
              isExtendable={isExtendable}
              isDisputeable={isDisputeable}
              isReturnable={isReturnable}
              isPrintAble={isPrintAble}
            />
          )}
          {details && (
            <DrawerComponent
              state={state}
              toggleDrawer={toggleDrawer}
              width={page == "return" ? "800px" : "400px"}
              item={details}
            >
              <div>
                <DetailsTitle color={colors.nafethBlue}>
                  Contract Details
                </DetailsTitle>
                <DetailWrapper
                  color={isTheme().color}
                  bcolor={isTheme().bcolor}
                >
                  <DetailList>
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>Customer ID</Strongtext>
                        <Spantext>{details?.customerID}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>Checkout time</Strongtext>
                        <Spantext>{details?.timeOut}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>Issue Branch</Strongtext>
                        <Spantext>
                          {
                            filterBranch(branches, details?.issueBranchID)[0][
                              `name_${locale}`
                            ]
                          }
                        </Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Return Branch</Strongtext>
                        <Spantext>
                          {
                            filterBranch(branches, details?.issueBranchID)[0][
                              `name_${locale}`
                            ]
                          }
                        </Spantext>
                      </DetailListItem>
                    )}
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>Daily rent</Strongtext>
                        <Spantext>{details?.dailyPrice}</Spantext>
                      </DetailListItem>
                    )}
                    <DetailListItem>
                      <Strongtext>Advance Amount</Strongtext>
                      <Spantext>{details?.advanceAmount}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>Actual Days</Strongtext>
                      <Spantext>{details?.actualTotalDays}</Spantext>
                    </DetailListItem>
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext> KM Out</Strongtext>
                        <Spantext>{details?.kmOut}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> KM In</Strongtext>
                        <Spantext>{details?.kMIn}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> Extra KM</Strongtext>
                        <Spantext>{details?.extraKM}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> kM Cost</Strongtext>
                        <Spantext>{details?.kMCost}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Promotion Discount</Strongtext>
                        <Spantext>{details?.promotionDiscount}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Total Rent Cost</Strongtext>
                        <Spantext>{details?.totalRentCost}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Other Cost</Strongtext>
                        <Spantext>{details?.otherCost}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Discount</Strongtext>
                        <Spantext>{details?.discount}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Gross Total</Strongtext>
                        <Spantext>{details?.grossTotal}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>VAT Percent</Strongtext>
                        <Spantext>{details?.vATPercent}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>VAT Amount </Strongtext>
                        <Spantext>{details?.vATAmount}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Refunded </Strongtext>
                        <Spantext>{details?.refunded}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> Paid </Strongtext>
                        <Spantext>{details?.paid}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>Net Total </Strongtext>
                        <Spantext>{details?.netTotal}</Spantext>
                      </DetailListItem>
                    )}
                    <DetailListItem>
                      <Strongtext>Nationality</Strongtext>
                      <Spantext>
                        {
                          filterCustomer(customers, details?.customerID)[0]
                            .nationality[`name_${locale}`]
                        }
                      </Spantext>
                    </DetailListItem>
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext> Car Type</Strongtext>
                        <Spantext>
                          {
                            filterCar(cars, details?.carID)[0].carType[
                              `name_${locale}`
                            ]
                          }
                        </Spantext>
                      </DetailListItem>
                    )}
                    <DetailListItem>
                      <Strongtext> Rental Cost</Strongtext>
                      <Spantext>
                        {details?.dailyPrice * details?.actualTotalDays}
                      </Spantext>
                    </DetailListItem>{" "}
                    <DetailListItem>
                      <Strongtext> Contract extensions</Strongtext>
                      <Spantext>{"0"}</Spantext>
                    </DetailListItem>{" "}
                    <DetailListItem>
                      <Strongtext> Issued by</Strongtext>
                      <Spantext>{details?.issueBy}</Spantext>
                    </DetailListItem>
                  </DetailList>
                </DetailWrapper>
              </div>
            </DrawerComponent>
          )}
          {contracts.result.length > 4 && (
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
