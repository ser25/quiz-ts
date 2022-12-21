import React, {useEffect, useState} from 'react';
import '../admin.css'
import {Checkbox, TextField} from "@mui/material";
import {
    fetchAdmin, refreshAnswerOption,
    setAnswerOption1IsCorrect,
    setAnswerOption1Text,
    setAnswerOption2IsCorrect,
    setAnswerOption2Text,
    setAnswerOption3IsCorrect, setAnswerOption3Text,
    setAnswerOptionIsCorrect,
    setAnswerOptionText, setIsError,
    setQuestionText
} from "../../../redux/slices/adminSlice";
import {useDispatch, useSelector} from "react-redux";

const AdminQuestionText = () => {
    const dispatch = useDispatch()
    const questionText = useSelector(state => state.admin.questionText)
    const answerOption = useSelector(state => state.admin.answerOption)
    const answerOption1 = useSelector(state => state.admin.answerOption1)
    const answerOption2 = useSelector(state => state.admin.answerOption2)
    const answerOption3 = useSelector(state => state.admin.answerOption3)
    const isError = useSelector(state => state.admin.isError)
    const [isErrorText, setIsErrorText] = useState(false)
    const isRightForm = async (text, answer, answer1, answer2, answer3 ) =>{
        console.log(text)
         await text === '' ? setIsErrorText(true) : setIsErrorText(false)

        if(isErrorText){
            console.log(isError)
            dispatch(setIsError(true))
        }
    }

    return (
        <>
            <div className={'admin__questions'}>
                <div className={'admin__questionText'}>
                    <TextField value={questionText}
                               onChange={(event) => dispatch(setQuestionText(event.target.value))}
                               className='Input' id="standard-basic" error={isErrorText} label="Текст питання?"
                               variant="standard"
                               autoComplete="off"
                               sx={[
                                   isErrorText && {
                                       "& .MuiFormLabel-root": {
                                           color: '#ff0000'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   },
                                   !isErrorText &&{
                                       "& .MuiFormLabel-root": {
                                           color: '#ffffff'
                                       },
                                       "& .MuiFormLabel-root.Mui-focused": {
                                           color: '#fff'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   },


                               ]}
                    />
                </div>

                <div style={{margin: '15px 0'}}>Позначте галочкою правильну відповідь</div>
                <div className={'admin__answerOptions'}>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOptionIsCorrect(event.target.checked))}
                                  labelplacement="end"/>
                        <TextField className='Input'
                                   id="standard-basic"
                                   value={answerOption.answerText}
                                   onChange={(event) => dispatch(setAnswerOptionText(event.target.value))}
                                   label='Відповідь 1'
                                   variant="standard"
                                   autoComplete="off"
                                   sx={{
                                       "& .MuiFormLabel-root": {
                                           color: '#ffffff'
                                       },
                                       "& .MuiFormLabel-root.Mui-focused": {
                                           color: '#fff'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   }}/>
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption1.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption1IsCorrect(event.target.checked))}
                                  labelplacement="end"/>
                        <TextField className='Input'
                                   id="standard-basic"
                                   value={answerOption1.answerText}
                                   onChange={(event) => dispatch(setAnswerOption1Text(event.target.value))}
                                   label='Відповідь 2'
                                   variant="standard"
                                   autoComplete="off"
                                   sx={{
                                       "& .MuiFormLabel-root": {
                                           color: '#ffffff'
                                       },
                                       "& .MuiFormLabel-root.Mui-focused": {
                                           color: '#fff'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   }}/>
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption2.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption2IsCorrect(event.target.checked))}
                                  labelplacement="end"/>
                        <TextField className='Input'
                                   id="standard-basic"
                                   value={answerOption2.answerText}
                                   onChange={(event) => dispatch(setAnswerOption2Text(event.target.value))}
                                   label='Відповідь 3'
                                   variant="standard"
                                   autoComplete="off"
                                   sx={{
                                       "& .MuiFormLabel-root": {
                                           color: '#ffffff'
                                       },
                                       "& .MuiFormLabel-root.Mui-focused": {
                                           color: '#fff'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   }}/>
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption3.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption3IsCorrect(event.target.checked))}
                                  labelplacement="end"/>
                        <TextField className='Input'
                                   id="standard-basic"
                                   value={answerOption3.answerText}
                                   onChange={(event) => dispatch(setAnswerOption3Text(event.target.value))}
                                   label='Відповідь 4'
                                   variant="standard"
                                   autoComplete="off"
                                   sx={{
                                       "& .MuiFormLabel-root": {
                                           color: '#ffffff'
                                       },
                                       "& .MuiFormLabel-root.Mui-focused": {
                                           color: '#fff'
                                       },
                                       "& .MuiInputBase-root": {
                                           color: 'primary.main'
                                       }
                                   }}/>
                    </div>

                </div>
                <button onClick={() => {
                    isRightForm(questionText)
                    dispatch(fetchAdmin())
                    dispatch(refreshAnswerOption())
                }}>Додати
                </button>
                <button onClick={() => isRightForm(questionText)}>Text right</button>
            </div>
        </>
    );
};

export default AdminQuestionText;