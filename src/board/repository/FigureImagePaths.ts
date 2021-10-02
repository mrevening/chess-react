import IFigureImagePath from 'board/interface/IFigureImagePath'
import { FigureType } from 'board/enum/FigureType'
import { Player } from 'board/enum/Player'

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