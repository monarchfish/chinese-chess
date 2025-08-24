import Background from './components/Background'
import Chess from './components/Chess'
import { Chess as ChessType } from '../../types'

interface ChessBoardProps {
  chessList: ChessType[]
  onChessClick: (id: ChessType['id']) => void
  selectedChess: ChessType | null
}

function ChessBoard({
  chessList,
  onChessClick,
  selectedChess
}: ChessBoardProps): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" className="max-h-full">
      <Background />

      {chessList.map((chess) => (
        <Chess
          id={chess.id}
          key={chess.id}
          position={{ x: chess.position.x, y: chess.position.y }}
          role={chess.role}
          player={chess.player}
          isSelected={chess.id === selectedChess?.id}
          isMovable={true}
          onClick={onChessClick}
        />
      ))}
    </svg>
  )
}

export default ChessBoard
