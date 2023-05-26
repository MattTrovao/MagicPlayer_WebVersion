import { ThemeProvider } from 'styled-components'
import theme from './theme'
import { GlobalCSS } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Menu } from './components/menu/DefaultMenu'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />

        <Menu />
      </BrowserRouter>

      <GlobalCSS />
    </ThemeProvider>
  )
}

export default App
