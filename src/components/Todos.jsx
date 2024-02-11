import React from 'react'
import Todo from './Todo'

function Todos({todoList, onTodoDoneUndone}) {
    const onTodoDoneUndoneChange = (doneUndoneTodo) =>{
        onTodoDoneUndone(doneUndoneTodo)
    }
  return (
    <div>
        <h2>Todo List</h2>
        {todoList.map(itemTodo =>(
            <Todo key={itemTodo.id} todoItem={itemTodo} onTodoDoneUndone= {onTodoDoneUndoneChange} />
        ))}
    </div>
  )
}

export default Todos