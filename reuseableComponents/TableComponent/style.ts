import { isTheme } from "@/models/istheme";
import { styled } from "styled-components";

// export const Container = styled.div<{ istheme: isTheme }>`
//   padding: 15px;
//   background-color: ${({ istheme }) => istheme.bcolor};
//   color: ${({ istheme }) => istheme.color};
//   border-radius: 10px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
// `;
export const Table = styled.table<{ color: string }>`
  border-collapse: collapse;
  width: 100%;
  & .MuiPagination-root{
    margin-top:10px ;
    .Mui-selected{
      background-color: ${({ color }) => color};
      color:white
    }
  }
`;
export const InputWrapper = styled.div<{ istheme: isTheme }>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  & .search-input {
    width: 100%;
  }
  & .MuiFormControl-root {
    border-radius: 8px;
  }
  & .MuiInputBase-root {
    > input {
      color: ${({ istheme }) => istheme.color};
    }
  }
  & .MuiFormLabel-root {
    color: ${({ istheme }) => istheme.color};
  }
  & .MuiFormLabel-root.Mui-focused {
    color: ${({ istheme }) => istheme.color};
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ istheme }) => istheme.color};
    :hover {
      border-color: ${({ istheme }) => istheme.color};
    }
  }
`;
export const TRow = styled.tr``;
export const THead = styled.th`
  text-align: left;
  padding: 8px;
`;
export const TData = styled.td`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  text-align: left;
  padding: 8px;
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 500;
`;

export const ToolTipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
