import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>