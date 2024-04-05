import { IoIosContact } from 'react-icons/io'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import {
  Contact as ContactStyle,
  DeleteButton,
  EditButton,
  Info,
  InfoList,
  ContactInfo,
  ContactActions
} from './styles'

const Contact = () => (
  <ContactStyle>
    <ContactInfo>
      <div>
        <IoIosContact id="contact-icon" />
      </div>
      <InfoList>
        <Info id="name">Nícolas</Info>
        <Info id="phone">21965412330</Info>
        <Info id="email">nicolasmedeiros@gmail.com</Info>
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
