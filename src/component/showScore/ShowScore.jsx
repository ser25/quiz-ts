import React from 'react';
import {setCurrentQuestion, setScore, setShowScore} from "../../redux/slices/questionSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ShowScore = () => {
    const questions = useSelector(state => state.question.items)
    const score = useSelector(state => state.question.score)
    const dispatch = useDispatch()

    const refresh = () => {
        dispatch(setCurrentQuestion(0))
        // setCurrentQuestion(0)
        dispatch(setScore(0))
        dispatch(setShowScore(false))
    }
    return (
        <div className='section__score'>
            <div>Правільних відповідів {score} з {questions.length}</div>
            <button onClick={refresh} className='refresh__btn'>Спробувати ще раз...</button>
            <Link to='/statistic'>
                <button  className='refresh__btn'>Статистика</button>
            </Link>

        </div>
    );
};

export default ShowScore;