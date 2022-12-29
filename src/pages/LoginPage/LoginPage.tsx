import React, {FC} from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
import Login from '../../component/Login/Login'
import CloseIcon from '@mui/icons-material/Close';

const LoginPage: FC = () => {
    return (
        <div style={{position: 'relative'}} className={'containerBody'}>
            <h1>
                LoginPage
            </h1>
            <Login/>
            <div>
                Or <Link to={'/register'}>register</Link>
            </div>
            <Link to={'/'}>
                <CloseIcon
                    sx={{
                        position: 'absolute',
                        top: '25px',
                        right: '50px',
                        color: 'red',
                        "& path": {
                            color: 'red'
                        }
                    }}
                />
            </Link>

        </div>
    );
};

export default LoginPage;