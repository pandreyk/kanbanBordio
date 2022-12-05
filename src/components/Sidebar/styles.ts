import styled from 'styled-components'
import { Item } from './ListItem/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 220px;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
`

export const LogoWrapper = styled.div`
  margin: 26px 16px 20px;
`
export const SearchWrapper = styled.div`
  margin: 0 16px 18px;
`

export const ProfileWrapper = styled.div`
  display: flex;
  margin-right: 8px;
  width: 22px;
  height: 22px;

  > svg {
    width: 22px;
    height: 22px;
  }
`

export const MyWorkspace = styled(Item)`
  padding: 6px 16px;
  margin-top: 0;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  list-style: none;
`
