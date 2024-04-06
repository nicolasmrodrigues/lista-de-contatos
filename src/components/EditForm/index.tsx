import { useDispatch, useSelector } from 'react-redux'
import { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { ContactIcon, InputField } from '../../styles'
import { CancelButton, Form, InputsContainer, SaveButton } from './styles'
import { RootReducer } from '../../store'
import { editContact, updateInputValue } from '../../store/reducers/contacts'

const EditForm = () => {
  const {
    inputName: name,
    inputPhone: phone,
    inputEmail: email,
    idOfEditingContact: id
  } = useSelector((state: RootReducer) => state.contacts)

  const dispatch = useDispatch()

  const cancelEdit = () => {
    dispatch(
      updateInputValue({
        inputToUpdate: 'all',
        newValue: ''
      })
    )
  }

  const updateInput = (
    inputToUpdate: 'name' | 'phone' | 'email',
    newValue: string
  ) => {
    dispatch(
      updateInputValue({
        inputToUpdate,
        newValue
      })
    )
  }

  const saveEdition = (event: FormEvent) => {
    event.preventDefault()

    dispatch(editContact(id))

    dispatch(
      updateInputValue({
        inputToUpdate: 'all',
        newValue: ''
      })
    )
  }

  return (
    <Form onSubmit={saveEdition}>
      <ContactIcon />
      <InputsContainer>
        <InputField
          value={name}
          onChange={({ target }) => updateInput('name', target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <InputField
          value={phone}
          onChange={({ target }) => updateInput('phone', target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <InputField
          value={email}
          onChange={({ target }) => updateInput('email', target.value)}
          type="text"
          placeholder="Email"
          required
        />
      </InputsContainer>
      <SaveButton type="submit" onClick={(event) => saveEdition(event)}>
        <Link to="/">Salvar</Link>
      </SaveButton>
      <CancelButton onClick={cancelEdit} type="button">
        <Link to="/">Cancelar</Link>
      </CancelButton>
    </Form>
  )
}

export default EditForm
