import { useForm } from "react-hook-form"
import { TLoginData, loginSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"



export function Login(){
    const {register, handleSubmit, formState:{ errors }} = useForm<TLoginData>({resolver: zodResolver(loginSchema)})
    const { userLogin } = useContext(UserContext)

    

    return(
        <main>
            <h2>Login</h2>

            <form onSubmit={handleSubmit(userLogin)}> 
                <label htmlFor="email" >Email</label>
                <input type="email" id="email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")} />
                <p>{errors.password?.message}</p>
                <button type="submit">Entrar</button>
            </form>
        </main>
    )
}