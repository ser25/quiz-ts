import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import axios from "axios";
import {removeTodo} from "./questionSlice";
import {RootState} from "../store";

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface adminSliceState {
    questionText: string,
    answerOption: {
        answerText: string,
        isCorrect: boolean
    },
    answerOption1: {
        answerText: string,
        isCorrect: boolean
    },
    answerOption2: {
        answerText: string,
        isCorrect: boolean
    },
    answerOption3: {
        answerText: string,
        isCorrect: boolean
    },
    status: Status
    isAdminCreate: boolean,
    isError: boolean,
}

const initialState: adminSliceState = {
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
    status: Status.LOADING,
    isAdminCreate: false,
    isError: false,

}

export const fetchAdmin = createAsyncThunk(
    'admin/fetchAdmin',
    async (params, thunkAPI) => {
        const {admin} = thunkAPI.getState() as  RootState
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
    async (params: string | number, thunkAPI) => {
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
        setQuestionText(state, action: PayloadAction<string>) {
            state.questionText = action.payload
        },
        setAnswerOptionText(state, action: PayloadAction<string>) {
            state.answerOption.answerText = action.payload
        },
        setAnswerOption1Text(state, action: PayloadAction<string>) {
            state.answerOption1.answerText = action.payload
        },
        setAnswerOption2Text(state, action: PayloadAction<string>) {
            state.answerOption2.answerText = action.payload
        },
        setAnswerOption3Text(state, action: PayloadAction<string>) {
            state.answerOption3.answerText = action.payload
        },
        setAnswerOptionIsCorrect(state, action: PayloadAction<boolean>) {
            if (!(state.answerOption1.isCorrect)
                && !(state.answerOption2.isCorrect)
                && !(state.answerOption3.isCorrect)) {
                state.answerOption.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = true
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }
        },
        setAnswerOption1IsCorrect(state, action: PayloadAction<boolean>) {
            if (!(state.answerOption.isCorrect)
                && !(state.answerOption2.isCorrect)
                && !(state.answerOption3.isCorrect)) {
                state.answerOption1.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = true
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = false
            }

        },
        setAnswerOption2IsCorrect(state, action: PayloadAction<boolean>) {
            if (!(state.answerOption.isCorrect)
                && !(state.answerOption1.isCorrect)
                && !(state.answerOption3.isCorrect)) {
                state.answerOption2.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = true
                state.answerOption3.isCorrect = false
            }

        },
        setAnswerOption3IsCorrect(state, action: PayloadAction<boolean>) {
            if (!(state.answerOption.isCorrect)
                && !(state.answerOption1.isCorrect)
                && !(state.answerOption2.isCorrect)) {
                state.answerOption3.isCorrect = action.payload
            } else {
                state.answerOption.isCorrect = false
                state.answerOption1.isCorrect = false
                state.answerOption2.isCorrect = false
                state.answerOption3.isCorrect = true
            }
        },
        setIsAdminCreate(state, action: PayloadAction<boolean>) {
            state.isAdminCreate = action.payload
        },
        refreshAnswerOption(state) {
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
        setIsError(state, action: PayloadAction<boolean>) {
            state.isError = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchAdminDelete.pending, (state, action) => {
            state.status = Status.LOADING
        });

        builder.addCase(fetchAdminDelete.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
        });

        builder.addCase(fetchAdminDelete.rejected, (state, action) => {
            state.status = Status.ERROR
        });
    },

})


export const SelectAdmin = (state: RootState) => state.admin

export const {
    setQuestionText, setAnswerOptionText, setAnswerOption1Text, setAnswerOption2Text, setAnswerOption3Text,
    setAnswerOptionIsCorrect, setAnswerOption1IsCorrect, setAnswerOption2IsCorrect, setAnswerOption3IsCorrect,
    setIsAdminCreate, refreshAnswerOption, setIsError
} = adminSlice.actions

export default adminSlice.reducer