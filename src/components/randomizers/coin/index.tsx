import { useState } from "react";

import NoResult from '../../../assets/Coin/Coin.svg'
import Face from '../../../assets/Coin/Face.svg'
import Crown from '../../../assets/Coin/Crown.svg'
import { CoinBox, CoinImg, CoinSide } from "./Coin.styles";

export function Coin() {
  const [coin, SetCoin] = useState<string>('')
  const [isDisabled, setDisabled] = useState<boolean>(false)

  function handleFlipCoin() {
    setDisabled(true)
    SetCoin('')

    let result = Math.floor(Math.random() * (100));

    setTimeout(() => {
      if(result % 2 == 0){
        SetCoin('Cara')
      }else{
        SetCoin('Coroa')
      } 
      setDisabled(false)
    }, 1500);   
  }

  return(
    <CoinBox>
      <CoinSide>
        {coin}
      </CoinSide>
      
      <CoinImg 
        data-disabled={isDisabled}
        data-animated={isDisabled}
        src={
          coin== '' ? NoResult
          : coin == 'Cara' ? Face : Crown
        } 
        onClick={handleFlipCoin}
      />


    </CoinBox>
  )
}