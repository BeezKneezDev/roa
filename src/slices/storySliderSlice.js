// storySliderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storySliderSlice = createSlice({
    name: 'storySlider',
    initialState: {
        currentIndex: 0,
    },
    reducers: {
        setCurrentIndex: (state, action) => {
            return { ...state, currentIndex: action.payload };
        },
    },
});

export const { setCurrentIndex } = storySliderSlice.actions;
export default storySliderSlice.reducer;
