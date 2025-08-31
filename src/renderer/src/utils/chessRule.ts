import { Chess, Player, Role } from '@renderer/types'

interface CheckChessRuleProps {
  currentChess: Chess
  targetPosition: Chess['position']
  targetChess?: Chess
  chessList: Chess[]
}

// 檢查兩者之間是否有棋子
const checkMiddleChess = (
  position: Chess['position'],
  targetPosition: Chess['position'],
  chessList: Chess[]
): boolean => {
  return !!chessList.find((chess) => {
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
  })
}

// 檢查棋子規則
// 已經排除了該位置是自己的棋子
export const checkChessRule = ({
  currentChess,
  targetPosition,
  targetChess,
  chessList
}: CheckChessRuleProps): boolean => {
  const { role, position, player: currentPlayer } = currentChess
  // 依照選中的棋子，檢查是否符合規則
  if (role === Role.ROOK) {
    // 檢查車的規則

    // 檢查是否在同一行或同一列
    if (position.x !== targetPosition.x && position.y !== targetPosition.y) {
      return false
    }

    // 檢查是否中間有棋子
    return !checkMiddleChess(position, targetPosition, chessList)
  }
  if (role === Role.HORSE) {
    // 檢查馬的規則
    // 檢查是否可以移動，馬走日字，確認目標位置是否在馬的日字位置
    // 目標的X差2Y差1或者X差1Y差2
    if (
      Math.abs(position.x - targetPosition.x) === 2 &&
      Math.abs(position.y - targetPosition.y) === 1
    ) {
      return true
    }
    if (
      Math.abs(position.x - targetPosition.x) === 1 &&
      Math.abs(position.y - targetPosition.y) === 2
    ) {
      return true
    }
    return false
  }
  if (role === Role.CANNON) {
    // 檢查炮的規則
    return !checkMiddleChess(position, targetPosition, chessList)
  }
  if (role === Role.ELEPHANT) {
    // 檢查象的規則
    // 檢查是否可以吃到目標棋子
    // 檢查是否可以移動
    return true
  }
  if (role === Role.ADVISOR) {
    // 檢查士的規則
    return true
  }
  if (role === Role.KING) {
    // 檢查將的規則
    return true
  }
  if (role === Role.PAWN) {
    // 檢查兵的規則
    return true
  }
}
