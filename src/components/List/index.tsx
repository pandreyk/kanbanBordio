import React from 'react'
import { Container, Item } from './styles'

interface Props {
  data: {
    element: React.ReactNode
    isActive?: boolean
  }[]
}

export const List: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      {data.map((item, idx) => (
        <Item actived={item.isActive} key={idx}>
          {item.element}
        </Item>
      ))}
    </Container>
  )
}
