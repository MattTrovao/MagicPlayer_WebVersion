import styled from "styled-components";
import { shareTransition } from "../../../global/Global.styles";

export const MarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const MarkerBtn = styled.button`
  ${shareTransition}
  background-color: ${props => props.theme.COLORS.WHITE};
  color: ${props => props.theme.COLORS.BLACK};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
  position: relative;

  &[data-size=true]{
    img{
    opacity: 1;
    }
  }

  img{
    opacity: .5;
  }
`

const BaseMarkerValue = styled.span`
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 50%;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.COLORS.WHITE};
  cursor: pointer;
  transition: .4s all ease-in-out;

  &:hover{
    opacity: 1;
  }

  &::before{
    font-size: ${props => props.theme.NUMBER_SIZE.SM};
    font-weight: bold;
    color: ${props => props.theme.COLORS.BLACK};
  }
`

export const MarkerAdd = styled(BaseMarkerValue)`
  top: 0;
  border-radius: 45px 45px 0 0;
  &::before{
    content:"+";
  }
`
export const MarkerRemove = styled(BaseMarkerValue)`
  bottom: 0;
  border-radius: 0 0 45px 45px;
  &::before{
    content:"-";
  }
`

export const MarkerValue = styled.span`
  font-size: ${props => props.theme.NUMBER_SIZE.MD};
  font-weight: bold;
  color: ${props => props.theme.COLORS.BLACK};
`