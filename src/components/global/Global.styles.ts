import styled, { css } from "styled-components";

// Shared Styles
export const shareTransition = css`
  cursor: pointer;
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
  max-width: 85vw;
  width: 90%;
  margin: 0 auto;
  overflow: auto;
  height: 100%;
  max-height: calc(100vh - 80px);

  &::-webkit-scrollbar {
    width: 4px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.COLORS.WHITE};
    border-radius: 10px;
  }
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
  display: block;
`