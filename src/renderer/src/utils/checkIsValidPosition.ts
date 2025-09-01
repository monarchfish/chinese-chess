import { Chess, Role } from '@renderer/types'
import { checkHasMiddleChess } from './checkHasMiddleChess'
import { checkIsHorseMovable } from './checkIsHorseMovable'
import { checkIsHorseBlocked } from './checkIsHorseBlocked'
import { checkIsElephantMovable } from './checkIsElephantMovable'
import { checkIsElephantBlocked } from './checkIsElephantBlocked'
import { checkIsOnlyOneChessBetween } from './checkIsOnlyOneChessBetween'
import { checkIsAdvisorMovable } from './checkIsAdvisorMovable'
import { checkIsKingMovable } from './checkIsKingMovable'
import { checkIsStraightLine } from './checkIsStraightLine'
import { checkIsPawnMovable } from './checkIsPawnMovable'

interface CheckIsValidPositionProps {
  currentChess: Chess
  targetPosition: Chess['position']
  targetChess?: Chess
  chessList: Chess[]
}

export const checkIsValidPosition = ({
  currentChess,
  targetPosition,
  targetChess,
  chessList
}: CheckIsValidPositionProps): boolean => {
  const { role, position, player: currentPlayer } = currentChess

  switch (role) {
    case Role.ROOK:
      if (!checkIsStraightLine({ position, targetPosition })) {
        return false
      }

      return !checkHasMiddleChess({ position, targetPosition, chessList })
    case Role.HORSE:
      if (!checkIsHorseMovable({ position, targetPosition })) {
        return false
      }

      return !checkIsHorseBlocked({ position, targetPosition, chessList })
    case Role.CANNON:
      if (!checkIsStraightLine({ position, targetPosition })) {
        return false
      }

      if (targetChess) {
        return checkIsOnlyOneChessBetween({ position, targetPosition, chessList })
      }

      return !checkHasMiddleChess({ position, targetPosition, chessList })
    case Role.ELEPHANT:
      if (!checkIsElephantMovable({ position, targetPosition, player: currentPlayer })) {
        return false
      }

      return !checkIsElephantBlocked({ position, targetPosition, chessList })
    case Role.ADVISOR:
      return checkIsAdvisorMovable({ position, targetPosition, player: currentPlayer })
    case Role.KING:
      return checkIsKingMovable({ position, targetPosition, player: currentPlayer })
    case Role.PAWN:
      return checkIsPawnMovable({ position, targetPosition, player: currentPlayer })
  }
}
