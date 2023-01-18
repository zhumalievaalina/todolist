import React from 'react';
import TextField from '@mui/material/TextField';
const Input = (props) => {
    const {
        value,
        onChange,
        type = 'text'
    } = props

    return (
        <div>
            <TextField
                value={value}
                onChange={onChange}
                type={type}
                id="outlined-multiline-flexible"
                label="Add new task"
            />
        </div>
    );
};

export default Input;