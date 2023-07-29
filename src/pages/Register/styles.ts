import styled from "styled-components"

export const StyledRegister = styled.main`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    background-color:var(--color-tertiary);

    .register-div {
        background-color: var(--color-primary);
        padding: 2rem;
        height: 500px;
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




`