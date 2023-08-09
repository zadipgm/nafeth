import * as React from "react";
import {
  EvaluationContainer,
  EvaluationSubmit,
  EvaluationWrapper,
  InputEvaluationWrapper,
  TextWrapper,
} from "./style";
import { DashboardTitle } from "@/reuseableComponents/HeaderCards/style";
import { isTheme } from "@/_helpers/getTheme";
import InputComponent from "@/reuseableComponents/InputField";
const CarEvaluiation = () => {
  return (
    <EvaluationContainer>
      <DashboardTitle>{"Evaluation"}</DashboardTitle>
      <EvaluationWrapper>
        <TextWrapper>
          This evaluation depends on what is evaluated by all our customers on
          an effective system. The proposed evaluation that appears in front of
          you should not be taken as a radical evaluation of the client, but it
          is used as an aid to decision-making and some necessary precautions
          delayed vehicles
        </TextWrapper>
        <InputEvaluationWrapper
          bcolor={isTheme()?.bcolor}
          color={isTheme()?.inputColor}
        >
          <form>
            <InputComponent
              type="text"
              classname="evaluation-input"
              label="Please inquire using ID number"
              required={true}
            />
            <EvaluationSubmit type="submit" value={"Evaluation"} />
          </form>
        </InputEvaluationWrapper>
      </EvaluationWrapper>
    </EvaluationContainer>
  );
};
export default CarEvaluiation;
