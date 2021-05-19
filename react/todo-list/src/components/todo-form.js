import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function TodoForm( { addTodo }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    function handleInput(e){
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        if(todo.task.trim()){
            addTodo({...todo, id: uuidv4()});
           
            setTodo({...todo, task: ""});
        }
    }

    return (
            <form onSubmit = {handleSubmit}>
                <input
                name = "task"
                type = "text"
                value = {todo.task}
                onChange = {handleInput} />
                <button type = 'submit'>submit</button>
            </form>
    );
}

export default TodoForm;
