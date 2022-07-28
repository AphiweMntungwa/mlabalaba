import { createSlice } from "@reduxjs/toolkit";

const activePlayerSlice = createSlice({
    name: 'activatePlayer',
    initialState: {
        activePlayer: '#4c2b2b'
    },
    reducers: {
        activatePlayer: (state, { payload }) => {
            state.activePlayer = payload;
        },
    }
})

export const { activatePlayer } = activePlayerSlice.actions
export default activePlayerSlice.reducer;