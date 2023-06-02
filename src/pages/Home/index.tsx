import { useState } from 'react'

import { Player } from '../../components/player'

import { HomeGrid, HomeMenu, HomeMenuIcon, HomePosition, PlayersBtns, TotalPlayers } from './Home.styles'
import { faArrowsRotate, faFloppyDisk, faUserGroup, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Dialog from '@radix-ui/react-dialog';
import { PlayerName } from '../../components/player/Player.style'
import { Label } from '../../components/global/Label'


export default function Home() {
  const [life, setLife] = useState<number>(() => {
    const storedLife = localStorage.getItem('PlayersLife');
    const initialLife = storedLife !== null ? parseInt(storedLife) : 40;
    return initialLife;
  });

  const [resetGame, setResetGame] = useState<boolean>(false)

  const [PlayersNum, SetPlayersNumber] = useState<number>(() => {
    const storedPlayers = localStorage.getItem('TotalOfPlayers');
    const initialPlayers = storedPlayers !== null ? parseInt(storedPlayers) : 2;
    return initialPlayers;
  });

  function setPlayerNumber(total: number) {
    localStorage.setItem('TotalOfPlayers', total.toString())
    SetPlayersNumber(total)

  }
  function setPlayerLife(total: number) {
    localStorage.setItem('PlayersLife', total.toString())
    setLife(total)
  }

  function resetLife() {
    setLife(0)
    const storedLife = localStorage.getItem('PlayersLife');
    setTimeout(() => {
      const resetValue = storedLife !== null ? parseInt(storedLife) : 40;
      setLife(resetValue);
      localStorage.setItem('PlayersLife', resetValue.toString())
    }, 500);
  }

  return (
    <HomeGrid data-players={`total--${PlayersNum}`}>
      {Array.from({ length: PlayersNum }, (_, index) => (
        <HomePosition
          key={index}
          data-position={`position--${index}`}
          className='setPlayer'
        >
          <Player initialLife={life} resetLife={life} />
        </HomePosition>
      ))}

      <HomeMenu>
        <HomeMenuIcon onClick={() => resetLife()}>
          <FontAwesomeIcon icon={faArrowsRotate} />
        </HomeMenuIcon>



        <Dialog.Root>
          <Dialog.Trigger asChild >
            <HomeMenuIcon>
              <FontAwesomeIcon icon={faUserGroup} />
            </HomeMenuIcon>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />

            <Dialog.Content className="DialogContent">
              <Dialog.Title className="DialogContent__title">
                Jogadores
              </Dialog.Title>

              <div className="DialogContent__body">
                <div className="contentHolder">
                  <Label>Total de Jogadores</Label>
                  <PlayersBtns>
                    <TotalPlayers onClick={() => setPlayerNumber(2)}>2</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerNumber(3)}>3</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerNumber(4)}>4</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerNumber(5)}>5</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerNumber(6)}>6</TotalPlayers>
                  </PlayersBtns>
                </div>

                <div className="mt-2">
                  <Label>Vida Inicial</Label>
                  <PlayersBtns>
                    <TotalPlayers onClick={() => setPlayerLife(20)}>20</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerLife(25)}>25</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerLife(30)}>30</TotalPlayers>
                    <TotalPlayers onClick={() => setPlayerLife(40)}>40</TotalPlayers>
                  </PlayersBtns>
                </div>
              </div>

              <Dialog.Close asChild>
                <div className="DialogContent__btn" >
                  <button className="btn close" aria-label="Fechar">
                    <FontAwesomeIcon icon={faX} />
                    Fechar
                  </button>
                </div>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </HomeMenu>
    </HomeGrid>
  )
}