import styled from 'styled-components'
import { Button } from '../../styles'

export const Form = styled.form`
  width: 424px;
  height: 424px;
  display: block;
  background-color: #dbdbdb;
  border-radius: 4px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);

  input {
    width: 100%;
  }
`

export const InputsContainer = styled.div`
  margin-top: 24px;
`

export const SaveButton = styled(Button)`
  margin: 24px 16px 0 0;
  background-color: #2ecc71;
  &:hover {
    background-color: #27ae60;
  }
`

export const CancelButton = styled(Button)`
  text-decoration: none;
  background-color: #e74c3c;

  &:hover {
    background-color: #c23616;
  }
`
