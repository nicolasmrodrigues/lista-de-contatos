import { FormEvent } from 'react'
import { Title, Form as FormStyle, InputField, SubmitButton } from './styles'

const Form = () => {
  const submitContact = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <Title>Lista De Contatos</Title>
      <FormStyle onSubmit={submitContact}>
        <InputField type="text" placeholder="Nome" required />
        <InputField type="text" placeholder="Telefone" required />
        <InputField type="text" placeholder="Email" required />
        <SubmitButton type="submit">Adicionar</SubmitButton>
      </FormStyle>
    </>
  )
}

export default Form
