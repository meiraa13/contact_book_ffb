import styled from "styled-components"

export const StyledRegister = styled.main`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    padding: 2rem;
    background-color:var(--color-tertiary);

    .register-div {
        background-color: var(--grey-2);
        padding: 1rem;
        width: 350px;
        display: flex;
        flex-direction: column;
        border: 4px solid;
        border-radius: 0.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap:0.5rem
   
        
    }

    input {
        border: 1px solid;
        padding: 0.5rem;
    }

    @media(max-width:756px){
        flex-direction: column-reverse;
        gap: 1rem;

        .title-div {
            width: 100%;
            text-align: center;
        }

        .register-div {
            width: 100%;
        }
    }


`