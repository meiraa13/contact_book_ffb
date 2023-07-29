import styled from "styled-components";

export const StyledModal = styled.div`

        .modal-background {
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;

        }

        .modal-container {
            width: fit-content;
            height: fit-content;
            background-color: var(--color-secondary);
            border-style: none;
            color: white;
            display: flex;
            flex-direction: column;
            border-radius: 0 0 5px 5px;
        }
    
   

        .modal-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 20%;
            background-color: var(--color-tertiary);
            padding: 1rem;
            border-radius: 5px 5px 0 0 ;
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
            height: 80%;
            justify-content: space-between;
            border: 100px;
        }

        input, select {

            padding: 0.5rem;
            background-color: var(--grey-1);
            width: 300px;
            border: 1px solid;
            border-radius: 5px;
        }


        .btn-create {
            background-color: var(--grey-1);
        }
`