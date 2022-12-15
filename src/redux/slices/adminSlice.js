import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchQuestion} from "./questionSlice";



const initialState = {
    questionText: '',
    answerOption: {
        answerText: '',
        isCorrect: false
    },
    answerOption1: {
        answerText: '',
        isCorrect: false
    },
    answerOption2: {
        answerText: '',
        isCorrect: false
    },
    answerOption3: {
        answerText: '',
        isCorrect: false
    },

}

export const fetchAdmin = createAsyncThunk(
    'admin/fetchAdmin',
    async (params,thunkAPI) => {
        const {admin} =  thunkAPI.getState()
        const {questionText, answerOption, answerOption1, answerOption2, answerOption3} = admin
        console.log(answerOption3)
         await axios.post(
            "https://632742f4ba4a9c47533406de.mockapi.io/items",
            {
                questionText,
                answerOptions:[
                    {
                        answerText: answerOption.answerText,
                        isCorrect: answerOption.isCorrect
                    },
                    {
                        answerText: answerOption1.answerText,
                        isCorrect: answerOption1.isCorrect
                    },
                    {
                        answerText: answerOption2.answerText,
                        isCorrect: answerOption2.isCorrect
                    },
                    {
                        answerText: answerOption3.answerText,
                        isCorrect: answerOption3.isCorrect
                    },
                ],
            }
        )
    })

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setQuestionText(state, action){
            state.questionText = action.payload
        },
        setAnswerOptionText(state, action){
            state.answerOption.answerText = action.payload
        },
        setAnswerOption1Text(state, action){
            state.answerOption1.answerText = action.payload
        },
        setAnswerOption2Text(state, action){
            state.answerOption2.answerText = action.payload
        },
        setAnswerOption3Text(state, action){
            state.answerOption3.answerText = action.payload
        },
        setAnswerOptionIsCorrect(state, action){
            state.answerOption.isCorrect = action.payload
        },
        setAnswerOption1IsCorrect(state, action){
            state.answerOption1.isCorrect = action.payload
        },
        setAnswerOption2IsCorrect(state, action){
            state.answerOption2.isCorrect = action.payload
        },
        setAnswerOption3IsCorrect(state, action){
            state.answerOption3.isCorrect = action.payload
        },
        addItems(state, action){
        }
    },
    extraReducers: {
        [fetchQuestion.fulfilled]: (state, action) => {

        },
        [fetchQuestion.pending]: (state, action) => {

        },
        [fetchQuestion.rejected]: (state, action) => {
        }

    }
})

export const {setQuestionText, setAnswerOptionText,setAnswerOption1Text,setAnswerOption2Text,setAnswerOption3Text,
    setAnswerOptionIsCorrect,setAnswerOption1IsCorrect,setAnswerOption2IsCorrect,setAnswerOption3IsCorrect,
    setAnswerOptions} = adminSlice.actions

export default adminSlice.reducer