import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import ISquare from 'board/interface/ISquare'
import IMove from 'board/interface/IMove'
import IFigure from 'board/interface/IFigure'

import { Player } from 'board/enum/Player'
import { FigureType } from 'board/enum/FigureType'
import { RowLine } from 'board/enum/RowLine'
import { PlayersDirection } from 'board/enum/PlayersDirection'

import { Squares } from 'board/repository/Squares'
import { Figures } from 'board/repository/Figures'

interface BoardSlice {
  activeFigure: IFigure | undefined,
  currentPlayerTurn: Player,
  Squares: Array<ISquare>
  Figures: Array<IFigure>
  Actions: Array<IMove>
}

const initialState: BoardSlice = {
  activeFigure: undefined,
  currentPlayerTurn: Player.White,
  Squares: Squares,
  Figures: Figures,
  Actions: []
}

interface ClickSquare {
  square: ISquare
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickSquare: (state, action: PayloadAction<ClickSquare>) => {
      const clickedSquare = action.payload.square
      const clickedRow = clickedSquare.Row
      const clickedColumn = clickedSquare.Column
      const currentPlayer = state.currentPlayerTurn
      const opponentPlayer = state.currentPlayerTurn === Player.White ? Player.Black : Player.White
      let activeFigure : IFigure
      const direction = currentPlayer === Player.White ? PlayersDirection.Up : PlayersDirection.Down
      const pionsInitialLine = currentPlayer === Player.White ? RowLine.Two : RowLine.Seven
      const lastRow = currentPlayer === Player.White ? RowLine.Eight : RowLine.One
      const enPassantIsActive = false

      if (!state.activeFigure){
        if (isPlayersFigure()) {
          setActiveFigureWhenPlayerClickedHisPieceFirstTime()
          return state
        }
      }
      else {
        activeFigure = state.activeFigure
        if (isClickedFigureAndActiveFigureTheSame()){  
          unsetActiveFigureWhenPlayerClickedThisPieceSecondTime()
          return state
        }
        else if (!isMoveAllowed()) return state
        else{
          console.log(isOpponentPieceCaptured())
          isOpponentPieceCaptured() ? playerRemovesEnemyPiece() : moveFigure()
          afterMoveAction()
        } 
      }

      function isMoveAllowed(){
        if (!activeFigure) return false
        if (isAgainstGlobalMoveRules(activeFigure)) return false
        let isMoveAllowed = false
        switch (activeFigure.Type){
          case FigureType.Pawn: isMoveAllowed = pawnMoves(activeFigure); break
          case FigureType.Knight: isMoveAllowed = knightMoves(activeFigure); break
          case FigureType.Bishop: isMoveAllowed = bishopMoves(activeFigure); break
          case FigureType.Rook: isMoveAllowed = rookMoves(activeFigure); break
          case FigureType.Queen: isMoveAllowed = queenMoves(activeFigure); break
          case FigureType.King: isMoveAllowed = kingMoves(activeFigure); break
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
      
      function isPlayersFigure() { return state.Figures.some(f => f.Square.Id === clickedSquare.Id && f.Player == currentPlayer) }
      function isClickedOpponentsFigure() { return state.Figures.find(f => f.Square.Id == clickedSquare.Id && f.Player === opponentPlayer) }
      function isClickedFigureAndActiveFigureTheSame() { return state.Figures.find(f => f.Square.Id === clickedSquare.Id && f.Id === activeFigure.Id) }
      function isOpponentPieceCaptured() { return state.Figures.find(f => f.Square.Id == clickedSquare.Id && f.Player === opponentPlayer) ?? false }
      function getOpponentsPiece() { return state.Figures.find(f => f.Square.Id === clickedSquare.Id)! }
      function isClickInTheSameColumn(activeFigure : IFigure) { return activeFigure.Square.Column === clickedColumn}
      function isClickInTheSameRow(activeFigure : IFigure) { return activeFigure.Square.Row === clickedRow}
      function isClickInDiagonal(activeFigure : IFigure) { return Math.abs(activeFigure.Square.Column - clickedColumn) === Math.abs(activeFigure.Square.Row - clickedRow) }
      function isClickInNeigbourColumn(activeFigure : IFigure) { return Math.abs(clickedColumn - activeFigure.Square.Column) === 1}
      function isNSquaresInFrontEmpty(activeFigure : IFigure, n: number) { return !state.Figures.some(f => f.Square.Column === activeFigure.Square.Column && f.Square.Row === activeFigure.Square.Row + n*direction )}
      function isPieceOnStartLine(activeFigure : IFigure) { return activeFigure.Square.Row === pionsInitialLine}
      function clickedNSquaresInFront(activeFigure : IFigure, n: number) { return isClickInTheSameColumn(activeFigure) && activeFigure.Square.Row === clickedRow - n*direction }
      function clickedNSquaresInDiagonal(activeFigure : IFigure, n: number) { return isClickInNeigbourColumn(activeFigure) && activeFigure.Square.Row === clickedRow - n*direction }
      function isNSquaresForwardMove(activeFigure : IFigure, n: number): boolean { return clickedNSquaresInFront(activeFigure, n) }
      function isNSquaresDiagonalMove(activeFigure : IFigure, n: number): boolean { return clickedNSquaresInDiagonal(activeFigure, n) }
      function isNSquaresMoveAllDirection(activeFigure : IFigure, n: number): boolean { return Math.abs(activeFigure.Square.Column - clickedColumn) <= n && Math.abs(activeFigure.Square.Row - clickedRow) <= n }
      function isKnightMove(activeFigure : IFigure): boolean { 
        return (Math.abs(activeFigure.Square.Column - clickedColumn) === 2 && Math.abs(activeFigure.Square.Row - clickedRow) === 1)
        ||  (Math.abs(activeFigure.Square.Column - clickedColumn) === 1 && Math.abs(activeFigure.Square.Row - clickedRow) === 2)
      }
      function canMoveForwardNSquares(activeFigure : IFigure, n: number): boolean { 
        for (let i = 1; i <= n; i++) { if (!isNSquaresInFrontEmpty(activeFigure, i)) return false }
        return true;
      }
      function isFigureOnTheLastRow(activeFigureId : number) { return state.Figures.find(f => f.Id === activeFigureId)?.Square.Row === lastRow}
      

      function setActiveFigureWhenPlayerClickedHisPieceFirstTime() { state.activeFigure = state.Figures.find(f => f.Square.Id === clickedSquare.Id) }
      function unsetActiveFigureWhenPlayerClickedThisPieceSecondTime() { state.activeFigure = undefined }
      function captureEnemyPiece() { state.Figures = state.Figures.filter(f => f.Id !== getOpponentsPiece().Id); }
      function moveFigure() { 
        const square = state.Squares.find(s => s.Column === clickedColumn && s.Row === clickedRow)!
        state.Figures.find(f => f.Id === state.activeFigure!.Id)!.Square = square
       }
      function changeTurn () { state.currentPlayerTurn = currentPlayer === Player.White ? Player.Black : Player.White }
      function playerRemovesEnemyPiece () { captureEnemyPiece(); moveFigure(); }
      function changeFigureToQueen(figure : IFigure) { 
        const fi = state.Figures.findIndex(f => f.Id === figure.Id)
        state.Figures[fi].Type = FigureType.Queen 
      }
      function otherFigureBlocksMoveInTheSameColumn(figure : IFigure){
        const distance = clickedRow - figure.Square.Row
        const moveDirection = distance > 0 ? 1: -1
        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.Figures.some(f => f.Square.Column === figure.Square.Column && f.Square.Row === figure.Square.Row + i*moveDirection)) return true
        }
        if (state.Figures.some(f => f.Square.Row === clickedRow && f.Square.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false;
      }
      function otherFigureBlocksMoveInTheSameRow(figure : IFigure){
        const distance = clickedColumn - figure.Square.Column
        const moveDirection = distance > 0 ? 1: -1
        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.Figures.some(f => f.Square.Row === figure.Square.Row && f.Square.Column === figure.Square.Column + i*moveDirection)) return true
        }
        if (state.Figures.some(f => f.Square.Row === clickedRow && f.Square.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false
      }
      function isDiagonalMoveBlocked(figure : IFigure){
        const columnDistance = clickedColumn - figure.Square.Column
        const rowDistance = clickedRow - figure.Square.Row
        if(Math.abs(columnDistance) !== Math.abs(rowDistance)) return true
        const distance = columnDistance;

        const columnDirection = columnDistance > 0 ? 1: -1
        const rowDirection = rowDistance > 0 ? 1: -1

        for(let i = 1; i <= Math.abs(distance)-1; i++){
          if (state.Figures.some(f => f.Square.Row === figure.Square.Row +i*rowDirection && f.Square.Column === figure.Square.Column + i*columnDirection)) return true
        }
        if (state.Figures.some(f => f.Square.Row === clickedRow && f.Square.Column === clickedColumn && f.Player === currentPlayer)) return true
        else return false
      }
      function isClickedFieldBlocked(){
        return state.Figures.some(f => f.Square.Row === clickedRow && f.Square.Column === clickedColumn && f.Player === currentPlayer) ? true : false
      }

      function isCapturingKing(activeFigure : IFigure){
        return state.Figures.some(f => f.Square.Row === clickedRow && f.Square.Column === clickedColumn && f.Type === FigureType.King && f.Player !== currentPlayer) ? true : false
      }

      function isAgainstGlobalMoveRules(activeFigure : IFigure){
        return isCapturingKing(activeFigure)
      }

      // function isSquareAttacked(){
      //   return state.Figures.filter(f => f.Player !== currentPlayer).some(f => f.)
      // }

      function pawnMoves(activeFigure : IFigure): boolean{
        if (isNSquaresForwardMove(activeFigure, 1) && canMoveForwardNSquares(activeFigure, 1)) return true
        else if(isNSquaresForwardMove(activeFigure, 2) && canMoveForwardNSquares(activeFigure, 2) && isPieceOnStartLine(activeFigure) ) return true
        else if(isNSquaresDiagonalMove(activeFigure, 1) && isClickedOpponentsFigure()) return true
         
        return false;
      }

      function knightMoves(activeFigure : IFigure){
        if(isKnightMove(activeFigure)) return true;
        return false
       }
       
      function bishopMoves(activeFigure : IFigure){
        if (isClickInDiagonal(activeFigure) && !isDiagonalMoveBlocked(activeFigure)) return true
        return false
      }

      function rookMoves(activeFigure : IFigure){
        console.log(isClickInTheSameColumn(activeFigure))
        if (isClickInTheSameColumn(activeFigure) && !otherFigureBlocksMoveInTheSameColumn(activeFigure)) return true
        else if (isClickInTheSameRow(activeFigure) && !otherFigureBlocksMoveInTheSameRow(activeFigure) ) return true

        return false
      }

      function queenMoves(activeFigure : IFigure){
        if (isClickInTheSameColumn(activeFigure) && !otherFigureBlocksMoveInTheSameColumn(activeFigure)) return true
        else if (isClickInTheSameRow(activeFigure) && !otherFigureBlocksMoveInTheSameRow(activeFigure) ) return true
        else if (isClickInDiagonal(activeFigure) && !isDiagonalMoveBlocked(activeFigure)) return true
        return false
      }

      function kingMoves(activeFigure : IFigure){
        if (isNSquaresMoveAllDirection(activeFigure, 1) && !isClickedFieldBlocked()   ) return true // && !isSquareAttacked()
        return false
      }


    }
  }
})

export const { clickSquare } = boardSlice.actions

// export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer