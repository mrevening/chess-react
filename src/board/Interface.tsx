export enum Player { White, Black }
export enum FigureType { Pawn, Knight, Bishop, Rook, Queen, King }
export enum RowLine { One = 1, Two, Three, Four, Five, Six, Seven, Eight }
export enum ColumnLine { A = 1, B, C, D, E, F, G, H }
export const Rows: Array<RowLine> = [RowLine.Eight, RowLine.Seven, RowLine.Six, RowLine.Five, RowLine.Four, RowLine.Three, RowLine.Two, RowLine.One];
export const Columns: Array<ColumnLine> = [ColumnLine.A, ColumnLine.B, ColumnLine.C, ColumnLine.D, ColumnLine.E, ColumnLine.F, ColumnLine.G, ColumnLine.H];

interface FigureImagePath {
    FigureType: FigureType,
    Color: Player,
    ImgPath: string
}
export const FigureImagePaths: Array<FigureImagePath> = [ 
    { FigureType: FigureType.Pawn, Color: Player.White, ImgPath: "wpawn.png"  },
    { FigureType: FigureType.Knight, Color: Player.White, ImgPath: "wknight.png"  },
    { FigureType: FigureType.Bishop, Color: Player.White, ImgPath: "wbishop.png"  },
    { FigureType: FigureType.Rook, Color: Player.White, ImgPath: "wpawn.png"  },
    { FigureType: FigureType.Queen, Color: Player.White, ImgPath: "wqueen.png"  },
    { FigureType: FigureType.King, Color: Player.White, ImgPath: "wking.png"  },
    { FigureType: FigureType.Pawn, Color: Player.Black, ImgPath: "bpawn.png"  },
    { FigureType: FigureType.Knight, Color: Player.Black, ImgPath: "bknight.png"  },
    { FigureType: FigureType.Bishop, Color: Player.Black, ImgPath: "bbishop.png"  },
    { FigureType: FigureType.Rook, Color: Player.Black, ImgPath: "bpawn.png"  },
    { FigureType: FigureType.Queen, Color: Player.Black, ImgPath: "bqueen.png"  },
    { FigureType: FigureType.King, Color: Player.Black, ImgPath: "bking.png"  },
]

export interface Figure {
    Id: number
    Type: FigureType
    Player: Player,
    Column: ColumnLine,
    Row: RowLine
}

export const InitFigures: Array<Figure> = [
    { Id: 1, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.A },
    { Id: 2, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.B },
    { Id: 3, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.C },
    { Id: 4, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.D },
    { Id: 5, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.E },
    { Id: 6, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.F },
    { Id: 7, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.G },
    { Id: 8, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.H },

    { Id: 9, Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.A },
    { Id: 10, Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.B },
    { Id: 11, Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.C },
    { Id: 12, Type: FigureType.Queen, Player: Player.White, Row: RowLine.One, Column: ColumnLine.D },
    { Id: 13, Type: FigureType.King, Player: Player.White, Row: RowLine.One, Column: ColumnLine.E },
    { Id: 14, Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.F },
    { Id: 15, Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.G },
    { Id: 16, Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.H },

    { Id: 17, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.A },
    { Id: 18, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.B },
    { Id: 19, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.C },
    { Id: 20, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.D },
    { Id: 21, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.E },
    { Id: 22, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.F },
    { Id: 23, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.G },
    { Id: 24, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.H },

    { Id: 25, Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.A },
    { Id: 26, Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.B },
    { Id: 27, Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.C },
    { Id: 28, Type: FigureType.Queen, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.D },
    { Id: 29, Type: FigureType.King, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.E },
    { Id: 30, Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.F },
    { Id: 31, Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.G },
    { Id: 32, Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.H }
]