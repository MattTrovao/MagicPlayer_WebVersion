import { PageContainer } from "./Global.styles";

export const Page = ({ children }: any) => {
  return(
    <PageContainer>
      { children }
    </PageContainer>
  )
}