import styled, { css } from 'styled-components'
import { Text } from '../../../ui-kit/components/Text'
import { BoardTask, BoardColumn } from '../types'

type Props = Pick<BoardTask, 'type'> & Pick<BoardColumn, 'completed'>

const greenStyle = css`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.darkGreen};
`
const blueStyle = css`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.darkBlue};
`
const peachStyle = css`
  background-color: ${({ theme }) => theme.colors.peach};
  color: ${({ theme }) => theme.colors.darkPeach};
`
const orangeStyle = css`
  background-color: ${({ theme }) => theme.colors.orage};
  color: ${({ theme }) => theme.colors.darkPeach};
`
const khakiStyle = css`
  background-color: ${({ theme }) => theme.colors.khaki};
  color: ${({ theme }) => theme.colors.darkKhaki};
`
const pinkStyle = css`
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.darkPink};
`

const getCardStyle = ({ type }: Props) => {
  switch (type) {
    case 'green':
      return greenStyle
    case 'blue':
      return blueStyle
    case 'peach':
      return peachStyle
    case 'orange':
      return orangeStyle
    case 'khaki':
      return khakiStyle
    case 'pink':
      return pinkStyle
    default:
      return blueStyle
  }
}

const completedStyle = css`
  background-color: ${({ theme }) => theme.colors.greyLight};
  color: ${({ theme }) => theme.colors.textDisabled};
`

export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 16px 14px;
  border-radius: 8px;
  cursor: pointer;

  ${({ completed, type }) =>
    completed ? completedStyle : getCardStyle({ type })}
`

export const Title = styled(Text)`
  display: block;
  margin-bottom: 6px;
`
