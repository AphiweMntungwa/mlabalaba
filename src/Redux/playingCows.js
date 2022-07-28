import { createSlice } from "@reduxjs/toolkit";

const playingCowsSlice = createSlice({
    name: 'togglePlayingCows',
    initialState: {
        playingRedCows: [],
        playingBlackCows: []
    },
    reducers: {
        togglePlayingRedCows: (state, { payload }) => {
            state.playingRedCows.push(payload);
        },
        togglePlayingBlackCows: (state, { payload }) => {
            state.playingBlackCows.push(payload);
        },
    }
})

export const { togglePlayingRedCows, togglePlayingBlackCows } = playingCowsSlice.actions
export default playingCowsSlice.reducer;