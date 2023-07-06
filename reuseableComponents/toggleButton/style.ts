import { styled } from "styled-components";
export const Wrapper = styled.div`
display: flex;
    justify-content: space-around;
    align-items: flex-start;
`
export const Title = styled.div`
width: 40%;
font-size: 18px;
color:#1976d2;
`
export const Content = styled.div`
width: 60%;
`
export const Info = styled.div`
    margin: 0px 13px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.pageTextColor};;
    text-align: justify;
    font-size: 12px;
`