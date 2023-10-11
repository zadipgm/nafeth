import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 15px;
    flex-grow: 1;
    flex-basis: 250px;
`
export const Label = styled.label`
    font-size: 15px;
    margin-bottom: 5px;
        font-weight: 400;
    color: #9b9b9b;
        display: inline-block;
    max-width: 100%;
`
export const Input = styled.input`
    border: 1px solid #9b9b9b;
    background-color: #fffcf5;
        border-radius: 4px;
    color: #33456b;
    font-size: 14px;
    transition: background-color 0.3s ease 0s;
    padding: 7px 18px;
    height: 40px;
    line-height: 1.42857;
    width: 100%;
        font-family: inherit;
        &:focus{
            background-color: #fff;
            border: 1px solid #9b9b9b;
                outline: 0 !important;
        }
        &:disabled{
                background-color: #e3e3e3;
    cursor: not-allowed;
    color: #9b9b9b;
    opacity: 1;
        }
        
        &::placeholder{
            color: #9b9b9b;
        }
`