import { configureStore } from '@reduxjs/toolkit';
import masterReducer from './masterSlice'

export const store = configureStore({
    reducer: {
        master: masterReducer
    },
})