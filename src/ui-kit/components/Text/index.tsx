import React from 'react'
import { TextProps } from './types'
import { Container } from './styles'

export const Text: React.FC<TextProps> = ({
  children,
  asTag = 'span',
  ...rest
}) => (
  <Container as={asTag} {...rest}>
    {children}
  </Container>
)
