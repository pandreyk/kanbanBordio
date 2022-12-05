import React from 'react'
import { CounterProps } from './types'
import { Container } from './styles'

export const Counter: React.FC<CounterProps> = ({ count, typeStyle }) => {
  return (
    <Container typeStyle={typeStyle}>{count > 99 ? '99+' : count}</Container>
  )
}
