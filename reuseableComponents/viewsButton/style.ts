import { styled } from "styled-components";

export const ViewsWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 10px;
`
export const GridViewWrapper = styled.div`
border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
border-radius: 8px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 4px;
&.active{
  border-color: #17C964
}
`
export const ListViewWrapper = styled.div`
border: 2px solid ${({ theme }) => theme.colors.nafethBlue};
border-radius: 8px;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
padding: 3px;
&.active{
  border-color: #17C964
}
`