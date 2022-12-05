import { CSSProperties } from 'react'
import { DefaultTheme } from 'styled-components'

export interface TextProps
  extends Pick<CSSProperties, 'fontSize' | 'color' | 'textDecoration'> {
  asTag?:
    | 'span'
    | 'div'
    | 'p'
    | 'label'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
  font?: keyof DefaultTheme['typography']
  color?: keyof DefaultTheme['colors']
}
