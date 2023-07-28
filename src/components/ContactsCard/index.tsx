import { useContext } from "react"
import { ContactContext, IContact } from "../../providers/ContactContext"
import { StyledCards } from "./styles"

interface IContactProps{
    contact: IContact
}

export function ContactsCard({contact}:IContactProps){
    
    const {setEditContent, removeContact } = useContext(ContactContext)

    return(
        
        <StyledCards>
                <h1>{contact.fullname}</h1>
                <p>{contact.email}</p>
                <p>{contact.phoneNumber}</p>
                <button>Update</button>
                <button onClick={()=> removeContact(contact.id)}>Delete</button>
        </StyledCards>
        


    )
}