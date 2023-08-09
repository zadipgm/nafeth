import styled from "styled-components";

export const Container = styled.div`
    padding: 16px 0;
    display: flex;
    background: ${({ theme }) => theme.colors.pagebgcolor};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.pageTextColor};
    width: 100%;
    
    

`