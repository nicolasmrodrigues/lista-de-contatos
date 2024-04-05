import { Provider } from 'react-redux'
import Form from './components/Form'
import Contacts from './containers/Contacts'
import GlobalStyle, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Form />
        <Contacts />
      </Container>
    </Provider>
  )
}

export default App
