import styled from "styled-components";

export const Container = styled.div`
    padding: 16px 0;
    display: flex;
    background: ${({ theme }) => theme.colors.headersideBarBgColor};
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.pageTextColor};
    width: 100%;
`