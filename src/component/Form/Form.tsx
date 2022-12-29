import React, {FC, useState} from 'react';
import MyInput from "../../UI/Input/Input";
import LoginIcon from '@mui/icons-material/Login';

type FormProps = {
    title: string,
    handelClick: (email: string, password: string) => void
}


const Form: FC<FormProps> = ({title, handelClick}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <MyInput value={email}
                     type={'email'}
                     placeholder={'email'}
                     color={"success"}
                     style={{margin: '15px 0'}}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                         setEmail(event.target.value)
                     }}
            />
            <MyInput color='primary'
                     type='password'
                     value={password}
                     onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                     placeholder={'password'}
                     style={{margin: '15px 0'}}
            />

            <button onClick={() => handelClick(email, password)}>
                {title === 'sing in' && <LoginIcon sx={{marginRight: '5px'}}/>}
                {title}
            </button>
        </div>
    );
};

export default Form;