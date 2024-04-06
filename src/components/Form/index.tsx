import { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Title, Form as FormStyle } from './styles'
import { addContact, updateInputValue } from '../../store/reducers/contacts'
import { Button, InputField } from '../../styles'
import { RootReducer } from '../../store'

const Form = () => {
  const {
    inputName: name,
    inputPhone: phone,
    inputEmail: email
  } = useSelector((state: RootReducer) => state.contacts)

  const dispatch = useDispatch()

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

  const submitContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addContact({
        name,
        phone,
        email
      })
    )

    dispatch(
      updateInputValue({
        inputToUpdate: 'all',
        newValue: ''
      })
    )
  }

  return (
    <>
      <Title>Lista De Contatos</Title>
      <FormStyle onSubmit={submitContact}>
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
        <Button type="submit">Adicionar</Button>
      </FormStyle>
    </>
  )
}

export default Form
