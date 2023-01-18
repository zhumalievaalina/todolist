import React, {useState} from 'react';
import Input from "../../components/input";
import Button from "../../components/button";
import {useDispatch} from "react-redux";
import {addTodoActionCreator} from "../../redux/todo/actions";
import style from "./syle.module.css"


const AddTodoContainer = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            dispatch(addTodoActionCreator(inputValue))
            setInputValue('')
        }
    }


    return (
        <div>
            <Input
                value={inputValue}
                onChange={handleInputChange}
            />
            <Button onClick={handleAddTodo}>Add</Button>
        </div>
    );
};

export default AddTodoContainer;