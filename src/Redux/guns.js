import { createSlice } from "@reduxjs/toolkit";

const gunSlice = createSlice({
    name: 'gunShot',
    initialState: {
        shotsRed: false,
        shotsBlack: false
    },
    reducers: {
        redShoots: (state) => {
            state.shotsRed = !state.shotsRed
        },
        blackShoots: (state) => {
            state.shotsBlack = !state.shotsBlack
        },
    }
})

export const { redShoots, blackShoots } = gunSlice.actions
export default gunSlice.reducer;