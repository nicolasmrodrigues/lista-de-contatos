import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    body {
      background-color: #f5f5f5;
    }
  }
`

export const Container = styled.div`
  max-width: 968px;
  width: 100%;
  margin: 72px auto 0 auto;
`

export default GlobalStyle
