import { createGlobalStyle } from "styled-components"

export const GlobalReset = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
        text-decoration: none;
        font-family: "Inter", sans-serif;
    }

    button {
        cursor: pointer;
        background-color: var(--color-tertiary);
        padding: 0.5rem;
        border-radius: 0.5rem;
        border-style: none;
    }   

    body {

        background-color: var(--grey-2);

    }

    
    :root {
        --color-primary: #9771ff;
        --color-secondary: #8060d9;
        --color-tertiary: #34eaba;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #ececec;
        --grey-1: #f5f5f5;
        --grey-0: #f8f9fa;

        --negative: #E83F5B;
        --sucess: #3FE864;
    }

    .container {
        max-width: 70rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    }

    .container2 {
        max-width: 25rem;
        margin: 0 auto;
        width: 100%;
        padding: 1rem;
    
    }
    
`