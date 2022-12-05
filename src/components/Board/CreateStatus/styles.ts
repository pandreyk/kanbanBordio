import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 200px;
  width: 100%;
  color: ${({ theme }) => theme.colors.textSecondary};
  border-left: 1px solid ${({ theme }) => theme.colors.border};
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 26px 14px 14px 36px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Clickable = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const PlusIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin-right: 4px;
`
