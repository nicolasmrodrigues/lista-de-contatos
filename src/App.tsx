import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import Edit from './pages/Edit'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/edit',
    element: <Edit />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routers} />
      </Container>
    </Provider>
  )
}

export default App
