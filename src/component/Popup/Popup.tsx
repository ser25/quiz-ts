import React, {ChangeEventHandler, useState} from 'react';
import './Popup.css'
import Slider from '@mui/material/Slider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {SelectTimer, setTimerValue} from "../../redux/slices/timerSlice";
import {SliderTypeMap} from "@mui/material/Slider/Slider";
import {useAppDispatch} from "../../redux/store";

type PopupProps = {
    setActive: (isTrue: boolean) => void
}

const Popup: React.FC<PopupProps> = ({setActive}) => {
    const dispatch = useAppDispatch()
    const {timerValue} = useSelector(SelectTimer)
    const handleInputChange = (event: Event, newValue: number | number[]) => {
        dispatch(setTimerValue(newValue))
    }

    return (
        <div className={'popup'} onClick={() => setActive(false)}>
            <div className={'popup__header'} onClick={(e) => e.stopPropagation()}>
                <div className={'popup__slider'}>
                    <Slider
                        aria-label="Default"
                        valueLabelDisplay="auto"
                        sx={{width: 350}}
                        step={0.1}
                        min={0}
                        max={2}
                        value={timerValue}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={'popup__text'}>
                    Час для відповіді для
                    запитання: {Number.isInteger(timerValue) ? `${timerValue}:00` : timerValue} хвилин
                </div>
                <div>
                    <button onClick={() => dispatch(setTimerValue(0))}>
                        Скинути настройки таймера
                    </button>
                </div>
                <div className={'popup__back'}>
                    <ArrowBackIcon fontSize={'large'}
                                   onClick={() => setActive(false)}
                    />
                </div>

            </div>

        </div>
    );
};

export default Popup;