import { PlayerFrame, PlayerBox, PlayerName, PlayerLife, Life } from "./Player.style"
import { ColorId } from "./components/ColorId/"
import { Markers } from "./components/Markers"



export function Player() {
  return (
    <PlayerBox>
      <PlayerFrame>
        <PlayerName>
          Nome
          <ColorId />
        </PlayerName>
      </PlayerFrame>

      <PlayerLife>
        <Markers></Markers>

        <Life>
          40
        </Life>
      </PlayerLife>
    </PlayerBox>
  )
}