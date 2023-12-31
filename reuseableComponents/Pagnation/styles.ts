import styled from "styled-components";

export const PaginationList = styled.ul`
display:flex ;
list-style-type: none;
padding: 0;
`
export const PaginationListItem = styled.li`
width: 100%;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.sideBarBgColor};
    margin: 2px;
    border-radius:6px;
    transition:.5s ;
    background-color: ${({ theme }) => theme.colors.white};
    cursor:pointer;
    &.active{
        transition:.5s ;
        background-color: ${({ theme }) => theme.colors.sideBarBgColor};
        color:${({ theme }) => theme.colors.white}; 
    }
   

`
