import { Chess, Player, Role } from './types'

export const INITIAL_CHESS_LIST: Chess[] = [
  {
    id: 'black-rook-one',
    position: { x: 0, y: 0 },
    role: Role.ROOK,
    player: Player.BLACK
  },
  {
    id: 'black-rook-two',
    position: { x: 8, y: 0 },
    role: Role.ROOK,
    player: Player.BLACK
  },
  {
    id: 'black-knight-one',
    position: { x: 1, y: 0 },
    role: Role.KNIGHT,
    player: Player.BLACK
  },
  {
    id: 'black-knight-two',
    position: { x: 7, y: 0 },
    role: Role.KNIGHT,
    player: Player.BLACK
  },
  {
    id: 'black-elephant-one',
    position: { x: 2, y: 0 },
    role: Role.ELEPHANT,
    player: Player.BLACK
  },
  {
    id: 'black-elephant-two',
    position: { x: 6, y: 0 },
    role: Role.ELEPHANT,
    player: Player.BLACK
  },
  {
    id: 'black-advisor-one',
    position: { x: 3, y: 0 },
    role: Role.ADVISOR,
    player: Player.BLACK
  },
  {
    id: 'black-advisor-two',
    position: { x: 5, y: 0 },
    role: Role.ADVISOR,
    player: Player.BLACK
  },
  {
    id: 'black-king',
    position: { x: 4, y: 0 },
    role: Role.KING,
    player: Player.BLACK
  },
  {
    id: 'black-cannon-one',
    position: { x: 1, y: 2 },
    role: Role.CANNON,
    player: Player.BLACK
  },
  {
    id: 'black-cannon-two',
    position: { x: 7, y: 2 },
    role: Role.CANNON,
    player: Player.BLACK
  },
  {
    id: 'black-pawn-one',
    position: { x: 0, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK
  },
  {
    id: 'black-pawn-two',
    position: { x: 2, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK
  },
  {
    id: 'black-pawn-three',
    position: { x: 4, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK
  },
  {
    id: 'black-pawn-four',
    position: { x: 6, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK
  },
  {
    id: 'black-pawn-five',
    position: { x: 8, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK
  },

  {
    id: 'red-rook-one',
    position: { x: 0, y: 9 },
    role: Role.ROOK,
    player: Player.RED
  },
  {
    id: 'red-rook-two',
    position: { x: 8, y: 9 },
    role: Role.ROOK,
    player: Player.RED
  },
  {
    id: 'red-knight-one',
    position: { x: 1, y: 9 },
    role: Role.KNIGHT,
    player: Player.RED
  },
  {
    id: 'red-knight-two',
    position: { x: 7, y: 9 },
    role: Role.KNIGHT,
    player: Player.RED
  },
  {
    id: 'red-elephant-one',
    position: { x: 2, y: 9 },
    role: Role.ELEPHANT,
    player: Player.RED
  },
  {
    id: 'red-elephant-two',
    position: { x: 6, y: 9 },
    role: Role.ELEPHANT,
    player: Player.RED
  },
  {
    id: 'red-advisor-one',
    position: { x: 3, y: 9 },
    role: Role.ADVISOR,
    player: Player.RED
  },
  {
    id: 'red-advisor-two',
    position: { x: 5, y: 9 },
    role: Role.ADVISOR,
    player: Player.RED
  },
  {
    id: 'red-king',
    position: { x: 4, y: 9 },
    role: Role.KING,
    player: Player.RED
  },
  {
    id: 'red-cannon-one',
    position: { x: 1, y: 7 },
    role: Role.CANNON,
    player: Player.RED
  },
  {
    id: 'red-cannon-two',
    position: { x: 7, y: 7 },
    role: Role.CANNON,
    player: Player.RED
  },
  {
    id: 'red-pawn-one',
    position: { x: 0, y: 6 },
    role: Role.PAWN,
    player: Player.RED
  },
  {
    id: 'red-pawn-two',
    position: { x: 2, y: 6 },
    role: Role.PAWN,
    player: Player.RED
  },
  {
    id: 'red-pawn-three',
    position: { x: 4, y: 6 },
    role: Role.PAWN,
    player: Player.RED
  },
  {
    id: 'red-pawn-four',
    position: { x: 6, y: 6 },
    role: Role.PAWN,
    player: Player.RED
  },
  {
    id: 'red-pawn-five',
    position: { x: 8, y: 6 },
    role: Role.PAWN,
    player: Player.RED
  }
]

export const ROLE_MAP = {
  [Player.RED]: {
    [Role.ROOK]: '俥',
    [Role.KNIGHT]: '傌',
    [Role.ELEPHANT]: '相',
    [Role.ADVISOR]: '仕',
    [Role.KING]: '帥',
    [Role.CANNON]: '炮',
    [Role.PAWN]: '兵'
  },
  [Player.BLACK]: {
    [Role.ROOK]: '車',
    [Role.KNIGHT]: '馬',
    [Role.ELEPHANT]: '象',
    [Role.ADVISOR]: '士',
    [Role.KING]: '將',
    [Role.CANNON]: '砲',
    [Role.PAWN]: '卒'
  }
}
