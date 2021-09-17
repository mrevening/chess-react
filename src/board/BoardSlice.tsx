import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface BoardSlice {
  figures: Array<string>,
  activeFigure: string | undefined
}

const initialState: BoardSlice = {
  figures: [
    "A1-wrook", "B1-wknight", "C1-wbishop", "D1-wqueen", "E1-wking", "F1-wbishop", "G1-wknight", "H1-wrook",
    "A2-wpawn", "B2-wpawn", "C2-wpawn", "D2-wpawn", "E2-wpawn", "F2-wpawn", "G2-wpawn", "H2-wpawn",
    "A8-brook", "B8-bknight", "C8-bbishop", "D8-bqueen", "E8-bking", "F8-bbishop", "G8-bknight", "H8-brook",
    "A7-bpawn", "B7-bpawn", "C7-bpawn", "D7-bpawn", "E7-bpawn", "F7-bpawn", "G7-bpawn", "H7-bpawn"
  ],
  activeFigure: undefined
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    clickTile: (state, action) => {
        const figure = state.figures.find(f => f.substring(0,1) == action.payload.col && f.substring(1,2) == action.payload.row)
        state.activeFigure = figure !== state.activeFigure ? state.activeFigure : undefined;
        state.figures = state.figures.filter(f => f != figure)
        return state;
    },
  },
})

export const { clickTile } = boardSlice.actions

export const getFigures = (state: RootState) => state.board.figures

export default boardSlice.reducer