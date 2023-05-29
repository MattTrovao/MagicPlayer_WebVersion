import { createGlobalStyle } from "styled-components";
import { shareDisabled } from "../components/global/Global.styles";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box
  }

  body {
    margin: 0;
    background-color: ${props => props.theme.COLORS.BLACK};
    overflow: hidden;
  }

  #root {
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;
  }

  .DialogOverlay{
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .5);
    transition: all .4s ease-in-out;
    z-index: 9999;
  }

  .DialogContent{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props => props.theme.COLORS.BLACK};
    border-radius: 10px;
    transition: inherit;
    padding: 1.2rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50vw;
    z-index: 99999;

    .DialogContent__title{
      color: ${props => props.theme.COLORS.WHITE};
      font-size: ${props => props.theme.NUMBER_SIZE.MD};
    }

    .DialogContent__body{
      z-index: 99999;
    }

    .DialogContent__btn{
      display: flex;
      justify-content: space-between;
    }
  }

  .btn{
    ${shareDisabled}
    padding: 5px 10px;
    background: ${props => props.theme.COLORS.WHITE};
    font-size: ${props => props.theme.TEXT_SIZE.XS};
    display: flex;
    justify-content: space-between;
    gap: .8rem;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: all .4s ease-in-out;
    cursor: pointer;

    &.save{
      border-color: ${props => props.theme.COLORS.SUCCESS};
      svg{
        color: ${props => props.theme.COLORS.SUCCESS};
      }
    }

    &.close{
      border-color: ${props => props.theme.COLORS.ERROR};
      svg{
        color: ${props => props.theme.COLORS.ERROR};
      }
    }

    &:not(:disabled):hover{
      opacity: .5;
      border-radius: 2px;
    }
  }
`