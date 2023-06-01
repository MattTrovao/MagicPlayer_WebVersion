import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { shareTransition } from "../../global/Global.styles";
import { randomizerAnimation } from "../Randomizers.styles";


export const DiceContent = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 320px;
  height: 320px;
  margin: 0 auto;
`

export const DiceImg = styled(ReactSVG)`
  width: 100%;
  height: 100%;
  position: relative;

  svg{
    ${shareTransition}
    width: 100%;
    height: 100%;
  }

  &[data-animated=true]{
    cursor: not-allowed;

    &[data-dice='d4']{
      svg{
        animation: dicePulse 1.5s ease-in-out;
      }
    }
    svg{
      ${randomizerAnimation}
    }
  }


  @keyframes dicePulse{
    0%,100%{
      transform: skewX(-15deg) skewY(15deg);
      opacity: .8;
    }
    50%{
      transform: skewX(15deg) skewY(-15deg);
      opacity: 1;
    }
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
  &[data-animated=true]{
    opacity: 0;
  }
`