import InputField from "@/reuseableComponents/customInputField/input";
import ModalComponent from "@/reuseableComponents/modal";
import { Button } from "@mui/material";
import * as React from "react";
import { ModalHeader, SignatureWrapper } from "../../style";
import CloseSvg from "@/public/icons/closeSvg";
import { GroupButtons } from "@/components/GlobalSettings/compnaySettings/style";
import SignatureCanvas from "react-signature-canvas";
import { useTheme } from "styled-components";
interface IProps {
  hanldeCarSignature: (param: string) => void;
}
const CarSignature = ({ hanldeCarSignature }: IProps) => {
  const [openSignatureModal, setOpenSignatureModal] = React.useState(false);
  const sigRef = React.useRef<any>();
  const [signature, setSignature] = React.useState("");
  const { translations } = useTheme();
  const handelOpenSignature = () => {
    setOpenSignatureModal(true);
  };
  const hanldeClosedSignature = () => {
    setOpenSignatureModal(false);
  };
  const handleSignatureEnd = () => {
    setSignature(sigRef?.current?.toDataURL?.());
  };
  const clearSignature = () => {
    sigRef.current.clear();
    setSignature("null");
  };
  const handelSaveSignature = () => {
    hanldeCarSignature(signature);
    setOpenSignatureModal(false);
  };
  return (
    <>
      <InputField
        label={translations?.tenantsignature as string}
        placeholder=""
        type="text"
        name={"Checklist"}
        defaultValue={signature!}
        required={true}
        classname="signature"
        disabled={true}
      />
      <Button
        variant="contained"
        className="place-mark"
        onClick={handelOpenSignature}
      >
        {" "}
        {"Place Signature"}
      </Button>
      <ModalComponent
        open={openSignatureModal}
        handleClose={hanldeClosedSignature}
      >
        <SignatureWrapper>
          <ModalHeader>
            <span>signature</span>
            <div onClick={hanldeClosedSignature}>
              <CloseSvg />
            </div>
          </ModalHeader>
          <SignatureCanvas
            penColor="green"
            canvasProps={{
              width: 500,
              height: 200,
              className: "sigCanvas",
            }}
            ref={sigRef}
            onEnd={handleSignatureEnd}
          />
          <GroupButtons>
            <Button
              variant="contained"
              className="place-mark"
              onClick={handelSaveSignature}
            >
              {" "}
              {translations?.save as string}
            </Button>
            <Button
              variant="contained"
              className="place-mark"
              color="error"
              onClick={hanldeClosedSignature}
            >
              {" "}
              {translations?.cancel as string}
            </Button>
            <Button
              variant="contained"
              className="place-mark"
              color="primary"
              onClick={clearSignature}
            >
              {"Clear"}
            </Button>
          </GroupButtons>
        </SignatureWrapper>
      </ModalComponent>
    </>
  );
};
export default CarSignature;
