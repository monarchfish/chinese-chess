export enum Player {
  RED = 'red',
  BLACK = 'black'
}

export enum Role {
  PAWN = 'pawn', // 兵/卒
  ROOK = 'rook', // 車/俥
  HORSE = 'horse', // 馬/傌
  ELEPHANT = 'elephant', // 象/相
  ADVISOR = 'advisor', // 士/仕
  KING = 'king', // 將/帥
  CANNON = 'cannon' // 砲/炮
}

export interface Chess {
  id: string
  position: {
    x: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    y: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  }
  role: Role
  player: Player
}
