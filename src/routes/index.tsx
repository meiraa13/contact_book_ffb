import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { PublicRoutes } from "./PublicRoutes";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Register } from "../pages/Register";


export function MainRoutes(){

    return(
        <Routes>
            <Route path="/" element={<PublicRoutes/>}>
                <Route index element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedRoutes />} >
                <Route index element={<Dashboard />} />
            </Route>

        </Routes>
    )
}