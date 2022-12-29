import React, {useEffect, useState} from 'react';
import '../admin.css'
import {Checkbox, TextField} from "@mui/material";
import {
    fetchAdmin, refreshAnswerOption, SelectAdmin,
    setAnswerOption1IsCorrect,
    setAnswerOption1Text,
    setAnswerOption2IsCorrect,
    setAnswerOption2Text,
    setAnswerOption3IsCorrect, setAnswerOption3Text,
    setAnswerOptionIsCorrect,
    setAnswerOptionText, setIsError,
    setQuestionText
} from "../../../redux/slices/adminSlice";
import {useSelector} from "react-redux";
import {useForm, SubmitHandler} from "react-hook-form";
import MyInput from "../../../UI/Input/Input";
import cn from 'classnames'
import {useAppDispatch} from "../../../redux/store";

interface IShippingField {
    text: string
    checkbox: string
    answerOption: string
    answerOption1: string
    answerOption2: string
    answerOption3: string

}

const AdminQuestionText = () => {
    const dispatch = useAppDispatch()
    const {questionText, answerOption, answerOption1, answerOption2, answerOption3} = useSelector(SelectAdmin)
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm<IShippingField>({
        mode: 'onBlur',
    })

    const onSubmit: SubmitHandler<IShippingField> = () => {
        dispatch(fetchAdmin())
        dispatch(refreshAnswerOption())
        reset()
    }

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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        dispatch(setQuestionText(event.target.value))}
                />

                <div className={cn("admin__checkboxText")}>Позначте галочкою правильну відповідь</div>

                <div className={'admin__answerOptions'}>
                    <div className={'admin__answerOption'}>
                        <Checkbox
                            {...register('checkbox', {
                                required: true
                            })}
                            checked={answerOption.isCorrect}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOptionIsCorrect(event.target.checked))}
                            sx={!!errors?.checkbox ? {
                                "& path": {
                                    fill: 'red'
                                }
                            } : {
                                "& path": {
                                    fill: 'white'
                                }
                            }}


                        />
                        <MyInput
                            error={!!errors?.answerOption}
                            helperText={errors?.answerOption?.message}
                            label={'Відповідь 1'}
                            {...register('answerOption', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption.answerText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOptionText(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox
                            {...register('checkbox', {
                                required: true
                            })}
                            checked={answerOption1.isCorrect}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOption1IsCorrect(event.target.checked))}
                            sx={!!errors?.checkbox ? {
                                "& path": {
                                    fill: 'red'
                                }
                            } : {
                                "& path": {
                                    fill: 'white'
                                }
                            }}
                        />
                        <MyInput
                            error={!!errors?.answerOption1}
                            helperText={errors?.answerOption1?.message}
                            label={'Відповідь 2'}
                            {...register('answerOption1', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption1.answerText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOption1Text(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox
                            {...register('checkbox', {
                                required: true
                            })}
                            checked={answerOption2.isCorrect}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => dispatch(setAnswerOption2IsCorrect(event.target.checked))}
                            sx={!!errors?.checkbox ? {
                                "& path": {
                                    fill: 'red'
                                }
                            } : {
                                "& path": {
                                    fill: 'white'
                                }
                            }}
                        />
                        <MyInput
                            error={!!errors?.answerOption2}
                            helperText={errors?.answerOption2?.message}
                            label={'Відповідь 3'}
                            {...register('answerOption2', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption2.answerText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOption2Text(event.target.value))}
                        />
                    </div>
                    <div className={'admin__answerOption'}>
                        <Checkbox
                            {...register('checkbox', {
                                required: true
                            })}
                            checked={answerOption3.isCorrect}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOption3IsCorrect(event.target.checked))}
                            sx={!!errors?.checkbox ? {
                                "& path": {
                                    fill: 'red'
                                }
                            } : {
                                "& path": {
                                    fill: 'white'
                                }
                            }}
                        />
                        <MyInput
                            error={!!errors?.answerOption3}
                            helperText={errors?.answerOption3?.message}
                            label={'Відповідь 4'}
                            {...register('answerOption3', {
                                required: "Обов'язково заповнити це поле"
                            })}
                            value={answerOption3.answerText}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                dispatch(setAnswerOption3Text(event.target.value))}
                        />
                    </div>

                </div>
                <button type={'submit'}>Додати</button>

            </form>
        </>
    );
};

export default AdminQuestionText;