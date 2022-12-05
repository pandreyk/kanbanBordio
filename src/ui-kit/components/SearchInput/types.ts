import { InputHTMLAttributes } from 'react'

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  typeStyle?: 'default' | 'secondary'
}
