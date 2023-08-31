import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import { ALsaudia, TD, Table } from "../style";
import SaLogoSvg from "@/public/icons/saLogoSvg";
interface IProps {
  car: any;
  classname?: string;
}
const CarPlate = ({ car, classname }: IProps) => {
  return (
    <>
      <Table color={isTheme().color} className={classname}>
        <tbody>
          <tr>
            <TD className="border-bottom">{car.plateNo}</TD>
            <TD className="border-bottom">
              {car.plateText1_ar}
              {car.plateText2_ar}
              {car.plateText3_ar}
            </TD>
            <TD className="alsaudia" color={isTheme().color}>
              <SaLogoSvg fill={isTheme().color} />
              <ALsaudia color={isTheme().color} className={classname}>
                السعودية
              </ALsaudia>
            </TD>
          </tr>
          <tr>
            <TD>{car.plateNo}</TD>
            <TD>
              {car.plateText1_en}
              {car.plateText2_en}
              {car.plateText3_en}
            </TD>
            <TD className="KSA">
              <p>
                K<br></br>S<br></br>A
              </p>
            </TD>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
export default CarPlate;
