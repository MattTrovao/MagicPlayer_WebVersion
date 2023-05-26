import { useState } from "react"

import * as Dialog from '@radix-ui/react-dialog';
import '../../styles/global'

import { PlayerFrame, PlayerBox, PlayerNameBox, PlayerName, PlayerLife, Life, LifeBtnBox, LifeAdd, LifeRemove, LifeValue } from "./Player.style"
import { ColorId } from "./components/ColorId/"
import { Markers } from "./components/Markers"
import { faFloppyDisk, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { api } from "../../utils/axios";


export function Player() {
  const [life, setLife] = useState<number>(40);

  function addLife(total: number) {
    setLife(Number(life) + total);
  }

  function removedLife(total: number) {
    setLife(Number(life) - total)
  }

  return (
    <PlayerBox>
      <PlayerFrame>
        <PlayerNameBox>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <PlayerName>Nome</PlayerName>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay">
                <Dialog.Overlay />

                <Dialog.Content className="DialogContent">
                  <Dialog.Title className="DialogContent__title">
                    Dados do Jogador
                  </Dialog.Title>

                  <Dialog.Content className="Dialog__body">
                  </Dialog.Content>

                  <Dialog.Close asChild>
                    <div className="DialogContent__btn">
                      <button className="btn save" >
                        <FontAwesomeIcon icon={faFloppyDisk} />
                        Salvar
                      </button>
                      <button className="btn close" aria-label="Fechar">
                        <FontAwesomeIcon icon={faX} />
                        Fechar
                      </button>
                    </div>
                  </Dialog.Close>
                </Dialog.Content>

              </Dialog.Overlay>
            </Dialog.Portal>

          </Dialog.Root>


          <ColorId />
        </PlayerNameBox>
      </PlayerFrame>

      <PlayerLife>
        <Markers></Markers>

        <Life>
          <LifeBtnBox data-place="top">
            <LifeAdd onClick={() => addLife(1)}>+1</LifeAdd>
            <LifeAdd onClick={() => addLife(10)}>+10</LifeAdd>
          </LifeBtnBox>

          <LifeValue>
            {life}
          </LifeValue>


          <LifeBtnBox data-place="bottom">
            <LifeRemove onClick={() => removedLife(1)}>-1</LifeRemove>
            <LifeRemove onClick={() => removedLife(10)}>-10</LifeRemove>
          </LifeBtnBox>
        </Life>
      </PlayerLife>
    </PlayerBox>
  )
}