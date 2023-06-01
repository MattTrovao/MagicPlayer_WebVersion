import styled from "styled-components";

export const InformationTitle = styled.h1`
  color: ${props => props.theme.COLORS.SECONDARY};
  font-size: ${props => props.theme.TEXT_SIZE.XL};
  margin: 60px 0 10px;
`

export const InformationList = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const InformationText = styled.p`
  color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.TEXT_SIZE.SM};

  &:before{
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    background: ${props => props.theme.COLORS.SECONDARY};
  }

  a{
    color: ${props => props.theme.COLORS.SECONDARY};
  }
`