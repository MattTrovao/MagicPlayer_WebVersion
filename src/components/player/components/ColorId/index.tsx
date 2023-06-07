import { IdBox, IdColor } from "./ColorId.style";

interface ColorIdProps{
  colors: string[]
}

export function ColorId({colors}:ColorIdProps){      
  return(
    <IdBox>
      {colors.length > 0
        ? colors.map((colorList, index) => (
            <IdColor key={index} className={colorList} />
          ))
        : <IdColor />
      }
    </IdBox>
  )
}