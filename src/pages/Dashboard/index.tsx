import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { ContactsCard } from "../../components/ContactsCard"
import { Header } from "../../components/Header"
import { StyledDash } from "./styles"
import { ModalCreate } from "../../components/ModalCreate"


export function Dashboard(){
    const { user, modalState, setModalState, editContent } = useContext(ContactContext)


    return(
        <>
            <Header />

            <StyledDash className="container">
                <div>
                    <button onClick={()=>setModalState(true)}>Create new contact</button>
                    {modalState && <ModalCreate />}
                </div>

                <div>
                    {
                        user?
                        <ul>
                            {user.contacts.map((contact)=>(<ContactsCard key={contact.id} contact={contact} />))}
                        </ul>
                        :<h2>You don't have any contacts yet</h2>
                    }
                    {editContent && <ModalCreate />}
                </div>
              
            </StyledDash>
         

        </>
    )
}