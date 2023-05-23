import { BtnContainer, Variants } from "./Global.styles"

interface BtnProps{
  variant?: Variants,
}

export function Button({variant = 'neutral'}: BtnProps){
  return <BtnContainer variant={variant}>Txt</BtnContainer>
}