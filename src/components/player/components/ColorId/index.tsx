import { ColorInterface } from "../../../../@types/colors";
import { IdBox, IdColor } from "./ColorId.style";


export function ColorId(colors: ColorInterface){
  console.log(typeof colors, colors.colors)

  return(
    <IdBox>
      {
        colors &&
        colors.colors.map((color: string, index: number) => {
          <IdColor key={index} className={color}/>
        })
      }
    </IdBox>
  )
}