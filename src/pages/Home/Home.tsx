import React, {FC} from 'react';
import './Home.css'
import {Link, Navigate, Route} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {useSelector} from "react-redux";
import {removeUser} from "../../redux/slices/userSlice";
import LoginIcon from "@mui/icons-material/Login";
import QuizIcon from '@mui/icons-material/Quiz';
import SettingsIcon from '@mui/icons-material/Settings';
import Popup from "../../component/Popup/Popup";
import {SelectTimer} from "../../redux/slices/timerSlice";
import {useAppDispatch} from "../../redux/store";

const Home: FC = () => {
    const dispatch = useAppDispatch()
    const {isAuth, email} = useAuth()
    const [popupActive, setPopupActive] = React.useState<boolean>(false)
    const {timerValue} = useSelector(SelectTimer)
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
            {true && //isAuth
                <Link to={'/admin'}>
                    <button>Admin</button>
                </Link>
            }

            <Link to={'/questions'}>
                <button style={{marginBottom: '20px'}}>Розпочати <QuizIcon sx={{marginLeft: '5px'}} /></button>
            </Link>
            <div style={{textAlign: 'center', marginBottom: '20px'}}>
                Відповіді на питання {timerValue ? <span>з таймером</span> : <span>без теймеру</span>},
                час на відповідь {Number.isInteger(timerValue) ? `${timerValue}:00` : timerValue} хвилин
            </div>
            <div style={{display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <SettingsIcon sx={{cursor: 'pointer'}}
                              onClick={() => setPopupActive(true)}/>
            </div>
            {popupActive && <Popup  setActive={setPopupActive} />}


        </div>

    )
};

export default Home;