import React from 'react';
import {Checkbox} from "@mui/material";

const MyCheckBox = ({register, errors}) => {
    return (
        <Checkbox {...register('checkbox',{
            required: true
        })}
                  sx={!!errors?.checkbox ? {
                      "& path": {
                          fill: 'red'
                      }
                  } : {
                      "& path": {
                          fill: 'white'
                      }
                  }} />
    );
};

export default MyCheckBox;