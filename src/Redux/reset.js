import { createSlice } from "@reduxjs/toolkit";

const resetSlice = createSlice({
    name: 'changePlayStage',
    initialState: {
        reset: false
    },
    reducers: {
        reset: (state, { payload }) => {
            state.reset = payload
        },

    }
})

export const { reset } = resetSlice.actions
export default resetSlice.reducer;