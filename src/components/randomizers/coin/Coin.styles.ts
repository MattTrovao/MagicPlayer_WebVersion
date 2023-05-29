import { ReactSVG } from "react-svg";
import styled from "styled-components";

export const CoinBox = styled.section`
  display: flex;
  flex-direction:column;
  justify-content: center;
  text-align: center;
  gap: 5rem;
  padding: 2rem 0;
`

export const CoinSide = styled.h2`
  font-size: ${props => props.theme.NUMBER_SIZE.XL};
  color: ${props => props.theme.COLORS.WHITE};
  height: 42px;
`

export const CoinImg = styled(ReactSVG)`
  cursor: pointer;
  transition: all .4s ease-in-out;
  
  &[data-disabled=true]{
    opacity: .5;
    cursor: not-allowed;
  }
  
  &[data-animated=true]{
    animation: coinRotate 1.5s ease-in-out;
  }
  
  &:not([data-disabled=true]):hover{
    opacity: .7;
  }

  @keyframes coinRotate{
    0%,100%{
      transform: rotate(-360deg) scale(.95);
    }
    50%{
      transform: rotate(360deg) scale(1);
    }
  }
`