import React, {useState} from 'react';
import './Popup.css'
import Slider from '@mui/material/Slider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {setTimerValue} from "../../redux/slices/timerSlice";

const Popup = ({active, setActive}) => {
    const dispatch = useDispatch()
    const valueTimer = useSelector(state => state.timer.timerValue)

    return (
        <div className={'popup'} onClick={() => setActive(false)}>
            <div className={'popup__header'} onClick={(e) => e.stopPropagation()}>
                <div className={'popup__slider'}>
                    <Slider
                            aria-label="Default"
                            valueLabelDisplay="auto"
                            sx={{ width: 350 }}
                            step={0.1}
                            min={0}
                            max={2}
                            value={valueTimer}
                            onChange={(e) => dispatch(setTimerValue(e.target.value))}
                    />
                </div>
                <div className={'popup__text'}>
                    Час для відповіді для запитання: {Number.isInteger(valueTimer) ? `${valueTimer}:00` : valueTimer} хвилин
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