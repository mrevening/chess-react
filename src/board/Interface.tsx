export enum Player { White, Black }
export enum FigureType { Pawn, Rook, Knight, Bishop, Queen, King }
export enum RowLine { One = 1, Two = 2, Three = 3, Four = 4, Five = 5, Six = 6, Seven = 7, Eight = 8 }
export enum ColumnLine { A = "A", B = "B", C = "C", D = "D", E = "E", F = "F", G = "G", H = "H" }
export const Rows: Array<RowLine> = [RowLine.Eight, RowLine.Seven, RowLine.Six, RowLine.Five, RowLine.Four, RowLine.Three, RowLine.Two, RowLine.One];
export const Columns: Array<ColumnLine> = [ColumnLine.A, ColumnLine.B, ColumnLine.C, ColumnLine.D, ColumnLine.E, ColumnLine.F, ColumnLine.G, ColumnLine.H];

export interface Figure {
    Id: number
    Type: FigureType
    Player: Player,
    Column: ColumnLine,
    Row: RowLine,
    ImgPath: string
}

export const InitFigures: Array<Figure> = [
    { Id: 1, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.A, ImgPath: "wpawn.png" },
    { Id: 2, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.B, ImgPath: "wpawn.png" },
    { Id: 3, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.C, ImgPath: "wpawn.png" },
    { Id: 4, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.D, ImgPath: "wpawn.png" },
    { Id: 5, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.E, ImgPath: "wpawn.png" },
    { Id: 6, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.F, ImgPath: "wpawn.png" },
    { Id: 7, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.G, ImgPath: "wpawn.png" },
    { Id: 8, Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.H, ImgPath: "wpawn.png" },

    { Id: 9, Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.A, ImgPath: "wrook.png" },
    { Id: 10, Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.B, ImgPath: "wbishop.png" },
    { Id: 11, Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.C, ImgPath: "wknight.png" },
    { Id: 12, Type: FigureType.Queen, Player: Player.White, Row: RowLine.One, Column: ColumnLine.D, ImgPath: "wqueen.png" },
    { Id: 13, Type: FigureType.King, Player: Player.White, Row: RowLine.One, Column: ColumnLine.E, ImgPath: "wking.png" },
    { Id: 14, Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.F, ImgPath: "wknight.png" },
    { Id: 15, Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.G, ImgPath: "wbishop.png" },
    { Id: 16, Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.H, ImgPath: "wrook.png" },

    { Id: 17, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.A, ImgPath: "bpawn.png" },
    { Id: 18, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.B, ImgPath: "bpawn.png" },
    { Id: 19, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.C, ImgPath: "bpawn.png" },
    { Id: 20,  Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.D, ImgPath: "bpawn.png" },
    { Id: 21, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.E, ImgPath: "bpawn.png" },
    { Id: 22, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.F, ImgPath: "bpawn.png" },
    { Id: 23, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.G, ImgPath: "bpawn.png" },
    { Id: 24, Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.H, ImgPath: "bpawn.png" },

    { Id: 25, Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.A, ImgPath: "brook.png" },
    { Id: 26, Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.B, ImgPath: "bbishop.png" },
    { Id: 27, Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.C, ImgPath: "bknight.png" },
    { Id: 28, Type: FigureType.Queen, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.D, ImgPath: "bqueen.png" },
    { Id: 29, Type: FigureType.King, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.E, ImgPath: "bking.png" },
    { Id: 30, Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.F, ImgPath: "bknight.png" },
    { Id: 31, Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.G, ImgPath: "bbishop.png" },
    { Id: 32, Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.H, ImgPath: "brook.png" }
]