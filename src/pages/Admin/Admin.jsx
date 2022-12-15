import React, {useEffect} from 'react';
import './admin.css'
import {Box, Checkbox, FormControlLabel, Input, TextField} from "@mui/material";
import {red} from "@mui/material/colors";
import {useDispatch, useSelector} from "react-redux";
import {
    setAnswerOptionText, setAnswerOption1Text, setAnswerOption2Text, setAnswerOption3Text,
    setAnswerOptionIsCorrect, setAnswerOption1IsCorrect, setAnswerOption2IsCorrect, setAnswerOption3IsCorrect,
    setQuestionText, fetchAdmin
}
    from "../../redux/slices/adminSlice";

const primary = red[500]

const Admin = () => {
    // const answerOption = useSelector(state => state.admin.answerOption)
    const dispatch = useDispatch()
    useEffect(() => {
        // dispatch(setAnswerOption({text: 'yes', isCorrect: true}))
    }, [])

    // const answerOptions = [
    //     {
    //         answerText: "Відповідь 1",
    //         isCorrect: false,
    //     },
    //     {
    //         answerText: "Відповідь 2",
    //         isCorrect: false,
    //     },
    //     {
    //         answerText: "Відповідь 3",
    //         isCorrect: false,
    //     },
    //     {
    //         answerText: "Відповідь 4",
    //         isCorrect: false,
    //     }
    // ]
    const questionText = useSelector(state => state.admin.questionText)
    const answerOption = useSelector(state => state.admin.answerOption)
    const answerOption1 = useSelector(state => state.admin.answerOption1)
    const answerOption2 = useSelector(state => state.admin.answerOption2)
    const answerOption3 = useSelector(state => state.admin.answerOption3)
    console.log()
    return (
        <div className='admin'>
            <div>
                {false
                    ?
                    <button>Удалити</button>
                    :
                    <button>Стаорити</button>}
            </div>
            <div className={'admin__questions'}>
                <div className={'admin__questionText'}>
                    <TextField  value={questionText}
                                onChange={(event) => dispatch(setQuestionText(event.target.value))}
                        className='Input' id="standard-basic" label="Текст питання?" variant="standard"
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

                <div>Позначте галочкою правильну відповідь</div>
                <div className={'admin__answerOptions'}>
                    <div className={'admin__answerOption'}>
                        <Checkbox onChange={(event) => dispatch(setAnswerOptionIsCorrect(event.target.checked))}
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
                        <Checkbox onChange={(event) => dispatch(setAnswerOption1IsCorrect(event.target.checked))}
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
                        <Checkbox onChange={(event) => dispatch(setAnswerOption2IsCorrect(event.target.checked))}
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
                        <Checkbox onChange={(event) => dispatch(setAnswerOption3IsCorrect(event.target.checked))}
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
                <button onClick={() => dispatch(fetchAdmin())} >Додати</button>
            </div>

        </div>
    );
};

export default Admin;