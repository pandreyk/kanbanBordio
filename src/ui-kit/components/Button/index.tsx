import React, { ButtonHTMLAttributes } from 'react'
import { ButtonStyled } from './styles'

export const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type,
  onClick,
  children,
  ...rest
}) => {
  return (
    <ButtonStyled type={type ?? 'button'} onClick={onClick} {...rest}>
      {children}
    </ButtonStyled>
  )
}
