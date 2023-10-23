import styled from "styled-components";
import { css } from "styled-components";
export const DataTableContainer = styled.div`

box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
 
`

export const DataViewWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  width: 8%;
`;
export const DataView = styled.div`
  border-radius: 6px;
 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray2};
  cursor: pointer;
  box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12);
  &.active {
    border: 1px solid transparent;
    background: ${({ theme }) => theme.colors.sideBarBgColor};
    color: ${({ theme }) => theme.colors.white};
    svg{
      path{
        stroke: #fff;
      }
    }
    svg{
      g{
        g{
          fill: #fff;
        }
      }
    }
  }
`;
export const TableWrapper = styled.div`
overflow-x: auto;
&.rent_page{
box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin: 0px 18px;
}
 background-color: #f4f5f3;
 border-radius: 8px;
`
export const Table = styled.table`
tr:nth-child(even) {
  background-color: #fff;
}
  display: table;
  border-collapse: collapse;
  
  width: 100%;
  animation: fadeIn 1.5s;
  > h3 {
    text-align: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const THeader = styled.th`
padding: 15px 8px;
border-bottom-width: 0;
    font-size: 14px;
    font-weight: 600;
        border-bottom: 1px solid #9b9b9b;
        text-align: left;
            color: #252422;
`
export const TableData = styled.td`
padding: 10px 8px;
white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* padding: 0px 8px; */
  border-top: 1px solid #9b9b9b;
  border-bottom: 1px solid #9b9b9b;
  
  ${({ theme }) => theme.isLTR ? css`text-align: left;` : css`text-align: right;`}
  &.table-header {
    font-size: 14px;
    font-weight: 700;
    align-items: center;
    border: 1px solid #dddddd;
  }
`;
export const Row = styled.tr`
  display: table-row;

  &.show {
    display: table-row-group;
    position: relative;
    left: 23%;
    bottom: 18px;
    right: 23%;
    animation: fadeIn 1.5s;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &.hide {
    display: none;
  }
`;
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding: 0px 16px;
`;
export const PaginationOuterDiv = styled.div`
  width: 25%;
`;

export const TableDataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Data = styled.div``;




export const Label = styled.label``;
export const Input = styled.input`
  padding: 10px;
  width: 100%;
  outline: none;
  border-radius: 5px;
  border: 1px solid lightgray;
  font-size: 14px;
`;
export const EntriesWrapper = styled.div`
  width: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  > span {
    color: #5a5c69;
    font-size: 14px;
    font-weight: bold;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const Select = styled.select`
  padding: 11px 10px;
  outline: none;
  border-radius: 5px;
  margin: 10px;
  direction: ltr;
  cursor: pointer;
  border: 1px solid lightgray;
  font-size: 14px;
  transition: 0.5s;
  color: #5a5c69;
  :focus {
    border: 1px solid #007dcbd6;
    box-shadow: 0 0 0 0.1rem #2493f5;
  }
  > option {
    &.actions {
      font-size: 15px;
      font-weight: 700;
    }
  }
`;
export const Paginations = styled.div`
  display: inline-block;
  > a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    font-size: 22px;
    &.active {
      background-color: #4caf50;
      color: white;
      border: 1px solid #4caf50;
    }
  }
`;
export const CardViewContainer = styled.div`
  animation: fadeIn 1.5s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
export const CardList = styled.ul`
  list-style-type: none;
  margin: auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;
export const CardListItems = styled.li`
  border-radius: 10px;
  padding: 12px;
  margin: 12px;
  width: 30%;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    &.in-active{
      background-color: #ff00008f;
    }
`;
export const CardListItemsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 6px;
  gap: 12px;
  line-height: 22px;

  &.card-name {
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
    text-transform: capitalize;
    padding-bottom: 10px;
  }
`;
export const Button = styled.button`
  width: 10%;
  padding: 16px;
  border: none;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.themeColor};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  font-size: 16px;
  text-transform: capitalize;
`;
export const ToolTipWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;