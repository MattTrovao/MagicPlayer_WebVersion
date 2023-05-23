import { GlobalContainer, GlobalRow } from "./Global.styles"

export const Container= ({ children }: any) =>  {
  return(
    <GlobalContainer>
      <GlobalRow>
        {children}
      </GlobalRow>
    </GlobalContainer>
  )
}