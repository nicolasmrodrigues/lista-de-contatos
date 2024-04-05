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
  ContactActions
} from './styles'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../store/reducers/contacts'
import { useState } from 'react'
import { ContactIcon } from '../../styles'

type Props = ContactClass

const Contact = ({ name, phone, email, id }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  const dispatch = useDispatch()

  return (
    <ContactStyle>
      <ContactInfo>
        <div>
          <ContactIcon />
        </div>
        <InfoList>
          <Info id="name">{name}</Info>
          <Info id="phone">{phone}</Info>
          <Info id="email">{email}</Info>
        </InfoList>
      </ContactInfo>
      <ContactActions>
        <EditButton to="/edit" onClick={() => setIsEditing(true)}>
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
