import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 154px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  padding-right: 20px;
`

export const Heading = styled.div`
  padding: 24px 16px;
`

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface IconWrapperProps {
  actived?: boolean
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  margin-right: 14px;
  color: ${({ theme, actived }) =>
    theme.colors[actived ? 'secondary' : 'textSecondary']};
`
