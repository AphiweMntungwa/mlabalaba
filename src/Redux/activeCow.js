import { createSlice } from "@reduxjs/toolkit";

const activeCowSlice = createSlice({
    name: 'activateCows',
    initialState: {
        activeCow: false
    },
    reducers: {
        activateCows: (state, { payload }) => {
            state.activeCow = payload;
        },
    }
})

export const { activateCows } = activeCowSlice.actions
export default activeCowSlice.reducer;