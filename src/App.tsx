import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { Container } from './components/global/Container'
import { GlobalCSS } from './styles/global'
import { Player } from './components/player'
import { GP } from './components/global/GamePlayers'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GP>
          <Player />
          <Player />
        </GP>
      </Container>

      <GlobalCSS />
    </ThemeProvider>
  )
}

export default App
