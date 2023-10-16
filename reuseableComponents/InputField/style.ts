import { styled } from "styled-components";

export const Container = styled.div`
flex-grow: 1;
flex-basis: 400px;
.data-search{
width: 100%;
}
.MuiFormControl-root{
        width: 100%;}
&.date-time{
    .MuiFormControl-root{
        width: 100%;
        .MuiInputBase-root{
            .MuiInputBase-root >input{
                -webkit-text-fill-color: transparent !important;
            }
        }
    }
}
/* &.customer-email{
    width: 50%;
}
&.nationality{
   width: 32%;
   
}
&.group-edit-form-description{
    width: 100%;
}
&.group-edit-form{
    width: 100%;
}
&.block-customer{
    .MuiFormControl-root{
        width: 100%;
        padding: 15px;

    }
}
&.zip-code{
    width: 100%;
}
&.group-edit-form-description{
    width: 100%;
}
&.tajeer{
width: 100%;
}
input[type="date"]{
    color: #ffff;
}
&.car-contract-dropdown{
    width: 100%;
}
&.car-contract-details{
    width: 33%;
}
&.car-contract-cost{
    width: 50%;
}
&.zip-code{
    width: 100%;
}
&.validateinput-company{
    width: 100%;
}
&.search-input-car{
    width: 100%;
}
&.search-input-table{
    width: 100%;
    .MuiFormControl-root{
        width: 100%;

    }
} */
`