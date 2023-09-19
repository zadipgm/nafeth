import styled from "styled-components";
export const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 13px;
    align-items: center;

`
export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 23%;
  .MuiFormControl-root{

    width: 100%;
  }
  color: #5a5c69;
  > span {
    font-size: 14px;
    font-weight: bold;
  }
`;
export const SearchWrapper = styled.div`
  width: 100%;
`;