import Game from '../../assets/Menu/Game.svg'
import Search from '../../assets/Menu/Search.svg'
import Random from '../../assets/Menu/Random.svg'
import Info from '../../assets/Menu/Info.svg'
import { Icon, MenuBox, MenuItens } from './Menu.styles'
import { Container } from '../global/Container'
import { ReactSVG } from 'react-svg'
import { NavLink } from 'react-router-dom'

export function Menu() {
  return (
    <MenuBox>
      <Container>
        <MenuItens>
          <NavLink to="/" title="Jogo">
            <Icon>
              <ReactSVG src={Game} />
            </Icon>
          </NavLink>
          <NavLink to="/search" title='Buscar carta'>
            <Icon>
              <ReactSVG src={Search} />
            </Icon>
          </NavLink>
          <NavLink to="/randomizers" title='Randomizador'>
            <Icon>
              <ReactSVG src={Random} />
            </Icon>
          </NavLink>
          <NavLink to="/information" title='Informações'>
            <Icon>
              <ReactSVG src={Info} />
            </Icon>
          </NavLink>
        </MenuItens>
      </Container>
    </MenuBox>
  )
}