import { DefaultTheme } from 'styled-components'
import './master.css'

export const theme: DefaultTheme = {
  name: 'default',
  colors: {
    white: '#FFFFFF',
    black: '#0D0D0D',
    primary: '#F0F1F2',
    primaryDark: '##F5F8FA',
    secondary: '#0094FF',
    secondaryDark: '#0F1D40',
    third: '#2D4071',
    textPrimary: '#222222',
    textSecondary: '#8C939F',
    textDisabled: '#A5A5A5',
    textLight: '#FFFFFF',
    border: '#F3F3F3',
    grey: '#F5F8FA',
    greyDark: '#E8EBEF',
    greyLight: ' #F0F0F0',
    green: '#ABE9CE',
    peach: '#FFDFBA',
    orage: '#FEC6B7',
    pink: '#F2BAE1',
    blue: '#D8DCFF',
    khaki: '#D9E6A2',
    darkBlue: '#404784',
    darkGreen: '#435E52',
    darkPeach: '#662E1E',
    darkPink: '#8E4778',
    darkKhaki: '#4A4D3A',
    disabledCard: '#F0F0F0',
    red: '#F21247',
    inherit: 'inherit',
  },
  typography: {
    heading: {
      font: `400 18px/22px Roboto`,
    },
    default: {
      font: `400 14px/16px Roboto`,
    },
    defaultBold: {
      font: `500 14px/16px Roboto`,
    },
    note: {
      font: `400 14px/14px Roboto`,
    },
    footnote: {
      font: `400 13px/14px Roboto`,
    },
    tiny: {
      font: `400 10px/10px Roboto`,
    },
  },
  shadows: {
    main: '0px 2px 4px #f0f1f2',
    active: '0px 0px 5px 0px rgba(0, 148, 255, 0.5)',
  },
}
