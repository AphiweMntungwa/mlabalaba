import { createSlice } from "@reduxjs/toolkit";

const gunSlice = createSlice({
    name: 'gunShot',
    initialState: {
        shotsRed: false,
        shotsBlack: false,
        filledGuns: {}
    },
    reducers: {
        redShoots: (state) => {
            state.shotsRed = !state.shotsRed
        },
        blackShoots: (state) => {
            state.shotsBlack = !state.shotsBlack
        },
        addGun: (state, { payload }) => {
            state.filledGuns[payload] = payload;
        },
        removeGun: (state, { payload }) => {
            const {
                [payload]: element, ...rest } = state.filledGuns;
            state.filledGuns = rest;
        },
        resetAllGuns(state) {
            state.shotsRed = false;
            state.shotsBlack = false;
            state.filledGuns = {};
        }
    }
})

export const { redShoots, blackShoots, addGun, removeGun, resetAllGuns } = gunSlice.actions
export default gunSlice.reducer;