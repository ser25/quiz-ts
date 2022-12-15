import React from 'react';
import './admin.css'
import {Box, Checkbox, FormControlLabel, Input, TextField} from "@mui/material";
import {red} from "@mui/material/colors";

const primary = red[500]

const Admin = () => {
    const answerOptions = [
        {
            answerText: "Відповідь 1",
            isCorrect: false,
        },
        {
            answerText: "Відповідь 2",
            isCorrect: false,
        },
        {
            answerText: "Відповідь 3",
            isCorrect: false,
        },
        {
            answerText: "Відповідь 4",
            isCorrect: false,
        }
    ]
    return (
        <div className='admin'>
            <div>
                {false
                ?
                    <button>Удалити</button>
                :
                    <button>Стаорити</button>}
            </div>
            <div className={'admin__questions'}>
                <div className={'admin__questionText'}>
                    <TextField className='Input' id="standard-basic" label="Текст питання?" variant="standard"
                               autoComplete="off"
                               sx={{
                                   "& .MuiFormLabel-root": {
                                       color: '#ffffff'
                                   },
                                   "& .MuiFormLabel-root.Mui-focused": {
                                       color: '#fff'
                                   },
                                   "& .MuiInputBase-root": {
                                       color: 'primary.main'
                                   }
                               }}/>
                </div>

                <div>Позначте галочкою правильну відповідь</div>
                <div className={'admin__answerOptions'}>
                    {answerOptions.map(answerOption =>
                        <div key={answerOption.answerText} className={'admin__answerOption'}>
                            <Checkbox  labelplacement="end"/>
                            <TextField className='Input' id="standard-basic" label={answerOption.answerText}
                                       variant="standard"
                                       autoComplete="off"
                                       sx={{
                                           "& .MuiFormLabel-root": {
                                               color: '#ffffff'
                                           },
                                           "& .MuiFormLabel-root.Mui-focused": {
                                               color: '#fff'
                                           },
                                           "& .MuiInputBase-root": {
                                               color: 'primary.main'
                                           }
                                       }}/>
                        </div>
                    )}
                </div>
                <button>Додати</button>
            </div>

        </div>
    );
};

export default Admin;