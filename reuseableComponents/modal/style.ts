import { styled } from "styled-components";

export const Wrapper = styled.div`
background-color: red;
& .MuiModal-root.mobile-modal.MuiDialog-container.MuiPaper-root{
    all: unset;
            margin: 0;
            width: 100%;
            height: 100%;
}
&.MuiPaper-root{
    .MuiDialog-paper{

        background-color: red;
    }
}
`