import styled, { css } from 'styled-components'
import { SearchInputProps } from './types'

type Props = Pick<SearchInputProps, 'typeStyle'>

const defaultWrapper = css`
  background-color: ${({ theme }) => theme.colors.third};
  height: 32px;
  border-radius: 4px;
`

const secondaryWrapper = css`
  background-color: ${({ theme }) => theme.colors.grey};
  height: 40px;
  border-radius: 50px; ;
`

const getStyleWrapper = ({ typeStyle }: Props) => {
  switch (typeStyle) {
    case 'default':
      return defaultWrapper
    case 'secondary':
      return secondaryWrapper
    default:
      return defaultWrapper
  }
}

export const Wrapper = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  ${({ typeStyle }) => getStyleWrapper({ typeStyle })}
`

const defaultInputStyled = css`
  padding: 10px 34px 10px 10px;
  ${({ theme }) => theme.typography.note};
  color: ${({ theme }) => theme.colors.textLight};
`

const secondaryInputStyled = css`
  padding: 12px 38px 12px 16px;
  ${({ theme }) => theme.typography.default};
  color: ${({ theme }) => theme.colors.textPrimary};
`

const getStyleInputStyleds = ({ typeStyle }: Props) => {
  switch (typeStyle) {
    case 'default':
      return defaultInputStyled
    case 'secondary':
      return secondaryInputStyled
    default:
      return defaultInputStyled
  }
}

export const InputStyled = styled.input<Props>`
  height: 100%;
  box-sizing: border-box;
  background: none;
  border: none;
  border-radius: 8px;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  ${({ typeStyle }) => getStyleInputStyleds({ typeStyle })}
`

const defaultIconWrapper = css`
  right: 10px;
`

const secondaryIconWrapper = css`
  right: 18px;
`

const getStyleIconWrapper = ({ typeStyle }: Props) => {
  switch (typeStyle) {
    case 'default':
      return defaultIconWrapper
    case 'secondary':
      return secondaryIconWrapper
    default:
      return defaultIconWrapper
  }
}

export const IconWrapper = styled.div<Props>`
  position: absolute;
  top: 50%;
  display: flex;
  width: 12px;
  height: 12px;
  color: ${({ theme }) => theme.colors.textPrimary};
  transform: translateY(-50%);
  cursor: pointer;

  ${({ typeStyle }) => getStyleIconWrapper({ typeStyle })}
`
