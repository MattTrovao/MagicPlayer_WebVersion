import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { randomizerAnimation } from "../Randomizers.styles";

export const CoinSide = styled.h2`
  font-size: ${props => props.theme.NUMBER_SIZE.XL};
  color: ${props => props.theme.COLORS.WHITE};
  height: 42px;
  text-align: center;
`

export const CoinImg = styled(ReactSVG)`
  cursor: pointer;
  position: relative;
  text-align: center;

  transition: all .4s ease-in-out;
  
  &[data-disabled=true]{
    opacity: .5;
    cursor: not-allowed;
  }
  
  &[data-animated=true]{
    ${randomizerAnimation}
  }
  
  &:not([data-disabled=true]):hover{
    opacity: .7;
  }
`