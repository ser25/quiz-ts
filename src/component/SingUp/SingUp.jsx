import React from 'react';
import {getAuth, createUserWithEmailAndPassword,} from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import Form from "../Form/Form";
import {useDispatch} from "react-redux";
import {setUser} from "../../redux/slices/userSlice";
const SingUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = (email, password) =>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                dispatch(setUser({
                    email: user.email,
                    id: user?.id,
                    token: user?.accessToken,
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