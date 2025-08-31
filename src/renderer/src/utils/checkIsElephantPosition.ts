import { Chess, Player } from '@renderer/types'

interface CheckIsElephantPositionProps {
  position: Chess['position']
  targetPosition: Chess['position']
  player: Player
}

export const checkIsElephantPosition = ({
  position,
  targetPosition,
  player
}: CheckIsElephantPositionProps): boolean => {
  if (player === Player.RED) {
    if (targetPosition.y < 5) {
      return false
    }
  } else {
    if (targetPosition.y > 4) {
      return false
    }
  }
  return (
    Math.abs(position.x - targetPosition.x) === 2 && Math.abs(position.y - targetPosition.y) === 2
  )
}
