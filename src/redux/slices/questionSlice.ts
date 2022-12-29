import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from "axios";
import Skeleton from "../../component/skeletonreact/Skeletonreact";
import {RootState} from "../store";

type QuestionItem = {
    id: string | number,
    questionText: string,
    answerOptions: {
        answerText: string,
        isCorrect: boolean,
        isClick: number
    }[]
}

enum Status {
    LOADING='loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface QuestionSliceState {
    items: QuestionItem[],
    currentQuestion: number,
    showScore: boolean,
    score: number,
    skeleton: boolean,
    click: string[],
    status: Status,
}

const initialState: QuestionSliceState = {
    items: [],
    currentQuestion: 0,
    showScore: false,
    score: 0,
    skeleton: true,
    click: [],
    status: Status.LOADING

}

export const fetchQuestion = createAsyncThunk(
    'question/fetchQuestionStatus',
    async (params, thunkAPI) => {
        const {data} = await axios.get<QuestionItem[]>(
            "https://632742f4ba4a9c47533406de.mockapi.io/items",
        )
        return data
    })

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action: PayloadAction<number>) => {
            state.currentQuestion = action.payload
        },
        setItems(state, action: PayloadAction<QuestionItem[]>) {
            state.items = action.payload
        },
        setShowScore(state, action: PayloadAction<boolean>) {
            state.showScore = action.payload
        },
        setScore(state, action: PayloadAction<number>) {
            state.score = action.payload
        },
        setClick(state, action: PayloadAction<string>) {
            state.click = [...state.click, action.payload]
        },
        refresh(state) {
            state.currentQuestion = 0
            state.showScore = false
            state.score = 0
            state.click = []
        },
        removeTodo(state, action: PayloadAction<number | string>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestion.pending, (state, action) => {
            state.status = Status.LOADING
            state.skeleton = true
            state.items = []
        });

        builder.addCase(fetchQuestion.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
            state.skeleton = false
        });

        builder.addCase(fetchQuestion.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        });
    },



})

export const SelectQuestion = (state: RootState) => state.question
export const SelectQuestions = (state: RootState) => state.question.items

export const {setCurrentQuestion, removeTodo, setShowScore, setScore, refresh, setClick} = questionSlice.actions

export default questionSlice.reducer