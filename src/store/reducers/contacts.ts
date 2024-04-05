import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactsState = {
  items: Contact[]
}

type ContactWithoutId = Omit<Contact, 'id'>

const initialState: ContactsState = {
  items: [
    {
      name: 'Gian Souza',
      phone: '11912345678',
      email: 'gian@ebac.com.br',
      id: 1
    },
    {
      name: 'Bruna Costa',
      phone: '15932635178',
      email: 'bruna.costa@ebac.com.br',
      id: 2
    },
    {
      name: 'Felice Lacerda',
      phone: '11935730078',
      email: 'felipe.lacerda@gmail.com',
      id: 3
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactWithoutId>) => {
      const contactToAdd: Contact = {
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
        id: state.items.length + 1
      }
      state.items = [...state.items, contactToAdd]
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload - 1, 1)
      let id = 1
      state.items.map((contact) => {
        contact.id = id
        id++
      })
    }
  }
})

export const { addContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer
