import { styled } from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Item = styled.div<{ bgcolor: string }>`

   
padding: 4px;
    border-radius: 5px;
    border: 1px solid ${({ bgcolor }) => bgcolor};
    margin: 4px;
	transition: all.5s;
	position: relative;
  &.active{
    border: 1px solid ${({ bgcolor }) => bgcolor};
  }
`;

export const RadioButtonLabel = styled.label`
  
`;
export const RadioButton = styled.input<{ label: string, bgcolor: string }>`
    width: auto;
    height: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 4px 8px;
    background: #4b49491f;
   
    font-size: 16px;
    transition: all 100ms linear;
    color: #656565;
    transition: all.5s;
  &:checked{
    transition: all.5s;
   background-color:${({ bgcolor }) => bgcolor};
   color: #fff;
	
	
  }
  &::before{
    content: attr(label);
	display: inline-block;
	text-align: center;
	width: 100%;
  }
`;