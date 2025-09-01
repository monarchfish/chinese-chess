import { Chess, Player } from '@renderer/types'
import { checkIsInPalace } from './checkIsInPalace'

interface CheckIsKingMovableProps {
  position: Chess['position']
  targetPosition: Chess['position']
  player: Player
}

export const checkIsKingMovable = ({
  position,
  targetPosition,
  player
}: CheckIsKingMovableProps): boolean => {
  if (!checkIsInPalace({ targetPosition, player })) {
    return false
  }

  return (
    (Math.abs(position.x - targetPosition.x) === 1 &&
      Math.abs(position.y - targetPosition.y) === 0) ||
    (Math.abs(position.x - targetPosition.x) === 0 && Math.abs(position.y - targetPosition.y) === 1)
  )
}
