import { useForm } from "react-hook-form"
import { TLoginData, loginSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"
import { StyledLogin } from "./styles"



export function Login(){
    const {register, handleSubmit, formState:{ errors }} = useForm<TLoginData>({resolver: zodResolver(loginSchema)})
    const { userLogin } = useContext(UserContext)

    

    return(
        <StyledLogin >
            <div>
                <h2>Hello World</h2>
            </div>
            <div className="login-div">
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
            </div>
         
        </StyledLogin>
    )
}