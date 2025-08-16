import Background from './components/Background'
import Chess from './components/Chess'

function ChessBoard(): React.JSX.Element {
  const ChessList = [
    { x: 0, y: 0, piece: '車', player: 'black' },
    { x: 8, y: 0, piece: '車', player: 'black' },
    { x: 1, y: 0, piece: '馬', player: 'black' },
    { x: 7, y: 0, piece: '馬', player: 'black' },
    { x: 2, y: 0, piece: '象', player: 'black' },
    { x: 6, y: 0, piece: '象', player: 'black' },
    { x: 3, y: 0, piece: '士', player: 'black' },
    { x: 5, y: 0, piece: '士', player: 'black' },
    { x: 4, y: 0, piece: '將', player: 'black' },
    { x: 1, y: 2, piece: '砲', player: 'black' },
    { x: 7, y: 2, piece: '砲', player: 'black' },
    { x: 0, y: 3, piece: '卒', player: 'black' },
    { x: 2, y: 3, piece: '卒', player: 'black' },
    { x: 4, y: 3, piece: '卒', player: 'black' },
    { x: 6, y: 3, piece: '卒', player: 'black' },
    { x: 8, y: 3, piece: '卒', player: 'black' },

    { x: 0, y: 9, piece: '俥', player: 'red' },
    { x: 8, y: 9, piece: '俥', player: 'red' },
    { x: 1, y: 9, piece: '傌', player: 'red' },
    { x: 7, y: 9, piece: '傌', player: 'red' },
    { x: 2, y: 9, piece: '相', player: 'red' },
    { x: 6, y: 9, piece: '相', player: 'red' },
    { x: 3, y: 9, piece: '仕', player: 'red' },
    { x: 5, y: 9, piece: '仕', player: 'red' },
    { x: 4, y: 9, piece: '帥', player: 'red' },
    { x: 1, y: 7, piece: '炮', player: 'red' },
    { x: 7, y: 7, piece: '炮', player: 'red' },
    { x: 0, y: 6, piece: '兵', player: 'red' },
    { x: 2, y: 6, piece: '兵', player: 'red' },
    { x: 4, y: 6, piece: '兵', player: 'red' },
    { x: 6, y: 6, piece: '兵', player: 'red' },
    { x: 8, y: 6, piece: '兵', player: 'red' }
  ] as const
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1100" className="max-h-full">
      <Background />

      {ChessList.map((chess) => (
        <Chess
          key={`${chess.x}-${chess.y}`}
          position={{ x: chess.x, y: chess.y }}
          piece={chess.piece}
          player={chess.player}
        />
      ))}
    </svg>
  )
}

export default ChessBoard
