import { Chess } from '@renderer/types'

interface CheckIsHorsePositionProps {
  position: Chess['position']
  targetPosition: Chess['position']
}

export const checkIsHorsePosition = ({
  position,
  targetPosition
}: CheckIsHorsePositionProps): boolean => {
  return (
    (Math.abs(position.x - targetPosition.x) === 2 &&
      Math.abs(position.y - targetPosition.y) === 1) ||
    (Math.abs(position.x - targetPosition.x) === 1 && Math.abs(position.y - targetPosition.y) === 2)
  )
}
