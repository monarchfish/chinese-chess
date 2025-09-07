import { Chess } from '@renderer/types'

interface CheckIsOnlyOneChessBetweenProps {
  position: Chess['position']
  targetPosition: Chess['position']
  chessList: Chess[]
}

export const checkIsOnlyOneChessBetween = ({
  position,
  targetPosition,
  chessList
}: CheckIsOnlyOneChessBetweenProps): boolean => {
  return (
    chessList.filter((chess) => {
      if (position.x === targetPosition.x && chess.position.x === position.x) {
        return (
          chess.position.y > Math.min(position.y, targetPosition.y) &&
          chess.position.y < Math.max(position.y, targetPosition.y)
        )
      } else if (position.y === targetPosition.y && chess.position.y === position.y) {
        return (
          chess.position.x > Math.min(position.x, targetPosition.x) &&
          chess.position.x < Math.max(position.x, targetPosition.x)
        )
      }
      return false
    }).length === 1
  )
}
