import { MutableRefObject, useEffect } from 'react'

export const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleClick = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Element)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [callback, ref])
}
