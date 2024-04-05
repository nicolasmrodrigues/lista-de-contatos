import { FormEvent, useState } from 'react'
import { Title, Form as FormStyle, InputField, SubmitButton } from './styles'
import { useDispatch } from 'react-redux'
import { addContact } from '../../store/reducers/contacts'

const Form = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  const submitContact = (event: FormEvent) => {
    event.preventDefault()

    dispatch(
      addContact({
        name,
        phone,
        email
      })
    )
    setName('')
    setPhone('')
    setEmail('')
  }

  return (
    <>
      <Title>Lista De Contatos</Title>
      <FormStyle onSubmit={submitContact}>
        <InputField
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          placeholder="Nome"
          required
        />
        <InputField
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          type="text"
          placeholder="Telefone"
          required
        />
        <InputField
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          placeholder="Email"
          required
        />
        <SubmitButton type="submit">Adicionar</SubmitButton>
      </FormStyle>
    </>
  )
}

export default Form
