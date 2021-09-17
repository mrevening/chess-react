import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface BoardState {
  figures: Array<string>
}

const initialState: BoardState = {
  figures: [
    "A1-wrook", "B1-wknight", "C1-wbishop", "D1-wqueen", "E1-wking", "F1-wbishop", "G1-wknight", "H1-wrook",
    "A2-wpawn", "B2-wpawn", "C2-wpawn", "D2-wpawn", "E2-wpawn", "F2-wpawn", "G2-wpawn", "H2-wpawn",
    "A8-brook", "B8-bknight", "C8-bbishop", "D8-bqueen", "E8-bking", "F8-bbishop", "G8-bknight", "H8-brook",
    "A7-bpawn", "B7-bpawn", "C7-bpawn", "D7-bpawn", "E7-bpawn", "F7-bpawn", "G7-bpawn", "H7-bpawn"
  ]
}

export const appSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setFigure: (state) => {
        return state;
    },
  },
})

export const { setFigure } = appSlice.actions

// export const getFigure = (state: RootState) => state.board.figure

export default appSlice.reducer