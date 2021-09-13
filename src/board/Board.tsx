import './Board.css'
import Tile from './Tile'
import { Container, Row, Col } from 'reactstrap'

export default function Board(){
    let rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let cols: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
    let isBlack: boolean = true;
    return (
        <Container>
        {
        rows.map(row => {
            // <Row>
            { return cols.map(col => {
                // <Col>
                    return <Tile key={row+col} row={row} col={col} isBlack={isBlack}  />
                // </Col>
            }) }
            // </Row>
        }) 
        }
        </ Container >
    )
}