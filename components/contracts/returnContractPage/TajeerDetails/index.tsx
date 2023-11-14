import { getCompany, getName, getPassword } from "@/_helpers/getName";
import { fetchData } from "@/api/fetchapis/fetchData";
import CarCheckList from "@/components/CarRental/rentCar/CarCheckList";
import {
  Label,
  RentContainer,
  SelectedList,
  SelectedListItem,
  Value,
} from "@/components/CarRental/style";
import { Title } from "@/components/GlobalSettings/BranchManagement/style";
import { useRentCarData } from "@/context/rentPageLookup";
import { bank } from "@/global/fakeData";
import { IRentPageContext } from "@/models/IRentPageContext";
import { Contract, IContracts } from "@/models/individualContracts";
import { ILookUp } from "@/models/lookup";
import InputField from "@/reuseableComponents/customInputField/input";
import SelectField from "@/reuseableComponents/customeSelectField/select";
import { Button } from "@mui/material";
import * as React from "react";
import { useTheme } from "styled-components";
interface IProps {
  data: Contract;
  tajeerData: ILookUp;
  speedometer_Keys: ILookUp;
  fuelType: ILookUp;
  availableFuel: ILookUp;
  carSeats: ILookUp;
  acStereoData: ILookUp;
  tajeer_branch: ILookUp;
  tajeerMainClosure: any;
}
const TajeerDetails = ({
  data,
  tajeerData,
  availableFuel,
  carSeats,
  acStereoData,
  fuelType,
  speedometer_Keys,
  tajeer_branch,
  tajeerMainClosure,
}: IProps) => {
  const { colors, translations, locale } = useTheme();

  const [carMarkerList, setCarMarkerList] = React.useState([]);
  const [comments, setComments] = React.useState<any>([]);
  const [reasonID, setReasonID] = React.useState(0);
  let userName = getName() as string;
  let userPassword = getPassword() as string;
  let company = getCompany() as string;
  let tajeerMain =
    tajeerMainClosure && JSON.parse(tajeerMainClosure?.result?.value);
  const hanldeCarMarker = (marker: any) => {
    setCarMarkerList(marker);
  };
  const handleReasons = async (e: { target: { value: any } }) => {
    let id = Number(e.target.value);

    setReasonID(id);
    await fetchData(
      userName,
      userPassword,
      `/contracts/Individual/tajeerSubClosure/${id}`,
      company
    ).then((data) => setComments(JSON.parse(data.result.value)));
  };

  return (
    <div>
      <RentContainer className="rent_account">
        <Title color={colors.purple}>
          <h2> {translations?.tajeerDetail}</h2>
        </Title>
        <SelectedList className="return_list">
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_FuelLevel as string}
              name="tajeer_FuelLevel"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_FuelLevel}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {availableFuel?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_AC as string}
              name="tajeer_AC"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_AC}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {acStereoData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_Screen as string}
              name="tajeer_Screen"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Screen}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {acStereoData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_Stereo as string}
              name="tajeer_Stereo"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Stereo}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {acStereoData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_Speedometer as string}
              name="tajeer_Speedometer"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Speedometer}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {speedometer_Keys?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_CarSeat as string}
              name="tajeer_CarSeat"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_CarSeat}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {carSeats?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_SpareTire as string}
              name="tajeer_SpareTire"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_SpareTire}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {acStereoData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_SpareTireTools as string}
              name="tajeer_SpareTireTools"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_SpareTireTools}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {tajeerData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_Tires as string}
              name="tajeer_Tires"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Tires}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {acStereoData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_FirstAid as string}
              name={"tajeer_FirstAid"}
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_FirstAid}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {tajeerData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_Keys as string}
              name="tajeer_Keys"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Keys}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {speedometer_Keys?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_FireExtinguisher as string}
              name="tajeer_FireExtinguisher"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_FireExtinguisher}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {tajeerData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.tajeer_SafetyTriangle as string}
              name="tajeer_SafetyTriangle"
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_SafetyTriangle}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {tajeerData?.result.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.returnBranch as string}
              name={"tajeer_Returnbranch"}
              // onChange={handleCarMakeID}
              defaultValue={data?.tajeer_Returnbranch}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {tajeer_branch?.result?.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option[`name_${locale}`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={"Reason"}
              name="Reason "
              onChange={(e) => handleReasons(e)}
              defaultValue={""}
              required={true}
            >
              <>
                <option value={""} disabled>
                  {"Please Select Reason"}
                </option>
                {tajeerMain?.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option[`${locale}Name`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <SelectField
              label={translations?.Comments as string}
              name="Comments"
              // onChange={handleCarMakeID}
              defaultValue={""}
              required={comments.length > 1 ? true : false}
            >
              <>
                <option value={""} disabled>
                  {translations?.selectcarmake as string}
                </option>
                {comments?.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option[`${locale}Name`]}
                  </option>
                ))}
              </>
            </SelectField>
          </SelectedListItem>
          <SelectedListItem>
            <CarCheckList hanldeCarMarker={hanldeCarMarker} />
          </SelectedListItem>
        </SelectedList>
      </RentContainer>
    </div>
  );
};
export default TajeerDetails;
