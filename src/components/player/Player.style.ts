import styled from "styled-components";

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

export const PlayerName = styled.div`
  border-radius: 10px;
  padding: 5px 10px;
  text-transform: uppercase;
  font-weight: bold;
  width: 95%;
  position: absolute;
  background-color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.NUMBER_SIZE.SM};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto Condensed', 'Roboto', sans-serif;

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

export const Life = styled.h2`
  font-size: ${props => props.theme.NUMBER_SIZE.PL};
  color: ${props => props.theme.COLORS.YELLOW};
  font-weight: bold;
  font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  text-align: center;

`