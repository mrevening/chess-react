import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {InitFigures, Figure, Player, FigureType, RowLine, ColumnLine, PlayersDirection } from './Interface'

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
      const enPassantIsActive = false
      
      function anyActiveFigure() { return state.activeFigure }
      function isPlayersFigure() { return clickedPiece && clickedPiece.Player === state.currentPlayerTurn}
      function isClickedOpponentsFigure() { return clickedPiece && clickedPiece.Player !== state.currentPlayerTurn}
      function isClickedFigureAndActiveFigureTheSame() { return state.activeFigure?.Id === clickedPiece?.Id}
      function isOpponentPieceCaptured() { return clickedPiece && clickedPiece.Player !== state.currentPlayerTurn}
      function getOpponentsPiece() { return clickedPiece && state.figures.find(f => f.Id === clickedPiece.Id) }
      function isClickInTheSameColumn(activeFigure : Figure) { return activeFigure.Column === clickedColumn}
      function isClickInTheSameRow(activeFigure : Figure) { return activeFigure.Row === clickedRow}
      function isClickInDiagonal(activeFigure : Figure) { return Math.abs(activeFigure.Column - clickedColumn) === Math.abs(activeFigure.Row - clickedRow) }
      function isClickInNeigbourColumn(activeFigure : Figure) { return Math.abs(clickedColumn - activeFigure.Column) === 1}
      function isNSquaresInFrontEmpty(activeFigure : Figure, n: number) { return !state.figures.some(f => f.Column === activeFigure.Column && f.Row === activeFigure.Row + n*direction )}
      function isPieceOnStartLine(activeFigure : Figure) { return activeFigure.Row === pionsInitialLine}
      function clickedNSquaresInFront(activeFigure : Figure, n: number) { return isClickInTheSameColumn(activeFigure) && activeFigure.Row === clickedRow - n*direction }
      function clickedNSquaresInDiagonal(activeFigure : Figure, n: number) { return isClickInNeigbourColumn(activeFigure) && activeFigure.Row === clickedRow - n*direction }
      function isNSquaresForwardMove(activeFigure : Figure, n: number): boolean { return clickedNSquaresInFront(activeFigure, n) }
      function isNSquaresDiagonalMove(activeFigure : Figure, n: number): boolean { return clickedNSquaresInDiagonal(activeFigure, n) }
      function isNSquaresMoveAllDirection(activeFigure : Figure, n: number): boolean { return Math.abs(activeFigure.Column - clickedColumn) <= n && Math.abs(activeFigure.Row - clickedRow) <= n }
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
        state.figures[fi].Type = FigureType.Queen 
      }
      function otherFigureBlocksMoveInTheSameColumn(figure : Figure){
        const distance = clickedRow - figure.Row
        const moveDirection = distance > 0 ? 1: -1
        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.figures.some(f => f.Column === figure.Column && f.Row === figure.Row + i*moveDirection)) return true
        }
        if (state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false;
      }
      function otherFigureBlocksMoveInTheSameRow(figure : Figure){
        const distance = clickedColumn - figure.Column
        const moveDirection = distance > 0 ? 1: -1
        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.figures.some(f => f.Row === figure.Row && f.Column === figure.Column + i*moveDirection)) return true
        }
        if (state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false
      }
      function isDiagonalMoveBlocked(figure : Figure){
        const columnDistance = clickedColumn - figure.Column
        const rowDistance = clickedRow - figure.Row
        if(Math.abs(columnDistance) !== Math.abs(rowDistance)) return true
        const distance = columnDistance;

        const columnDirection = columnDistance > 0 ? 1: -1
        const rowDirection = rowDistance > 0 ? 1: -1

        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.figures.some(f => f.Row === figure.Row +i*rowDirection && f.Column === figure.Column + i*columnDirection)) return true
        }
        if (state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false
      }
      function isClickedFieldBlocked(){
        return state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn && f.Player === currentPlayer) ? true : false
      }

      function pawnMoves(activeFigure : Figure): boolean{
        if (isNSquaresForwardMove(activeFigure, 1) && canMoveForwardNSquares(activeFigure, 1)) return true
        else if(isNSquaresForwardMove(activeFigure, 2) && canMoveForwardNSquares(activeFigure, 2) && isPieceOnStartLine(activeFigure) ) return true
        else if(isNSquaresDiagonalMove(activeFigure, 1) && isClickedOpponentsFigure()) return true
         
        return false;
      }

      function knightMoves(activeFigure : Figure){


        return false
       }
       
      function bishopMoves(activeFigure : Figure){
        if (isClickInDiagonal(activeFigure) && !isDiagonalMoveBlocked(activeFigure)) return true
        return false
      }

      function rookMoves(activeFigure : Figure){
        if (isClickInTheSameColumn(activeFigure) && !otherFigureBlocksMoveInTheSameColumn(activeFigure)) return true
        else if (isClickInTheSameRow(activeFigure) && !otherFigureBlocksMoveInTheSameRow(activeFigure) ) return true

        return false
      }

      function queenMoves(activeFigure : Figure){
        if (isClickInTheSameColumn(activeFigure) && !otherFigureBlocksMoveInTheSameColumn(activeFigure)) return true
        else if (isClickInTheSameRow(activeFigure) && !otherFigureBlocksMoveInTheSameRow(activeFigure) ) return true
        else if (isClickInDiagonal(activeFigure) && !isDiagonalMoveBlocked(activeFigure)) return true
        return false
      }

      function kingMoves(activeFigure : Figure){
        if (isNSquaresMoveAllDirection(activeFigure, 1) && !isClickedFieldBlocked() ) return true
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