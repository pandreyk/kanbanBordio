import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Workspace } from './modules/Workspace'
import { theme } from './ui-kit/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={() => theme}>
      <Workspace />
    </ThemeProvider>
  )
}

export default App
