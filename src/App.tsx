import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalCSS } from './styles/global'
import { Card } from './components/card'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card />

      <GlobalCSS />
    </ThemeProvider>
  )
}

export default App
