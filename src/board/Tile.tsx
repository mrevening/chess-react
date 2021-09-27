import FigureImage from './FigureImage'
import { useAppDispatch } from 'hooks'
import { clickSquare } from './BoardSlice'
import { RowLine, ColumnLine, Color } from './Interface'
import { useAppSelector } from 'hooks'

interface TileProps {
    col: ColumnLine
    row: RowLine
}

export default function Tile( { col, row }: TileProps ){
    const dispatch = useAppDispatch();
    const board = useAppSelector(store => store.board)
    const square = board.Squares.find(f => f.Column === col && f.Row === row)!
    return(
        <div className={'tile ' + (square.Color === Color.Dark ? 'blackTile' : 'whiteTile' )} onClick={() => dispatch(clickSquare({square}))}><FigureImage square={square} /></div>
    );
}