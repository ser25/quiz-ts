import {configureStore, combineReducers} from '@reduxjs/toolkit'
import {useDispatch} from 'react-redux'
import question from "./slices/questionSlice";
import admin from './slices/admin/slice'
import user from './slices/userSlice'
import timer from './slices/timerSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const rootReducer = combineReducers({
    question,
    admin,
    user,
    timer,
})

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['user'] // only navigation will be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export type RootState = ReturnType<typeof store.getState>