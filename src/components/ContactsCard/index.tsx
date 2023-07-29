import { useContext } from "react"
import { ContactContext, IContact } from "../../providers/ContactContext"
import { StyledCards } from "./styles"
import { RiEditFill, RiDeleteBin6Fill } from "react-icons/ri"

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
                    <button className="icons2" onClick={()=> setEditContent(contact)}><RiEditFill size={20} /></button>
                    <button className="icons2" onClick={()=> setDeleteContent(contact)}><RiDeleteBin6Fill size={20} /></button>
                </div>
                
        </StyledCards>
        


    )
}