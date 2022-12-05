import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.main};
  padding: 20px;
  width: 100%;
  z-index: 10;
`

export const ButtonsContainer = styled.div`
  display: flex;

  > :not(:last-child) {
    margin-right: 16px;
  }
`

export const PlusIconWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInputWrapper = styled.div`
  width: 180px;
  margin-right: 24px;
`

export const AvatarWrapper = styled.div`
  display: flex;
  margin-left: 8px;
  cursor: pointer;
`
