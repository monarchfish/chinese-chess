import { Chess, Player, Role } from './types'

export const INITIAL_CHESS_LIST: Chess[] = [
  {
    id: '黑車一',
    position: { x: 0, y: 0 },
    role: Role.ROOK,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑車二',
    position: { x: 8, y: 0 },
    role: Role.ROOK,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑馬一',
    position: { x: 1, y: 0 },
    role: Role.KNIGHT,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑馬二',
    position: { x: 7, y: 0 },
    role: Role.KNIGHT,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑象一',
    position: { x: 2, y: 0 },
    role: Role.BISHOP,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑象二',
    position: { x: 6, y: 0 },
    role: Role.BISHOP,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑士一',
    position: { x: 3, y: 0 },
    role: Role.ADVISOR,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑士二',
    position: { x: 5, y: 0 },
    role: Role.ADVISOR,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑將',
    position: { x: 4, y: 0 },
    role: Role.KING,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑砲一',
    position: { x: 1, y: 2 },
    role: Role.CANNON,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑砲二',
    position: { x: 7, y: 2 },
    role: Role.CANNON,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑卒一',
    position: { x: 0, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑卒二',
    position: { x: 2, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑卒三',
    position: { x: 4, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑卒四',
    position: { x: 6, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },
  {
    id: '黑卒五',
    position: { x: 8, y: 3 },
    role: Role.PAWN,
    player: Player.BLACK,
    isSelected: false,
    isMovable: false
  },

  {
    id: '紅俥一',
    position: { x: 0, y: 9 },
    role: Role.ROOK,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅俥二',
    position: { x: 8, y: 9 },
    role: Role.ROOK,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅傌一',
    position: { x: 1, y: 9 },
    role: Role.KNIGHT,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅傌二',
    position: { x: 7, y: 9 },
    role: Role.KNIGHT,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅相一',
    position: { x: 2, y: 9 },
    role: Role.BISHOP,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅相二',
    position: { x: 6, y: 9 },
    role: Role.BISHOP,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅仕一',
    position: { x: 3, y: 9 },
    role: Role.ADVISOR,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅仕二',
    position: { x: 5, y: 9 },
    role: Role.ADVISOR,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅帥',
    position: { x: 4, y: 9 },
    role: Role.KING,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅炮一',
    position: { x: 1, y: 7 },
    role: Role.CANNON,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅炮二',
    position: { x: 7, y: 7 },
    role: Role.CANNON,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅兵一',
    position: { x: 0, y: 6 },
    role: Role.PAWN,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅兵二',
    position: { x: 2, y: 6 },
    role: Role.PAWN,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅兵三',
    position: { x: 4, y: 6 },
    role: Role.PAWN,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅兵四',
    position: { x: 6, y: 6 },
    role: Role.PAWN,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  },
  {
    id: '紅兵五',
    position: { x: 8, y: 6 },
    role: Role.PAWN,
    player: Player.RED,
    isSelected: false,
    isMovable: false
  }
]

export const ROLE_MAP = {
  [Player.RED]: {
    [Role.ROOK]: '俥',
    [Role.KNIGHT]: '傌',
    [Role.BISHOP]: '相',
    [Role.ADVISOR]: '仕',
    [Role.KING]: '帥',
    [Role.CANNON]: '炮',
    [Role.PAWN]: '兵'
  },
  [Player.BLACK]: {
    [Role.ROOK]: '車',
    [Role.KNIGHT]: '馬',
    [Role.BISHOP]: '象',
    [Role.ADVISOR]: '士',
    [Role.KING]: '將',
    [Role.CANNON]: '砲',
    [Role.PAWN]: '卒'
  }
}
