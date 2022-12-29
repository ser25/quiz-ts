import React from 'react';
import {getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import Form from "../Form/Form";
import {setUser} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/store";


const SingUp = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handleRegister = (email: string, password: string) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigate('/')
            })
            .catch(console.error)
    }
    return (

        <Form
            title={'register'}
            handelClick={handleRegister}
        />
    );
};

export default SingUp;