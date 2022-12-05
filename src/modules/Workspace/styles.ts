import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
`

export const General = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: auto;
`
