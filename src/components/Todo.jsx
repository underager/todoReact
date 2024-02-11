import React from 'react'

function Todo({id, todoItem, onTodoDoneUndone}) {
    const onTodoDoneUndoneChange = () =>{
        onTodoDoneUndone(todoItem);
    }
  return (
    <div>
        <p>
            <input type="checkbox" name="" id="" checked={todoItem?.isDone}
            onChange={onTodoDoneUndoneChange} /> &nbsp;&nbsp;
            <span>{todoItem?.title}</span>
        </p>
    </div>
  )
}

export default Todo