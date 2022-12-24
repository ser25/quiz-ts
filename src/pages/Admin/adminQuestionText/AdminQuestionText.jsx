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
import {useForm} from "react-hook-form";
import MyInput from "../../../UI/Input/Input";

const AdminQuestionText = () => {
    const dispatch = useDispatch()
    const questionText = useSelector(state => state.admin.questionText)
    const answerOption = useSelector(state => state.admin.answerOption)
    const answerOption1 = useSelector(state => state.admin.answerOption1)
    const answerOption2 = useSelector(state => state.admin.answerOption2)
    const answerOption3 = useSelector(state => state.admin.answerOption3)
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset
    } = useForm({
        mode: 'onBlur',
    })
    const onSubmit = (data) => {
        dispatch(fetchAdmin())
        dispatch(refreshAnswerOption())
        reset()
    }
    console.log(!errors?.answerOption3)

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={'admin__questions'}>
                <MyInput
                    error={!!errors?.text}
                    helperText={errors?.text?.message}
                    label={'Текст питання?'}
                    {...register('text', {
                        required: "Обов'язково заповнити це поле"
                    })}
                    value={questionText}
                    onChange={(event) => dispatch(setQuestionText(event.target.value))}
                />

                <div style={{margin: '15px 0'}}>Позначте галочкою правильну відповідь</div>

                <div className={'admin__answerOptions'}>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOptionIsCorrect(event.target.checked))}
                                  labelplacement="end"
                        />
                        <MyInput
                            error={!!errors?.answerOption}
                            helperText={errors?.answerOption?.message}
                            label={'Відповідь 1'}
                            {...register('answerOption', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption.answerText}
                            onChange={(event) => dispatch(setAnswerOptionText(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption1.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption1IsCorrect(event.target.checked))}
                                  labelplacement="end"
                        />
                        <MyInput
                            error={!!errors?.answerOption1}
                            helperText={errors?.answerOption1?.message}
                            label={'Відповідь 2'}
                            {...register('answerOption1', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption1.answerText}
                            onChange={(event) => dispatch(setAnswerOption1Text(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption2.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption2IsCorrect(event.target.checked))}
                                  labelplacement="end"
                        />
                        <MyInput
                            error={!!errors?.answerOption2}
                            helperText={errors?.answerOption2?.message}
                            label={'Відповідь 3'}
                            {...register('answerOption2', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption2.answerText}
                            onChange={(event) => dispatch(setAnswerOption2Text(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox checked={answerOption3.isCorrect}
                                  onChange={(event) => dispatch(setAnswerOption3IsCorrect(event.target.checked))}
                                  labelplacement="end"
                        />
                        <MyInput
                            error={!!errors?.answerOption3}
                            helperText={errors?.answerOption3?.message}
                            label={'Відповідь 4'}
                            {...register('answerOption3', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption3.answerText}
                            onChange={(event) => dispatch(setAnswerOption3Text(event.target.value))}
                        />
                    </div>

                </div>
                <button type={'submit'}>Додати</button>

            </form>
        </>
    );
};

export default AdminQuestionText;