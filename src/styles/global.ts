import { createGlobalStyle } from "styled-components";
import { shareDisabled, shareTransition } from "../components/global/Global.styles";

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box
  }

  html,body{
    font-size: 14px;
  }

  @media screen and (max-width: 992px) {
    html,body{
    font-size: 10px;
    }
  }
  @media screen and (max-width: 576px) {
    html,body{
    font-size: 9px;
    }
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

  a{
    color: #1a004c;
    text-decoration: none;
    transition: all ease-in-out .4s;

    &:hover{
      opacity: .5
    }
  }

  .mt-1{
    margin-top: 1rem;
  }
  .mt-2{
    margin-top: 2rem;
  }
  .mt-3{
    margin-top: 3rem;
  }
  .mt-4{
    margin-top: 4rem;
  }
  .mt-5{
    margin-top: 5rem;
  }


  // Botões
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

  // Radix Dialog
  .DialogOverlay{
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .5);
    transition: all .4s ease-in-out;
    z-index: 99;
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
    z-index: 100;

    .DialogContent__title{
      color: ${props => props.theme.COLORS.WHITE};
      font-size: ${props => props.theme.NUMBER_SIZE.MD};
    }

    

    .DialogContent__btn{
      display: flex;
      justify-content: end;
    }
  }

  // Radix Tabs
  .Tabs{
    padding: 1.2rem 0;

    .Tabs__list{
      display: flex; 
      justify-content: space-between;
      gap: 0;
      margin-bottom: 1rem;
      
      .list__trigger{
        flex: 1 auto;
        border: 0;
        background: none;
        cursor: pointer;
        transition: all .4s ease-in-out;

        &:hover{
          opacity: .5;
        }

        &[data-state='active']{
          &>*{
            border-bottom-color: ${props => props.theme.COLORS.PRIMARY};
            color: ${props => props.theme.COLORS.PRIMARY};
          }
        }
      }
    }

    .Tabs__content{
      display: flex;
      flex-direction:column;
      justify-content: space-between;
      gap: 1rem;

      &[data-state='active']{
        height: 500px;
        overflow: true;
      }
    }
  }

  // Select
  .STrigger{
    ${shareTransition}
    background-color: ${props => props.theme.COLORS.WHITE};
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding-left: 1rem;
    width: 100%;
    outline: none;


    & > span{
      font-size: ${props => props.theme.TEXT_SIZE.SM};
      color: ${props => props.theme.COLORS.BLACK};
    }

    .STrigger__btn{
      ${shareTransition}
      background-color: ${props => props.theme.COLORS.SUCCESS};
      color: ${props => props.theme.COLORS.WHITE};
      width: 40px;
      height: 40px;
      border-radius: inherit;
      display: flex;
      justify-content: center;
      align-items: center;

      svg{
        width: 50%;
        height: 50%;
      }
    }
  }

  .SContent{
    background-color: ${props => props.theme.COLORS.WHITE};
    border: none;
    border-radius: 8px;
    margin: 0;
    left: 0;
    padding: 1rem 5rem;
    width: 100%;

    .SContent__viewport{
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
      
      .viewport__item{
        font-size: ${props => props.theme.TEXT_SIZE.SM};
        color: ${props => props.theme.COLORS.BLACK};
        transition: all ease-in-out .4s;
        cursor: pointer;

        &:hover{
          color: ${props => props.theme.COLORS.SUCCESS};
          opacity: .8;
          border: none;
          outline: none;
        }
      }
    }
  }
`