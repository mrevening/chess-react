import FigureImage from './FigureImage'
import { useAppDispatch } from 'hooks'
import { clickTile } from './BoardSlice'
import { RowLine, ColumnLine } from './Interface'

interface TileProps {
    col: ColumnLine
    row: RowLine
    isBlack: boolean
}

export default function Tile( { col, row, isBlack }: TileProps ){
    const dispatch = useAppDispatch();
    return(
        <div className={'tile ' + (isBlack ? 'blackTile' : 'whiteTile' )} onClick={() => dispatch(clickTile({col, row}))}><FigureImage row={row} col={col} /></div>
    );
}