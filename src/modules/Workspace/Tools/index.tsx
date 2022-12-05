import React from 'react'
import { List } from '../../../components/List'
import {
  CalendarIcon,
  FileIcon,
  NoteIcon,
  RoadmapIcon,
  TaskIcon,
} from '../../../ui-kit/components/Icons'
import { Text } from '../../../ui-kit/components/Text'
import { Container, Heading, ListItemWrapper, IconWrapper } from './styles'

interface ListItemProps {
  text: string
  icon: React.ReactNode
  isActive?: boolean
}

const ListItem: React.FC<ListItemProps> = ({ text, icon, isActive }) => (
  <ListItemWrapper>
    <IconWrapper actived={isActive}>{icon}</IconWrapper>
    <Text>{text}</Text>
  </ListItemWrapper>
)

const data = [
  {
    element: <ListItem text="Roadmap" icon={<RoadmapIcon />} />,
  },
  {
    element: (
      <ListItem text="Schedule" icon={<CalendarIcon />} isActive={true} />
    ),
    isActive: true,
  },
  {
    element: <ListItem text="Tasks" icon={<TaskIcon />} />,
  },
  {
    element: <ListItem text="Notes" icon={<NoteIcon />} />,
  },
  {
    element: <ListItem text="Files" icon={<FileIcon />} />,
  },
]

export const Tools: React.FC = () => {
  return (
    <Container>
      <Heading>
        <Text font="heading">Tools</Text>
      </Heading>
      <List data={data} />
    </Container>
  )
}
