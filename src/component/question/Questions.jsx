import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchQuestion, setCurrentQuestion, setShowScore, setScore, setClick} from "../../redux/slices/questionSlice";
import './questions.css'
import Skeleton from "../skeletonreact/Skeletonreact";
import ShowScore from "../showScore/ShowScore";
import cx from 'classnames'
import Timer from "../Timer/Timer";

function Questions() {

    // https://632742f4ba4a9c47533406de.mockapi.io/items


    const questions = useSelector(state => state.question.items)
    const timer = useSelector(state => state.timer.timer)
    const dispatch = useDispatch()

    // const [currentQuestion, setCurrentQuestion] = useState(0)
    // const currentQuestion = useSelector(state => state.question.currentQuestion)
    // const [score, setScore] = useState(0)
    // const [showScore, setShowScore] = useState(true)
    // const showScore = useSelector(state => state.question.showScore)
    const {currentQuestion, showScore, score, skeleton} = useSelector(state => state.question)
    const getQuestions = async () => {
        dispatch(fetchQuestion())
    }
    useEffect(() => {
        getQuestions()
    }, [])

    const isClick = (current) => {
        dispatch(setClick(current.answerText))
    }

    const handleAnswerOptionClick = (isCorrect, current) => {
        isClick(current)
        if (isCorrect) {
            // setScore(score + 1)
            dispatch(setScore(score + 1))

        }

        const nextQuestion = currentQuestion + 1

        if (nextQuestion < questions.length) {
            dispatch(setCurrentQuestion(nextQuestion))
            // setCurrentQuestion(nextQuestion)
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
                            ? <Skeleton/>
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
                        {timer&& <div className='quiz__timer'>
                            <Timer />
                        </div>}


                    </div>

            }
        </div>
    )
}

export default Questions