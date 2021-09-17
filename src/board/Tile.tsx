import FigureImage from './FigureImage'
import { useAppDispatch } from 'hooks'
import { clickTile } from './BoardSlice'

interface TileProps {
    col: string
    row: string
    isBlack: boolean
}

export default function Tile( { col, row, isBlack }: TileProps ){
    const dispatch = useAppDispatch();
    return(
        <div className={'tile ' + (isBlack ? 'blackTile' : 'whiteTile' )} onClick={() => dispatch(clickTile({col, row}))}><FigureImage row={row} col={col} /></div>
    );
}