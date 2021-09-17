interface TileProps {
    col: string
    row: string
    isBlack: boolean
}

export default function Tile( { col, row, isBlack }: TileProps ){
    return(
        <div className={'tile ' + (isBlack ? 'blackTile' : 'whiteTile' )} >{col}{row}</div>
    );
}