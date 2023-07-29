import { createContext, useEffect, useState } from "react";
import { TLoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { IUser } from "./ContactContext";
import { TRegisterData } from "../pages/Register/validator";

export interface IDefaultProviderProps{
    children: React.ReactNode;
}


interface IUserContext {
    userLogin: (data:TLoginData) => Promise<void>,
    userRegister: (data:TRegisterData) => Promise<void>,
    logOut: () => void,
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,
    user: IUser | null,
    editUser:IUser | null,
    setEditUser: React.Dispatch<React.SetStateAction<IUser | null>>,
    updateUser: (data: any, userId: number) => Promise<void>,
    removeUser: (userId: number) => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export function UserProvider({children}:IDefaultProviderProps){
    const [user, setUser] = useState<IUser | null>(null)
    const [editUser, setEditUser] = useState<IUser | null>(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('@TOKEN')
        if(token){
            async function autoLogin(){
                try{
                    const response = await api.get('/contacts',{
                        headers:{
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(response.data)
                    api.defaults.headers.common.Authorization = `Bearer ${token}`
                    navigate("/dashboard")
                
                }catch(error){
                    console.log(error)
                    localStorage.removeItem('@TOKEN')
                }
               }
            autoLogin()
         }
    },[])

    async function userRegister(data:TRegisterData) {
        try {
            await api.post("/users", data)
            navigate("/")
            toast.success("Registered succesfully!")
            
        } catch (error) {
            toast.error("Could not register user")
            console.log(error)
        }
    }
    
    async function userLogin(data: TLoginData ){
        try {
            const response = await api.post("/login", data)
            const token = response.data.token
            localStorage.setItem("@TOKEN", token)
            api.defaults.headers.common.Authorization = `Bearer ${token}`
            navigate("/dashboard")
            toast.success("Welcome!")

        }catch (error) {
            toast.error("Invalid password or email")
            console.log(error)
        }
    }

    async function updateUser(data:any, userId:number) {
        try {
            const response = await api.patch(`/users/${userId}`, data)
            if(userId == user?.id){
                setUser({...user!, ...response.data})
            }
           
            toast.success("User updated!")
            setEditUser(null)

        } catch (error) {
            toast.error("Error- contact not updated")
            console.log(error)
        }
    }

    async function removeUser(userId:number) {
        try {
            await api.delete(`/users/${userId}`)
            setEditUser(null)
            toast.success("Contact deleted!")
            navigate("/")
            
        } catch (error) {
            toast.error("Error - contact not deleted")
            console.log(error)
        }
    }

    function logOut(){
        localStorage.removeItem("@TOKEN")
        navigate("/")
    }

    return (
        <UserContext.Provider value={{ userLogin, userRegister, logOut, setUser, 
            user, editUser, setEditUser, updateUser, removeUser 
        }}>
            {children}
        </UserContext.Provider>
    )

}