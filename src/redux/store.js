import { configureStore } from '@reduxjs/toolkit'
import question from "./slices/questionSlice";
import admin from './slices/adminSlice'
import user from './slices/userSlice'
import timer from './slices/timerSlice'
export const store = configureStore({
    reducer: {
        question,
        admin,
        user,
        timer,
    },
})