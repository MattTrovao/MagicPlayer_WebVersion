import { useState } from 'react';

import * as Select from '@radix-ui/react-select';

import { Label } from "../../global/Label";
import { TabContent } from "../Randomizers.styles";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DiceContent, DiceImg, DiceValue } from './Dice.styles';


export function Dice() {
  const [diceNumber, SetDiceNumber] = useState<number>(0)
  const [diceMax, SetDiceMax] = useState<number>(20)
  const [dicePath, SetDicePath] = useState<string>('../../../src/assets/Dices/Shape_D20.svg')

  function handleNewDiceType(e: any) {
    SetDiceNumber(0)
    SetDiceMax(e)

    SetDicePath(`../../../src/assets/Dices/Shape_D${e}.svg`)
  }

  function handleNewDiceValue() {
    SetDiceNumber(Math.floor(Math.random() * diceMax) + 1)
  }

  return (
    <TabContent>
      <div className="contentHolder">
        <Label>Escolha o dado</Label>

        <Select.Root onValueChange={handleNewDiceType} >
          <Select.Trigger className='STrigger'>
            <Select.Value placeholder="Dado" />
            <Select.Icon className='STrigger__btn'>
              <FontAwesomeIcon icon={faDiceD20} />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className='SContent' position="popper" sideOffset={5}>
              <Select.ScrollUpButton />

              <Select.Viewport className='SContent__viewport'>
                <Select.Item value='4' className='viewport__item'>
                  <Select.ItemText>
                    D4
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value='6' className='viewport__item'>
                  <Select.ItemText>
                    D6
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value='8' className='viewport__item'>
                  <Select.ItemText>
                    D8
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value='10' className='viewport__item'>
                  <Select.ItemText>
                    D10
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value='12' className='viewport__item'>
                  <Select.ItemText>
                    D12
                  </Select.ItemText>
                </Select.Item>

                <Select.Item value='20' className='viewport__item'>
                  <Select.ItemText>
                    D20
                  </Select.ItemText>
                </Select.Item>

              </Select.Viewport>
              <Select.ScrollDownButton />
              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </div>

      <DiceContent>
        <DiceImg src={dicePath} onClick={handleNewDiceValue} />
        <DiceValue onClick={handleNewDiceValue} data-dice={diceMax == 4 && 'd4'}>
          {diceNumber != 0
            ?  diceNumber 
            : ''
          }
        </DiceValue>
      </DiceContent>
    </TabContent>
  )
}