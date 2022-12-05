import styled, { css } from 'styled-components'
import { Text } from '../../../ui-kit/components/Text'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 100%;

  :not(:last-of-type) {
    border-right: 1px solid ${({ theme }) => theme.colors.border};

    // for hide header right border
    > div:first-of-type:after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1px;
      width: 1px;
      background-color: ${({ theme }) => theme.colors.white};
    }
  }
`

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 26px 14px 14px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Title = styled(Text)`
  margin-right: 10px;
`

interface BodyProps {
  isOver: boolean
}
export const Body = styled.div<BodyProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 40px 10px;
  transition: box-shadow 0.1s;

  > div:not(:last-of-type) {
    margin-bottom: 10px;
  }

  ${({ isOver, theme }) =>
    isOver &&
    css`
      box-shadow: ${theme.shadows.active};
    `}
`
