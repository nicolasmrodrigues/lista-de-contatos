import { Link } from 'react-router-dom'
import { ContactIcon, InputField } from '../../styles'
import { CancelButton, Form, InputsContainer, SaveButton } from './styles'

const EditForm = () => (
  <Form>
    <ContactIcon />
    <InputsContainer>
      <InputField placeholder="Nome" />
      <InputField placeholder="Telefone" />
      <InputField placeholder="Email" />
    </InputsContainer>
    <SaveButton type="submit">Salvar</SaveButton>
    <CancelButton as={Link} to="/" type="button">
      Cancelar
    </CancelButton>
  </Form>
)

export default EditForm
