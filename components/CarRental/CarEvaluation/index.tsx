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
import { useTheme } from "styled-components";
const CarEvaluiation = () => {
  const { isLTR } = useTheme();
  return (
    <EvaluationContainer>
      <DashboardTitle>{isLTR ? "Evaluation" : "تقييم"}</DashboardTitle>
      <EvaluationWrapper>
        <TextWrapper>
          {isLTR
            ? `This evaluation depends on what is evaluated by all our customers on
          an effective system. The proposed evaluation that appears in front of
          you should not be taken as a radical evaluation of the client, but it
          is used as an aid to decision-making and some necessary precautions
          delayed vehicles`
            : "ويعتمد هذا التقييم على ما يتم تقييمه من قبل جميع عملائنا على نظام فعال. التقييم المقترح الذي يظهر أمامك لا ينبغي أن يؤخذ على أنه تقييم جذري للعميل، بل يستخدم كوسيلة مساعدة على اتخاذ القرار وبعض الاحتياطات اللازمة لمركبات التأخير"}
        </TextWrapper>
        <InputEvaluationWrapper
          bcolor={isTheme()?.bcolor}
          color={isTheme()?.inputColor}
        >
          <form>
            <InputComponent
              type="text"
              classname="evaluation-input"
              label={
                isLTR
                  ? "Please inquire using ID number"
                  : "يرجى الاستفسار باستخدام رقم الهوية"
              }
              required={true}
            />
            <EvaluationSubmit
              type="submit"
              value={isLTR ? "Evaluation" : "تقييم"}
            />
          </form>
        </InputEvaluationWrapper>
      </EvaluationWrapper>
    </EvaluationContainer>
  );
};
export default CarEvaluiation;
