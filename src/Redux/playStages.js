import { createSlice } from "@reduxjs/toolkit";

const playStageSlice = createSlice({
    name: 'changePlayStage',
    initialState: {
        playStage: 'placing'
    },
    reducers: {
        placingStage: (state) => {
            state.playStage = 'placing'
        },
        movingStage: (state) => {
            state.playStage = 'moving'
        },
        flyingStage: (state) => {
            state.playStage = 'flying'
        },
    }
})

export const { placingStage, movingStage, flyingStage } = playStageSlice.actions
export default playStageSlice.reducer;