import { createSlice } from "@reduxjs/toolkit";

const gunSlice = createSlice({
    name: 'gunShot',
    initialState: {
        shotsRed: false,
        shotsBlack: false,
        filledGuns: []
    },
    reducers: {
        redShoots: (state) => {
            state.shotsRed = !state.shotsRed
        },
        blackShoots: (state) => {
            state.shotsBlack = !state.shotsBlack
        },
        addGun: (state, { payload }) => {
            state.filledGuns.push(payload)
        },
        removeGun: (state, { payload }) => {
            state.filledGuns.splice(payload, 1)
        },
        resetAllGuns(state) {
            state.shotsRed = false;
            state.shotsBlack = false;
            state.filledGuns = [];
        }
    }
})

export const { redShoots, blackShoots, addGun, removeGun, resetAllGuns } = gunSlice.actions
export default gunSlice.reducer;