export enum Player { White, Black }
export enum Color { Light, Dark }
export enum FigureType { Pawn, Knight, Bishop, Rook, Queen, King }
export enum RowLine { One = 1, Two, Three, Four, Five, Six, Seven, Eight }
export enum ColumnLine { A = 1, B, C, D, E, F, G, H }
export enum PlayersDirection { Up = 1, Down = -1}
enum FigureAction { Move, Attack }

export interface IBoard{
    Squares: Array<ISquare>
    Figures: Array<IFigure>
    Actions: Array<IMove>
}

export interface ISquare {
    Id: number
    Name: string
    Row: RowLine
    Column: ColumnLine
    Color: Color
}

export interface IFigure {
    Id: number
    Type: FigureType
    Player: Player,
    Square: ISquare
}

export interface IMove {
    Figure: IFigure
    Square : ISquare
    Type: FigureAction
    IsExecutable: boolean
}

interface IFigureImagePath {
    FigureType: FigureType,
    Color: Player,
    ImgPath: string
}

export const FigureImagePaths: Array<IFigureImagePath> = [ 
    { FigureType: FigureType.Pawn, Color: Player.White, ImgPath: "wpawn.png"  },
    { FigureType: FigureType.Knight, Color: Player.White, ImgPath: "wknight.png"  },
    { FigureType: FigureType.Bishop, Color: Player.White, ImgPath: "wbishop.png"  },
    { FigureType: FigureType.Rook, Color: Player.White, ImgPath: "wrook.png"  },
    { FigureType: FigureType.Queen, Color: Player.White, ImgPath: "wqueen.png"  },
    { FigureType: FigureType.King, Color: Player.White, ImgPath: "wking.png"  },
    { FigureType: FigureType.Pawn, Color: Player.Black, ImgPath: "bpawn.png"  },
    { FigureType: FigureType.Knight, Color: Player.Black, ImgPath: "bknight.png"  },
    { FigureType: FigureType.Bishop, Color: Player.Black, ImgPath: "bbishop.png"  },
    { FigureType: FigureType.Rook, Color: Player.Black, ImgPath: "brook.png"  },
    { FigureType: FigureType.Queen, Color: Player.Black, ImgPath: "bqueen.png"  },
    { FigureType: FigureType.King, Color: Player.Black, ImgPath: "bking.png"  },
]

export const Rows: Array<RowLine> = [RowLine.Eight, RowLine.Seven, RowLine.Six, RowLine.Five, RowLine.Four, RowLine.Three, RowLine.Two, RowLine.One];
export const Columns: Array<ColumnLine> = [ColumnLine.A, ColumnLine.B, ColumnLine.C, ColumnLine.D, ColumnLine.E, ColumnLine.F, ColumnLine.G, ColumnLine.H];
export const Squares: Array<ISquare> = [
    { Id: 1, Name: 'A1', Row: RowLine.One, Column: ColumnLine.A, Color: Color.Dark },
    { Id: 2, Name: 'B1', Row: RowLine.One, Column: ColumnLine.B, Color: Color.Light },
    { Id: 3, Name: 'C1', Row: RowLine.One, Column: ColumnLine.C, Color: Color.Dark },
    { Id: 4, Name: 'D1', Row: RowLine.One, Column: ColumnLine.D, Color: Color.Light },
    { Id: 5, Name: 'E1', Row: RowLine.One, Column: ColumnLine.E, Color: Color.Dark },
    { Id: 6, Name: 'F1', Row: RowLine.One, Column: ColumnLine.F, Color: Color.Light },
    { Id: 7, Name: 'G1', Row: RowLine.One, Column: ColumnLine.G, Color: Color.Dark },
    { Id: 8, Name: 'H1', Row: RowLine.One, Column: ColumnLine.H, Color: Color.Light },
    { Id: 11, Name: 'A2', Row: RowLine.Two, Column: ColumnLine.A, Color: Color.Light },
    { Id: 12, Name: 'B2', Row: RowLine.Two, Column: ColumnLine.B, Color: Color.Dark },
    { Id: 13, Name: 'C2', Row: RowLine.Two, Column: ColumnLine.C, Color: Color.Light },
    { Id: 14, Name: 'D2', Row: RowLine.Two, Column: ColumnLine.D, Color: Color.Dark },
    { Id: 15, Name: 'E2', Row: RowLine.Two, Column: ColumnLine.E, Color: Color.Light },
    { Id: 16, Name: 'F2', Row: RowLine.Two, Column: ColumnLine.F, Color: Color.Dark },
    { Id: 17, Name: 'G2', Row: RowLine.Two, Column: ColumnLine.G, Color: Color.Light },
    { Id: 18, Name: 'H2', Row: RowLine.Two, Column: ColumnLine.H, Color: Color.Dark },

    { Id: 21, Name: 'A3', Row: RowLine.Three, Column: ColumnLine.A, Color: Color.Dark },
    { Id: 22, Name: 'B3', Row: RowLine.Three, Column: ColumnLine.B, Color: Color.Light },
    { Id: 23, Name: 'C3', Row: RowLine.Three, Column: ColumnLine.C, Color: Color.Dark },
    { Id: 24, Name: 'D3', Row: RowLine.Three, Column: ColumnLine.D, Color: Color.Light },
    { Id: 25, Name: 'E3', Row: RowLine.Three, Column: ColumnLine.E, Color: Color.Dark },
    { Id: 26, Name: 'F3', Row: RowLine.Three, Column: ColumnLine.F, Color: Color.Light },
    { Id: 27, Name: 'G3', Row: RowLine.Three, Column: ColumnLine.G, Color: Color.Dark },
    { Id: 28, Name: 'H3', Row: RowLine.Three, Column: ColumnLine.H, Color: Color.Light },
    { Id: 31, Name: 'A4', Row: RowLine.Four, Column: ColumnLine.A, Color: Color.Light },
    { Id: 32, Name: 'B4', Row: RowLine.Four, Column: ColumnLine.B, Color: Color.Dark },
    { Id: 33, Name: 'C4', Row: RowLine.Four, Column: ColumnLine.C, Color: Color.Light },
    { Id: 34, Name: 'D4', Row: RowLine.Four, Column: ColumnLine.D, Color: Color.Dark },
    { Id: 35, Name: 'E4', Row: RowLine.Four, Column: ColumnLine.E, Color: Color.Light },
    { Id: 36, Name: 'F4', Row: RowLine.Four, Column: ColumnLine.F, Color: Color.Dark },
    { Id: 37, Name: 'G4', Row: RowLine.Four, Column: ColumnLine.G, Color: Color.Light },
    { Id: 38, Name: 'H4', Row: RowLine.Four, Column: ColumnLine.H, Color: Color.Dark },

    { Id: 41, Name: 'A5', Row: RowLine.Five, Column: ColumnLine.A, Color: Color.Dark },
    { Id: 42, Name: 'B5', Row: RowLine.Five, Column: ColumnLine.B, Color: Color.Light },
    { Id: 43, Name: 'C5', Row: RowLine.Five, Column: ColumnLine.C, Color: Color.Dark },
    { Id: 44, Name: 'D5', Row: RowLine.Five, Column: ColumnLine.D, Color: Color.Light },
    { Id: 45, Name: 'E5', Row: RowLine.Five, Column: ColumnLine.E, Color: Color.Dark },
    { Id: 46, Name: 'F5', Row: RowLine.Five, Column: ColumnLine.F, Color: Color.Light },
    { Id: 47, Name: 'G5', Row: RowLine.Five, Column: ColumnLine.G, Color: Color.Dark },
    { Id: 48, Name: 'H5', Row: RowLine.Five, Column: ColumnLine.H, Color: Color.Light },
    { Id: 51, Name: 'A6', Row: RowLine.Six, Column: ColumnLine.A, Color: Color.Light },
    { Id: 52, Name: 'B6', Row: RowLine.Six, Column: ColumnLine.B, Color: Color.Dark },
    { Id: 53, Name: 'C6', Row: RowLine.Six, Column: ColumnLine.C, Color: Color.Light },
    { Id: 54, Name: 'D6', Row: RowLine.Six, Column: ColumnLine.D, Color: Color.Dark },
    { Id: 55, Name: 'E6', Row: RowLine.Six, Column: ColumnLine.E, Color: Color.Light },
    { Id: 56, Name: 'F6', Row: RowLine.Six, Column: ColumnLine.F, Color: Color.Dark },
    { Id: 57, Name: 'G6', Row: RowLine.Six, Column: ColumnLine.G, Color: Color.Light },
    { Id: 58, Name: 'H6', Row: RowLine.Six, Column: ColumnLine.H, Color: Color.Dark },

    { Id: 61, Name: 'A7', Row: RowLine.Seven, Column: ColumnLine.A, Color: Color.Dark },
    { Id: 62, Name: 'B7', Row: RowLine.Seven, Column: ColumnLine.B, Color: Color.Light },
    { Id: 63, Name: 'C7', Row: RowLine.Seven, Column: ColumnLine.C, Color: Color.Dark },
    { Id: 64, Name: 'D7', Row: RowLine.Seven, Column: ColumnLine.D, Color: Color.Light },
    { Id: 65, Name: 'E7', Row: RowLine.Seven, Column: ColumnLine.E, Color: Color.Dark },
    { Id: 66, Name: 'F7', Row: RowLine.Seven, Column: ColumnLine.F, Color: Color.Light },
    { Id: 67, Name: 'G7', Row: RowLine.Seven, Column: ColumnLine.G, Color: Color.Dark },
    { Id: 68, Name: 'H7', Row: RowLine.Seven, Column: ColumnLine.H, Color: Color.Light },
    { Id: 71, Name: 'A8', Row: RowLine.Eight, Column: ColumnLine.A, Color: Color.Light },
    { Id: 72, Name: 'B8', Row: RowLine.Eight, Column: ColumnLine.B, Color: Color.Dark },
    { Id: 73, Name: 'C8', Row: RowLine.Eight, Column: ColumnLine.C, Color: Color.Light },
    { Id: 74, Name: 'D8', Row: RowLine.Eight, Column: ColumnLine.D, Color: Color.Dark },
    { Id: 75, Name: 'E8', Row: RowLine.Eight, Column: ColumnLine.E, Color: Color.Light },
    { Id: 76, Name: 'F8', Row: RowLine.Eight, Column: ColumnLine.F, Color: Color.Dark },
    { Id: 77, Name: 'G8', Row: RowLine.Eight, Column: ColumnLine.G, Color: Color.Light },
    { Id: 78, Name: 'H8', Row: RowLine.Eight, Column: ColumnLine.H, Color: Color.Dark },
]

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


// function InitBoard(){



//     let fieldsCount = Rows.length * Columns.length;

//     for (let i = 1; i <= fieldsCount; i++){
//         Rows.map((r) => Columns.map(c => {
//             const fi = InitFigures.findIndex(f => f.Row === r && f.Column === c)
//             Board.Squares.push({ Id: i, Row: r, Column: c, Color: Color.Light })
//             Board.Figures.push(InitFigures[fi]) 
//         }))
//     }
//     Board.Moves.
//     return Board
// }

// function InitActions(board: IBoard){
//     let actions
//     board.Figures.map(f => board.Actions.push({
//         Figure: f
//         Square: board.Figures[0].
//         Type: FigureAction.Move
//         IsExecutable: true
//     }))

//     return actions
// }


export const Board: IBoard = { Squares: Squares, Figures: Figures, Actions: [] }