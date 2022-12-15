import { configureStore } from '@reduxjs/toolkit'
import question from "./slices/questionSlice";
import admin from './slices/adminSlice'
export const store = configureStore({
    reducer: {
        question,
        admin,
    },
})