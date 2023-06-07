import styled from "styled-components";
import { shareTransition } from "../../components/global/Global.styles";

export const PageHome = styled.main`
  width: 100%;
  height: calc( 100vh - 60px);
  overflow: hidden;
  @media screen and (max-width: 992px) {
    &[data-players="total--5"],
    &[data-players="total--6"]{
      transform: rotate(90deg);
      width: calc(100vh - 70px);

      nav{
        top: 50%;
        background-color: ${props => props.theme.COLORS.BLACK};
      }
    }
  }
`

export const HomeGrid = styled.section`
  display: grid;
  gap: 4rem;
  height: 100%;

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
    justify-content: center;

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

    @media screen and (max-width: 992px) {
      gap: 0;
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

    @media screen and (max-width: 992px) {
      gap: 0;
    }
  }

  @media screen and (max-width: 992px) {
    gap: 4rem 0;
  }
`

export const HomePosition = styled.section`
  min-height: calc(50vh - 55px);
`

export const HomeMenu = styled.nav`
  position: absolute;
  top: 47%;
  left: 0%;
  width: 100%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  gap: 5rem;


  @media screen and (max-width: 1300px) {
    top: 46%;
  }

  @media screen and (max-width: 992px) {
    top: 46.3%;
  }
`

export const HomeMenuIcon = styled.button`
  ${shareTransition}
  border: 2px solid ${props => props.theme.COLORS.PRIMARY};
  background: transparent;
  border-radius: 10px;
  width: 30px;
  height: 30px;
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

  @media screen and (max-width: 992px) {
    gap: .5rem;
  }
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

  @media screen and (max-width: 992px) {
    width: 50px;
    height: 50px;
  }
`