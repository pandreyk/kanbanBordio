import React, { memo } from 'react'
import { useDrop } from 'react-dnd'
import { Counter } from '../../../ui-kit/components/Counter'
import { Card } from '../Card'
import { ACCEPT_TYPE } from '../constants'
import {
  BoardTask,
  BoardColumn,
  TaskDragObject,
  AddTaskToColumn,
  MoveCard,
  FindCard,
} from '../types'
import { Container, Header, Title, Body } from './styles'

interface Props {
  data: BoardColumn
  tasks: BoardTask[]
  addTaskToColumn: AddTaskToColumn
  moveCard: MoveCard
  findCard: FindCard
}

export const Column: React.FC<Props> = memo(
  ({ data, tasks, addTaskToColumn, moveCard, findCard }) => {
    const handleDrop = (card: TaskDragObject) => {
      const columnId = data.id
      const tastColumnId = card.data.columnId

      if (tastColumnId !== columnId) {
        addTaskToColumn(card.data, columnId)
      }
    }

    const [{ isOver }, drop] = useDrop({
      accept: ACCEPT_TYPE,
      drop: handleDrop,
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    })

    return (
      <Container ref={drop}>
        <Header>
          <Title font="defaultBold">{data.title}</Title>
          <Counter count={tasks.length} />
        </Header>
        <Body isOver={isOver}>
          {tasks.map((task, idx) => (
            <Card
              key={idx}
              data={task}
              completed={data.completed}
              moveCard={moveCard}
              findCard={findCard}
            />
          ))}
        </Body>
      </Container>
    )
  },
)
