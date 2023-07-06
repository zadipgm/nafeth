import { styled } from "styled-components";

export const RadioButton = styled.div`
& .MuiFormGroup-root {
    flex-direction: row;
}
`
export const Title = styled.h3`
font-size: 18px;
color: ${({ theme }) => theme.colors.darkmood.lightBlue};
`