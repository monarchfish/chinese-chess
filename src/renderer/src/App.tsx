import { useState } from 'react'

interface MoveRecord {
  id: number
  player: 'red' | 'black'
  piece: string
  from: string
  to: string
  timestamp: Date
}

function App(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState<'red' | 'black'>('red')
  const [moveHistory, setMoveHistory] = useState<MoveRecord[]>([
    {
      id: 1,
      player: 'red',
      piece: '炮',
      from: 'h3',
      to: 'h6',
      timestamp: new Date()
    },
    {
      id: 2,
      player: 'black',
      piece: '馬',
      from: 'b1',
      to: 'c3',
      timestamp: new Date()
    }
  ])
  const [gameTime, setGameTime] = useState(0)
  const [capturedPieces, setCapturedPieces] = useState({
    red: ['卒', '象'],
    black: ['兵', '相']
  })

  // 基本功能函數
  const handleRestart = (): void => {
    setCurrentPlayer('red')
    setMoveHistory([])
    setGameTime(0)
    setCapturedPieces({ red: [], black: [] })
  }

  const handleUndo = (): void => {
    if (moveHistory.length > 0) {
      setMoveHistory((prev) => prev.slice(0, -1))
      setCurrentPlayer((prev) => (prev === 'red' ? 'black' : 'red'))
    }
  }

  const handleSaveGame = (): void => {
    const gameState = {
      currentPlayer,
      moveHistory,
      gameTime,
      capturedPieces
    }
    localStorage.setItem('chineseChessGame', JSON.stringify(gameState))
    alert('遊戲已保存！')
  }

  const handleLoadGame = (): void => {
    const savedGame = localStorage.getItem('chineseChessGame')
    if (savedGame) {
      const gameState = JSON.parse(savedGame)
      setCurrentPlayer(gameState.currentPlayer)
      setMoveHistory(
        gameState.moveHistory.map((move: MoveRecord) => ({
          ...move,
          timestamp: new Date(move.timestamp)
        }))
      )
      setGameTime(gameState.gameTime)
      setCapturedPieces(gameState.capturedPieces)
      alert('遊戲已載入！')
    } else {
      alert('沒有找到保存的遊戲！')
    }
  }

  return (
    <div className="flex h-screen gap-4 overflow-hidden p-4">
      {/* 左側棋盤 */}
      <div className="flex h-full flex-1 flex-col rounded-2xl p-6 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">棋盤</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">遊戲時間:</span>
            <span className="font-mono text-lg font-bold text-blue-600">
              {Math.floor(gameTime / 60)}:{(gameTime % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* 棋盤 SVG */}
        <div className="flex-1 overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1100"
            className="h-full max-h-full w-full"
          >
            {/* Board background */}
            <rect width="1000" height="1100" fill="#f0c78a" />

            {/* Position markers for soldiers/pawns */}
            {/* Black side */}
            <line x1="100" y1="370" x2="100" y2="430" stroke="black" strokeWidth="14" />
            <line x1="100" y1="400" x2="130" y2="400" stroke="black" strokeWidth="14" />
            <line x1="100" y1="370" x2="100" y2="430" stroke="#f0c78a" strokeWidth="8" />
            <line x1="100" y1="400" x2="130" y2="400" stroke="#f0c78a" strokeWidth="8" />

            <line x1="300" y1="370" x2="300" y2="430" stroke="black" strokeWidth="14" />
            <line x1="270" y1="400" x2="330" y2="400" stroke="black" strokeWidth="14" />
            <line x1="300" y1="370" x2="300" y2="430" stroke="#f0c78a" strokeWidth="8" />
            <line x1="270" y1="400" x2="330" y2="400" stroke="#f0c78a" strokeWidth="8" />

            <line x1="500" y1="370" x2="500" y2="430" stroke="black" strokeWidth="14" />
            <line x1="470" y1="400" x2="530" y2="400" stroke="black" strokeWidth="14" />
            <line x1="500" y1="370" x2="500" y2="430" stroke="#f0c78a" strokeWidth="8" />
            <line x1="470" y1="400" x2="530" y2="400" stroke="#f0c78a" strokeWidth="8" />

            <line x1="700" y1="370" x2="700" y2="430" stroke="black" strokeWidth="14" />
            <line x1="670" y1="400" x2="730" y2="400" stroke="black" strokeWidth="14" />
            <line x1="700" y1="370" x2="700" y2="430" stroke="#f0c78a" strokeWidth="8" />
            <line x1="670" y1="400" x2="730" y2="400" stroke="#f0c78a" strokeWidth="8" />

            <line x1="900" y1="370" x2="900" y2="430" stroke="black" strokeWidth="14" />
            <line x1="870" y1="400" x2="900" y2="400" stroke="black" strokeWidth="14" />
            <line x1="900" y1="370" x2="900" y2="430" stroke="#f0c78a" strokeWidth="8" />
            <line x1="870" y1="400" x2="900" y2="400" stroke="#f0c78a" strokeWidth="8" />

            {/* Red side */}
            <line x1="100" y1="670" x2="100" y2="730" stroke="black" strokeWidth="14" />
            <line x1="100" y1="700" x2="130" y2="700" stroke="black" strokeWidth="14" />
            <line x1="100" y1="670" x2="100" y2="730" stroke="#f0c78a" strokeWidth="8" />
            <line x1="100" y1="700" x2="130" y2="700" stroke="#f0c78a" strokeWidth="8" />

            <line x1="300" y1="670" x2="300" y2="730" stroke="black" strokeWidth="14" />
            <line x1="270" y1="700" x2="330" y2="700" stroke="black" strokeWidth="14" />
            <line x1="300" y1="670" x2="300" y2="730" stroke="#f0c78a" strokeWidth="8" />
            <line x1="270" y1="700" x2="330" y2="700" stroke="#f0c78a" strokeWidth="8" />

            <line x1="500" y1="670" x2="500" y2="730" stroke="black" strokeWidth="14" />
            <line x1="470" y1="700" x2="530" y2="700" stroke="black" strokeWidth="14" />
            <line x1="500" y1="670" x2="500" y2="730" stroke="#f0c78a" strokeWidth="8" />
            <line x1="470" y1="700" x2="530" y2="700" stroke="#f0c78a" strokeWidth="8" />

            <line x1="700" y1="670" x2="700" y2="730" stroke="black" strokeWidth="14" />
            <line x1="670" y1="700" x2="730" y2="700" stroke="black" strokeWidth="14" />
            <line x1="700" y1="670" x2="700" y2="730" stroke="#f0c78a" strokeWidth="8" />
            <line x1="670" y1="700" x2="730" y2="700" stroke="#f0c78a" strokeWidth="8" />

            <line x1="900" y1="670" x2="900" y2="730" stroke="black" strokeWidth="14" />
            <line x1="870" y1="700" x2="900" y2="700" stroke="black" strokeWidth="14" />
            <line x1="900" y1="670" x2="900" y2="730" stroke="#f0c78a" strokeWidth="8" />
            <line x1="870" y1="700" x2="900" y2="700" stroke="#f0c78a" strokeWidth="8" />

            {/* Position markers for cannons */}
            <line x1="200" y1="270" x2="200" y2="330" stroke="black" strokeWidth="14" />
            <line x1="170" y1="300" x2="230" y2="300" stroke="black" strokeWidth="14" />
            <line x1="200" y1="270" x2="200" y2="330" stroke="#f0c78a" strokeWidth="8" />
            <line x1="170" y1="300" x2="230" y2="300" stroke="#f0c78a" strokeWidth="8" />

            <line x1="800" y1="270" x2="800" y2="330" stroke="black" strokeWidth="14" />
            <line x1="770" y1="300" x2="830" y2="300" stroke="black" strokeWidth="14" />
            <line x1="800" y1="270" x2="800" y2="330" stroke="#f0c78a" strokeWidth="8" />
            <line x1="770" y1="300" x2="830" y2="300" stroke="#f0c78a" strokeWidth="8" />

            <line x1="200" y1="770" x2="200" y2="830" stroke="black" strokeWidth="14" />
            <line x1="170" y1="800" x2="230" y2="800" stroke="black" strokeWidth="14" />
            <line x1="200" y1="770" x2="200" y2="830" stroke="#f0c78a" strokeWidth="8" />
            <line x1="170" y1="800" x2="230" y2="800" stroke="#f0c78a" strokeWidth="8" />

            <line x1="800" y1="770" x2="800" y2="830" stroke="black" strokeWidth="14" />
            <line x1="770" y1="800" x2="830" y2="800" stroke="black" strokeWidth="14" />
            <line x1="800" y1="770" x2="800" y2="830" stroke="#f0c78a" strokeWidth="8" />
            <line x1="770" y1="800" x2="830" y2="800" stroke="#f0c78a" strokeWidth="8" />

            {/* Board border */}
            <rect
              x="90"
              y="90"
              width="820"
              height="920"
              fill="none"
              stroke="black"
              strokeWidth="10"
            />
            <rect
              x="97.5"
              y="97.5"
              width="805"
              height="905"
              fill="none"
              stroke="#f0c78a"
              strokeWidth="4"
            />

            {/* Board lines - horizontal */}
            <line x1="100" y1="100" x2="900" y2="100" stroke="black" strokeWidth="2" />
            <line x1="100" y1="200" x2="900" y2="200" stroke="black" strokeWidth="2" />
            <line x1="100" y1="300" x2="900" y2="300" stroke="black" strokeWidth="2" />
            <line x1="100" y1="400" x2="900" y2="400" stroke="black" strokeWidth="2" />
            <line x1="100" y1="500" x2="900" y2="500" stroke="black" strokeWidth="2" />
            <line x1="100" y1="600" x2="900" y2="600" stroke="black" strokeWidth="2" />
            <line x1="100" y1="700" x2="900" y2="700" stroke="black" strokeWidth="2" />
            <line x1="100" y1="800" x2="900" y2="800" stroke="black" strokeWidth="2" />
            <line x1="100" y1="900" x2="900" y2="900" stroke="black" strokeWidth="2" />
            <line x1="100" y1="1000" x2="900" y2="1000" stroke="black" strokeWidth="2" />

            {/* Board lines - vertical */}
            <line x1="100" y1="100" x2="100" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="200" y1="100" x2="200" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="300" y1="100" x2="300" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="400" y1="100" x2="400" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="500" y1="100" x2="500" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="600" y1="100" x2="600" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="700" y1="100" x2="700" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="800" y1="100" x2="800" y2="1000" stroke="black" strokeWidth="2" />
            <line x1="900" y1="100" x2="900" y2="1000" stroke="black" strokeWidth="2" />

            {/* Palace lines - black side */}
            <line
              x1="400"
              y1="100"
              x2="600"
              y2="300"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="10,10"
            />
            <line
              x1="600"
              y1="100"
              x2="400"
              y2="300"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="10,10"
            />

            {/* Palace lines - red side */}
            <line
              x1="400"
              y1="800"
              x2="600"
              y2="1000"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="10,10"
            />
            <line
              x1="600"
              y1="800"
              x2="400"
              y2="1000"
              stroke="black"
              strokeWidth="2"
              strokeDasharray="10,10"
            />

            {/* 覆蓋一個水平的矩形高度100左右當作楚河漢界 */}
            <rect x="101" y="501" width="798" height="98" fill="#f0c78a" />

            {/* River */}
            <text
              x="300"
              y="550"
              fontSize="48"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              楚 河
            </text>
            <text
              x="700"
              y="550"
              fontSize="48"
              fill="black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              漢 界
            </text>

            {/* Black pieces */}
            {/* Rooks/Chariots (車) */}
            <circle cx="100" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="100"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              車
            </text>

            <circle cx="900" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="900"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              車
            </text>

            {/* Horses/Knights (馬) */}
            <circle cx="200" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="200"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              馬
            </text>

            <circle cx="800" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="800"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              馬
            </text>

            {/* Elephants (象) */}
            <circle cx="300" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="300"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              象
            </text>

            <circle cx="700" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="700"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              象
            </text>

            {/* Advisors (士) */}
            <circle cx="400" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="400"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              士
            </text>

            <circle cx="600" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="600"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              士
            </text>

            {/* General/King (將) */}
            <circle cx="500" cy="100" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="500"
              y="105"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              將
            </text>

            {/* Cannons (砲) */}
            <circle cx="200" cy="300" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="200"
              y="305"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              砲
            </text>

            <circle cx="800" cy="300" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="800"
              y="305"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              砲
            </text>

            {/* Soldiers/Pawns (卒) */}
            <circle cx="100" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="100"
              y="405"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              卒
            </text>

            <circle cx="300" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="300"
              y="405"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              卒
            </text>

            <circle cx="500" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="500"
              y="405"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              卒
            </text>

            <circle cx="700" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="700"
              y="405"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              卒
            </text>

            <circle cx="900" cy="400" r="40" fill="#000" stroke="#000" strokeWidth="2" />
            <text
              x="900"
              y="405"
              fontSize="50"
              fill="#fff"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              卒
            </text>

            {/* Red pieces */}
            {/* Rooks/Chariots (俥) */}
            <circle cx="100" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="100"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              俥
            </text>

            <circle cx="900" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="900"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              俥
            </text>

            {/* Horses/Knights (傌) */}
            <circle cx="200" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="200"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              傌
            </text>

            <circle cx="800" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="800"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              傌
            </text>

            {/* Elephants (相) */}
            <circle cx="300" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="300"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              相
            </text>

            <circle cx="700" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="700"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              相
            </text>

            {/* Advisors (仕) */}
            <circle cx="400" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="400"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              仕
            </text>

            <circle cx="600" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="600"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              仕
            </text>

            {/* General/King (帥) */}
            <circle cx="500" cy="1000" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="500"
              y="1005"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              帥
            </text>

            {/* Cannons (炮) */}
            <circle cx="200" cy="800" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="200"
              y="805"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              炮
            </text>

            <circle cx="800" cy="800" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="800"
              y="805"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              炮
            </text>

            {/* Soldiers/Pawns (兵) */}
            <circle cx="100" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="100"
              y="705"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              兵
            </text>

            <circle cx="300" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="300"
              y="705"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              兵
            </text>

            <circle cx="500" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="500"
              y="705"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              兵
            </text>

            <circle cx="700" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="700"
              y="705"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              兵
            </text>

            <circle cx="900" cy="700" r="40" fill="#fff" stroke="#f00" strokeWidth="2" />
            <text
              x="900"
              y="705"
              fontSize="50"
              fill="#f00"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              兵
            </text>
          </svg>
        </div>
      </div>

      {/* 右側資訊區 */}
      <div className="w-80 space-y-4">
        {/* 當前玩家 */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-800">當前回合</h3>
          <div
            className={`flex items-center justify-center rounded-xl p-4 ${
              currentPlayer === 'red'
                ? 'border-2 border-red-200 bg-red-50'
                : 'border-2 border-gray-200 bg-gray-50'
            }`}
          >
            <div
              className={`mr-3 h-4 w-4 rounded-full ${
                currentPlayer === 'red' ? 'bg-red-500' : 'bg-gray-800'
              }`}
            ></div>
            <span
              className={`text-lg font-bold ${
                currentPlayer === 'red' ? 'text-red-600' : 'text-gray-800'
              }`}
            >
              {currentPlayer === 'red' ? '紅方回合' : '黑方回合'}
            </span>
          </div>
        </div>

        {/* 移動紀錄 */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-800">移動紀錄</h3>
          <div className="max-h-64 space-y-2 overflow-y-auto">
            {moveHistory.map((move) => (
              <div
                key={move.id}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <div className="flex items-center">
                  <div
                    className={`mr-2 h-3 w-3 rounded-full ${
                      move.player === 'red' ? 'bg-red-500' : 'bg-gray-800'
                    }`}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">
                    {move.piece} {move.from} → {move.to}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{move.timestamp.toLocaleTimeString()}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 被吃掉的棋子 */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-800">被吃掉的棋子</h3>
          <div className="space-y-4">
            {/* 紅方被吃掉的棋子 */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-red-600">紅方損失</h4>
              <div className="flex flex-wrap gap-2">
                {capturedPieces.red.map((piece, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-red-300 bg-red-100"
                  >
                    <span className="text-sm font-bold text-red-600">{piece}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 黑方被吃掉的棋子 */}
            <div>
              <h4 className="mb-2 text-sm font-semibold text-gray-700">黑方損失</h4>
              <div className="flex flex-wrap gap-2">
                {capturedPieces.black.map((piece, index) => (
                  <div
                    key={index}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-gray-100"
                  >
                    <span className="text-sm font-bold text-gray-700">{piece}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 遊戲控制 */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-800">遊戲控制</h3>
          <div className="space-y-3">
            <button
              onClick={handleRestart}
              className="w-full rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
            >
              重新開始
            </button>
            <button
              onClick={handleUndo}
              className="w-full rounded-lg bg-yellow-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-yellow-600"
            >
              悔棋
            </button>
            <button
              onClick={handleSaveGame}
              className="w-full rounded-lg bg-green-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-green-600"
            >
              保存遊戲
            </button>
            <button
              onClick={handleLoadGame}
              className="w-full rounded-lg bg-gray-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-gray-600"
            >
              載入遊戲
            </button>
          </div>
        </div>

        {/* 遊戲統計 */}
        <div className="rounded-2xl bg-white p-6 shadow-2xl">
          <h3 className="mb-4 text-xl font-bold text-gray-800">遊戲統計</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">總步數:</span>
              <span className="font-semibold">{moveHistory.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">紅方步數:</span>
              <span className="font-semibold text-red-600">
                {moveHistory.filter((move) => move.player === 'red').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">黑方步數:</span>
              <span className="font-semibold text-gray-800">
                {moveHistory.filter((move) => move.player === 'black').length}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">被吃棋子:</span>
              <span className="font-semibold">
                {capturedPieces.red.length + capturedPieces.black.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
