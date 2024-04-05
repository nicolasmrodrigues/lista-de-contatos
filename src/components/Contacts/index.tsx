import { useSelector } from 'react-redux'
import Contact from '../Contact'
import { ContactsList } from './styles'
import { RootReducer } from '../../store'

const Contacts = () => {
  const { items: contacts } = useSelector(
    (state: RootReducer) => state.contacts
  )
  return (
    <ContactsList>
      {contacts.map((c) => (
        <li key={c.id}>
          <Contact name={c.name} phone={c.phone} email={c.email} id={c.id} />
        </li>
      ))}
    </ContactsList>
  )
}

export default Contacts
