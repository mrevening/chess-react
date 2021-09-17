import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {InitFigures, Figure} from './Interface'

interface BoardSlice {
  figures: Array<Figure>,
  activeFigure: Figure | undefined
}

const initialState: BoardSlice = {
  figures: InitFigures,
  activeFigure: undefined
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickTile: (state, action) => {
      const {col, row} = action.payload
      const figure = state.figures.find(f => f.Column === col && f.Row === row)

      //any active figures and is figure = set active figure

      //is active figure - check it moves

      //

      state.activeFigure = figure
      // state.figures = state.figures.filter(f => f != figure)
      // return state;
    },
  },
})

export const { clickTile } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer