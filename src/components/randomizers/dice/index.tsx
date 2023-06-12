import { useState } from 'react';

import * as Select from '@radix-ui/react-select';

import { Label } from "../../global/Label";
import { TabContent } from "../Randomizers.styles";
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DiceContent, DiceImg, DiceValue } from './Dice.styles';

import D20 from '../../../assets/Dices/Shape_D20.svg'
import D12 from '../../../assets/Dices/Shape_D12.svg'
import D10 from '../../../assets/Dices/Shape_D10.svg'
import D8 from '../../../assets/Dices/Shape_D8.svg'
import D6 from '../../../assets/Dices/Shape_D6.svg'
import D4 from '../../../assets/Dices/Shape_D4.svg'


export function Dice() {
  const [diceNumber, SetDiceNumber] = useState<number>(0)
  const [diceMax, SetDiceMax] = useState<number>(20)
  const [dicePath, SetDicePath] = useState<string>(D20)
  const [isDisabled, setDisabled] = useState<boolean>(false)


  function handleNewDiceType(e: any) {
    SetDiceNumber(0)
    SetDiceMax(e)

    switch(e) {
      case '12':
        SetDicePath(D12)
        break;
      case '10':
        SetDicePath(D10)
        break;
      case '8':
        SetDicePath(D8)
        break;
      case '6':
        SetDicePath(D6)
        break;
      case '4':
        SetDicePath(D4)
        break;
      default: 
        SetDicePath(D20)
        break;
    }
  }

  function handleNewDiceValue() {
    setDisabled(true)
    setTimeout(() => {
      setDisabled(false)
      SetDiceNumber(Math.floor(Math.random() * diceMax) + 1)
    }, 1500);   

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
        <DiceImg 
          src={dicePath} 
          onClick={handleNewDiceValue} 
          data-dice={diceMax == 4 && 'd4'}
          data-animated={isDisabled}
        />
        <DiceValue 
          onClick={handleNewDiceValue} 
          data-dice={diceMax == 4 && 'd4'}
          data-animated={isDisabled}

        >
          {diceNumber != 0
            ?  diceNumber 
            : ''
          }
        </DiceValue>
      </DiceContent>
    </TabContent>
  )
}