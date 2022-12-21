import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchQuestion, removeTodo} from "./questionSlice";


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
    isAdminCreate: false,
    isError: false,

}

export const fetchAdmin = createAsyncThunk(
    'admin/fetchAdmin',
    async (params, thunkAPI) => {
        const {admin} = thunkAPI.getState()
        const {questionText, answerOption, answerOption1, answerOption2, answerOption3} = admin
        await axios.post(
            "https://632742f4ba4a9c47533406de.mockapi.io/items",
            {
                questionText,
                answerOptions: [
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

export const fetchAdminDelete = createAsyncThunk(
    'admin/fetchAdminDelete',
    async (params, thunkAPI) => {
        const {dispatch} = thunkAPI
        await axios.delete(
            `https://632742f4ba4a9c47533406de.mockapi.io/items/${params}`
        )
        dispatch(removeTodo(params))
    }
)

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setQuestionText(state, action) {
            state.questionText = action.payload
        },
        setAnswerOptionText(state, action) {
            state.answerOption.answerText = action.payload
        },
        setAnswerOption1Text(state, action) {
            state.answerOption1.answerText = action.payload
        },
        setAnswerOption2Text(state, action) {
            state.answerOption2.answerText = action.payload
        },
        setAnswerOption3Text(state, action) {
            state.answerOption3.answerText = action.payload
        },
        setAnswerOptionIsCorrect(state, action) {
            if (!(state.answerOption1.isCorrect)
                & !(state.answerOption2.isCorrect)
                & !(state.answerOption3.isCorrect)) {
                state.answerOption.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }
        },
        setAnswerOption1IsCorrect(state, action) {
            if (!(state.answerOption.isCorrect)
                & !(state.answerOption2.isCorrect)
                & !(state.answerOption3.isCorrect)) {
                state.answerOption1.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }

        },
        setAnswerOption2IsCorrect(state, action) {
            if (!(state.answerOption.isCorrect)
                & !(state.answerOption1.isCorrect)
                & !(state.answerOption3.isCorrect)) {
                state.answerOption2.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }

        },
        setAnswerOption3IsCorrect(state, action) {
            if (!(state.answerOption.isCorrect)
                & !(state.answerOption1.isCorrect)
                & !(state.answerOption2.isCorrect)) {
                state.answerOption3.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }
        },
        setIsAdminCreate(state, action) {
            state.isAdminCreate = action.payload
        },
        refreshAnswerOption(state, action) {
            state.questionText = ''
            state.answerOption.answerText = ''
            state.answerOption1.answerText = ''
            state.answerOption2.answerText = ''
            state.answerOption3.answerText = ''
            state.answerOption.isCorrect = false
            state.answerOption1.isCorrect = false
            state.answerOption2.isCorrect = false
            state.answerOption3.isCorrect = false

        },
        setIsError(state, action){
            state.isError = action.payload
        }

    },
    extraReducers: {
        [fetchAdminDelete.fulfilled]: (state, action) => {
            console.log('success')

        },
        [fetchAdminDelete.pending]: (state, action) => {
            console.log('loading')

        },
        [fetchAdminDelete.rejected]: (state, action) => {
            console.log('error')
        }

    }
})

export const {
    setQuestionText, setAnswerOptionText, setAnswerOption1Text, setAnswerOption2Text, setAnswerOption3Text,
    setAnswerOptionIsCorrect, setAnswerOption1IsCorrect, setAnswerOption2IsCorrect, setAnswerOption3IsCorrect,
    setIsAdminCreate, refreshAnswerOption, setIsError
} = adminSlice.actions

export default adminSlice.reducer