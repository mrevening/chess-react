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

interface ClickTile {
  col: ColumnLine
  row: RowLine
}



export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickTile: (state, action: PayloadAction<ClickTile>) => {
      const {col: clickedColumn, row: clickedRow} = action.payload
      const clickedFigure = state.figures.find(f => f.Column === clickedColumn && f.Row === clickedRow)
      function changeTurn (turn: Player) { return turn === Player.White ? Player.Black : Player.White }
      function anyActiveFigure() { return state.activeFigure }
      function isPlayersFigure() { return clickedFigure && clickedFigure.Player === state.currentPlayerTurn}
      function isClickedFigureAndActiveFigureTheSame() { return state.activeFigure?.Id === clickedFigure?.Id}
      function isEnemyFigureClicked() { return clickedFigure && clickedFigure.Player !== state.currentPlayerTurn}
      function getOpponentsFigure() { return clickedFigure && state.figures.find(f => f.Id === clickedFigure.Id) }

      function playerClickedHisFigureFirstTime() { state.activeFigure = clickedFigure; }
      function playerClickedThisFigureSecondTime() { state.activeFigure = undefined; }
      function removeEnemyFigure() { state.figures = state.figures.filter(f => f.Id !== getOpponentsFigure()?.Id); }
      function moveFigure() { 
        const fi = state.figures.findIndex(f => f.Id === state.activeFigure?.Id)
        state.figures[fi].Column = clickedColumn
        state.figures[fi].Row = clickedRow
        state.activeFigure = undefined
        state.currentPlayerTurn = changeTurn(state.currentPlayerTurn);
       }
      function playerRemovesEnemysFigure () { 
        removeEnemyFigure();
        moveFigure();
       }

       function pawnMoves(activeFigure : Figure): boolean{
        const direction = activeFigure.Player === Player.White ? -1 : 1
        const lastLine = activeFigure.Player === Player.White ? RowLine.One : RowLine.Eight
        const startingLine = activeFigure.Player === Player.White ? RowLine.Two : RowLine.Seven
        const maxMove = (activeFigure.Row === startingLine) ? 2 : 1;

        if (activeFigure.Column === clickedColumn){
          if (state.figures.some(f => f.Row === clickedRow && f.Column === clickedColumn)) return false;
          else if (activeFigure?.Row === clickedRow + 1*direction ) return true
        }
        else if (Math.abs(clickedColumn - activeFigure.Column) === 1){
            const clickedEnemyFigure = state.figures.some(f => f.Row === clickedRow + direction && f.Column === clickedColumn && f.Player !== activeFigure.Player)
             if (clickedEnemyFigure) return true
             else return false
            // state.figures = clickedEnemyFigure ? state.figures.filter(f => f.Id !== clickedEnemyFigure.Id) : state.figures;
        }
        else return false;
        return false
        // const maxMove = (activeFigure.Player === Player.White && activeFigure.Row === RowLine.Two) || (activeFigure.Player === Player.Black && activeFigure.Row === RowLine.Seven) ? 2 : 1
        
        // else if (clickedRow === lastLine) { state.activeFigure.Type = FigureType.Queen; break}
        // else if (state.figures.some(f => f.Column === clickedCol && f.Row === clickedRow + direction )) return state
        // else if (activeFigure.Column === clickedCol && activeFigure.Row === clickedRow + maxMove*direction) break
       }

       function kingMoves(activeFigure : Figure){

       }

       function queenMoves(activeFigure : Figure){

       }

       function bishopMoves(activeFigure : Figure){

       }

       function knightMoves(activeFigure : Figure){

       }

       function rookMoves(activeFigure : Figure){
         
       }

      function isMoveAllowed(){
        const activeFigure = state.activeFigure;
        if (!activeFigure) return false;

        let allowed = false

        switch (activeFigure.Type){
          case FigureType.Pawn: allowed = pawnMoves(activeFigure); break
          case FigureType.Rook: rookMoves(activeFigure); break
          case FigureType.Queen: queenMoves(activeFigure); break
          case FigureType.King: kingMoves(activeFigure); break
          case FigureType.Bishop: bishopMoves(activeFigure); break
          case FigureType.Knight: knightMoves(activeFigure); break
        }
        return allowed
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
          isEnemyFigureClicked() ? playerRemovesEnemysFigure() : moveFigure()
        } 
      }
    },
  },
})

export const { clickTile } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer