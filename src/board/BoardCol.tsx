import { Col } from 'reactstrap'
import Tile from './Tile'
import { RowLine, ColumnLine } from './Interface'

interface BoardColProps{
    col: ColumnLine
    row: RowLine
}

export default function BoardCol({ row, col }: BoardColProps){
    let i: number = 0
    
    return (
        <Col>
            <Tile key={i++} row={row} col={col} />
        </Col>
    );
}