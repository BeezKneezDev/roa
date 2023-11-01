// store.js
import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './slices/sliderSlice';
import storySliderReducer from './slices/storySliderSlice';

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        storySlider: storySliderReducer,
    },
});

export default store;

