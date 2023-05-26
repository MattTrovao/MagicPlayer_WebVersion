import styled from "styled-components";
import { shareTransition } from "../global/Global.styles";

export const MenuBox = styled.footer`
  width: 100vw;
  background-color: ${props => props.theme.COLORS.BLACK};
  position: fixed;
  bottom: 0;
  left: 0;
  border-top: 1px solid ${props => props.theme.COLORS.WHITE};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuItens = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`
export const Icon = styled.div`
  svg{
    width: 32px;
    height: 32px;
    transition: all .4s ease-in-out;
    cursor: pointer;

    path{
      transition: inherit
    }

    &:hover{
      path {
        fill: ${props => props.theme.COLORS.PRIMARY};
      }
    }
  }
`