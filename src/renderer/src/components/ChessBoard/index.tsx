import Background from './components/Background'
import Chess from './components/Chess'
import { Chess as ChessType, Player } from '../../types'
import { useState } from 'react'

const calculateBoardPosition = (
  e: React.MouseEvent<SVGSVGElement>
): ChessType['position'] | null => {
  e.stopPropagation()
  const { x, y, width, height } = e.currentTarget.getBoundingClientRect()
  const { clientX, clientY } = e
  const position = {
    x: clientX - x,
    y: clientY - y
  }

  const scaleX = 1000 / width
  const scaleY = 1100 / height

  const boardPosition = {
    x: Math.floor((position.x * scaleX - 50) / 100) as ChessType['position']['x'],
    y: Math.floor((position.y * scaleY - 50) / 100) as ChessType['position']['y']
  }

  if (
    boardPosition.x >= 0 &&
    boardPosition.x <= 8 &&
    boardPosition.y >= 0 &&
    boardPosition.y <= 9
  ) {
    return boardPosition
  }

  return null
}

interface ChessBoardProps {
  chessList: ChessType[]
  onChessClick: (id: ChessType['id']) => void
  selectedChess: ChessType | null
  onBoardClick: (position: ChessType['position']) => void
  currentPlayer: Player
}

function ChessBoard({
  chessList,
  onChessClick,
  selectedChess,
  onBoardClick,
  currentPlayer
}: ChessBoardProps): React.JSX.Element {
  const [movePosition, setMovePosition] = useState<ChessType['position'] | null>(null)

  const handleClick = (e: React.MouseEvent<SVGSVGElement>): void => {
    const boardPosition = calculateBoardPosition(e)
    if (boardPosition) {
      onBoardClick(boardPosition)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>): void => {
    const newPosition = calculateBoardPosition(e)
    if (JSON.stringify(newPosition) !== JSON.stringify(movePosition)) {
      setMovePosition(newPosition)
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1100"
      className="max-h-full"
      onClick={handleClick}
      onMouseMove={handleMouseMove}
    >
      <Background />

      {chessList.map((chess) => (
        <Chess
          id={chess.id}
          key={chess.id}
          position={{ x: chess.position.x, y: chess.position.y }}
          role={chess.role}
          player={chess.player}
          isSelected={chess.id === selectedChess?.id}
          isMovable={currentPlayer === chess.player && !selectedChess}
          onClick={onChessClick}
        />
      ))}
      {/* 準備移動到哪個位置 */}
      {selectedChess && movePosition && (
        <rect
          x={movePosition.x * 100 + 50}
          y={movePosition.y * 100 + 50}
          width={100}
          height={100}
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeDasharray="5,5"
          className="pointer-events-none"
        />
      )}
    </svg>
  )
}

export default ChessBoard
