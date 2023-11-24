// store.js
import sliderReducer from './slices/sliderSlice';
import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import storySliderReducer from './slices/storySliderSlice';

const store = configureStore({
    reducer: {
        slider: sliderReducer,
        sidebar: sidebarReducer,
        storySlider: storySliderReducer,
    },
});

export default store;

