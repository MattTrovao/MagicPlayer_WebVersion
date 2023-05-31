import styled from "styled-components";
import { shareTransition } from "../../../global/Global.styles";


export const IdBox = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  justify-content: end;
  gap: .5rem;
`

export const IdColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${props => props.theme.CARDS.COLORLESS};
  border: 1px solid ${props => props.theme.COLORS.BLACK};
  ${shareTransition}

  &.W{ background-color: ${props => props.theme.CARDS.WHITE}; }
  &.U{ background-color: ${props => props.theme.CARDS.BLUE}; }
  &.B{ background-color: ${props => props.theme.CARDS.BLACK}; }
  &.R{ background-color: ${props => props.theme.CARDS.RED}; }
  &.G{ background-color: ${props => props.theme.CARDS.GREEN}; }
`