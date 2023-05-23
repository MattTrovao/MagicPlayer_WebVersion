import styled, { css } from "styled-components";

// Shared Styles

export const shareTransition = css`
  transition: .4s all ease-in-out;

  &:hover{
    filter: brightness(1.2);
  }
`

// Container
export const GlobalContainer = styled.section`
  display: flex;
  place-items: center;
  gap: .8rem;
  width: 90vh;
  max-width: 1280px;
  margin: 0 auto;
`
export const GlobalRow = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 0 1rem;
`

// Buttons
export type Variants = 'primary' | 'secondary' | 'neutral'

interface BtnContainerProps {
  variant: Variants;
}

const btnVariant = {
  primary: 'red',
  secondary: 'orange',
  neutral: 'green'
}

export const BtnContainer = styled.button<BtnContainerProps>`
  padding: 10px 20px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.theme.COLORS.PRIMARY};
  color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.TEXT_SIZE.XS};
  ${shareTransition} 
`

// GamePlayers
export const GamePlayers = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  & > * {
    flex: 1 auto;
  }
`