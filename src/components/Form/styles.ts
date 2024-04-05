import styled from 'styled-components'

export const Title = styled.h1`
  text-align: center;
`

export const Form = styled.form`
  margin-top: 48px;
`

export const InputField = styled.input`
  padding: 8px 12px;
  margin-right: 12px;
  border: 1px solid #00000026;
  border-radius: 4px;
  color: #464a4c;
  font-size: 16px;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
`

export const SubmitButton = styled.button`
  padding: 8px 16px;
  background-color: #0275d8;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color linear 0.08s;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);

  &:hover {
    background-color: #025aa5;
  }
`
