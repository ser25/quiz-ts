export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface adminSliceState {
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