import React from 'react'
import { PlusIcon } from '../../../ui-kit/components/Icons'
import { Text } from '../../../ui-kit/components/Text'
import { Wrapper, Container, Clickable, PlusIconWrapper } from './styles'

export const CreateStatus: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Clickable>
          <PlusIconWrapper>
            <PlusIcon />
          </PlusIconWrapper>
          <Text>Create status</Text>
        </Clickable>
      </Container>
    </Wrapper>
  )
}
