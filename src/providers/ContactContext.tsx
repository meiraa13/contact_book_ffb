import { createContext, useEffect, useState } from "react";
import { IDefaultProviderProps } from "./UserContext";
import { api } from "../services/api";

interface IContactContext{
    setUser: React.Dispatch<React.SetStateAction<IUser | null>>,
    user: IUser | null,
    createContact: (data:IContactRequest) => Promise<void>,
    modalState: boolean,
    setModalState: React.Dispatch<React.SetStateAction<boolean>>,
    editContent: any,
    setEditContent: React.Dispatch<any>,
    removeContact: (contactId:any) => Promise<void>,

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
    phoneNumber: number,
    updatedAt: string
}

export const ContactContext = createContext({} as IContactContext)

export function ContactProvider({children}:IDefaultProviderProps){
    const [user, setUser] = useState<IUser | null>(null)
    const [modalState, setModalState] = useState(false)
    const [editContent, setEditContent] = useState(null)

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
            setUser({...user, contacts:[...user.contacts, response.data]})
            setModalState(false)

            
        } catch (error) {
            console.log(error)
        }
    }

    async function removeContact(contactId:any) {
        try {
            await api.delete(`/contacts/${contactId}`)
            let contactsArray = user.contacts
            const newContacts = contactsArray.filter(contact => contact.id != contactId)
            setUser({...user, contacts:[...newContacts]})
            setEditContent(null)
            
        } catch (error) {
            console.log(error)
        }
        
    }


    return(
        <ContactContext.Provider value={{setUser, user, createContact, modalState, setModalState, editContent, removeContact, setEditContent}}>
            {children}
        </ContactContext.Provider>
    )

}