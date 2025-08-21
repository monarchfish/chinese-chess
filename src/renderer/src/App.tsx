import { useState } from 'react'
import ChessBoard from './components/ChessBoard'
import { INITIAL_CHESS_LIST } from './constants'
import { Chess, Player } from './types'

function App(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.RED)
  const [chessList, setChessList] = useState<Chess[]>(INITIAL_CHESS_LIST)

  // 重新開始遊戲
  const handleRestart = (): void => {
    setCurrentPlayer(Player.RED)
  }

  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="h-full flex-1 p-4">
        <ChessBoard chessList={chessList} />
      </div>

      <div className="relative z-10 flex w-60 flex-col gap-4">
        <div className="p-4">
          <div
            className={`flex items-center justify-center rounded-xl border p-4 backdrop-blur-sm ${
              currentPlayer === Player.RED
                ? 'border-red-400/50 bg-red-500/10 shadow-lg shadow-red-500/20'
                : 'border-cyan-400/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
            }`}
          >
            <div
              className={`mr-3 h-4 w-4 rounded-full ${
                currentPlayer === Player.RED
                  ? 'bg-red-500 shadow-lg shadow-red-500/50'
                  : 'bg-cyan-500 shadow-lg shadow-cyan-500/50'
              }`}
            ></div>
            <span
              className={`text-lg font-bold ${
                currentPlayer === Player.RED ? 'text-red-400' : 'text-cyan-400'
              }`}
            >
              {currentPlayer === Player.RED ? '紅方回合' : '黑方回合'}
            </span>
          </div>
        </div>

        {/* 當前選中的棋子 */}
        <div className="p-4">
          <div className="space-y-3">
            <div className="w-full rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600">
              當前選中的棋子
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-3">
            <button
              onClick={handleRestart}
              className="w-full rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-cyan-500/25 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-cyan-600 hover:to-blue-600"
            >
              重新開始
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
