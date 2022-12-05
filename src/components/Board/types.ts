export type BoardData = {
  columns: BoardColumn[]
  tasks: BoardTask[]
}

export type BoardColumn = {
  id: number
  title: string
  completed?: boolean
}

export type BoardTask = {
  id: number
  title: string
  time: string
  type: 'green' | 'blue' | 'peach' | 'orange' | 'khaki' | 'pink'
  columnId: number
}

export type TaskDragObject = {
  data: BoardTask
  originalIndex: number
}

export type AddTaskToColumn = (task: BoardTask, columnId: number) => void

export type MoveCard = (draggedId: number, overIndex: number) => void

export type FindCard = (id: number) => {
  card: BoardTask
  index: number
}
