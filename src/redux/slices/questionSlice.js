import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import Skeleton from "../../component/skeletonreact/Skeletonreact";


const initialState = {
    items: [],
    currentQuestion: 0,
    showScore: false,
    score: 0,
    skeleton: true,
    click: [],

}

export const fetchQuestion = createAsyncThunk(
    'question/fetchQuestionStatus',
    async (params,thunkAPI) => {
        const {data} = await axios.get(
            "https://632742f4ba4a9c47533406de.mockapi.io/items",
        )
        return data
    })

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload
        },
        setItems(state, action){
            state.items = action.payload
        },
        setShowScore(state, action){
            state.showScore = action.payload
        },
        setScore(state, action){
            state.score = action.payload
        },
        setClick(state, action){
            state.click = [...state.click, action.payload]
        },
        refresh(state){
            state.currentQuestion = 0
            state.showScore = false
            state.score = 0
            state.click = []
        },
        removeTodo(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: {
        [fetchQuestion.fulfilled]: (state, action) => {
            state.items = action.payload
            state.skeleton = false
            console.log('ok')
        },
        [fetchQuestion.pending]: (state, action) => {
            state.skeleton = true
            state.items = []
        },
        [fetchQuestion.rejected]: (state, action) => {
            console.log('error')
            state.items = []
        }

    }


})

export const {setCurrentQuestion, removeTodo, setShowScore, setScore, refresh, setClick} = questionSlice.actions

export default questionSlice.reducer