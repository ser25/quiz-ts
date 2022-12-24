import React from 'react';
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../Form/Form";
import {setUser} from "../../redux/slices/userSlice";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = (email, password) =>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user?.id,
                    token: user?.accessToken,
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