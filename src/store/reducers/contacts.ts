import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contact from '../../models/Contact'

type ContactWithoutId = Omit<Contact, 'id'>

type ContactsState = {
  items: Contact[]
  inputName: string
  inputPhone: string
  inputEmail: string
  idOfEditingContact: number
}

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
  ],
  inputName: '',
  inputPhone: '',
  inputEmail: '',
  idOfEditingContact: 0
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
      state.items.push(contactToAdd)
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.items.splice(action.payload - 1, 1)
      let id = 1
      state.items.map((contact) => {
        contact.id = id
        id++
      })
    },
    editContact: (state, action: PayloadAction<number>) => {
      state.items[action.payload - 1].name = state.inputName
      state.items[action.payload - 1].phone = state.inputPhone
      state.items[action.payload - 1].email = state.inputEmail
    },
    updateInputValue: (
      state,
      action: PayloadAction<{
        inputToUpdate: 'name' | 'phone' | 'email' | 'id' | 'all'
        newValue: string
      }>
    ) => {
      if (action.payload.inputToUpdate === 'name') {
        state.inputName = action.payload.newValue
      } else if (action.payload.inputToUpdate === 'phone') {
        state.inputPhone = action.payload.newValue
      } else if (action.payload.inputToUpdate === 'email') {
        state.inputEmail = action.payload.newValue
      } else if (action.payload.inputToUpdate === 'id') {
        state.idOfEditingContact = parseInt(action.payload.newValue)
      } else {
        state.inputName =
          state.inputPhone =
          state.inputEmail =
            action.payload.newValue
      }
    }
  }
})

export const { addContact, deleteContact, editContact, updateInputValue } =
  contactsSlice.actions
export default contactsSlice.reducer
