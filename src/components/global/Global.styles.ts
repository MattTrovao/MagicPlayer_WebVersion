import styled, { css } from "styled-components";

// Shared Styles
export const shareTransition = css`
  transition: .4s all ease-in-out;

  &:not(:disabled):hover{
    filter: brightness(1.2);
  }
`

export const shareDisabled = css`
 &:disabled{
  opacity: .5;
  cursor: not-allowed;
 }
`

// Page Container
export const PageContainer = styled.main`
  width: 100%;
  height: calc( 100vh - 60px);
  overflow: hidden;
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
// GamePlayers
export const GamePlayers = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  & > * {
    flex: 1 auto;
  }
`

// Label
export const LabelTxt = styled.label`
  color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.TEXT_SIZE.SM};
  margin: 10px 0;
  display: inline-block
`