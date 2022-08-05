import { createSlice } from "@reduxjs/toolkit";

const playingCowsSlice = createSlice({
    name: 'togglePlayingCows',
    initialState: {
        playingRedCows: [],
        playingBlackCows: [],
        playedRounds: 0
    },
    reducers: {
        togglePlayingRedCows: (state, { payload }) => {
            state.playingRedCows.push(payload);
            state.playedRounds++
        },
        togglePlayingBlackCows: (state, { payload }) => {
            state.playingBlackCows.push(payload);
            state.playedRounds++
        },
    }
})

export const { togglePlayingRedCows, togglePlayingBlackCows } = playingCowsSlice.actions
export default playingCowsSlice.reducer;