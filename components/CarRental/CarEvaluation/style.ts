import { styled } from "styled-components";

export const EvaluationContainer = styled.div`
  width: 50%;
    @media (max-width: 600px) {
 width: 100%;
}
    flex-grow: 1;
    flex-basis: 400px;
`;
export const EvaluationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TextWrapper = styled.div`
  width: 100%;
  text-align: justify;
  line-height: 26px;
`;
export const EvaluationSubmit = styled.input`
  width: 250px;
    @media (max-width: 600px) {
 width: 100%;
}
  padding: 11px;
  margin: 37px 0px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.sideBarBgColor};
  color: #fff;
  cursor: pointer;
  transition: .5s;
  &:hover{
    opacity: .8;
     transition: .5s;
  }
`;
export const InputEvaluationWrapper = styled.div<{
  bcolor?: string;
  color?: string;
}>`
  & .evaluation-input {
    width: 100%;
    margin: 0;
    color: ${({ color }) => color};
    background-color: ${({ bcolor }) => bcolor};
    > label {
      font-size: 0.9rem;
      top: -3px;
      color: ${({ color }) => color};
      background-color: ${({ bcolor }) => bcolor};
    }
    & .MuiInputBase-root {
      > input {
        padding: 12px 14px;
      }
      > fieldset {
        border-color: ${({ color }) => color};
        /* background-color: ${({ bcolor }) => bcolor}; */
      }
    }
  }
`;