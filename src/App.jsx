import React, {useEffect} from "react";
import AddTodoContainer from "./containers/add-todo";
import TodoListContainer from "./containers/todo-list";
import FilterButtons from "./containers/filter-buttons";
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import postOperations from "./redux/post/thunk"

function App() {
    const posts = useSelector(state => state.posts.list)
    const dispatch = useDispatch()
    const {fetchPosts} = postOperations
    useEffect(() => {
       dispatch(fetchPosts())
    }, [])
    console.log(posts);
    return (
        <div>
                <h1>TO DO LIST</h1>
            <AddTodoContainer />
            <TodoListContainer />
            <FilterButtons />

        </div>
    );
}

export default App;