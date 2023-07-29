import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserContext } from "../../providers/UserContext"
import { StyledRegister } from "./styles"
import { TRegisterData, registerSchema } from "./validator"



export function Register(){
    const {register, handleSubmit, formState:{ errors }} = useForm<TRegisterData>({resolver: zodResolver(registerSchema)})
    const { userRegister } = useContext(UserContext)

      return(
        <StyledRegister >

            <div className="register-div">
                <form onSubmit={handleSubmit(userRegister)}> 
                    <label htmlFor="fullname" >Fullname</label>
                    <input type="text" id="fullname" {...register("fullname")}/>
                    <p>{errors.fullname?.message}</p>

                    <label htmlFor="nickname" >Nickname</label>
                    <input type="text" id="nickname" {...register("nickname")}/>
                    <p>{errors.nickname?.message}</p>

                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" {...register("email")}/>
                    <p>{errors.email?.message}</p>

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" {...register("password")} />
                    <p>{errors.password?.message}</p>

                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input type="text" id="phoneNumber" {...register("phoneNumber")} />
                    <p>{errors.phoneNumber?.message}</p>

                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="title-div">
                <h2>Create your profile</h2>
            </div>
         
        </StyledRegister>
    )
}