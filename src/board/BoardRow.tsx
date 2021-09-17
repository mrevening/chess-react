import { Row } from 'reactstrap'
import BoardCol from './BoardCol'
import { Columns, RowLine } from './Interface'

interface BoardRowProps{
    row: RowLine
    black: boolean
}

export default function BoardRow({ row, black }: BoardRowProps){
    return (
        <Row noGutters={true}>
            { Columns.map((col, i) => <BoardCol key={col} row={row} col={col} black={i % 2 === 0 ? !black : black}/> )}
        </Row>
    );
}