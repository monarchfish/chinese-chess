import { Chess } from '@renderer/types'

interface CheckIsHorseBlockedProps {
  position: Chess['position']
  targetPosition: Chess['position']
  chessList: Chess[]
}

export const checkIsHorseBlocked = ({
  position,
  targetPosition,
  chessList
}: CheckIsHorseBlockedProps): boolean => {
  const xDiff = targetPosition.x - position.x
  const yDiff = targetPosition.y - position.y

  let blockPosition: Chess['position']

  if (Math.abs(xDiff) === 2) {
    blockPosition = { x: position.x + xDiff / 2, y: position.y } as Chess['position']
  } else {
    blockPosition = { x: position.x, y: position.y + yDiff / 2 } as Chess['position']
  }

  return chessList.some(
    (chess) => chess.position.x === blockPosition.x && chess.position.y === blockPosition.y
  )
}
