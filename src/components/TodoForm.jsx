import React, {useState} from 'react'

function TodoForm(props) {
    const [newTodo, setNewTodo] = useState('');

    const onNewTodoChange = (e) =>{
        setNewTodo(e.target.value);
    }

    const onNewTodoSubmitClick = () =>{
        const newEntry = {title: newTodo, isDone: false};
        props.onNewTodoSubmit(newEntry);
    }
  return (
    <div>
        <h2>Todo Form</h2>
        <input type="text" name="newTodo" id="newTodo" value={newTodo} onChange={onNewTodoChange} /> &nbsp; &nbsp;
        <input type="button" value="Submit" onClick={onNewTodoSubmitClick} />
    </div>
  )
}

export default TodoForm