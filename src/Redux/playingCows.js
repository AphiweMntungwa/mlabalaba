import { createSlice } from "@reduxjs/toolkit";

const playingCowsSlice = createSlice({
    name: 'togglePlayingCows',
    initialState: {
        playingRedCows: {},
        playingBlackCows: {},
        playedRounds: 0
    },
    reducers: {
        togglePlayingRedCows: (state, { payload }) => {
            state.playingRedCows[payload] = payload;
            state.playedRounds++
        },
        togglePlayingBlackCows: (state, { payload }) => {
            state.playingBlackCows[payload] = payload;
            state.playedRounds++
        },
        dropBlackCow: (state, { payload }) => {
            delete state.playingBlackCows[payload];
        },
        dropRedCow: (state, { payload }) => {
            delete state.playingRedCows[payload];
        }
    }
})

export const { togglePlayingRedCows, togglePlayingBlackCows, dropBlackCow, dropRedCow } = playingCowsSlice.actions
export default playingCowsSlice.reducer;