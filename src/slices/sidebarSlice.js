// sidebarSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: true,
    sidebarHeight: '',
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebarOpen: (state, action) => {
            state.isSidebarOpen = action.payload;
        },
        setSidebarHeight: (state, action) => {
            state.sidebarHeight = action.payload;
        },
    },
});

export const { setSidebarOpen, setSidebarHeight } = sidebarSlice.actions;
export default sidebarSlice.reducer;
