import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

interface userSliceState {
    email: null | string,
    token: null | string,
    id: null | string
}

const initialState: userSliceState = {
    email: null,
    token: null,
    id: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<userSliceState>){
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
        },
        removeUser(state){
            state.email = null
            state.token = null
            state.id = null
        },
    },
})

export const SelectUser = (state: RootState) => state.user
export const {setUser, removeUser} = userSlice.actions

export default userSlice.reducer