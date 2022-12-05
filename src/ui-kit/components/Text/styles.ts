import styled, { css } from 'styled-components'
import { TextProps } from './types'

export const Container = styled.span<TextProps>`
  ${({ theme, color, font, textDecoration }) => css`
    color: ${color ? theme.colors[color] : theme.colors.inherit};
    text-decoration: ${textDecoration};
    ${font ? theme.typography[font] : theme.typography.default};
  `}
`
