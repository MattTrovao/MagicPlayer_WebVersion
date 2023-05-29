import styled from "styled-components";
import { shareDisabled, shareTransition } from "../global/Global.styles";

export const CardBox = styled.div`
  padding: 20px 0;
`

export const CardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 36px;
  gap: 0;
  background-color: ${props => props.theme.COLORS.WHITE};
  border-radius: 8px;
  overflow: hidden;
`

export const SearchBar = styled.input`
  background: none;
  border: none;
  font-size: ${props => props.theme.TEXT_SIZE.SM};
  color: ${props => props.theme.COLORS.BLACK};
  height: 40px;
  width: 100%;
  padding: 0 15px;
  outline: none;

  &::placeholder{
    color: ${props => props.theme.SHADOW.BLACK};
  }
`
export const SearchBtn = styled.button`
  padding: 5px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: ${props => props.theme.COLORS.SUCCESS};
  color: ${props => props.theme.COLORS.WHITE};
  ${shareTransition}
  ${shareDisabled} 

  svg{
    width: 18px;
    height: 18px;
    color: ${props => props.theme.COLORS.YELLOW};
  }
`

export const SearchLegend = styled.p`
  font-size: ${props => props.theme.TEXT_SIZE.XS};
  color: ${props => props.theme.COLORS.WHITE};
  margin: 5px 0;
`

export const ResultBox = styled.section`
  width: 90%;
  margin: 0 auto 20px;;
  padding: .8rem 1rem;
  background: ${props => props.theme.COLORS.WHITE};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: .8rem;
  max-height: 500px;

  overflow: auto;

  &::-webkit-scrollbar {
  width: 8px;
  height: 6px;
}

&::-webkit-scrollbar-track {
  background: transparent;
}

&::-webkit-scrollbar-thumb {
  background: ${props => props.theme.COLORS.PRIMARY};
  border-radius: 10px;
}
`

export const RuleError = styled.h1`
  margin: 0;
  color: ${props => props.theme.COLORS.ERROR};
  font-size: ${props => props.theme.TEXT_SIZE.MD};
  text-align: center;
`

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .8rem;
  background: ${props => props.theme.COLORS.PRIMARY};
  border-radius: inherit;
  padding: 5px 10px;

  h2 {
    margin: 0;
    color: ${props => props.theme.COLORS.WHITE};
    font-size: ${props => props.theme.TEXT_SIZE.MD};
  }
`
export const ResultImgBox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;
`

export const ResultImg = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;

  &.small {
    height: 150px;
  }
`

export const ResultCaption = styled.p`
  color: ${props => props.theme.COLORS.BLACK};
  font-size: ${props => props.theme.NUMBER_SIZE.XS};
  text-align: right;
`

export const RuleList = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const RuleInfo = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => props.theme.COLORS.PRIMARY};
  border-radius: inherit;
  padding: 5px 5px;

& > p {
  font-weight: bold;
  color: ${props => props.theme.COLORS.WHITE};
}
`

export const RuleText = styled.p`
  color: ${props => props.theme.COLORS.BLACK};
  font-size: ${props => props.theme.TEXT_SIZE.XS};
`
export const RuleDate = styled.span`
  color: ${props => props.theme.COLORS.SUCCESS};
  font-weight: 600;
  margin-right: .5rem;
`
export const NoRule = styled.p`
  color: ${props => props.theme.COLORS.ERROR};
  font-size: ${props => props.theme.TEXT_SIZE.SM};
  font-weight: 600;
  text-align: center;
`