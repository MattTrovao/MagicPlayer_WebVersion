import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalCSS } from './styles/global'
import { Card } from './components/card'
import { Player } from './components/player'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Player />

      <GlobalCSS />
    </ThemeProvider>
  )
}

export default App
