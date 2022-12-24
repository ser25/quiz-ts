import React, {useState} from 'react';
import MyInput from "../../UI/Input/Input";
import LoginIcon from '@mui/icons-material/Login';
const Form = ({title, handelClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <MyInput type={'email'}
                     value={email}
                     onChange={(event) => setEmail(event.target.value)}
                     placeholder={'email'}
                     color="success"
                     style={{margin: '15px 0'}}

            />
            <MyInput color={'primary'}
                     type={'password'}
                     value={password}
                     onChange={(event) => setPassword(event.target.value)}
                     placeholder={'password'}
                     style={{margin: '15px 0'}}
            />

            <button onClick={() => handelClick(email, password)}>
                {title === 'sing in' && <LoginIcon sx={{marginRight: '5px'}}/> }
                {title}
            </button>
        </div>
    );
};

export default Form;