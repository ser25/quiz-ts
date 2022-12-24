import React from 'react';
import './Home.css'
import {Link, Navigate, Route} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from "../../redux/slices/userSlice";
import LoginIcon from "@mui/icons-material/Login";
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import Popup from "../../component/Popup/Popup";

const Home = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    const [popupActive, setPopupActive] = React.useState(false)
    const valueTimer = useSelector(state => state.timer.timerValue)
    return (
        <div className='home'>
            {isAuth ?
                <button className='home__button' onClick={() => dispatch(removeUser())}>
                    Log out from {email}
                </button>
                :
                <Link to={'/login'}>
                    <button className='home__button'>
                        Sing in <LoginIcon sx={{marginLeft: '5px'}} />
                    </button>
                </Link>
            }
            {isAuth &&
                <Link to={'/admin'}>
                    <button>Admin</button>
                </Link>
            }

            <Link to={'/questions'}>
                <button style={{marginBottom: '20px'}}>Розпочати <QuizIcon sx={{marginLeft: '5px'}} /></button>
            </Link>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                Відповіді на питання {valueTimer ? <span>з таймером</span> : <span>без теймеру</span>},
                час на відповідь {Number.isInteger(valueTimer) ? `${valueTimer}:00` : valueTimer} хвилин
            </div>
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <SettingsIcon sx={{cursor: 'pointer'}}
                              onClick={() => setPopupActive(true)}/>
            </div>
            {popupActive && <Popup active={popupActive} setActive={setPopupActive} />}


        </div>

    )
};

export default Home;