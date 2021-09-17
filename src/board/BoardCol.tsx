import { Col } from 'reactstrap'
import Tile from './Tile'
import { RowLine, ColumnLine } from './Interface'

interface BoardColProps{
    col: ColumnLine
    row: RowLine
    black: boolean
}

export default function BoardCol({ row, col, black }: BoardColProps){
    let i: number = 0
    
    return (
        <Col>
            <Tile key={i++} row={row} col={col} isBlack={!black} />
        </Col>
    );
}