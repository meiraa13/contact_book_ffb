import { Navigate, Outlet } from "react-router-dom"
import { ContactProvider } from "../providers/ContactContext"


export function ProtectedRoutes(){

    const token = localStorage.getItem("@TOKEN")

    return(
        <ContactProvider>
            {token?<Outlet/>:<Navigate to={"/"} />}
        </ContactProvider>
    )
}