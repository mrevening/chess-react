import { useAppSelector } from 'hooks'

interface FigureImageProps {
    col: string
    row: string
}

export default function FigureImage( { col, row }: FigureImageProps ){
    const figures = useAppSelector(store => store.board.figures)
    const figure = figures.find(f => f.indexOf(col) >= 0 && f.indexOf(row) >= 0)

    const activeFigure = useAppSelector(store => store.board.activeFigure)
    const isActiveFigure = figure && activeFigure && activeFigure?.indexOf(col) >= 0 && activeFigure?.indexOf(row) >= 0

    return figure ? <div className={'tile ' + (isActiveFigure ? 'activeFigure' : '' )}><img src={figure && "figures/" + figure.slice(3) +".png"} alt={figure && figure.slice(3)} /></div> : <></>
}