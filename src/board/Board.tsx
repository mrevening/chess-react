import './Board.scss'
import { Container } from 'reactstrap'
import BoardRow from './BoardRow'
import { Rows } from './Interface'

export default function Board(){
    return (
        <Container>
            { Rows.map((row, i) => { return <BoardRow key={row} row={row} /> })}
        </Container >
    )
}
