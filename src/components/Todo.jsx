import React from 'react'
import { todoOperations } from '../common/constants';

function Todo({id, todoItem, onTodoChange}) {
    const changeTodo = (operationType) =>{
        onTodoChange(todoItem, operationType);
    }
    const onEditButtonClick = () =>{
        changeTodo(todoOperations.Edit)
    }
  return (
    <div>
        <p>
           <input type="button" value="Edit" onClick={onEditButtonClick}/>&nbsp;&nbsp;
           <input type="button" value="Delete" onClick={() => changeTodo(todoOperations.Delete)} /> &nbsp; &nbsp;
            <span>{todoItem?.title}</span> &nbsp;&nbsp;
            <input type="checkbox" name="" id="" checked={todoItem?.isDone}
            onChange={() => {changeTodo(todoOperations.DoneUndone)}} /> 
        </p>
    </div>
  )
}

export default Todo