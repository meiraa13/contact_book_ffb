import { useContext } from "react";
import { StyledHeader } from "./styles";
import { UserContext } from "../../providers/UserContext";


export function Header(){
    const { logOut, user, setEditUser } = useContext(UserContext)


    return(
        <StyledHeader>
            <div className="container">
                <h2>{user?.nickname}</h2>
                <button onClick={()=>setEditUser(user)}>View profile</button>
                <button onClick={logOut}>Log out</button>
            </div>
        </StyledHeader>
    )
}