import React, {useEffect, FC} from 'react';
import { useSelector} from "react-redux";
import cx from "classnames";
import './adminDelete.css'
import {fetchQuestion, SelectQuestions} from "../../../redux/slices/questionSlice";
import ClearIcon from '@mui/icons-material/Clear';
import {fetchAdminDelete} from "../../../redux/slices/adminSlice";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ScrollToTop from "react-scroll-to-top";
import {useAppDispatch} from "../../../redux/store";


const AdminDelete: FC = () => {
    const questions = useSelector(SelectQuestions)
    const dispatch = useAppDispatch()
    const getQuestions = async () => {
        dispatch(fetchQuestion())
    }
    useEffect(() => {
        getQuestions()
    }, [])
    return (
        <div>
            <TransitionGroup>
                {questions.map(question =>
                    <CSSTransition
                        key={question.id}
                        timeout={300}
                        classNames="DeleteItem"
                    >
                        <div className={'adminDelete'} >
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
                                        onClick={(event:React.MouseEvent<HTMLDivElement>) => event.preventDefault()}
                                        className={cx('statistic__question')}
                                        key={q.answerText}

                                    >{q.answerText}</div>
                                )}
                            </div>
                        </div>
                    </CSSTransition>
                )}
            </TransitionGroup>
            <ScrollToTop  top={150} smooth />
        </div>
    );
};

export default AdminDelete;