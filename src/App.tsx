import Form from './components/Form'
import Contacts from './containers/Contacts'
import GlobalStyle, { Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
        <Contacts />
      </Container>
    </>
  )
}

export default App
