import styled from "styled-components";

export const BtnTab = styled.span`
  display: block;
  padding: 1.2rem 1rem;
  color: ${props => props.theme.COLORS.WHITE};
  font-size: ${props => props.theme.NUMBER_SIZE.MD};
  border-bottom: 1px solid ${props => props.theme.COLORS.WHITE};
`