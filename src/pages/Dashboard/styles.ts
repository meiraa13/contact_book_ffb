import styled from "styled-components"


export const StyledDash = styled.div`
    display: flex;
    justify-content: space-between;

    ul{
        
        width: 25rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 32rem;
        overflow-y: auto;
    }

    .left-div {
        /* background-color: antiquewhite; */
        width: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
    }

    @media(max-width:768px){

        flex-direction: column;
        gap: 2rem;

        .left-div {
            width: 100%;
        }

        ul{
            width: 100%;
        }
    }


`