import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import cx from "classnames";
import '../../component/Statistic/statistic.css'
import {useSelector} from "react-redux";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const FullQuestions = () => {
    const [question, setQuestion] = useState()
    const click = useSelector(state => state.question.click)
    const {id} = useParams()
    const navigate = useNavigate()
    const goBack = () => navigate(-1)
    useEffect(() => {
        async function fetchQuestion() {
            try {
                const {data} = await axios.get(`https://632742f4ba4a9c47533406de.mockapi.io/items/` + id)
                setQuestion(data)

            } catch (error) {
                alert('error')
            }
        }

        fetchQuestion()
    }, [])
    if(!question){
        return 'Завантаження...'
    }
    return (
        <div style={{position: 'relative'}} className='statistic'>
            <h2  className='statistic__text'>{question.questionText}</h2>
                <ArrowBackIcon
                    onClick={goBack}
                    sx={{
                        position: 'absolute',
                        top: '42px',
                        cursor: 'pointer'
                    }}/>

            <div className='statistic__section'>
                {question.answerOptions.map(q =>
                    <div
                        onClick={(event) => event.preventDefault()}
                        className={cx({'green' : q.isCorrect}, 'statistic__question' )}
                        key={q.answerText}

                    >{q.answerText}</div>
                )}
            </div>
            <div className='statistic__answer'>Ваша відповідь: <span>{click[id - 1]}</span></div>
        </div>
    );
};

export default FullQuestions;