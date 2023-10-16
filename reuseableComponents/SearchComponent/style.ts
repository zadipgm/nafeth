import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
flex-grow: 1;
flex-basis: 450px;
&.small_size{
  flex-basis: 200px;
}
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
 flex-grow: 1;
flex-basis: 450px;
&.small_size{
  flex-basis: 200px;
}
`;