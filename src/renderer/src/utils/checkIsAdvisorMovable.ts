import { Chess, Player } from '@renderer/types'
import { checkIsInPalace } from './checkIsInPalace'

interface CheckIsAdvisorMovableProps {
  position: Chess['position']
  targetPosition: Chess['position']
  player: Player
}

export const checkIsAdvisorMovable = ({
  position,
  targetPosition,
  player
}: CheckIsAdvisorMovableProps): boolean => {
  if (!checkIsInPalace({ targetPosition, player })) {
    return false
  }

  return (
    Math.abs(position.x - targetPosition.x) === 1 && Math.abs(position.y - targetPosition.y) === 1
  )
}
