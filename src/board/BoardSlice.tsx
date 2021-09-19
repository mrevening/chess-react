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

enum PlayersDirection { Up = -1, Down = 1}



export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickSquare: (state, action: PayloadAction<ClickSquare>) => {
      const {col: clickedColumn, row: clickedRow} = action.payload
      const clickedFigure = state.figures.find(f => f.Column === clickedColumn && f.Row === clickedRow)
      const currentPlayer = state.currentPlayerTurn
      const activeFigure = state.activeFigure
      const direction = currentPlayer === Player.White ? -1 : 1
      const pionsInitialLine = currentPlayer === Player.White ? RowLine.Two : RowLine.Seven
      
      function anyActiveFigure() { return state.activeFigure }
      function isPlayersFigure() { return clickedFigure && clickedFigure.Player === state.currentPlayerTurn}
      function isClickedFigureAndActiveFigureTheSame() { return state.activeFigure?.Id === clickedFigure?.Id}
      function isOpponentPieceCaptured() { return clickedFigure && clickedFigure.Player !== state.currentPlayerTurn}
      function getOpponentsFigure() { return clickedFigure && state.figures.find(f => f.Id === clickedFigure.Id) }
      function getLastLine() { return currentPlayer === Player.White ? RowLine.One : RowLine.Eight }
      function isTheSameColumn(activeFigure : Figure) { return activeFigure.Column === clickedColumn}
      function isSquareInFrontEmpty() { return !state.figures.some(f => f.Column === clickedColumn && f.Row === clickedRow )}
      function isTwoSquaresInFrontEmpty() { return !state.figures.some(f => f.Column === clickedColumn && f.Row + 2*direction  === clickedRow )}
      function isPieceOnStartLine(activeFigure : Figure) { return activeFigure.Row === pionsInitialLine}
      function clickedOneSquareInFront(activeFigure : Figure) { return isTheSameColumn(activeFigure) && activeFigure?.Row === clickedRow + 1*direction }
      function clickedTwoSquareInFront(activeFigure : Figure) { return isTheSameColumn(activeFigure) && activeFigure?.Row === clickedRow + 2*direction }
      function isOneSquareForwardMove(activeFigure : Figure): boolean { return clickedOneSquareInFront(activeFigure) }
      function isTwoSquareForwardMove(activeFigure : Figure): boolean { return clickedTwoSquareInFront(activeFigure) }
      function canMoveForwardOneSquare(activeFigure : Figure): boolean { return isSquareInFrontEmpty() && clickedOneSquareInFront(activeFigure) }
      function canMoveForwardTwoSquares(activeFigure : Figure): boolean { return isSquareInFrontEmpty() && isTwoSquaresInFrontEmpty() && isPieceOnStartLine(activeFigure) }
      

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


        if(isOneSquareForwardMove(activeFigure) && canMoveForwardOneSquare(activeFigure)) return true
        else if(isTwoSquareForwardMove(activeFigure) && canMoveForwardTwoSquares(activeFigure)) return true
        

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