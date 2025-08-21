interface ChessProps {
  position: {
    x: number
    y: number
  }
  piece: string
  player: 'red' | 'black'
}

function Chess({ position, piece, player }: ChessProps): React.JSX.Element {
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
      className="cursor-pointer drop-shadow-[0_4px_4px_#000000] transition-transform duration-200 select-none hover:drop-shadow-[0_4px_4px_#fbbf24]"
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
        {piece}
      </text>
    </g>
  )
}

export default Chess
