import { Chess, Role } from '@renderer/types'
import { checkHasMiddleChess } from './checkHasMiddleChess'
import { checkIsHorsePosition } from './checkIsHorsePosition'
import { checkIsHorseBlocked } from './checkIsHorseBlocked'
import { checkIsElephantPosition } from './checkIsElephantPosition'
import { checkIsElephantBlocked } from './checkIsElephantBlocked'
import { checkIsOnlyOneChessBetween } from './checkIsOnlyOneChessBetween'
import { checkIsAdvisorPosition } from './checkIsAdvisorPosition'

interface CheckIsChessMovableProps {
  currentChess: Chess
  targetPosition: Chess['position']
  targetChess?: Chess
  chessList: Chess[]
}

// 檢查棋子規則
// 已經排除了該位置是自己的棋子
export const checkIsChessMovable = ({
  currentChess,
  targetPosition,
  targetChess,
  chessList
}: CheckIsChessMovableProps): boolean => {
  const { role, position, player: currentPlayer } = currentChess

  switch (role) {
    case Role.ROOK:
      if (position.x !== targetPosition.x && position.y !== targetPosition.y) {
        return false
      }

      return !checkHasMiddleChess({ position, targetPosition, chessList })
    case Role.HORSE:
      if (!checkIsHorsePosition({ position, targetPosition })) {
        return false
      }

      return !checkIsHorseBlocked({ position, targetPosition, chessList })
    case Role.CANNON:
      if (position.x !== targetPosition.x && position.y !== targetPosition.y) {
        return false
      }

      if (targetChess) {
        return checkIsOnlyOneChessBetween({ position, targetPosition, chessList })
      }

      return !checkHasMiddleChess({ position, targetPosition, chessList })
    case Role.ELEPHANT:
      if (!checkIsElephantPosition({ position, targetPosition, player: currentPlayer })) {
        return false
      }

      return !checkIsElephantBlocked({ position, targetPosition, chessList })
    case Role.ADVISOR:
      return checkIsAdvisorPosition({ position, targetPosition, player: currentPlayer })
    case Role.KING:
      return true
    case Role.PAWN:
      return true
  }
}
