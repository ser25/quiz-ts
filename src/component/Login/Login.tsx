import React from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import {setUser} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/store";


const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate('/')
            })
            .catch(() =>alert('error'))
    }
    return (
        <Form title={'sing in'} handelClick={handleLogin}
        />
    );
};

export default Login;