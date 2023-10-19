import { isTheme } from "@/_helpers/getTheme";
import * as React from "react";
import { ALsaudia, EnglishCar, TD, Table } from "../style";
import SaLogoSvg from "@/public/icons/saLogoSvg";
import { LatinToArabicNumber } from "@/_helpers/latinToRabicNumber";
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
            <TD className="border-bottom">
              {LatinToArabicNumber(`${car.plateNo}`)}
            </TD>
            <TD className="border-bottom">
              <div>
                <span>{car.plateText1_ar}</span>
                <span>{car.plateText2_ar}</span>
                <span>{car.plateText3_ar}</span>
              </div>
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
              <EnglishCar>
                <span>{car.plateText1_en}</span>
                <span>{car.plateText2_en}</span>
                <span>{car.plateText3_en}</span>
              </EnglishCar>
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
