import React, {FC, useEffect, useRef} from 'react';
import { useSelector} from "react-redux";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {SelectTimer, setSecondsLeft} from "../../redux/slices/timerSlice";
import {
    SelectQuestion,
    SelectQuestions,
    setClick,
    setCurrentQuestion,
    setShowScore
} from "../../redux/slices/questionSlice";
import {useAppDispatch} from "../../redux/store";

const Timer: FC = () => {
    const dispatch = useAppDispatch()
    const {timerValue, secondsLeft} = useSelector(SelectTimer)
    const {currentQuestion} = useSelector(SelectQuestion)
    const questions = useSelector(SelectQuestions)
    const secondsLeftRef = useRef<number>(secondsLeft);
    function tick() {
        secondsLeftRef.current--;
        dispatch(setSecondsLeft(secondsLeftRef.current))
    }

    useEffect(() => {
        function nextQuestion() {
            const nextQuestion = currentQuestion + 1
            dispatch(setClick('не має'))
            if (nextQuestion < questions.length) {
                dispatch(setCurrentQuestion(nextQuestion))

            } else {
                dispatch(setShowScore(true))
            }
        }

        secondsLeftRef.current = Number(timerValue) * 60
        dispatch(setSecondsLeft(secondsLeftRef.current))

        const interval = setInterval(() => {
            if (secondsLeftRef.current === 0) {
                return nextQuestion()
            }

            tick()

        }, 1000)
        return () => clearInterval(interval);
    }, [currentQuestion, questions])


    const totalSeconds: number = Number(timerValue) * 60
    const percentage: number = Math.round(secondsLeft / totalSeconds * 100);

    const minutes: number = Math.floor(secondsLeft / 60);
    let seconds: string | number = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return (
        <div>
            <CircularProgressbar value={percentage} text={minutes + ':' + seconds}
                                 styles={buildStyles({
                                     textSize: '24px',
                                     pathColor: '#7cc6fe',
                                     textColor: '#fff',
                                 })}
            />
        </div>
    );
};

export default Timer;