import React, {forwardRef} from 'react';
import {TextField} from "@mui/material";

const MyInput = forwardRef((props, ref) => {
    return <TextField variant="standard"
                      inputRef={ref}
                      autoComplete="off"
                      fullWidth
                      id="outlined-basic"
                      autoComplete="off"
                      id="standard-basic"
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