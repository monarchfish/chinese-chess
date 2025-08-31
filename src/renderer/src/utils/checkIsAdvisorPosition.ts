import { Chess, Player } from '@renderer/types'

interface CheckIsAdvisorPositionProps {
  position: Chess['position']
  targetPosition: Chess['position']
  player: Player
}

export const checkIsAdvisorPosition = ({
  position,
  targetPosition,
  player
}: CheckIsAdvisorPositionProps): boolean => {
  // 檢查是否在九宮內
  if (player === Player.RED) {
    if (targetPosition.y < 2) {
      return false
    }
  } else {
    if (targetPosition.y > 2) {
      return false
    }
  }
  return (
    Math.abs(position.x - targetPosition.x) === 1 && Math.abs(position.y - targetPosition.y) === 1
  )
}
