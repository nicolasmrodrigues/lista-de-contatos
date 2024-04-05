import styled from 'styled-components'

export const Contact = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 4px;
  padding: 16px;
  align-items: center;
  box-shadow:
    0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);

  #contact-icon {
    color: #a9a9a9;
    font-size: 96px;
    margin-right: 16px;
  }
`

export const ContactInfo = styled.div`
  display: flex;
`

export const InfoList = styled.ul`
  margin: auto 0;
  list-style: none;

  #name {
    font-size: 17px;
  }

  #phone,
  #email {
    font-size: 14px;
  }
`

export const Info = styled.li`
  margin-bottom: 2px;
`

export const DeleteButton = styled.button`
  display: block;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  color: #e74c3c;
  font-size: 32px;
  padding: 4px;

  &:hover {
    color: #c23616;
  }
`

export const EditButton = styled(DeleteButton)`
  color: #f1c40f;
  &:hover {
    color: #f39c12;
  }
`

export const ContactActions = styled.div`
  margin-left: auto;
`
