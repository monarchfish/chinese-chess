function Background(): React.JSX.Element {
  return (
    <>
      <defs>
        <linearGradient id="boardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1e293b', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#334155', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#475569', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="pieceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#0ea5e9', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0284c7', stopOpacity: 1 }} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1000" height="1100" fill="url(#boardGradient)" />

      {/* Position markers for soldiers/pawns */}
      {/* Black side */}
      <line x1="100" y1="370" x2="100" y2="430" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="100" y1="400" x2="130" y2="400" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="100" y1="370" x2="100" y2="430" stroke="#334155" strokeWidth="8" />
      <line x1="100" y1="400" x2="130" y2="400" stroke="#334155" strokeWidth="8" />

      <line x1="300" y1="370" x2="300" y2="430" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="270" y1="400" x2="330" y2="400" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="300" y1="370" x2="300" y2="430" stroke="#334155" strokeWidth="8" />
      <line x1="270" y1="400" x2="330" y2="400" stroke="#334155" strokeWidth="8" />

      <line x1="500" y1="370" x2="500" y2="430" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="470" y1="400" x2="530" y2="400" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="500" y1="370" x2="500" y2="430" stroke="#334155" strokeWidth="8" />
      <line x1="470" y1="400" x2="530" y2="400" stroke="#334155" strokeWidth="8" />

      <line x1="700" y1="370" x2="700" y2="430" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="670" y1="400" x2="730" y2="400" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="700" y1="370" x2="700" y2="430" stroke="#334155" strokeWidth="8" />
      <line x1="670" y1="400" x2="730" y2="400" stroke="#334155" strokeWidth="8" />

      <line x1="900" y1="370" x2="900" y2="430" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="870" y1="400" x2="900" y2="400" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="900" y1="370" x2="900" y2="430" stroke="#334155" strokeWidth="8" />
      <line x1="870" y1="400" x2="900" y2="400" stroke="#334155" strokeWidth="8" />

      {/* Red side */}
      <line x1="100" y1="670" x2="100" y2="730" stroke="#ef4444" strokeWidth="14" />
      <line x1="100" y1="700" x2="130" y2="700" stroke="#ef4444" strokeWidth="14" />
      <line x1="100" y1="670" x2="100" y2="730" stroke="#334155" strokeWidth="8" />
      <line x1="100" y1="700" x2="130" y2="700" stroke="#334155" strokeWidth="8" />

      <line x1="300" y1="670" x2="300" y2="730" stroke="#ef4444" strokeWidth="14" />
      <line x1="270" y1="700" x2="330" y2="700" stroke="#ef4444" strokeWidth="14" />
      <line x1="300" y1="670" x2="300" y2="730" stroke="#334155" strokeWidth="8" />
      <line x1="270" y1="700" x2="330" y2="700" stroke="#334155" strokeWidth="8" />

      <line x1="500" y1="670" x2="500" y2="730" stroke="#ef4444" strokeWidth="14" />
      <line x1="470" y1="700" x2="530" y2="700" stroke="#ef4444" strokeWidth="14" />
      <line x1="500" y1="670" x2="500" y2="730" stroke="#334155" strokeWidth="8" />
      <line x1="470" y1="700" x2="530" y2="700" stroke="#334155" strokeWidth="8" />

      <line x1="700" y1="670" x2="700" y2="730" stroke="#ef4444" strokeWidth="14" />
      <line x1="670" y1="700" x2="730" y2="700" stroke="#ef4444" strokeWidth="14" />
      <line x1="700" y1="670" x2="700" y2="730" stroke="#334155" strokeWidth="8" />
      <line x1="670" y1="700" x2="730" y2="700" stroke="#334155" strokeWidth="8" />

      <line x1="900" y1="670" x2="900" y2="730" stroke="#ef4444" strokeWidth="14" />
      <line x1="870" y1="700" x2="900" y2="700" stroke="#ef4444" strokeWidth="14" />
      <line x1="900" y1="670" x2="900" y2="730" stroke="#334155" strokeWidth="8" />
      <line x1="870" y1="700" x2="900" y2="700" stroke="#334155" strokeWidth="8" />

      {/* Position markers for cannons */}
      <line x1="200" y1="270" x2="200" y2="330" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="170" y1="300" x2="230" y2="300" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="200" y1="270" x2="200" y2="330" stroke="#334155" strokeWidth="8" />
      <line x1="170" y1="300" x2="230" y2="300" stroke="#334155" strokeWidth="8" />

      <line x1="800" y1="270" x2="800" y2="330" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="770" y1="300" x2="830" y2="300" stroke="#0ea5e9" strokeWidth="14" />
      <line x1="800" y1="270" x2="800" y2="330" stroke="#334155" strokeWidth="8" />
      <line x1="770" y1="300" x2="830" y2="300" stroke="#334155" strokeWidth="8" />

      <line x1="200" y1="770" x2="200" y2="830" stroke="#ef4444" strokeWidth="14" />
      <line x1="170" y1="800" x2="230" y2="800" stroke="#ef4444" strokeWidth="14" />
      <line x1="200" y1="770" x2="200" y2="830" stroke="#334155" strokeWidth="8" />
      <line x1="170" y1="800" x2="230" y2="800" stroke="#334155" strokeWidth="8" />

      <line x1="800" y1="770" x2="800" y2="830" stroke="#ef4444" strokeWidth="14" />
      <line x1="770" y1="800" x2="830" y2="800" stroke="#ef4444" strokeWidth="14" />
      <line x1="800" y1="770" x2="800" y2="830" stroke="#334155" strokeWidth="8" />
      <line x1="770" y1="800" x2="830" y2="800" stroke="#334155" strokeWidth="8" />

      {/* Board border */}
      <rect x="90" y="90" width="820" height="920" fill="none" stroke="#0ea5e9" strokeWidth="10" />
      <rect
        x="97.5"
        y="97.5"
        width="805"
        height="905"
        fill="none"
        stroke="#334155"
        strokeWidth="4"
      />

      {/* Board lines - horizontal */}
      <line x1="100" y1="100" x2="900" y2="100" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="200" x2="900" y2="200" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="300" x2="900" y2="300" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="400" x2="900" y2="400" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="500" x2="900" y2="500" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="600" x2="900" y2="600" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="700" x2="900" y2="700" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="800" x2="900" y2="800" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="900" x2="900" y2="900" stroke="#64748b" strokeWidth="2" />
      <line x1="100" y1="1000" x2="900" y2="1000" stroke="#64748b" strokeWidth="2" />

      {/* Board lines - vertical */}
      <line x1="100" y1="100" x2="100" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="200" y1="100" x2="200" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="300" y1="100" x2="300" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="400" y1="100" x2="400" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="500" y1="100" x2="500" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="600" y1="100" x2="600" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="700" y1="100" x2="700" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="800" y1="100" x2="800" y2="1000" stroke="#64748b" strokeWidth="2" />
      <line x1="900" y1="100" x2="900" y2="1000" stroke="#64748b" strokeWidth="2" />

      {/* Palace lines - black side */}
      <line
        x1="400"
        y1="100"
        x2="600"
        y2="300"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeDasharray="10,10"
      />
      <line
        x1="600"
        y1="100"
        x2="400"
        y2="300"
        stroke="#0ea5e9"
        strokeWidth="2"
        strokeDasharray="10,10"
      />

      {/* Palace lines - red side */}
      <line
        x1="400"
        y1="800"
        x2="600"
        y2="1000"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="10,10"
      />
      <line
        x1="600"
        y1="800"
        x2="400"
        y2="1000"
        stroke="#ef4444"
        strokeWidth="2"
        strokeDasharray="10,10"
      />

      {/* 覆蓋一個水平的矩形高度100左右當作楚河漢界 */}
      <rect x="101" y="501" width="798" height="98" fill="#334155" />

      {/* River */}
      <text
        x="300"
        y="550"
        fontSize="48"
        fill="#0ea5e9"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ filter: 'url(#glow)' }}
      >
        楚 河
      </text>
      <text
        x="700"
        y="550"
        fontSize="48"
        fill="#ef4444"
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ filter: 'url(#glow)' }}
      >
        漢 界
      </text>
    </>
  )
}

export default Background
