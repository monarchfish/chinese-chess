import { Chess } from '@renderer/types'

interface CheckIsStraightLineProps {
  position: Chess['position']
  targetPosition: Chess['position']
}

export const checkIsStraightLine = ({
  position,
  targetPosition
}: CheckIsStraightLineProps): boolean => {
  return position.x === targetPosition.x || position.y === targetPosition.y
}
