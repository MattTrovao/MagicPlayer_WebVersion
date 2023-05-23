import { BtnContainer, Variants } from "./Global.styles"

interface BtnProps{
  variant?: Variants,
}

export function Button(
  { variant = 'neutral' }: BtnProps,
  { children }: any
){
  return (
    <BtnContainer variant={variant}>
      {children}
    </BtnContainer>
  )
}