import { styled } from "styled-components";
export const Container = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
 
`;
export const Wrapper = styled.div`
  padding: 15px;
  .load-more{
    width: 200px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px auto;
    & .MuiButton-endIcon{
        svg{
            transform: rotate(90deg);
        }
    }
  }
`;
export const BlcokCustomerTitle = styled.div`
text-align: center;
color: ${({ theme }) => theme.colors.gray2};
`
export const CustomerCardContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;
export const CustomerCardWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  padding: 20px;
  width: 24%;
`;
export const FullNameWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 6px;
  gap: 10px;
`;
export const NameSvgwrapper = styled.div`
  width: 41px;
  height: 41px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.nafethBlue};
`;
export const List = styled.ul`
  margin: 0;
  padding: 10px 0px;
  list-style-type: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray2};
  display: flex;
  justify-content:flex-start;
  align-items:center;
  gap: 10px;
  flex-wrap: wrap;
  &.contract-list{
    gap: 7px;
    justify-content: space-between;
    border-bottom: none;
  }
`;
export const ListItem = styled.li`
     display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    width: 140px;
`;
export const IDValidateWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 6px;
.validateButton{
  padding: 16px;
}
.validateButton-company{
width: 30%;
padding: 16px;
}
.validateinput-company{
  width: 70%;
}

`