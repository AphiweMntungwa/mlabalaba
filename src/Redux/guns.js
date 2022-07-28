import { createSlice } from "@reduxjs/toolkit";

const gunSlice = createSlice({
    name: 'gunShot',
    initialState: {
        shotsRed: 0,
        shotsBlack: 0
    },
    reducers: {
        redShoots: (state) => {
            state.shotsRed++
        },
        blackShoots: (state) => {
            state.shotsBlack++
        },
    }
})

export const { redShoots, blackShoots } = gunSlice.actions
export default gunSlice.reducer;