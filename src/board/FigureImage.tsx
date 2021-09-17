import { useAppSelector } from 'hooks'
import { RowLine, ColumnLine } from './Interface'

interface FigureImageProps {
    col: ColumnLine
    row: RowLine
}

export default function FigureImage( { col, row }: FigureImageProps ){
    const figures = useAppSelector(store => store.board.figures)
    const figure = figures.find(f => f.Column === col && f.Row === row)

    const activeFigure = useAppSelector(store => store.board.activeFigure)
    const isActiveFigure = figure && activeFigure && activeFigure?.Column == col && activeFigure?.Row == row

    return figure ? <div className={(isActiveFigure ? 'activeFigure' : '' )}><img src={figure && "figures/" + figure.ImgPath} alt={figure && figure.Type.toString()} /></div> : <></>
}