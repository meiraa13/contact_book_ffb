import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { StyledModal } from "../ModalCreate/styles"
import { UserContext } from "../../providers/UserContext"
import { TUpdateUserData, updateUserSchema } from "./validators"


export function ModalEditUser(){

    const { editUser, updateUser, setEditUser, removeUser } = useContext(UserContext)

    const {register, handleSubmit, formState: { errors }} = useForm<TUpdateUserData>({
        defaultValues:{
            fullname:editUser?.fullname,
            nickname: editUser?.nickname,
            email: editUser?.email,
            phoneNumber: editUser?.phoneNumber

        },
        resolver:zodResolver(updateUserSchema)
    })
    
    const onSubmit:SubmitHandler<TUpdateUserData> = (data) =>{
        const contactId = editUser!.id
        updateUser(data, contactId)
    }
    

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Update user</h3>
                        <button onClick={()=>setEditUser(null)} >X</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label htmlFor="fullname">Fullname</label>
                        <input id="fullname" {...register("fullname")}></input>
                        <p>{errors.fullname?.message}</p>

                        <label htmlFor="fullname">Nickname</label>
                        <input id="nickname" {...register("nickname")}></input>
                        <p>{errors.nickname?.message}</p>

                        <label htmlFor="email">Email</label>
                        <input id="email" {...register("email")}></input>
                        <p>{errors.email?.message}</p>

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" {...register("phoneNumber")}></input>
                        <p>{errors.phoneNumber?.message}</p>

                        <button type="submit" className="btn-create">Update User</button>
                        <button type="button" onClick={()=> removeUser(editUser!.id)}>Delete User</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}