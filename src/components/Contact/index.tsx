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

type Props = ContactClass

const Contact = ({ name, phone, email, id }: Props) => (
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
      <DeleteButton>
        <IoMdTrash />
      </DeleteButton>
    </ContactActions>
  </ContactStyle>
)

export default Contact
