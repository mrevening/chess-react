export enum Player { White, Black }
export enum FigureType { Pawn, Rook, Knight, Bishop, Queen, King }
export enum RowLine { One = 1, Two = 2, Three = 3, Four = 4, Five = 5, Six = 6, Seven = 7, Eight = 8 }
export enum ColumnLine { A = "A", B = "B", C = "C", D = "D", E = "E", F = "F", G = "G", H = "H" }
export const Rows: Array<RowLine> = [RowLine.One, RowLine.Two, RowLine.Three, RowLine.Four, RowLine.Five, RowLine.Six, RowLine.Seven, RowLine.Eight];
export const Columns: Array<ColumnLine> = [ColumnLine.A, ColumnLine.B, ColumnLine.C, ColumnLine.D, ColumnLine.E, ColumnLine.F, ColumnLine.G, ColumnLine.H];

export interface Figure {
    Type: FigureType
    Player: Player,
    Column: ColumnLine,
    Row: RowLine,
    ImgPath: string
}

export const InitFigures: Array<Figure> = [
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.A, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.B, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.C, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.D, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.E, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.F, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.G, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.White, Row: RowLine.Two, Column: ColumnLine.H, ImgPath: "wpawn.png" },

    { Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.A, ImgPath: "wrook.png" },
    { Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.B, ImgPath: "wbishop.png" },
    { Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.C, ImgPath: "wknight.png" },
    { Type: FigureType.Queen, Player: Player.White, Row: RowLine.One, Column: ColumnLine.D, ImgPath: "wqueen.png" },
    { Type: FigureType.King, Player: Player.White, Row: RowLine.One, Column: ColumnLine.E, ImgPath: "wking.png" },
    { Type: FigureType.Bishop, Player: Player.White, Row: RowLine.One, Column: ColumnLine.F, ImgPath: "wknight.png" },
    { Type: FigureType.Knight, Player: Player.White, Row: RowLine.One, Column: ColumnLine.G, ImgPath: "wbishop.png" },
    { Type: FigureType.Rook, Player: Player.White, Row: RowLine.One, Column: ColumnLine.H, ImgPath: "wrook.png" },

    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.A, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.B, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.C, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.D, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.E, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.F, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.G, ImgPath: "wpawn.png" },
    { Type: FigureType.Pawn, Player: Player.Black, Row: RowLine.Seven, Column: ColumnLine.H, ImgPath: "wpawn.png" },

    { Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.A, ImgPath: "brook.png" },
    { Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.B, ImgPath: "bbishop.png" },
    { Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.C, ImgPath: "bknight.png" },
    { Type: FigureType.Queen, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.D, ImgPath: "bqueen.png" },
    { Type: FigureType.King, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.E, ImgPath: "bking.png" },
    { Type: FigureType.Bishop, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.F, ImgPath: "bknight.png" },
    { Type: FigureType.Knight, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.G, ImgPath: "bbishop.png" },
    { Type: FigureType.Rook, Player: Player.Black, Row: RowLine.Eight, Column: ColumnLine.H, ImgPath: "brook.png" },

]