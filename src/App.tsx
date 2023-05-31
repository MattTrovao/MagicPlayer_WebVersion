import { ThemeProvider } from 'styled-components'
import {theme} from './styles/themes/default'
import { GlobalCSS } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Menu } from './components/menu/DefaultMenu'
import { Page } from './components/global/Page'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Page>
          <Router />
        </Page>

        <Menu />
      </BrowserRouter>

      <GlobalCSS />
    </ThemeProvider>
  )
}

export default App
