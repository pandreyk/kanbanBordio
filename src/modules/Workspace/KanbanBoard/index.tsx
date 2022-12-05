import React from 'react'
import { Board, BoardData } from '../../../components/Board'
import tasks from '../../../mocks/tasks2.json'
import { Wrapper } from './styles'

export const KanbanBoard: React.FC = () => {
  return (
    <Wrapper>
      <Board data={tasks as BoardData} />
    </Wrapper>
  )
}
