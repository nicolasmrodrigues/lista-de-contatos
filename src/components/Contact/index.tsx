import { useDispatch } from 'react-redux'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import ContactClass from '../../models/Contact'
import {
  Contact as ContactStyle,
  DeleteButton,
  EditButton,
  Info,
  InfoList,
  ContactInfo,
  ContactActions,
  ContactNumber
} from './styles'
import { deleteContact, updateInputValue } from '../../store/reducers/contacts'
import { ContactIcon } from '../../styles'

type Props = ContactClass

const Contact = ({ name, phone, email, id }: Props) => {
  const dispatch = useDispatch()

  const updateEditingContactInfo = () => {
    dispatch(
      updateInputValue({
        inputToUpdate: 'name',
        newValue: name
      })
    )

    dispatch(
      updateInputValue({
        inputToUpdate: 'phone',
        newValue: phone
      })
    )

    dispatch(
      updateInputValue({
        inputToUpdate: 'email',
        newValue: email
      })
    )

    dispatch(
      updateInputValue({
        inputToUpdate: 'id',
        newValue: `${id}`
      })
    )
  }

  return (
    <ContactStyle>
      <ContactNumber>{id}</ContactNumber>
      <ContactInfo>
        <ContactIcon />
        <InfoList>
          <Info id="name">{name}</Info>
          <Info id="phone">{phone}</Info>
          <Info id="email">{email}</Info>
        </InfoList>
      </ContactInfo>
      <ContactActions>
        <EditButton to="/edit" onClick={updateEditingContactInfo}>
          <HiOutlinePencilAlt />
        </EditButton>
        <DeleteButton onClick={() => dispatch(deleteContact(id))}>
          <IoMdTrash />
        </DeleteButton>
      </ContactActions>
    </ContactStyle>
  )
}

export default Contact
