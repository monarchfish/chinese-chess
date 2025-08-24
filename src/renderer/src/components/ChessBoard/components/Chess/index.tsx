import { ROLE_MAP } from '@renderer/constants'
import { Chess as ChessType } from '@renderer/types'
import { cn } from '@renderer/lib/utils'

interface ChessProps extends ChessType {
  onClick: (id: ChessType['id']) => void
  isSelected: boolean
  isMovable: boolean
}

function Chess({
  id,
  position,
  role,
  player,
  isSelected,
  isMovable,
  onClick
}: ChessProps): React.JSX.Element {
  const colorMap = {
    fill: {
      red: '#1e293b',
      black: 'url(#pieceGradient)'
    },
    stroke: {
      red: '#ef4444',
      black: '#0ea5e9'
    },
    text: {
      red: '#ef4444',
      black: '#ffffff'
    }
  }

  const x = position.x * 100 + 100
  const y = position.y * 100 + 100
  const transform = `translate(${x}, ${y})`

  return (
    <g
      transform={transform}
      className={cn(
        'cursor-pointer',
        'drop-shadow-[0_4px_4px_#000000]',
        'transition-transform',
        'duration-200',
        'select-none',
        isMovable && !isSelected && 'hover:drop-shadow-[0_4px_4px_#fbbf24]',
        isSelected && 'drop-shadow-[0_4px_4px_blue]'
      )}
      onClick={() => {
        onClick(id)
      }}
    >
      <circle
        r="40"
        fill={colorMap.fill[player]}
        stroke={colorMap.stroke[player]}
        strokeWidth="3"
        style={{ filter: 'url(#glow)' }}
      />
      <text
        y={5}
        fontSize="50"
        fill={colorMap.text[player]}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {ROLE_MAP[player][role]}
      </text>
    </g>
  )
}

export default Chess
