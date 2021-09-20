import { useAppSelector } from 'hooks'
import { RowLine, ColumnLine, FigureImagePaths } from './Interface'

interface FigureImageProps {
    col: ColumnLine
    row: RowLine
}

export default function FigureImage( { col, row }: FigureImageProps ){
    const figures = useAppSelector(store => store.board.figures)
    const figure = figures.find(f => f.Column === col && f.Row === row)
    const activeFigure = useAppSelector(store => store.board.activeFigure)
    const isActiveFigure = activeFigure && activeFigure.Column === col && activeFigure.Row === row
    const figureImg = figure && FigureImagePaths.find(p => p.Color === figure.Player && p.FigureType === figure.Type)?.ImgPath

    return figure ? <div className={(isActiveFigure ? 'activeFigure' : '' )}><img src={figure && "figures/" + figureImg} alt={figureImg} /></div> : <></>
}