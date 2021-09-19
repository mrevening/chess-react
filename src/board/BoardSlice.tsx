import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {InitFigures, Figure, Player, FigureType, RowLine, ColumnLine} from './Interface'

interface BoardSlice {
  figures: Array<Figure>,
  activeFigure: Figure | undefined,
  currentPlayerTurn: Player
}

const initialState: BoardSlice = {
  figures: InitFigures,
  activeFigure: undefined,
  currentPlayerTurn: Player.White
}

interface ClickSquare {
  col: ColumnLine
  row: RowLine
}

enum PlayersDirection { Up = 1, Down = -1}



export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickSquare: (state, action: PayloadAction<ClickSquare>) => {
      const {col: clickedColumn, row: clickedRow} = action.payload
      const clickedFigure = state.figures.find(f => f.Column === clickedColumn && f.Row === clickedRow)
      const currentPlayer = state.currentPlayerTurn
      const activeFigure = state.activeFigure
      const direction = currentPlayer === Player.White ? PlayersDirection.Up : PlayersDirection.Down
      const pionsInitialLine = currentPlayer === Player.White ? RowLine.Two : RowLine.Seven
      
      function anyActiveFigure() { return state.activeFigure }
      function isPlayersFigure() { return clickedFigure && clickedFigure.Player === state.currentPlayerTurn}
      function isClickedFigureAndActiveFigureTheSame() { return state.activeFigure?.Id === clickedFigure?.Id}
      function isOpponentPieceCaptured() { return clickedFigure && clickedFigure.Player !== state.currentPlayerTurn}
      function getOpponentsFigure() { return clickedFigure && state.figures.find(f => f.Id === clickedFigure.Id) }
      function getLastLine() { return currentPlayer === Player.White ? RowLine.One : RowLine.Eight }
      function isClickInTheSameColumn(activeFigure : Figure) { return activeFigure.Column === clickedColumn}
      // function isSquareInFrontEmpty() { return !state.figures.some(f => f.Column === clickedColumn && f.Row === clickedRow )}
      function isNSquaresInFrontEmpty(activeFigure : Figure, n: number) { return !state.figures.some(f => f.Column === activeFigure.Column && f.Row === activeFigure.Row + n*direction )}
      // function isTwoSquaresInFrontEmpty() { return !state.figures.some(f => f.Column === clickedColumn && f.Row + 2*direction  === clickedRow )}
      function isPieceOnStartLine(activeFigure : Figure) { return activeFigure.Row === pionsInitialLine}
      function clickedNSquaresInFront(activeFigure : Figure, n: number) { return isClickInTheSameColumn(activeFigure) && activeFigure.Row === clickedRow - n*direction }
      // function clickedOneSquareInFront(activeFigure : Figure) { return isTheSameColumn(activeFigure) && activeFigure?.Row === clickedRow + 1*direction }
      // function clickedTwoSquareInFront(activeFigure : Figure) { return isTheSameColumn(activeFigure) && activeFigure?.Row === clickedRow + 2*direction }
      function isNSquaresForwardMove(activeFigure : Figure, n: number): boolean { return clickedNSquaresInFront(activeFigure, n) }
      // function isOneSquareForwardMove(activeFigure : Figure): boolean { return clickedNSquaresInFront(activeFigure, 1) }
      // function isTwoSquareForwardMove(activeFigure : Figure): boolean { return clickedNSquaresInFront(activeFigure, 2) }
      // function canMoveForwardOneSquare(activeFigure : Figure): boolean { return isNSquaresInFrontEmpty(1) && clickedNSquaresInFront(activeFigure, 1) }
      // function canMoveForwardTwoSquares(activeFigure : Figure): boolean { return isNSquaresInFrontEmpty(1) && isNSquaresInFrontEmpty(2) && isPieceOnStartLine(activeFigure) }
      function canMoveForwardNSquares(activeFigure : Figure, n: number): boolean { 
        for (let i = 1; i <= n; i++) {
          if (!isNSquaresInFrontEmpty(activeFigure, i)) return false
        }
        return true;
      }
      

      function changeTurn () { state.currentPlayerTurn = currentPlayer === Player.White ? Player.Black : Player.White }
      function playerClickedHisFigureFirstTime() { state.activeFigure = clickedFigure; }
      function playerClickedThisFigureSecondTime() { state.activeFigure = undefined; }
      function captureEnemyPiece() { state.figures = state.figures.filter(f => f.Id !== getOpponentsFigure()?.Id); }
      function moveFigure() { 
        const fi = state.figures.findIndex(f => f.Id === state.activeFigure?.Id)
        state.figures[fi].Column = clickedColumn
        state.figures[fi].Row = clickedRow
        state.activeFigure = undefined
        changeTurn()
       }
      function playerRemovesEnemysFigure () { captureEnemyPiece(); moveFigure(); }

      function pawnMoves(activeFigure : Figure): boolean{
      
        // const lastLine = getLastLine()
        // const startingLine = getStartLine()
        // const maxMove = (activeFigure.Row === startingLine) ? 2 : 1;

        // console.log(canMoveForwardNSquares(activeFigure, 1))
        if(isNSquaresForwardMove(activeFigure, 1) && canMoveForwardNSquares(activeFigure, 1)) return true
        else if(isNSquaresForwardMove(activeFigure, 2) && canMoveForwardNSquares(activeFigure, 2) && isPieceOnStartLine(activeFigure) ) return true
        

        // if (activeFigure.Column === clickedColumn){
        //   if (state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn)) return false
        //   else if (activeFigure?.Row === clickedRow + 1*direction ) return true
        // }
        // else if (Math.abs(clickedColumn - activeFigure.Column) === 1){
        //     const clickedEnemyFigure = state.figures.some(f => f.Row === clickedRow + direction && f.Column === clickedColumn && f.Player !== activeFigure.Player)
        //      if (clickedEnemyFigure) return true
        //      else return false
        //     // state.figures = clickedEnemyFigure ? state.figures.filter(f => f.Id !== clickedEnemyFigure.Id) : state.figures;
        // }
        else return false;
        // return false




        // const maxMove = (activeFigure.Player === Player.White && activeFigure.Row === RowLine.Two) || (activeFigure.Player === Player.Black && activeFigure.Row === RowLine.Seven) ? 2 : 1
        
        // else if (clickedRow === lastLine) { state.activeFigure.Type = FigureType.Queen; break}
        // else if (state.figures.some(f => f.Column === clickedCol && f.Row === clickedRow + direction )) return state
        // else if (activeFigure.Column === clickedCol && activeFigure.Row === clickedRow + maxMove*direction) break
      }

       function kingMoves(activeFigure : Figure){
        return false
       }

       function queenMoves(activeFigure : Figure){
        return false
       }

       function bishopMoves(activeFigure : Figure){
        return false
       }

       function knightMoves(activeFigure : Figure){
        return false
       }

       function rookMoves(activeFigure : Figure){
        return false
       }

      function isMoveAllowed(){
        if (!activeFigure) return false
        let isMoveAllowed = false
        switch (activeFigure.Type){
          case FigureType.Pawn: isMoveAllowed = pawnMoves(activeFigure); break
          case FigureType.Rook: isMoveAllowed = rookMoves(activeFigure); break
          case FigureType.Queen: isMoveAllowed = queenMoves(activeFigure); break
          case FigureType.King: isMoveAllowed = kingMoves(activeFigure); break
          case FigureType.Bishop: isMoveAllowed = bishopMoves(activeFigure); break
          case FigureType.Knight: isMoveAllowed = knightMoves(activeFigure); break
        }
        return isMoveAllowed
      }

      if (!anyActiveFigure()){
        if (isPlayersFigure()) {
          playerClickedHisFigureFirstTime()
          return state
        }
      }
      else {
        if (isClickedFigureAndActiveFigureTheSame()){  
          playerClickedThisFigureSecondTime()
          return state
        }
        if (!isMoveAllowed()) return state
        else{
          isOpponentPieceCaptured() ? playerRemovesEnemysFigure() : moveFigure()
        } 
      }
    },
  },
})

export const { clickSquare } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer