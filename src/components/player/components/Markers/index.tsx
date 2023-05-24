import { MarkerAdd, MarkerBox, MarkerBtn, MarkerRemove, MarkerValue } from "./Markers.styles";

import CityBlessing from '../../../../assets/Markers/CityBlessing.svg'
import Monarch from '../../../../assets/Markers/Monarch.svg'
import Poison from '../../../../assets/Markers/Poison.svg'
import XP from '../../../../assets/Markers/XP.svg'
import { useState } from "react";


export function Markers(){
  const [xpMark, setXpMark] = useState<number>(0)
  const [phMark, setPhMark] = useState<number>(0)
  const [monMark, setMonMark] = useState<boolean>(false)
  const [cityMark, setCityMark] = useState<boolean>(false)

  function addXp () {
    setXpMark(xpMark + 1)
  }
  function removeXp () {
    if(xpMark > 0 ){
      setXpMark(xpMark - 1)
    }else{
      setXpMark(0)
    }
  }

  function addPh () {
    setPhMark(phMark + 1)
  }
  function removePh () {
    if(phMark > 0 ){
      setPhMark(phMark - 1)
    }else{
      setPhMark(0)
    }
  }

  function toogleMonarch() {
    setMonMark(!monMark)    
  }
  function toogleCity() {
    setCityMark(!cityMark)    
  }


  return(
    <MarkerBox>
      <MarkerBtn>
        <MarkerAdd onClick={addXp}/>
        { 
          xpMark == 0 
          ? <img src={XP} alt="Marcador de Experiência"/>
          : <MarkerValue>{xpMark}</MarkerValue>
        }
        {xpMark >= 1 && (<MarkerRemove onClick={removeXp}/>)}
      </MarkerBtn>

      <MarkerBtn>
        <MarkerAdd onClick={addPh}/>
        { 
          phMark == 0 
          ? <img src={Poison} alt="Marcador de Veneno"/>
          : <MarkerValue>{phMark}</MarkerValue>
        }
        {phMark >= 1 && (<MarkerRemove onClick={removePh}/>)}
      </MarkerBtn>

      <MarkerBtn onClick={toogleMonarch} data-active={monMark}>
        <img src={Monarch} alt="Marcador de Monarca"/>
      </MarkerBtn>
      <MarkerBtn onClick={toogleCity} data-active={cityMark}>
        <img src={CityBlessing} alt="Marcador de Bença da Cidade"/>
      </MarkerBtn>
    </MarkerBox>
  )
}