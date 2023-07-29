import { useContext } from "react";
import { StyledHeader } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { RiAccountCircleLine, RiLogoutCircleRFill } from "react-icons/ri"
import { FaUserEdit } from "react-icons/fa"


export function Header(){
    const { logOut, user, setEditUser } = useContext(UserContext)


    return(
        <StyledHeader>
            <div className="container">
                <h2><RiAccountCircleLine size={40} /> {user?.nickname}</h2>
                <button className="icons" onClick={()=>setEditUser(user)}><FaUserEdit size={25} /></button>
                <button className="icons" onClick={logOut}><RiLogoutCircleRFill size={25} /></button>
            </div>
        </StyledHeader>
    )
}