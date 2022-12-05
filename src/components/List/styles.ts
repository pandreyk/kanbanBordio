import styled, { css } from 'styled-components'

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  list-style: none;
  width: 100%;
`

interface ItemProps {
  actived?: boolean
}
export const Item = styled.li<ItemProps>`
  position: relative;
  width: 100%;
  padding: 14px 16px;
  border-radius: 0px 8px 8px 0px;
  cursor: pointer;
  transition: color 0.1s;

  :hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  ${({ actived, theme }) =>
    actived &&
    css`
      background-color: ${theme.colors.white};
      color: ${theme.colors.secondary};

      :after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        height: 100%;
        width: 4px;
        border-radius: 0px 10px 10px 0px;
        background-color: ${theme.colors.secondary};
      }
    `}
`
