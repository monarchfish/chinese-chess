import { Chess } from '@renderer/types'

interface CheckIsHorseMovableProps {
  position: Chess['position']
  targetPosition: Chess['position']
}

export const checkIsHorseMovable = ({
  position,
  targetPosition
}: CheckIsHorseMovableProps): boolean => {
  return (
    (Math.abs(position.x - targetPosition.x) === 2 &&
      Math.abs(position.y - targetPosition.y) === 1) ||
    (Math.abs(position.x - targetPosition.x) === 1 && Math.abs(position.y - targetPosition.y) === 2)
  )
}
