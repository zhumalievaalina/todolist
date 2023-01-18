import React from 'react';
import Button from "@mui/material/Button";
import style from "./style.module.css"



const TodoItem = (props) => {
    const {
        text,
        onClick,
        onDelete,
        isComplete
    } = props

    return (
        <li className={style}
            onClick={onClick}
            style={{
                textDecoration: isComplete ? 'line-through' : 'none'
            }}
        >
            {text}
            <Button onClick={onDelete}>
                delete
            </Button>
            {/*<Button variant="outlined" startIcon={<DeleteIcon />}>*/}
            {/*    Delete*/}
            {/*</Button>*/}
        </li>
    );
};

export default TodoItem;