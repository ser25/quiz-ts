import React, {useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import './statistic.css'
import cx from 'classnames'
import {refresh, setShowScore} from "../../redux/slices/questionSlice";
import ScrollToTop from "react-scroll-to-top";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Statistic = () => {
    const questions = useSelector(state => state.question.items)
    const {currentQuestion, showScore, score, skeleton, click} = useSelector(state => state.question)
    const dispatch = useDispatch()

    return (
        <div className='statistic'>
            <div className='statistic__right'>
                <span>Питання правильних {score}</span> з {questions.length}
            </div>
            {questions.map(question =>
                <Link key={question.id} to={`/question/${question.id}`}>
                    <div >
                        <div className='statistic__section'>
                            <div className='statistic__text'>{question.questionText}</div>
                        </div>
                        <div className='statistic__section'>
                            {question.answerOptions.map(q =>
                                <div
                                    onClick={(event) => event.preventDefault()}
                                    className={cx({'green' : q.isCorrect}, 'statistic__question' )}
                                    key={q.answerText}

                                >{q.answerText}</div>
                            )}
                        </div>
                        <div className='statistic__answer'>Ваша відповідь:<span>{click[(question.id) - 1]}</span>
                        </div>
                    </div>
                </Link>
                )}
            <Link to='/' >
                <button style={{marginTop: '20px'}} onClick={() => dispatch(refresh())}>Спробувати ще раз</button>
            </Link>

            <ScrollToTop  top={150} smooth />

        </div>

    );
};

export default Statistic;