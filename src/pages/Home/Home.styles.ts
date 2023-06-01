import styled from "styled-components";
import { shareTransition } from "../../components/global/Global.styles";

export const HomeGrid = styled.section`
  display: grid;
  row-gap: 4rem;
  column-gap: 2rem;

  &[data-players="total--2"]{
    grid-template-rows: repeat(2, 1fr);

    .setPlayer{
      &[data-position="position--0"]{
        transform: rotate(180deg)
      }
    }
  }

  &[data-players="total--3"]{
    grid-template-columns: repeat(2, 1fr);

    .setPlayer{
      &[data-position="position--0"],
      &[data-position="position--1"]{
        transform: rotate(180deg);
      }
      &[data-position="position--2"]{
        grid-column-start: 1;
        grid-column-end: 3;
      }
    }
  }

  &[data-players="total--4"]{
    grid-template-columns: repeat(2, 1fr);

    .setPlayer{
      &[data-position="position--0"],
      &[data-position="position--1"]{
        transform: rotate(180deg);
      }
    }
  }

  &[data-players="total--5"]{
    display: flex;
    flex-wrap: wrap;

    .setPlayer{
      &[data-position="position--0"],
      &[data-position="position--1"],
      &[data-position="position--2"]{
        transform: rotate(180deg);
        flex-basis: calc(31% + 9px);
      }

      &[data-position="position--3"],
      &[data-position="position--4"]{
        flex-basis: calc(48% + 11px);
      }
    }
  }

  &[data-players="total--6"]{
    grid-template-columns: repeat(3, 1fr);

    .setPlayer{
      &[data-position="position--0"],
      &[data-position="position--1"],
      &[data-position="position--2"]{
        transform: rotate(180deg);
      }
    }
  }
`

export const HomePosition = styled.section`
  display: inline-block;
`

export const HomeMenu = styled.nav`
  position: absolute;
  top: 47.3%;
  left: 0%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  gap: 5rem;
`

export const HomeMenuIcon = styled.button`
  ${shareTransition}
  border: 2px solid ${props => props.theme.COLORS.PRIMARY};
  background: transparent;
  border-radius: 10px;
  width: 2.5rem;
  height: 2.5rem;
  position: relative;

  &:hover{
    svg{
      color: ${props => props.theme.COLORS.SECONDARY};
    }
  }

  svg{
    color: ${props => props.theme.COLORS.WHITE};
    width: 70%;
    height: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: inherit;
  }
`

export const PlayersBtns = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const TotalPlayers = styled.button`
  ${shareTransition}
  border: 2px solid ${props => props.theme.COLORS.PRIMARY};
  color: ${props => props.theme.COLORS.WHITE};
  background: none;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  margin: 0 auto;
  font-size: ${props => props.theme.NUMBER_SIZE.SM};
  font-family: 'Roboto Condensed', 'Roboto', sans-serif;
  font-weight: bold;
  
  &:hover{
    color: ${props => props.theme.COLORS.SECONDARY};
  }
`