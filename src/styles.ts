import styled, { createGlobalStyle } from 'styled-components'
import { IoIosContact } from 'react-icons/io'

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
  max-width: 904px;
  width: 100%;
  margin: 72px auto 0 auto;
`

export const InputField = styled.input`
  padding: 8px 12px;
  margin-bottom: 12px;
  border: 1px solid #00000026;
  border-radius: 4px;
  color: #464a4c;
  font-size: 16px;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
`

export const ContactIcon = styled(IoIosContact)`
  color: #a9a9a9;
  font-size: 96px;
  margin-right: 16px;
`

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #0275d8;
  margin-bottom: 12px;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color linear 0.08s;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);

  &:hover {
    background-color: #025aa5;
  }
`

export default GlobalStyle
