import Background from './components/Background'
import Chess from './components/Chess'
import { Chess as ChessType } from '../../types'

interface ChessBoardProps {
  chessList: ChessType[]
}

function ChessBoard({ chessList }: ChessBoardProps): React.JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" className="max-h-full">
      <Background />

      {chessList.map((chess) => (
        <Chess
          key={chess.id}
          position={{ x: chess.position.x, y: chess.position.y }}
          role={chess.role}
          player={chess.player}
          isSelected={chess.isSelected}
          isMovable={chess.isMovable}
          onClick={() => {
            console.log(chess)
          }}
        />
      ))}
    </svg>
  )
}

export default ChessBoard
