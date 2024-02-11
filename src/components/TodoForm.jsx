import React, {useState, useEffect} from 'react'
import { todoOperations } from '../common/constants';

function TodoForm(props) {
    const [newTodo, setNewTodo] = useState('');
    const [addUpdateLabel, setAddUpdateLabel] = useState(props?.todo?.title ? todoOperations.Update : todoOperations.Add);

    useEffect(() =>{
        let operation = todoOperations.Add;
        if(props?.todo?.title){
            operation = todoOperations.Update;
            setNewTodo(props.todo.title)
        }
        setAddUpdateLabel(operation)
    }, [props.todo])

    const onNewTodoChange = (e) =>{
        setNewTodo(e.target.value);
    }

    const onNewTodoSubmitClick = () =>{
        let newEntry = {title: newTodo, isDone: false};
        let operationType = todoOperations.Add;
        if(addUpdateLabel === todoOperations.Update){
            newEntry = {...props.todo, title: newTodo};
            operationType = todoOperations.Update;
        }
        props.onNewTodoSubmit(newEntry, operationType);
    }
  return (
    <div>
        <h2>Todo Form</h2>
        <form>
            <input type="text" name="newTodo" id="newTodo" value={newTodo} onChange={onNewTodoChange} /> &nbsp; &nbsp;
            <input type="button" value={addUpdateLabel} onClick={onNewTodoSubmitClick} />
        </form>
        
    </div>
  )
}

export default TodoForm