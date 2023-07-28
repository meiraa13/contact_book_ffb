import { StyledHeader } from "./styles";


export function Header(){


    return(
        <StyledHeader>
            <div className="container">
                <h3>Marcelo</h3>
                <button>Update profile</button>
                <button>Delete profile</button>
                <button>Log out</button>

            </div>
        </StyledHeader>
    )
}