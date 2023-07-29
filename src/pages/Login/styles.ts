import styled from "styled-components"

export const StyledLogin = styled.main`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 10rem;
    background-color:var(--color-secondary);

    .login-div {
        background-color: var(--color-primary);
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border: 4px solid;
        border-radius: 0.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input {
        border: 1px solid;
        padding: 0.5rem;
    }

    .register {
        text-align: center;
    }




`