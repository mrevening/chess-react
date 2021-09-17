import './Board.scss'
import { Container } from 'reactstrap'
import BoardRow from './BoardRow'

export default function Board(){
    let rows: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let black: boolean = false;
    return (
        <Container>
            { rows.reverse().map((row, i) => { return <BoardRow key={row} row={row} black={ i % 2 === 0 ? black : !black}/> })}
        </Container >
    )
}
