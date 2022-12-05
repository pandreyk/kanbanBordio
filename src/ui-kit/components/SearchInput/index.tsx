import React, { useState } from 'react'
import { SearchIcon } from '../Icons'
import { SearchInputProps } from './types'
import { IconWrapper, InputStyled, Wrapper } from './styles'

export const SearchInput: React.FC<SearchInputProps> = ({
  onChange,
  typeStyle,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setInputValue(value)
    onChange?.(e)
  }

  return (
    <Wrapper typeStyle={typeStyle}>
      <InputStyled
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search..."
        typeStyle={typeStyle}
        {...rest}
      />
      <IconWrapper typeStyle={typeStyle}>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  )
}
