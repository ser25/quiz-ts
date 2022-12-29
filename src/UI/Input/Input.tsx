import React, {forwardRef} from 'react';
import {TextField} from "@mui/material";
interface MyInputFormProps {
    color: 'success' | 'primary',
    type: string,
    value: string,
    placeholder: string,
    style: {margin: string},
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
type FieldValues = Record<string, any>
interface MyInputAdminDeleteProps {
    error: boolean,
    helperText: string | undefined
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}
const MyInput: React.FC<MyInputFormProps | MyInputAdminDeleteProps> = forwardRef((props, ref) => {
    return <TextField variant="standard"
                      inputRef={ref}
                      autoComplete="off"
                      fullWidth
                      id="outlined-basic"
                      {...props}
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
                      }}
    />
})

export default MyInput;