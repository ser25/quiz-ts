import React from 'react';
import {SelectQuestions, SelectQuestion, setCurrentQuestion, setScore, setShowScore} from "../../redux/slices/questionSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ShowScore = () => {
    const questions = useSelector(SelectQuestions)
    const {score} = useSelector(SelectQuestion)
    const dispatch = useDispatch()

    const refresh = () => {
        dispatch(setCurrentQuestion(0))
        dispatch(setScore(0))
        dispatch(setShowScore(false))

    }
    return (
        <div className='section__score'>
            <div>Правільних відповідів {score} з {questions.length}</div>
            <Link style={{width: '100%'}} to='/'>
                <button onClick={refresh} className='refresh__btn'>Спробувати ще раз...</button>
            </Link>
            <Link style={{width: '100%'}} to='/statistic'>
                <button  className='refresh__btn'>Статистика</button>
            </Link>

        </div>
    );
};

export default ShowScore;