import InputField from "@/reuseableComponents/customInputField/input";
import ModalComponent from "@/reuseableComponents/modal";
import { Button } from "@mui/material";
import * as React from "react";
import { useTheme } from "styled-components";
import {
  CheckListBgImage,
  CheckListBgImageWrapper,
  CheckListWrapper,
  CustomTabsImage,
  Instruction,
  InstructionList,
  InstructionListItem,
  MarkerImage,
  MarkerImageWapper,
  ModalHeader,
} from "../../style";
import CloseSvg from "@/public/icons/closeSvg";
import { GroupButtons } from "@/components/GlobalSettings/compnaySettings/style";
interface IProps {
  hanldeCarMarker: (param: any) => void;
}
const CarCheckList = ({ hanldeCarMarker }: IProps) => {
  const [openTajeerMakrModal, setOpenTajeerMakrModal] = React.useState(false);
  const [markerType, setMarkerType] = React.useState("small-scratch");
  const { isLTR, translations } = useTheme();
  const [marker, setMarker] = React.useState([
    { type: "small-scratch", x: "", y: "" },
  ]);
  const handelOpenTajeerMakr = () => {
    setOpenTajeerMakrModal(true);
  };
  const handelCloseTajeerMakr = () => {
    setOpenTajeerMakrModal(false);
  };
  const handleTajeerBgImage = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMarker((current) => [
      ...current,
      {
        type: markerType,
        x: `${e.nativeEvent.offsetX}`,
        y: `${e.nativeEvent.offsetY}`,
      },
    ]);
  };
  const handleMarker = (marker: string) => {
    setMarkerType(marker);
  };
  const hanldeImageClick = (item: any) => {
    let filterMarker = marker.filter((m) => m.x != item.x && m.y != item.y);
    let removeEmptyMarker = filterMarker.filter((m) => m.x != "" && m.y != "");

    setMarker(removeEmptyMarker);
  };
  const HandelSaveMarker = () => {
    hanldeCarMarker(marker);
    setOpenTajeerMakrModal(false);
  };
  return (
    <>
      <InputField
        label={"Check List"}
        placeholder={
          isLTR
            ? `Specific hit ${marker.filter((m) => m.x != "").length}`
            : `ضربة محددة ${marker.filter((m) => m.x != "").length}`
        }
        type="text"
        name={"Checklist"}
        disabled={marker?.filter((m) => m.x != "").length < 1 ? false : true}
        classname="signature"
        value={
          marker?.filter((m) => m.x != "").length < 1
            ? ""
            : JSON.stringify(marker)
        }
        required={marker?.filter((m) => m.x != "").length < 1 ? true : false}
      />
      <Button
        variant="contained"
        className="place-mark"
        onClick={handelOpenTajeerMakr}
      >
        {" "}
        {translations?.placemark as string}
      </Button>
      <ModalComponent
        open={openTajeerMakrModal}
        handleClose={handelCloseTajeerMakr}
        size="md"
        classname="tajeer-modal"
      >
        <CheckListWrapper>
          <ModalHeader>
            <span>check list</span>
            <div onClick={handelCloseTajeerMakr}>
              <CloseSvg />
            </div>
          </ModalHeader>
          <CheckListBgImageWrapper>
            <CheckListBgImage
              onClick={(e) => handleTajeerBgImage(e)}
            ></CheckListBgImage>
            {marker.map((item, i) => {
              return (
                <MarkerImage
                  key={i}
                  onClick={() => hanldeImageClick(item)}
                  data-x={item.x}
                  data-y={item.y}
                  src={`/images/${item.type}.png`}
                  className="markedItem"
                  left={Number(item.x) - 14}
                  top={Number(item.y) - 15}
                  alt="Scratch"
                  width="30"
                  height="30"
                  style={{
                    display: `${item.x === "" || item.y === "" ? "none" : ""}`,
                  }}
                />
              );
            })}
          </CheckListBgImageWrapper>
          <Instruction>
            <InstructionList>
              <InstructionListItem>
                Click on any of the stroke types below to highlight the car.
              </InstructionListItem>
              <InstructionListItem>
                Click a marked item to remove it.
              </InstructionListItem>
              <InstructionListItem>
                Make sure to hit the refresh button to update your hit marks.
              </InstructionListItem>
            </InstructionList>
          </Instruction>
          <div>
            <CustomTabsImage>
              <MarkerImageWapper
                className={markerType === "small-scratch" ? "avtive" : ""}
                borderColor="#b18e00"
                onClick={() => handleMarker("small-scratch")}
              >
                <img
                  src="/images/small-scratch.png"
                  alt="small-scratch"
                  width={30}
                  height={30}
                />
              </MarkerImageWapper>
              <MarkerImageWapper
                className={markerType === "deep-scratch" ? "avtive" : ""}
                borderColor="blue"
                onClick={() => handleMarker("deep-scratch")}
              >
                <img
                  src="/images/deep-scratch.png"
                  alt="deep-scratch"
                  width={30}
                  height={30}
                />
              </MarkerImageWapper>
              <MarkerImageWapper
                className={markerType === "very-deep-scratch" ? "avtive" : ""}
                borderColor="#ff0000"
                onClick={() => handleMarker("very-deep-scratch")}
              >
                <img
                  src="/images/very-deep-scratch.png"
                  alt="very-deep-scratch"
                  width={30}
                  height={30}
                />
              </MarkerImageWapper>
              <MarkerImageWapper
                className={markerType === "bend-in-body" ? "avtive" : ""}
                borderColor="maroon"
                onClick={() => handleMarker("bend-in-body")}
              >
                <img
                  src="/images/bend-in-body.png"
                  alt="bend-in-body"
                  width={30}
                  height={30}
                />
              </MarkerImageWapper>
            </CustomTabsImage>
          </div>
          <GroupButtons>
            <Button
              variant="contained"
              className="place-mark"
              onClick={HandelSaveMarker}
            >
              {" "}
              {translations?.save as string}
            </Button>
            <Button
              variant="contained"
              className="place-mark"
              onClick={handelCloseTajeerMakr}
            >
              {" "}
              {translations?.cancel as string}
            </Button>
          </GroupButtons>
        </CheckListWrapper>
      </ModalComponent>
    </>
  );
};
export default CarCheckList;
