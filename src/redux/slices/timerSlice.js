import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    timerValue: 0,
    secondsLeft: 0,
}

const timerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTimerValue(state, action){
            state.timerValue = action.payload
        },
        setSecondsLeft(state, action){
            state.secondsLeft = action.payload
        },
    }
})

export const {setTimerValue, setSecondsLeft} = timerSlice.actions

export default timerSlice.reducer