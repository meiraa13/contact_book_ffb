import { createContext, useContext, useEffect, useState } from "react";
import { IDefaultProviderProps, UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify"

interface IContactContext{
    createContact: (data:IContactRequest) => Promise<void>,
    modalState: boolean,
    setModalState: React.Dispatch<React.SetStateAction<boolean>>,
    deleteContent: IContact | null,
    setDeleteContent: React.Dispatch<React.SetStateAction<IContact | null>>,
    removeContact: (contactId:number) => Promise<void>,
    updateContact: (data:any, contactId:any) => Promise<void>,
    editContent: IContact | null,
    setEditContent: React.Dispatch<React.SetStateAction<IContact | null>>,


}

export interface IContact{
    createdAt: string,
    email: string,
    fullname: string,
    id: number,
    phoneNumber: string,
    updatedAt: string
}

export interface IContactRequest{
    email:string,
    fullname:string,
    phoneNumber:string
}

export interface IUser{
    contacts: IContact[],
    createdAt: string,
    email: string,
    fullname: string,
    id: number,
    nickname: string,
    phoneNumber: string,
    updatedAt: string
}

export const ContactContext = createContext({} as IContactContext)

export function ContactProvider({children}:IDefaultProviderProps){
    const { user, setUser} = useContext(UserContext)
    const [modalState, setModalState] = useState(false)
    const [deleteContent, setDeleteContent] = useState<IContact | null>(null)
    const [editContent, setEditContent] = useState<IContact | null>(null)

    useEffect(()=>{
        async function loadContacts(){
            try {
                const response = await api.get('/contacts')
                setUser(response.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        loadContacts()
    },[])

    async function createContact(data:IContactRequest){
        try {
            const response = await api.post('/contacts', data)
            setUser({...user!, contacts:[...user!.contacts, response.data]})
            setModalState(false)
            toast.success("Contact created!")

            
        } catch (error) {
            toast.error("Error - contact not created")
            console.log(error)
        }
    }

    async function removeContact(contactId:number) {
        try {
            await api.delete(`/contacts/${contactId}`)
            let contactsArray = user!.contacts
            const newContacts = contactsArray.filter(contact => contact.id != contactId)
            setUser({...user!, contacts:[...newContacts]})
            setDeleteContent(null)
            toast.success("Contact deleted!")
            
        } catch (error) {
            toast.error("Error - contact not deleted")
            console.log(error)
        }
    }

    async function updateContact(data:any, contactId:any) {
        try {
            const response = await api.patch(`/contacts/${contactId}`, data)
            let contactsArray = user?.contacts
            const newArray = contactsArray!.map((contact)=>{
                if(contactId == contact.id){
                    return {...contact, ...data}
                } else {
                    return contact
                }
            })
            setUser({...user!, contacts:[...newArray]})
            toast.success("Contact updated!")
            setEditContent(null)

        } catch (error) {
            toast.error("Error- contact not updated")
            console.log(error)
        }
    }


    return(
        <ContactContext.Provider value={{createContact, modalState, setModalState,
         deleteContent, removeContact, setDeleteContent, editContent, setEditContent, updateContact
        }}>
            {children}
        </ContactContext.Provider>
    )

}