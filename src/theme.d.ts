import { themeTokens } from 'ui-kit/theme'
import 'styled-components'

type CustomTheme = typeof themeTokens

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    colors: {
      white: string
      black: string
      primary: string
      primaryDark: string
      secondary: string
      secondaryDark: string
      third: string
      textPrimary: string
      textSecondary: string
      textDisabled: string
      textLight: string
      border: string
      grey: string
      greyDark: string
      greyLight: string
      green: string
      peach: string
      orage: string
      pink: string
      khaki: string
      darkBlue: string
      darkGreen: string
      darkPeach: string
      darkPink: string
      darkKhaki: string
      blue: string
      disabledCard: string
      red: string
      inherit: string
    }
    typography: {
      heading: {
        font: string
      }
      default: {
        font: string
      }
      defaultBold: {
        font: string
      }
      note: {
        font: string
      }
      footnote: {
        font: string
      }
      tiny: {
        font: string
      }
    }
    shadows: {
      main: string
      active: string
    }
  }
}
