import { Chess, Role } from '@renderer/types'
import { checkHasMiddleChess } from './utils/checkHasMiddleChess'
import { checkIsHorseMovable } from './utils/checkIsHorseMovable'
import { checkIsHorseBlocked } from './utils/checkIsHorseBlocked'
import { checkIsElephantMovable } from './utils/checkIsElephantMovable'
import { checkIsElephantBlocked } from './utils/checkIsElephantBlocked'
import { checkIsOnlyOneChessBetween } from './utils/checkIsOnlyOneChessBetween'
import { checkIsAdvisorMovable } from './utils/checkIsAdvisorMovable'
import { checkIsKingMovable } from './utils/checkIsKingMovable'
import { checkIsStraightLine } from './utils/checkIsStraightLine'
import { checkIsPawnMovable } from './utils/checkIsPawnMovable'

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
