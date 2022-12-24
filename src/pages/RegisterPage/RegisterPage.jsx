import React from 'react';
import '../../App.css'
import {Link} from "react-router-dom";
import SingUp from "../../component/SingUp/SingUp";
import CloseIcon from "@mui/icons-material/Close";
const RegisterPage = () => {
    return (
        <div style={{position: 'relative'}} className={'containerBody'}>
            <h1>RegisterPage</h1>
            <SingUp />
            <div>
                Or <Link to={'/login'} >Sing up</Link>
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

export default RegisterPage;