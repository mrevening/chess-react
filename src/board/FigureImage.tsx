import { useAppSelector } from 'hooks'
import ISquare from 'board/interface/ISquare'
import { FigureImagePaths } from './repository/FigureImagePaths'

interface FigureImageProps {
    square: ISquare
}

export default function FigureImage( { square }: FigureImageProps ){
    const figures = useAppSelector(store => store.board.Figures)
    const figure = figures.find(f => f.Square.Column === square.Column && f.Square.Row === square.Row)
    const activeFigure = useAppSelector(store => store.board.activeFigure)
    const isActiveFigure = activeFigure && activeFigure.Square == square
    const figureImg = figure && FigureImagePaths.find(p => p.Color === figure.Player && p.FigureType === figure.Type)?.ImgPath

    return figure ? <div className={(isActiveFigure ? 'activeFigure' : '' )}><img src={figure && "figures/" + figureImg} alt={figureImg} /></div> : <></>
}