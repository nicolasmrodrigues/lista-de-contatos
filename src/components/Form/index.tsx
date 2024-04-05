import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Title, Form as FormStyle } from './styles'
import { addContact } from '../../store/reducers/contacts'
import { Button, InputField } from '../../styles'

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
        <Button type="submit">Adicionar</Button>
      </FormStyle>
    </>
  )
}

export default Form
