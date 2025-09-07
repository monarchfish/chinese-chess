import { Chess } from '@renderer/types'

interface CheckIsElephantBlockedProps {
  position: Chess['position']
  targetPosition: Chess['position']
  chessList: Chess[]
}

export const checkIsElephantBlocked = ({
  position,
  targetPosition,
  chessList
}: CheckIsElephantBlockedProps): boolean => {
  const xDiff = targetPosition.x - position.x
  const yDiff = targetPosition.y - position.y

  const blockPosition = {
    x: position.x + xDiff / 2,
    y: position.y + yDiff / 2
  } as Chess['position']

  return chessList.some(
    (chess) => chess.position.x === blockPosition.x && chess.position.y === blockPosition.y
  )
}
