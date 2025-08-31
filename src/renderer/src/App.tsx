import { useState } from 'react'
import ChessBoard from './components/ChessBoard'
import { INITIAL_CHESS_LIST, ROLE_MAP } from './constants'
import { Chess, Player } from './types'
import { Button } from '@renderer/components/ui/button'
import { checkIsChessMovable } from './utils/checkIsChessMovable'

function App(): React.JSX.Element {
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.RED)
  const [chessList, setChessList] = useState<Chess[]>(INITIAL_CHESS_LIST)
  const [selectedChess, setSelectedChess] = useState<Chess | null>(null)

  const handleRestart = (): void => {
    setCurrentPlayer(Player.RED)
    setChessList(INITIAL_CHESS_LIST)
    setSelectedChess(null)
  }

  const handleChessClick = (id: Chess['id']): void => {
    if (selectedChess) {
      return
    }
    const chess = chessList.find((chess) => chess.id === id)
    if (chess) {
      setSelectedChess(chess)
    }
  }

  const handleBoardClick = (position: Chess['position']): void => {
    if (selectedChess) {
      // 檢查是否有棋子在該位置
      const targetChess = chessList.find(
        (chess) => chess.position.x === position.x && chess.position.y === position.y
      )
      // 如果是自己的棋子則不動作
      if (targetChess && targetChess.player === currentPlayer) {
        return
      }

      // 檢查是否符合規則
      if (
        !checkIsChessMovable({
          currentChess: selectedChess,
          targetPosition: position,
          targetChess,
          chessList
        })
      ) {
        return
      }

      // 更新棋子位置
      const newChessList = chessList

        // 如果該位置有棋子，則移除該棋子
        .filter((chess) => !targetChess || chess.id !== targetChess.id)
        .map((chess) => {
          if (chess.id === selectedChess.id) {
            return { ...chess, position }
          }
          return chess
        })
      setCurrentPlayer(currentPlayer === Player.RED ? Player.BLACK : Player.RED)
      setChessList(newChessList)
      setSelectedChess(null)
    }
  }

  return (
    <div className="relative flex h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <div className="h-full flex-1 p-4">
        <ChessBoard
          chessList={chessList}
          onChessClick={handleChessClick}
          selectedChess={selectedChess}
          onBoardClick={handleBoardClick}
          currentPlayer={currentPlayer}
        />
      </div>

      <div className="flex w-60 flex-col gap-0.5">
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

        <div className="p-4">
          <div className="flex items-center justify-center rounded-xl border border-cyan-400/30 bg-white/10 p-4 backdrop-blur-sm">
            {selectedChess ? (
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-full border-3 shadow-lg ${
                  selectedChess.player === Player.RED
                    ? 'border-red-500 bg-red-500/20'
                    : 'border-cyan-500 bg-cyan-500/20'
                }`}
              >
                <span
                  className={`text-3xl font-bold ${
                    selectedChess.player === Player.RED ? 'text-red-500' : 'text-cyan-500'
                  }`}
                >
                  {ROLE_MAP[selectedChess.player][selectedChess.role]}
                </span>
              </div>
            ) : (
              <div className="h-20 w-20"></div>
            )}
          </div>
        </div>

        <div className="p-4">
          <div className="space-y-3">
            <Button onClick={handleRestart} className="w-full">
              重新開始
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
