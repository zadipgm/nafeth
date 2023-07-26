import { styled } from "styled-components";
export const Wrapper = styled.div<{ color: string }>`
& .MuiBox-root{
    & .MuiTabs-root{
        & .MuiTabs-scroller {
            & .MuiTabs-flexContainer{
                & .MuiButtonBase-root{
                    color:${({ color }) => color}
                }
            }
        }
    }
}
`
export const Span = styled.div<{ color: string }>`
padding: 0px 10px;
color:${({ color }) => color}
`