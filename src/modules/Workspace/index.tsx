import React from 'react'
import { SideBar } from '../../components/Sidebar'
import menu from '../../mocks/projects.json'
import { Header } from './Header'
import { KanbanBoard } from './KanbanBoard'
import { Tools } from './Tools'
import { Container, Content, General } from './styles'

export const Workspace: React.FC = () => {
  return (
    <Container>
      <SideBar data={menu} />
      <Content>
        <Tools />
        <General>
          <Header />
          <KanbanBoard />
        </General>
      </Content>
    </Container>
  )
}
