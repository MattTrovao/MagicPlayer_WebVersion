import { Container } from "../../components/global/Container"
import { Page } from "../../components/global/Page"
import { InformationList, InformationText, InformationTitle } from "./Information.styles"

export default function Information() {
  return (
    <Page>
      <Container>
        <InformationTitle>
          Informações
        </InformationTitle>
        <InformationList>
          <InformationText>
            Magic The Gathering criado por Richard Garfield, gerido pela <a href="https://company.wizards.com/en" target="_blank">Wizards of The Coast</a>
          </InformationText>

          <InformationText>
            API disponibilizada por <a href="https://scryfall.com/" target="_blank">Scryfall</a>. <br />
          </InformationText>

          <InformationText>
            Como parte das <a href="https://company.wizards.com/fancontentpolicy" rel="nofollow noreferrer">Políticas de conteúdo de fãs da Wizards of the Coast</a> as imagens disponibilizadas são gratuitas de uso com o proposito de criar uma aplicação voltada ao Magic. Crédito aos artistas seguem após a imagem.
          </InformationText>

          <InformationText>
            A aplicação foi desenvolvida para utilização de jogadores de Magic The Gathering, não solicitando informações de pagamento ou dados dos usuários que a acessem.
          </InformationText>
        </InformationList>

        <InformationTitle>
          Política de Cookies e Dados Salvos
        </InformationTitle>
        <InformationList>
          <InformationText>
            Prezando um funcionamento mais reativo entre usuários constantes a aplicação salva no dispositivo do usuário informações do total de jogadores e total dos pontos de vida, com isso quando o usário entrar novamente na aplicação a mesma terá salvo as prédefinições do grupo de jogo.
          </InformationText>
        </InformationList>

        <InformationTitle>
          Bibliotecas utilizadas no desenvolvimento
        </InformationTitle>
        <InformationList>
          <InformationText>
            <a href="https://fontawesome.com/" target="_blank">
              FontAwesome
            </a> v6.4
          </InformationText>
          <InformationText>
            <a href="https://axios-http.com/ptbr/" target="_blank">
              Axios
            </a> v1.4
          </InformationText>
          <InformationText>
            <a href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">
              Radix Dialog
            </a> v1.0.3
          </InformationText>
          <InformationText>
            <a href="https://www.radix-ui.com/docs/primitives/components/select" target="_blank">
              Radix Select
            </a> v1.2.1
          </InformationText>
          <InformationText>
            <a href="https://www.radix-ui.com/docs/primitives/components/tabs" target="_blank">
              Radix Tabs
            </a> v1.0.3
          </InformationText>
        </InformationList>
      </Container>
    </Page>
  )
}