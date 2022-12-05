import React, { useCallback, useState } from 'react'
import update from 'immutability-helper'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Column } from './Column'
import { CreateStatus } from './CreateStatus'
import { BoardData, BoardTask } from './types'
import { ColumnsContainer, Wrapper } from './styles'

interface Props {
  data: BoardData
}

export const Board: React.FC<Props> = ({ data }) => {
  const [tasks, setTasks] = useState(data.tasks)
  const [columns] = useState(data.columns)

  const getColumnTasks = (columnId: number) =>
    tasks.filter((task) => task.columnId === columnId)

  const addTaskToColumn = (task: BoardTask, columnId: number) => {
    const updatedTask = { ...task, columnId }
    const { index } = findCard(task.id)

    setTasks(
      update(tasks, {
        $splice: [
          [index, 1],
          [index, 0, updatedTask],
        ],
      }),
    )
  }

  const findCard = useCallback(
    (id: number) => {
      const card = tasks.filter((c) => c?.id === id)[0]

      return {
        card,
        index: tasks.indexOf(card),
      }
    },
    [tasks],
  )

  const moveCard = useCallback(
    (draggedId: number, overIndex: number) => {
      const { card, index } = findCard(draggedId)

      setTasks(
        update(tasks, {
          $splice: [
            [index, 1],
            [overIndex, 0, card],
          ],
        }),
      )
    },
    [findCard, tasks, setTasks],
  )

  return (
    <DndProvider backend={HTML5Backend}>
      <Wrapper>
        <ColumnsContainer>
          {columns.map((column) => (
            <Column
              key={column.id}
              data={column}
              tasks={getColumnTasks(column.id)}
              addTaskToColumn={addTaskToColumn}
              findCard={findCard}
              moveCard={moveCard}
            />
          ))}
        </ColumnsContainer>

        <CreateStatus />
      </Wrapper>
    </DndProvider>
  )
}

export * from './types'
