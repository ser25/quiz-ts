import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import cx from "classnames";
import './adminDelete.css'
import {fetchQuestion} from "../../../redux/slices/questionSlice";
import ClearIcon from '@mui/icons-material/Clear';
import {fetchAdminDelete} from "../../../redux/slices/adminSlice";

const AdminDelete = () => {
    const questions = useSelector(state => state.question.items)
    const dispatch = useDispatch()
    const getQuestions = async () => {
        dispatch(fetchQuestion())
    }
    useEffect(() => {
        getQuestions()
    }, [])
    return (
        <div>
            {questions.map(question =>
                <div className={'adminDelete'} key={question.id}>
                    <ClearIcon className='deleteButton'
                               onClick={() => dispatch(fetchAdminDelete(question.id))}
                               fontSize={"large"} sx={{
                        "& path": {
                            color: 'red'
                        }
                    }}/>
                    <div className='statistic__section'>
                        <div className='statistic__text'>{question.questionText}</div>
                    </div>
                    <div style={{marginBottom: 0}} className='statistic__section'>
                        {question.answerOptions.map(q =>
                            <div
                                onClick={(event) => event.preventDefault()}
                                className={cx('statistic__question')}
                                key={q.answerText}

                            >{q.answerText}</div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDelete;