import { configureStore } from '@reduxjs/toolkit'
import question from "./slices/questionSlice";
export const store = configureStore({
    reducer: {
        question,
    },
})