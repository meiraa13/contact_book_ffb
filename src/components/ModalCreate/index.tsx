import { useContext } from "react"
import { StyledModal } from "./styles"
import { ContactContext } from "../../providers/ContactContext"
import { useForm} from "react-hook-form"
import { TCreateContactData, createContactSchema } from "./validator"
import { zodResolver } from "@hookform/resolvers/zod"

export function ModalCreate(){

    const {register, handleSubmit, formState: { errors }} = useForm<TCreateContactData>({resolver:zodResolver(createContactSchema)})
    const {createContact, setModalState  } = useContext(ContactContext)
    
  

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Create contact</h3>
                        <button onClick={()=>setModalState(false)} >X</button>
                    </div>
                    <form onSubmit={handleSubmit(createContact)} >
                        <label htmlFor="fullname">Fullname</label>
                        <input id="fullname" {...register("fullname")}></input>
                        <p>{errors.fullname?.message}</p>

                        <label htmlFor="email">Email</label>
                        <input id="email" {...register("email")}></input>
                        <p>{errors.email?.message}</p>

                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input id="phoneNumber" {...register("phoneNumber")}></input>
                        <p>{errors.phoneNumber?.message}</p>

                       
                        
                        <button className="btn-create">Create Contact</button>
                    </form>
                </div>
            </div>
         
        </StyledModal>
    )
}