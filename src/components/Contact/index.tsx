import { IoIosContact } from 'react-icons/io'
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

type Props = ContactClass

const Contact = ({ name, phone, email, id }: Props) => {
  const dispatch = useDispatch()

  return (
    <ContactStyle>
      <ContactInfo>
        <div>
          <IoIosContact id="contact-icon" />
        </div>
        <InfoList>
          <Info id="name">{name}</Info>
          <Info id="phone">{phone}</Info>
          <Info id="email">{email}</Info>
        </InfoList>
      </ContactInfo>
      <ContactActions>
        <EditButton>
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
