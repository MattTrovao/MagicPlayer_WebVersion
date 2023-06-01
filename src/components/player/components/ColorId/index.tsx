import { ColorInterface } from "../../../../@types/colors";
import { IdBox, IdColor } from "./ColorId.style";


export function ColorId({ colors }: ColorInterface){  
  
  return(
    <IdBox>
      {
        colors.length > 0
        ? colors?.map((color, index) => (
            <IdColor key={index} className={color} />
          ))
        : <IdColor />
      }
    </IdBox>
  )
}