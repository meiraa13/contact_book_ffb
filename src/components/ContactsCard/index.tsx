import { useContext } from "react"
import { ContactContext, IContact } from "../../providers/ContactContext"
import { StyledCards } from "./styles"

interface IContactProps{
    contact: IContact
}

export function ContactsCard({contact}:IContactProps){
    
    const {setDeleteContent, setEditContent } = useContext(ContactContext)

    return(
        
        <StyledCards>
                <h3>Name:{contact.fullname}</h3>
                <p>Email:{contact.email}</p>
                <p>Phone number:{contact.phoneNumber}</p>
                <div className="button-div">
                    <button onClick={()=> setEditContent(contact)}>Update</button>
                    <button onClick={()=> setDeleteContent(contact)}>Delete</button>
                </div>
                
        </StyledCards>
        


    )
}