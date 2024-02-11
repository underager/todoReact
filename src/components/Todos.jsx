import React from 'react'
import Todo from './Todo'

function Todos({todoList, onTodoChange}) {
    const changeTodo = (doneUndoneTodo, operationType) =>{
        onTodoChange(doneUndoneTodo, operationType)
    }
  return (
    <div>
        <h2>Todo List</h2>
        {todoList.map(itemTodo =>(
            <Todo key={itemTodo.id} todoItem={itemTodo} onTodoChange= {changeTodo} />
        ))}
    </div>
  )
}

export default Todos