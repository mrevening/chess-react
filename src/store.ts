import { configureStore } from '@reduxjs/toolkit'
import BoardReducer from 'board/BoardSlice';

const store = configureStore({
    reducer: {
        board: BoardReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store