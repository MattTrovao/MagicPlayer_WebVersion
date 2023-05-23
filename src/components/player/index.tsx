import { PlayerFrame, PlayerBox, PlayerName, PlayerLife, Life } from "./Player.style"
import { Id } from "./components/ColorId"
import { Markers } from "./components/Markers"



export function Player() {
  return (
    <PlayerBox>
      <PlayerFrame>
        <PlayerName>
          Nome
          <Id />
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