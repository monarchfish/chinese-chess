import { Chess, Player } from '@renderer/types'

interface CheckIsInPalaceProps {
  targetPosition: Chess['position']
  player: Player
}

export const checkIsInPalace = ({ targetPosition, player }: CheckIsInPalaceProps): boolean => {
  if (player === Player.RED) {
    return (
      targetPosition.x >= 3 &&
      targetPosition.x <= 5 &&
      targetPosition.y >= 7 &&
      targetPosition.y <= 9
    )
  } else {
    return (
      targetPosition.x >= 3 &&
      targetPosition.x <= 5 &&
      targetPosition.y >= 0 &&
      targetPosition.y <= 2
    )
  }
}
