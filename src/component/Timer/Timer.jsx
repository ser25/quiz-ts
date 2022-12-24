import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {setSecondsLeft} from "../../redux/slices/timerSlice";
import {setClick, setCurrentQuestion, setShowScore} from "../../redux/slices/questionSlice";
const Timer = () => {
    const red = '#f54e4e';
    const green = '#4aec8c';
    const dispatch = useDispatch()
    const {timerValue, secondsLeft,} = useSelector(state => state.timer)
    const {currentQuestion, click} = useSelector(state => state.question)
    const questions = useSelector(state => state.question.items)
    const secondsLeftRef = useRef(secondsLeft);
    function tick() {
        secondsLeftRef.current--;
        dispatch(setSecondsLeft(secondsLeftRef.current))
    }

    useEffect(() => {
        function nextQuestion() {
            // const nextMode = modeRef.current === 'work' ? 'break' : 'work'
            // const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60
            // dispatch(setMode(nextMode))
            // modeRef.current = nextMode
            // dispatch(setSecondsLeft(nextSeconds))
            // secondsLeftRef.current = nextSeconds;
            const nextQuestion = currentQuestion + 1
            dispatch(setClick('не має'))
            if (nextQuestion < questions.length) {
                dispatch(setCurrentQuestion(nextQuestion))

            } else {
                dispatch(setShowScore(true))
            }
        }

        secondsLeftRef.current = timerValue * 60
        dispatch(setSecondsLeft(secondsLeftRef.current))

        const interval = setInterval(() => {
            // if (isPausedRef.current) {
            //     return
            // }
            if (secondsLeftRef.current === 0) {
                return nextQuestion()
            }

            tick()

        }, 1000)
        return () => clearInterval(interval);
    }, [currentQuestion, questions])


    const totalSeconds =  timerValue * 60
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if (seconds < 10) seconds = '0' + seconds;
    return (
        <div >
            <CircularProgressbar value={percentage} text={minutes + ':' + seconds}
                                 styles={buildStyles({
                                     textSize: '24px',
                                     pathColor:  '#7cc6fe',
                                     textColor: '#fff',
                                     fontSize: '24px'

                                 })}/>
        </div>
    );
};

export default Timer;