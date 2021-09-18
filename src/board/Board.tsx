import './Board.scss'
import { Container } from 'reactstrap'
import BoardRow from './BoardRow'
import { Rows } from './Interface'

export default function Board(){
    let black: boolean = false;
    return (
        <Container>
            { Rows.map((row, i) => { return <BoardRow key={row} row={row} black={ i % 2 === 0 ? black : !black}/> })}
        </Container >
    )
}
