import React from 'react'
import { ReactComponent as Avatar } from '../../assets/img/avatar-thumb.svg'
import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { SearchInput } from '../../ui-kit/components/SearchInput'
import { Text } from '../../ui-kit/components/Text'
import { ListItem } from './ListItem'
import { SideBarProps } from './types'
import {
  Container,
  List,
  LogoWrapper,
  MyWorkspace,
  ProfileWrapper,
  SearchWrapper,
} from './styles'

export const SideBar: React.FC<SideBarProps> = ({ data }) => {
  return (
    <Container>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <SearchWrapper>
        <SearchInput />
      </SearchWrapper>
      <List>
        <MyWorkspace active>
          <ProfileWrapper>
            <Avatar />
          </ProfileWrapper>
          <Text>My workspace</Text>
        </MyWorkspace>
        {data.map((item) => (
          <ListItem key={item.id} {...item} />
        ))}
      </List>
    </Container>
  )
}
