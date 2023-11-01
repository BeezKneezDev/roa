// slices/sliderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
};

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    setCurrentIndex: (state, action) => {
      return { ...state, currentIndex: action.payload };
    },
  },
});

export const { setCurrentIndex } = sliderSlice.actions;
export default sliderSlice.reducer;

