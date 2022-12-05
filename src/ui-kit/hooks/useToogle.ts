import { Dispatch, SetStateAction, useCallback, useState } from 'react'

type Result = [boolean, () => void, Dispatch<SetStateAction<boolean>>]

export const useToggle = (initialValue = false): Result => {
  const [value, setValue] = useState(initialValue)

  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])

  return [value, toggle, setValue]
}
