import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {InitFigures, Figure, Player} from './Interface'

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

function changeTurn (turn: Player) { return turn === Player.White ? Player.Black : Player.White }

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickTile: (state, action) => {
      const {col, row} = action.payload
      const clickedTileFigure = state.figures.find(f => f.Column === col && f.Row === row)

      if (!state.activeFigure){
        if (clickedTileFigure?.Player === state.currentPlayerTurn){
          state.activeFigure = clickedTileFigure
          return state;
        }
      }
      else {
        if (state.activeFigure.Id === clickedTileFigure?.Id){  
          state.activeFigure = undefined
          return state;
        }
        if (!clickedTileFigure) {
          const fi = state.figures.findIndex(f => state.activeFigure?.Column === f.Column && state.activeFigure?.Row === f.Row )
          state.figures[fi].Column = col
          state.figures[fi].Row = row
          state.activeFigure = undefined
          state.currentPlayerTurn = changeTurn(state.currentPlayerTurn);
          return state;
        }
        else {
          if (clickedTileFigure.Player !== state.currentPlayerTurn){

            const enemyFigure = state.figures.find(f => f.Id === clickedTileFigure.Id )
            state.figures = state.figures.filter(f => f.Id !== enemyFigure?.Id);

            const fi = state.figures.findIndex(f => state.activeFigure?.Column === f.Column && state.activeFigure?.Row === f.Row )
            state.figures[fi].Column = col
            state.figures[fi].Row = row
            state.activeFigure = undefined
            state.currentPlayerTurn = changeTurn(state.currentPlayerTurn);
            return state;
          }
        }
      }
    },
  },
})

export const { clickTile } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer