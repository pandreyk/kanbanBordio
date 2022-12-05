import React, { memo } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { Text } from '../../../ui-kit/components/Text'
import { ACCEPT_TYPE } from '../constants'
import {
  BoardTask,
  BoardColumn,
  TaskDragObject,
  MoveCard,
  FindCard,
} from '../types'
import { Container, Title } from './styles'

interface Props extends Pick<BoardColumn, 'completed'> {
  data: BoardTask
  moveCard: MoveCard
  findCard: FindCard
}

export const Card: React.FC<Props> = memo(
  ({ data, completed, moveCard, findCard }) => {
    const id = data?.id
    const originalIndex = findCard(id).index
    const item: TaskDragObject = { data, originalIndex }

    const [, drag] = useDrag(
      () => ({
        type: ACCEPT_TYPE,
        item,
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
        end: ({ data, originalIndex }, monitor) => {
          const droppedId = data.id
          const didDrop = monitor.didDrop()

          if (!didDrop) {
            moveCard(droppedId, originalIndex)
          }
        },
      }),
      [moveCard, item],
    )

    const [, drop] = useDrop<TaskDragObject>(
      () => ({
        accept: ACCEPT_TYPE,
        hover({ data: draggedData }) {
          const draggedId = draggedData.id

          if (draggedId !== id) {
            const { index: overIndex } = findCard(id)
            moveCard(draggedId, overIndex)
          }
        },
      }),
      [findCard, moveCard],
    )

    return (
      <Container
        ref={(node) => drag(drop(node))}
        type={data?.type}
        completed={completed}
      >
        <Title
          font="default"
          color={completed ? 'inherit' : 'textPrimary'}
          textDecoration={completed ? 'line-through' : 'none'}
        >
          {data.title}
        </Title>
        <Text font="footnote">{data?.time}</Text>
      </Container>
    )
  },
)
