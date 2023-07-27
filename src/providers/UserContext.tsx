import { createContext, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"

export interface IDefaultProviderProps{
    children: React.ReactNode;
}


interface IUser {
    id: string;
    name: string;
    email: string
}

interface IUserContext {
    userLogin: (data:TLoginData) => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}:IDefaultProviderProps){
    const [user, setUser] = useState<IUser | null>(null)
    const navigate = useNavigate()
    
    async function userLogin(data: TLoginData ){
      try {
        const response = await api.post('/login', data)
        const token = response.data.token
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        navigate("dashboard")

    }catch (error) {
      console.log(error)
    }
     }

    return (
        <UserContext.Provider value={{ userLogin }}>
            {children}
        </UserContext.Provider>
    )

}