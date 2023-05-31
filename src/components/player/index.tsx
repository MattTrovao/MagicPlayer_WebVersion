import { useState } from "react"
import { useForm } from "react-hook-form";


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

import { CardForm, CardResult } from "../../@types/card";
import { ColorInterface } from "../../@types/colors";



export function Player() {
  const [life, setLife] = useState<number>(40);
  const [name, setName] = useState<string>('');
  const [colorId, setColorId] = useState<any | null>(null)

  const [result, setResult] = useState<CardResult | null>(null)


  const handleFormSubmit = (data: CardForm) => {
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

  const handleInputChange = (event:any) => {
    setName(event.target.value);
  };


  function handleAddNewPlayer() {    
    setColorId(result?.color_identity)
  }

  return (
    <PlayerBox>
      <PlayerFrame>
        <PlayerNameBox>

          <Dialog.Root>
            <Dialog.Trigger asChild onClick={clearCards}>
              <PlayerName>{name == '' ? 'Nome' : name}</PlayerName>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="DialogOverlay" />

              <Dialog.Content className="DialogContent">
                <Dialog.Title className="DialogContent__title">
                  Dados do Jogador
                </Dialog.Title>

                <div className="DialogContent__body">
                  <Label>
                    Nome
                  </Label>
                  <PlayerInput
                    placeholder="Nome"
                    id="CardInput"
                    value={name} 
                    onChange={handleInputChange}
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

                </div>

                <Dialog.Close asChild>
                  <div className="DialogContent__btn" >
                    <button 
                      className="btn save" 
                      aria-label="Salvar" 
                      onClick={handleAddNewPlayer}
                      disabled={!colorId && !name}
                    >
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
            </Dialog.Portal>
          </Dialog.Root>

          {colorId != null && <ColorId colors={colorId}/>}
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