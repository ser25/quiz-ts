import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";


interface TimerSliceState {
    timerValue: number | number[] ,
    secondsLeft: number,
}

const initialState: TimerSliceState = {
    timerValue: 0,
    secondsLeft: 0,
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerValue(state, action: PayloadAction<number | number[] >) {
            state.timerValue = action.payload
        },
        setSecondsLeft(state, action: PayloadAction<number>) {
            state.secondsLeft = action.payload
        },
    }
})

export const SelectTimer = (state: RootState) => state.timer

export const {setTimerValue, setSecondsLeft} = timerSlice.actions

export default timerSlice.reducer