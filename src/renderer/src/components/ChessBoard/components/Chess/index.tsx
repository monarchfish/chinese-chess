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
  return (
    <>
      <circle
        cx={(position.x + 1) * 100}
        cy={(position.y + 1) * 100}
        r="40"
        fill={colorMap.fill[player]}
        stroke={colorMap.stroke[player]}
        strokeWidth="3"
        style={{ filter: 'url(#glow)' }}
      />
      <text
        x={(position.x + 1) * 100}
        y={(position.y + 1) * 100 + 5}
        fontSize="50"
        fill={colorMap.text[player]}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ textShadow: '0 0 10px rgba(14, 165, 233, 0.8)' }}
      >
        {piece}
      </text>
    </>
  )
}

export default Chess
