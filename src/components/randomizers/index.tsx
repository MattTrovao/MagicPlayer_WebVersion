import { Container } from "../global/Container";
import { BtnTab } from "./Randomizers.styles";
import { Coin } from "./coin";
import { Dice } from "./dice";

import * as Tabs from '@radix-ui/react-tabs';

export function Generator() {
  return (
    <Container>
      <Tabs.Root defaultValue="dice" className="Tabs">
        <Tabs.List className="Tabs__list">
          <Tabs.Trigger className="list__trigger" value="dice">
            <BtnTab>Dados</BtnTab>
          </Tabs.Trigger>
          
          <Tabs.Trigger className="list__trigger" value="coin">
            <BtnTab>Moeda</BtnTab>
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content className="Tabs__content" value="dice">
          <Dice />
        </Tabs.Content>

        <Tabs.Content className="Tabs__content" value="coin">
          <Coin />
        </Tabs.Content>
      </Tabs.Root>
    </Container>
  )
}