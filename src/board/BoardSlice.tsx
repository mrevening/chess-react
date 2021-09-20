import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {InitFigures, Figure, Player, FigureType, RowLine, ColumnLine } from './Interface'

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
      const clickedPiece = state.figures.find(f => f.Column === clickedColumn && f.Row === clickedRow)
      const currentPlayer = state.currentPlayerTurn
      const activeFigure = state.activeFigure
      const direction = currentPlayer === Player.White ? PlayersDirection.Up : PlayersDirection.Down
      const pionsInitialLine = currentPlayer === Player.White ? RowLine.Two : RowLine.Seven
      const lastRow = currentPlayer === Player.White ? RowLine.Eight : RowLine.One
      
      function anyActiveFigure() { return state.activeFigure }
      function isPlayersFigure() { return clickedPiece && clickedPiece.Player === state.currentPlayerTurn}
      function isClickedOpponentsFigure() { return clickedPiece && clickedPiece.Player !== state.currentPlayerTurn}
      function isClickedFigureAndActiveFigureTheSame() { return state.activeFigure?.Id === clickedPiece?.Id}
      function isOpponentPieceCaptured() { return clickedPiece && clickedPiece.Player !== state.currentPlayerTurn}
      function getOpponentsPiece() { return clickedPiece && state.figures.find(f => f.Id === clickedPiece.Id) }
      function isClickInTheSameColumn(activeFigure : Figure) { return activeFigure.Column === clickedColumn}
      function isClickInNeigbourColumn(activeFigure : Figure) { return Math.abs(clickedColumn - activeFigure.Column) === 1}
      function isNSquaresInFrontEmpty(activeFigure : Figure, n: number) { return !state.figures.some(f => f.Column === activeFigure.Column && f.Row === activeFigure.Row + n*direction )}
      function isPieceOnStartLine(activeFigure : Figure) { return activeFigure.Row === pionsInitialLine}
      function clickedNSquaresInFront(activeFigure : Figure, n: number) { return isClickInTheSameColumn(activeFigure) && activeFigure.Row === clickedRow - n*direction }
      function clickedNSquaresInDiagonal(activeFigure : Figure, n: number) { return isClickInNeigbourColumn(activeFigure) && activeFigure.Row === clickedRow - n*direction }
      function isNSquaresForwardMove(activeFigure : Figure, n: number): boolean { return clickedNSquaresInFront(activeFigure, n) }
      function isNSquaresDiagonalMove(activeFigure : Figure, n: number): boolean { return clickedNSquaresInDiagonal(activeFigure, n) }
      function canMoveForwardNSquares(activeFigure : Figure, n: number): boolean { 
        for (let i = 1; i <= n; i++) { if (!isNSquaresInFrontEmpty(activeFigure, i)) return false }
        return true;
      }
      function isFigureOnTheLastRow(activeFigureId : number) { return state.figures.find(f => f.Id === activeFigureId)?.Row === lastRow}
      


      function playerClickedHisPieceFirstTime() { state.activeFigure = clickedPiece; }
      function playerClickedThisPieceSecondTime() { state.activeFigure = undefined; }
      function captureEnemyPiece() { state.figures = state.figures.filter(f => f.Id !== getOpponentsPiece()?.Id); }
      function moveFigure() { 
        const fi = state.figures.findIndex(f => f.Id === state.activeFigure?.Id)
        state.figures[fi].Column = clickedColumn
        state.figures[fi].Row = clickedRow
       }
      function changeTurn () { state.currentPlayerTurn = currentPlayer === Player.White ? Player.Black : Player.White }
      function playerRemovesEnemyPiece () { captureEnemyPiece(); moveFigure(); }
      function changeFigureToQueen(figure : Figure) { 
        const fi = state.figures.findIndex(f => f.Id === figure.Id)
        console.log(fi)
        state.figures[fi].Type = FigureType.Queen 
        console.log(state.figures[fi].Type)
      }

      function pawnMoves(activeFigure : Figure): boolean{
        if (isNSquaresForwardMove(activeFigure, 1) && canMoveForwardNSquares(activeFigure, 1)) return true
        else if(isNSquaresForwardMove(activeFigure, 2) && canMoveForwardNSquares(activeFigure, 2) && isPieceOnStartLine(activeFigure) ) return true
        else if(isNSquaresDiagonalMove(activeFigure, 1) && isClickedOpponentsFigure()) return true
         
        return false;
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

      function afterMoveAction(){
        if (!activeFigure) return false
        switch (activeFigure.Type){
          case FigureType.Pawn:
            if (isFigureOnTheLastRow(activeFigure.Id)) changeFigureToQueen(activeFigure) 
            break
        }
        state.activeFigure = undefined
        changeTurn()
      }


      if (!anyActiveFigure()){
        if (isPlayersFigure()) {
          playerClickedHisPieceFirstTime()
          return state
        }
      }
      else {
        if (isClickedFigureAndActiveFigureTheSame()){  
          playerClickedThisPieceSecondTime()
          return state
        }
        else if (!isMoveAllowed()) return state
        else{
          isOpponentPieceCaptured() ? playerRemovesEnemyPiece() : moveFigure()
          afterMoveAction()
        } 
      }
    },
  },
})

export const { clickSquare } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer