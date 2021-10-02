import IBoard from 'board/interface/IBoard'
import { Squares } from 'board/repository/Squares'
import { Figures } from 'board/repository/Figures'

export const Board: IBoard = { Turn: 0, Squares: Squares, Figures: Figures, Actions: [], EnPassant: [] }