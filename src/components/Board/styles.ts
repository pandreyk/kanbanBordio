import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.textPrimary};
`

export const ColumnsContainer = styled.div`
  display: flex;
  height: 100%;
`
