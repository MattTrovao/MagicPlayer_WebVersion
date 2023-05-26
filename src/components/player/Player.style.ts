import styled from "styled-components";
import { shareTransition } from "../global/Global.styles";

export const PlayerBox = styled.div`
  padding-top: 80px;
  width: 100%;
  background-color: ${props => props.theme.COLORS.PRIMARY};
  position: relative;
  min-height: 400px;

  &::before,
  &::after{
    content: '';
    width: 10px;
    height: 80%;
    display: block;
    background-color: ${props => props.theme.COLORS.TERTIARY};
    position: absolute;
    top: 0;
  }

  &::before{
    left: 0;
    border-bottom-right-radius: 40px
  }
  &::after{
    right: 0;
    border-bottom-left-radius: 40px
  }
`

export const PlayerFrame = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0px;
  background-color: ${props => props.theme.COLORS.TERTIARY};
`

export const PlayerNameBox = styled.div`
  border-radius: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: bold;
  width: 95%;
  position: absolute;
  background-color: ${props => props.theme.COLORS.WHITE};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const PlayerName = styled.h1`
  font-size: ${props => props.theme.NUMBER_SIZE.SM};
  font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  cursor: pointer;
  transition: all ease-in-out .4s;
  
  &:hover{
    opacity: .5;
  }
`

export const PlayerLife = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
`

export const Life = styled.div`
  position: relative;
  width: 30%;
  max-width: 500px;
  margin: 0 auto;
`

export const LifeValue = styled.h2`
  font-size: ${props => props.theme.NUMBER_SIZE.PL};
  color: ${props => props.theme.COLORS.YELLOW};
  font-weight: bold;
  font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  text-align: center;
`

export const LifeBtnBox = styled.div`
  position: absolute;
  z-index: 4;
  width: 100%;
  height: 47%;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .8rem;
  opacity: 0;
  transition: .4s all ease-in-out;

  &:hover{
    opacity: 1;
  }

  &[data-place="top"]{
    top: 0;
  }
  &[data-place="bottom"]{
    bottom: 0;
  }
`
const LifeBtn = styled.button`
  ${shareTransition};
  border: 0;
  border-radius: 10px;
  font-size: ${props => props.theme.NUMBER_SIZE.XL};
  color: ${props => props.theme.COLORS.BLACK};
  cursor: pointer;
  width: 100%;
  margin: 0 auto;
`
export const LifeAdd = styled(LifeBtn)`
  background: ${props => props.theme.COLORS.YELLOW};
`
export const LifeRemove = styled(LifeBtn)`
  background: ${props => props.theme.COLORS.ERROR};
  color: ${props => props.theme.COLORS.WHITE};
`
