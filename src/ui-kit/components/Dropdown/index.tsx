import React, { useRef } from 'react'
import { useToggle } from '../..//hooks/useToogle'
import { useClickOutside } from '../../hooks/useClickOutside'
import { ArrowIcon } from '../Icons'
import { Text } from '../Text'
import { Button, Container, Content, Item, ArrowWrapper } from './styles'

interface Props {
  title: string
  options: {
    id: number
    text: string
    onClick: () => void
  }[]
}

export const Dropdown: React.FC<Props> = ({ title, options }) => {
  const ref = useRef(null)
  const [visible, toggleVisible, setVisible] = useToggle(false)

  useClickOutside(ref, () => {
    setVisible(false)
  })

  return (
    <Container ref={ref}>
      <Button onClick={toggleVisible}>
        <Text>{title}</Text>
        <ArrowWrapper visible={visible}>
          <ArrowIcon />
        </ArrowWrapper>
      </Button>
      {visible && (
        <Content>
          {options.map((item) => (
            <Item key={item.id}>{item.text}</Item>
          ))}
        </Content>
      )}
    </Container>
  )
}
