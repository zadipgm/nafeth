import { styled } from "styled-components";
export const Wrapper = styled.div`
display: flex;
    justify-content: space-around;
    align-items: flex-start;
    &.customer-switch{
        width: 32%;
    }
    &.branch-switch{
        width: 50%;
    }
    &.branch-switch{
        width:32%;
    }
    &.user-switch{
        width: 100%;
            height: 56px;
    }
`
export const Title = styled.div<{ titlewidth: string }>`
width: ${({ titlewidth }) => titlewidth};
font-size: 18px;
color:#1976d2;
`
export const Content = styled.div<{ contentwidth: string }>`
width: ${({ contentwidth }) => contentwidth};
`
export const Info = styled.div<{ color: string }>`
    margin: 0px 13px;
    line-height: 14px;
    color: ${({ color }) => color};;
    text-align: justify;
    font-size: 12px;
`