import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { shareTransition } from "../../global/Global.styles";


export const DiceContent = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 165px;
  height: 165px;
  margin: 0 auto;
`

export const DiceImg = styled(ReactSVG)`
  width: 100%;
  height: 100%;
  svg{
    ${shareTransition}
    width: 100%;
    height: 100%;
  }
`

export const DiceValue = styled.h1`
  ${shareTransition}
  font-size: ${props => props.theme.NUMBER_SIZE.DICE};
  color: ${props => props.theme.COLORS.WHITE};
  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%,-50%);
  &:hover{
    opacity:.6;
  }
  &[data-dice='d4']{
    top: 58%;
  }
`