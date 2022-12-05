import styled, { css } from 'styled-components'
import { CounterProps } from './types'

type Props = Pick<CounterProps, 'typeStyle'>

const greyContainer = css`
  background-color: ${({ theme }) => theme.colors.greyDark};
  color: ${({ theme }) => theme.colors.textSecondary};
  ${({ theme }) => theme.typography.default};
  border-radius: 100px;
  padding: 2px 8px;
`

const redContainer = css`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typography.tiny};
  border-radius: 4px;
  padding: 4px;
`

const getStyleContainer = ({ typeStyle }: Props) => {
  switch (typeStyle) {
    case 'grey':
      return greyContainer
    case 'red':
      return redContainer
    default:
      return greyContainer
  }
}

export const Container = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ typeStyle }) => getStyleContainer({ typeStyle })}
`
