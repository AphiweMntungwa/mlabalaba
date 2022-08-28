import { createSlice } from "@reduxjs/toolkit";

const allCowsSlice = createSlice({
    name: 'cows',
    initialState: {
        reds: false,
        blacks: false
    },
    reducers: {
        resetBarn: (state) => {
            state.reds = false
            state.blacks = false
        },
        removeRedBarnCow: (state, { payload }) => {
            state.reds = payload
        },
        removeBlackBarnCow: (state, { payload }) => {
            state.blacks = payload
        }
    }
})

export const { resetBarn, removeRedBarnCow, removeBlackBarnCow } = allCowsSlice.actions
export default allCowsSlice.reducer;