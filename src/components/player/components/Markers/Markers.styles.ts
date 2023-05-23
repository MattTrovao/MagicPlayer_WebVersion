import styled from "styled-components";
import { shareTransition } from "../../../global/Global.styles";

export const MarkerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`

export const MarkerBtn = styled.button`
  ${shareTransition}
  background-color: ${props => props.theme.COLORS.WHITE};
  color: ${props => props.theme.COLORS.BLACK};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
`