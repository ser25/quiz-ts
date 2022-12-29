import {useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {
    fetchQuestion,
    setCurrentQuestion,
    setShowScore,
    setScore,
    setClick,
    SelectQuestions, SelectQuestion
} from "../../redux/slices/questionSlice";
import './questions.css'
import Skeleton from "../skeletonreact/Skeletonreact";
import ShowScore from "../showScore/ShowScore";
import Timer from "../Timer/Timer";
import {SelectTimer} from "../../redux/slices/timerSlice";
import {useAppDispatch} from "../../redux/store";

type answerItem = {
    answerText: string,
    isCorrect: boolean,
    isClick: number,
}

function Questions() {

    // https://632742f4ba4a9c47533406de.mockapi.io/items


    const questions = useSelector(SelectQuestions)
    const {timerValue} = useSelector(SelectTimer)
    const dispatch = useAppDispatch()
    const {currentQuestion, showScore, score, skeleton} = useSelector(SelectQuestion)
    const getQuestions = async () => {
        dispatch(fetchQuestion())
    }
    useEffect(() => {
        getQuestions()
    }, [])
    const isClick = (current: answerItem) => {
        dispatch(setClick(current.answerText))
    }

    const handleAnswerOptionClick = (isCorrect: boolean, current: answerItem) => {
        isClick(current)
        if (isCorrect) {
            dispatch(setScore(score + 1))

        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            dispatch(setCurrentQuestion(nextQuestion))
        } else {
            dispatch(setShowScore(true))
        }
    }


    return (
        <div className="Questions">
            {
                showScore
                    ? <ShowScore/>
                    : <div className='quiz'>
                        {skeleton
                            ? <Skeleton />
                            : <div className='quiz__body'>
                                <div className='question__section'>
                                    <div className='question__count'>
                                        <span>Питання {currentQuestion + 1}</span> / {questions.length}
                                    </div>
                                    <div className='question__text'>{questions[currentQuestion].questionText}</div>
                                </div>
                                <div className='answer__section'>
                                    {questions[currentQuestion].answerOptions.map(q =>

                                        <button
                                            key={q.answerText}
                                            onClick={() => handleAnswerOptionClick(q.isCorrect, q)}
                                        >{q.answerText}
                                        </button>
                                    )}
                                </div>
                            </div>}
                        {!!timerValue && <div className='quiz__timer'>
                            <Timer/>
                        </div>}


                    </div>

            }
        </div>
    )
}

export default Questions