import styled from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  outline: none;
  border: 0;
  cursor: pointer;
`
