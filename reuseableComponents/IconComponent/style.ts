import { styled } from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content:center;
align-items:center;
&.selected_car{
    height: 77px;
}
<<<<<<< HEAD
=======
&.sidebar-icon{
    border: 1px solid ${({ theme }) => theme.colors.gray2};
    padding:8px;
    border-radius:10px ;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
>>>>>>> e36af8fdde2b7bcd4aae9626346100a96686392a
`