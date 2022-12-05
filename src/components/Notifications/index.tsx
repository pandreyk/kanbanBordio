import React from 'react'
import { Counter } from '../../ui-kit/components/Counter'
import { BellIcon } from '../../ui-kit/components/Icons'
import { Container, CounterWrapper } from './styles'

export const Notifications: React.FC = () => {
  return (
    <Container>
      <BellIcon />
      <CounterWrapper>
        <Counter count={100} typeStyle="red" />
      </CounterWrapper>
    </Container>
  )
}
