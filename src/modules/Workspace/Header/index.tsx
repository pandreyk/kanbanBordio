import React from 'react'
import { Notifications } from '../../../components/Notifications'
import { Button } from '../../../ui-kit/components/Button'
import { Dropdown } from '../../../ui-kit/components/Dropdown'
import { PlusIcon } from '../../../ui-kit/components/Icons'
import { SearchInput } from '../../../ui-kit/components/SearchInput'
// import Avatar from '../../assets/img/avatar.svg'
import {
  PlusIconWrapper,
  AvatarWrapper,
  ButtonsContainer,
  Container,
  Profile,
  SearchInputWrapper,
} from './styles'

const options = [
  {
    id: 1,
    text: 'Board view',
    onClick: () => {},
  },
  {
    id: 2,
    text: 'Table view',
    onClick: () => {},
  },
  {
    id: 3,
    text: 'Kanban',
    onClick: () => {},
  },
]

export const Header: React.FC = () => {
  return (
    <Container>
      <ButtonsContainer>
        <Button>
          <PlusIconWrapper>
            <PlusIcon />
          </PlusIconWrapper>
          Add new
        </Button>
        <Dropdown title="Kanban" options={options} />
        <Dropdown title="Filter" options={options} />
      </ButtonsContainer>
      <Profile>
        <SearchInputWrapper>
          <SearchInput typeStyle="secondary" />
        </SearchInputWrapper>
        <Notifications />
        <AvatarWrapper>{/* <Avatar /> */}</AvatarWrapper>
      </Profile>
    </Container>
  )
}
