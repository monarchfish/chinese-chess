import { Chess, Player } from '@renderer/types'

interface CheckIsPawnMovableProps {
  position: Chess['position']
  targetPosition: Chess['position']
  player: Player
}

export const checkIsPawnMovable = ({
  position,
  targetPosition,
  player
}: CheckIsPawnMovableProps): boolean => {
  const xDiff = targetPosition.x - position.x
  const yDiff = targetPosition.y - position.y
  const absXDiff = Math.abs(xDiff)
  const absYDiff = Math.abs(yDiff)

  if (absXDiff + absYDiff !== 1) {
    return false
  }

  if (player === Player.RED) {
    if (position.y >= 5) {
      return yDiff === -1 && xDiff === 0
    } else {
      return yDiff <= 0
    }
  } else {
    if (position.y <= 4) {
      return yDiff === 1 && xDiff === 0
    } else {
      return yDiff >= 0
    }
  }
}
