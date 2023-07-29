import styled from "styled-components"

export const StyledHeader = styled.header`

    background-color: var(--color-primary);
    height: 5rem;

    div{
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width:375px){

        height: fit-content;

        div{
            flex-direction: column;
            gap: 0.5rem;
        }

    }

`