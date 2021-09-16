import { Row } from 'reactstrap'
import BoardCol from './BoardCol'

interface BoardRowProps{
    row: string
    black: boolean
}

export default function BoardRow({ row, black }: BoardRowProps){
    let cols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return (
        <Row noGutters={true}>
            { cols.map((col, i) => <BoardCol key={col} row={row} col={col} black={i % 2 == 0 ? !black : black}/> )}
        </Row>
    );
}