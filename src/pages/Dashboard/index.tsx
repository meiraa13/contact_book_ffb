import { useContext } from "react"
import { ContactContext } from "../../providers/ContactContext"
import { ContactsCard } from "../../components/ContactsCard"
import { Header } from "../../components/Header"
import { StyledDash } from "./styles"
import { ModalCreate } from "../../components/ModalCreate"
import { ModalDeleteContact } from "../../components/ModalDeleteContact"
import { UserContext } from "../../providers/UserContext"
import { ModalUpdateContact } from "../../components/ModalUpdateContact"
import { ModalEditUser } from "../../components/ModalEditUser"


export function Dashboard(){
    const { modalState, setModalState, deleteContent, editContent } = useContext(ContactContext)
    const { user, editUser } = useContext(UserContext)


    return(
        <>
            <Header />
            {editUser && <ModalEditUser />}

            <StyledDash className="container">
                <div className="left-div">
                    <h3>Welcome to your personal agenda! here you can manage all your contacts in a safe and easy way</h3>

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
                    {deleteContent && <ModalDeleteContact />}
                    {editContent && <ModalUpdateContact />}
                </div>
              
            </StyledDash>
         

        </>
    )
}