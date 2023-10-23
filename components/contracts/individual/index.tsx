import * as React from "react";
import {
  Container,
  ContractsTitle,
  ListWrapper,
  SearchTabsWrapper,
} from "../style";
import { isTheme } from "@/_helpers/getTheme";
import { useTheme } from "styled-components";
import Button from "@mui/material/Button";
import DrawerComponent from "@/reuseableComponents/Drawer";
import ArrowCircleSvg from "@/public/icons/arrowCircleSvg";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import {
  DetailList,
  DetailListItem,
  DetailWrapper,
  DetailsTitle,
  Spantext,
  Strongtext,
} from "@/components/CarRental/style";
import ContractListView from "../contractListView";
import ViewButton from "@/reuseableComponents/viewsButton";
import SearchComponent from "@/reuseableComponents/SearchComponent";
import { Contract, IContracts } from "@/models/individualContracts";
import { ICarModel } from "@/models/carmodel";
import { ICustomers, IPriceList } from "@/models/customers";
import { IAccessory } from "@/models/IAccessory";
import { filterBranch, filterCar, filterCustomer } from "@/_helpers/filters";
import { IBranchModel } from "@/models/branch";
import ContractGridView from "../contractGridView";
import { contractKeys } from "@/constants";

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
  const { colors, locale, translations } = useTheme();
  const [show, setShow] = React.useState(4);
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
  const hanldeShowMore = (val: number) => {
    if (contracts?.result?.length > show) {
      let diffrence = contracts.result.length - show;
      if (diffrence >= 4) {
        setShow((prev) => prev + val);
      } else {
        setShow(contracts.result.length);
      }
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
                ? colors.sideBarBgColor
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
              keys={contractKeys}
              classname="small_size"
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
              width={page == "return" ? "800px" : "500px"}
              item={details}
            >
              <div>
                <DetailsTitle color={colors.sideBarBgColor}>
                  {translations?.contractDetail}
                </DetailsTitle>
                <DetailWrapper
                  color={isTheme().color}
                  bcolor={isTheme().bcolor}
                >
                  <DetailList className="individual">
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>{translations?.customerID}</Strongtext>
                        <Spantext>{details?.customerID}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>{translations?.checkouttime}</Strongtext>
                        <Spantext>{details?.timeOut}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>{translations?.issueBranch}</Strongtext>
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
                        <Strongtext>{translations?.returnBranch}</Strongtext>
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
                        <Strongtext>{translations?.dailyRent}</Strongtext>
                        <Spantext>{details?.dailyPrice}</Spantext>
                      </DetailListItem>
                    )}
                    <DetailListItem>
                      <Strongtext>{translations?.advanceAmount}</Strongtext>
                      <Spantext>{details?.advanceAmount}</Spantext>
                    </DetailListItem>
                    <DetailListItem>
                      <Strongtext>{translations?.actualDays}</Strongtext>
                      <Spantext>{details?.actualTotalDays}</Spantext>
                    </DetailListItem>
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>{translations?.kmout}</Strongtext>
                        <Spantext>{details?.kmOut}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> {translations?.kMIn}</Strongtext>
                        <Spantext>{details?.kMIn}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext> {translations?.extraKM}</Strongtext>
                        <Spantext>{details?.extraKM}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>{translations?.kMCost}</Strongtext>
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
                        <Strongtext>{translations?.totalRentedCost}</Strongtext>
                        <Spantext>{details?.totalRentCost}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>{translations?.otherCost}</Strongtext>
                        <Spantext>{details?.otherCost}</Spantext>
                      </DetailListItem>
                    )}
                    {page === "return" && (
                      <DetailListItem>
                        <Strongtext>{translations?.discount}</Strongtext>
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
                      <Strongtext>{translations?.nationality}</Strongtext>
                      <Spantext>
                        {
                          filterCustomer(customers, details?.customerID)[0]
                            .nationality[`name_${locale}`]
                        }
                      </Spantext>
                    </DetailListItem>
                    {page === "individual" && (
                      <DetailListItem>
                        <Strongtext>{translations?.carType}</Strongtext>
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
                      <Strongtext>{translations?.rentalCost}</Strongtext>
                      <Spantext>
                        {details?.dailyPrice * details?.actualTotalDays}
                      </Spantext>
                    </DetailListItem>{" "}
                    <DetailListItem>
                      <Strongtext>
                        {" "}
                        {translations?.contractextensions}
                      </Strongtext>
                      <Spantext>{"0"}</Spantext>
                    </DetailListItem>{" "}
                    <DetailListItem>
                      <Strongtext>{translations?.issuedby}</Strongtext>
                      <Spantext>{details?.issueBy}</Spantext>
                    </DetailListItem>
                  </DetailList>
                </DetailWrapper>
              </div>
            </DrawerComponent>
          )}
          {contracts?.result?.length > 4 && (
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
              disabled={contracts.result.length === show ? true : false}
            >
              {translations?.viewMore}
            </Button>
          )}
        </ListWrapper>
      </Container>
    </>
  );
};
export default ContractPage;
