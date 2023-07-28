import { createContext } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"

export interface IDefaultProviderProps{
    children: React.ReactNode;
}


interface IUserContext {
    userLogin: (data:TLoginData) => Promise<void>,
    userRegister: (data:any) => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}:IDefaultProviderProps){
    const navigate = useNavigate()

    async function userRegister(data:any) {
        try {
            await api.post('/users', data)
            navigate("/")
            
        } catch (error) {
            console.log(error)
        }
    }
    
    async function userLogin(data: TLoginData ){
        try {
            const response = await api.post('/login', data)
            const token = response.data.token
            localStorage.setItem("@TOKEN", token)
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            navigate("/dashboard")

        }catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{ userLogin, userRegister }}>
            {children}
        </UserContext.Provider>
    )

}