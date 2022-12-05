import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
`

export const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.textPrimary};
  cursor: pointer;
`

interface ArrowWrapperProps {
  visible: boolean
}

export const ArrowWrapper = styled.div<ArrowWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-left: 14px;
  transition: transform 0.3s;

  ${({ visible }) =>
    visible &&
    css`
      transform: rotate(-180deg);
    `}
`

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  display: flex;
  flex-direction: column;
  min-width: 100%;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 6px;
`

export const Item = styled.div`
  border-radius: 4px;
  padding: 8px;
  white-space: nowrap;

  :hover {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`
