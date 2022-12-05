import styled, { css } from 'styled-components'
import { Text } from '../../../ui-kit/components/Text'

interface ListItemProps {
  active?: boolean
}

interface ArrowWrapperProps {
  opened: boolean
}

export const Item = styled.li<ListItemProps>`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 22px;
  margin: 6px 0;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.1s;
  cursor: pointer;

  ${({ active, theme }) =>
    active &&
    css`
      background-color: ${theme.colors.third};
      color: ${({ theme }) => theme.colors.textLight};
    `}

  :hover {
    color: ${({ theme }) => theme.colors.textLight};
    background-color: ${({ theme }) => theme.colors.third};
  }
`

export const ArrowWrapper = styled.div<ArrowWrapperProps>`
  display: flex;
  align-items: center;
  width: 10px;
  height: 10px;
  color: ${({ theme }) => theme.colors.textLight};
  transition: transform 0.3s;

  ${({ opened }) =>
    !opened &&
    css`
      transform: rotate(-180deg);
    `}
`

export const StyledText = styled(Text)`
  margin-left: 14px;
`

export const SubItem = styled(Item)`
  margin: 9px 0;
  padding: 0 16px;

  :hover {
    background-color: unset;
  }
`
