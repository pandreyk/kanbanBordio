import React from 'react'
import { ArrowIcon } from '../../../ui-kit/components/Icons'
import { Text } from '../../../ui-kit/components/Text'
import { useToggle } from '../../../ui-kit/hooks/useToogle'
import { DataItem } from '../types'
import { ArrowWrapper, Item, StyledText, SubItem } from './styles'

export const ListItem: React.FC<DataItem> = ({ title, names }) => {
  const [opened, toggleOpened] = useToggle(true)

  return (
    <>
      <Item onClick={toggleOpened}>
        <ArrowWrapper opened={opened}>
          <ArrowIcon />
        </ArrowWrapper>
        <StyledText color="textLight">{title}</StyledText>
      </Item>
      {opened &&
        names.map((name) => (
          <SubItem key={name}>
            <Text>{name}</Text>
          </SubItem>
        ))}
    </>
  )
}
