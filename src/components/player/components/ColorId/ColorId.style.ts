import styled from "styled-components";
import { shareTransition } from "../../../global/Global.styles";


export const IdBox = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  display: flex;
  justify-content: end;
  gap: .5rem;
`

export const IdColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.theme.CARDS.COLORLESS};

  ${shareTransition}
`