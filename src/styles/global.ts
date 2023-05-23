import { createGlobalStyle } from "styled-components";

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
  }

  #root {
    display: flex;
    flex-direction: column;
    place-items: center;
    height: 100vh;
  }
`