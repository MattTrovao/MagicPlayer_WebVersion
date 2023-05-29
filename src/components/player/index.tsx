import { useState } from "react"
import { useForm } from "react-hook-form";
import * as zod from 'zod'


import * as Dialog from '@radix-ui/react-dialog';
import '../../styles/global'

import { ColorId } from "./components/ColorId/"
import { Markers } from "./components/Markers"
import { faFloppyDisk, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardSearch } from "../card/CardSearch";
import { Label } from "../global/Label";

import { 
  PlayerFrame, 
  PlayerBox, 
  PlayerNameBox, 
  PlayerName, 
  PlayerLife, 
  Life, 
  LifeBtnBox, 
  LifeAdd, 
  LifeRemove,
  LifeValue, 
  PlayerInput 
} from "./Player.style"
import { 
  NameContainer, 
  ResultBox, 
  ResultCaption, 
  ResultImg, 
  ResultImgBox,
} from "../card/Card.styles";

import { CardResult } from "../../@types/card";

const newPlayerFormValidationSchema = zod.object({
  playerName: zod.string().min(3, 'Adicione ao menos 3 caracteres')
})

type PlayerFormData = zod.infer<typeof newPlayerFormValidationSchema>

export function Player() {
  const [life, setLife] = useState<number>(40);
  const [name, setName] = useState<string>('Nome');

  const [result, setResult] = useState<CardResult | null>(null)


  const handleFormSubmit = (data: CardResult) => {
    setResult(data.result)
  };

  function addLife(total: number) {
    setLife(Number(life) + total);
  }

  function removedLife(total: number) {
    setLife(Number(life) - total)
  }

  function clearCards() {
    setResult(null)
  }

  const { register, handleSubmit, watch } = useForm<PlayerFormData>({

  })

  return (
    <PlayerBox>
      <PlayerFrame>
        <PlayerNameBox>

          <Dialog.Root>
            <Dialog.Trigger asChild onClick={clearCards}>
              <PlayerName>{name}</PlayerName>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay">
                <Dialog.Overlay />

                <Dialog.Content className="DialogContent">
                  <Dialog.Title className="DialogContent__title">
                    Dados do Jogador
                  </Dialog.Title>

                  <Dialog.Content className="DialogContent__body">
                    <Label>
                      Nome/Apelido
                    </Label>
                    <PlayerInput
                      placeholder="Nome/Apelido"
                      id="CardInput"
                      {...register('playerName')}
                    />

                    <CardSearch onFormSubmit={handleFormSubmit} location="Home" />

                    {result !== null && (

                      <ResultBox>
                        <NameContainer>
                          <h2>{result.name}</h2>

                          {result?.mana_cost && (
                            <h2>{result.mana_cost.replace(/{/g, "").replace(/}/g, " ")}</h2>
                          )}
                        </NameContainer>

                        {result.image_uris && (
                          <ResultImgBox>
                            <ResultImg src={result.image_uris.art_crop} className="small" />
                            <ResultCaption>Artista: <b>{result.artist}</b></ResultCaption>
                          </ResultImgBox>
                        )}
                      </ResultBox>
                    )}

                  </Dialog.Content>

                  <Dialog.Close asChild>
                    <div className="DialogContent__btn">
                      <button className="btn save" aria-label="Salvar" >
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