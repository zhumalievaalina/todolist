import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


const button = (props) => {

    const {
        onClick,
        children,
    } = props
    return (
        <div>
            <Button onClick={onClick}
            >
                {children}
            </Button>
        </div>
    );
};

export default button;