import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'toggleMenu',
    initialState: {
        menu: false
    },
    reducers: {
        toggleMenu: (state, action) => {
            state.menu = action
        },
    }
})

export const { toggleMenu } = menuSlice.actions
export default menuSlice.reducer;