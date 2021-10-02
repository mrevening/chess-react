import IFigure from 'board/interface/IFigure'
import { FigureType } from 'board/enum/FigureType'
import { Player } from 'board/enum/Player'
import { Squares } from 'board/repository/Squares'

export const Figures: Array<IFigure> = [
    { Id: 1, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'A2')! },
    { Id: 2, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'B2')! },
    { Id: 3, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'C2')! },
    { Id: 4, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'D2')! },
    { Id: 5, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'E2')! },
    { Id: 6, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'F2')! },
    { Id: 7, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'G2')! },
    { Id: 8, Type: FigureType.Pawn, Player: Player.White, Square: Squares.find(s => s.Name === 'H2')! },

    { Id: 9, Type: FigureType.Rook, Player: Player.White, Square: Squares.find(s => s.Name === 'A1')! },
    { Id: 10, Type: FigureType.Knight, Player: Player.White, Square: Squares.find(s => s.Name === 'B1')! },
    { Id: 11, Type: FigureType.Bishop, Player: Player.White, Square: Squares.find(s => s.Name === 'C1')! },
    { Id: 12, Type: FigureType.Queen, Player: Player.White, Square: Squares.find(s => s.Name === 'D1')! },
    { Id: 13, Type: FigureType.King, Player: Player.White, Square: Squares.find(s => s.Name === 'E1')! },
    { Id: 14, Type: FigureType.Bishop, Player: Player.White, Square: Squares.find(s => s.Name === 'F1')! },
    { Id: 15, Type: FigureType.Knight, Player: Player.White, Square: Squares.find(s => s.Name === 'G1')! },
    { Id: 16, Type: FigureType.Rook, Player: Player.White, Square: Squares.find(s => s.Name === 'H1')! },

    { Id: 17, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'A7')! },
    { Id: 18, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'B7')! },
    { Id: 19, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'C7')! },
    { Id: 20, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'D7')! },
    { Id: 21, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'E7')! },
    { Id: 22, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'F7')! },
    { Id: 23, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'G7')! },
    { Id: 24, Type: FigureType.Pawn, Player: Player.Black, Square: Squares.find(s => s.Name === 'H7')! },

    { Id: 25, Type: FigureType.Rook, Player: Player.Black, Square: Squares.find(s => s.Name === 'A8')! },
    { Id: 26, Type: FigureType.Knight, Player: Player.Black, Square: Squares.find(s => s.Name === 'B8')! },
    { Id: 27, Type: FigureType.Bishop, Player: Player.Black, Square: Squares.find(s => s.Name === 'C8')! },
    { Id: 28, Type: FigureType.Queen, Player: Player.Black, Square: Squares.find(s => s.Name === 'D8')! },
    { Id: 29, Type: FigureType.King, Player: Player.Black, Square: Squares.find(s => s.Name === 'E8')! },
    { Id: 30, Type: FigureType.Bishop, Player: Player.Black, Square: Squares.find(s => s.Name === 'F8')! },
    { Id: 31, Type: FigureType.Knight, Player: Player.Black, Square: Squares.find(s => s.Name === 'G8')! },
    { Id: 32, Type: FigureType.Rook, Player: Player.Black, Square: Squares.find(s => s.Name === 'H8')! }
]
