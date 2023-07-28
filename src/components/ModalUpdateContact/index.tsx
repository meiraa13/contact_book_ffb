import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { StyledModal } from "../ModalCreate/styles"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { TUpdateContactData, updateContactSchema } from "./validator"

export function ModalUpdateContact(){

    const {updateContact, setEditContent, editContent } = useContext(ContactContext)

    const {register, handleSubmit, formState: { errors }} = useForm<TUpdateContactData>({
        defaultValues:{
            fullname:editContent?.fullname,
            email: editContent?.email,
            phoneNumber: editContent?.phoneNumber

        },
        resolver:zodResolver(updateContactSchema)
    })
    
    const onSubmit:SubmitHandler<TUpdateContactData> = (data) =>{
        const contactId = editContent?.id
        updateContact(data, contactId)
    }
    

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Update contact</h3>
                        <button onClick={()=>setEditContent(null)} >X</button>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label htmlFor="fullname">Fullname</label>
                        <input id="fullname" {...register("fullname")}></input>
                        <p>{errors.fullname?.message}</p>

                        <label htmlFor="email">Email</label>
                        <input id="email" {...register("email")}></input>
                        <p>{errors.email?.message}</p>

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" {...register("phoneNumber")}></input>
                        <p>{errors.phoneNumber?.message}</p>

                       
                        
                        <button className="btn-create">Update Contact</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}