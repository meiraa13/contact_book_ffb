import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { StyledModal } from "../ModalCreate/styles"

export function ModalDeleteContact(){

   
    const {removeContact, deleteContent, setDeleteContent } = useContext(ContactContext)
    
  

     return(

        <StyledModal  >
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-title">
                        <h3>Delete contact</h3>
                        <button onClick={()=>setDeleteContent(null)} >X</button>
                    </div>
                    <div>
                        <p>Are you sure you want to delete this contact?</p>
                        <button onClick={()=>removeContact(deleteContent!.id)}>Yes</button>
                    </div>
                </div>
            </div>
         
        </StyledModal>
    )
}