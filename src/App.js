import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { todoOperations } from './common/constants';


function App() {
  const [todoList, setTodoList] = useState([
                                    {id: 1, title: 'Wake up', isDone: true},
                                    {id: 2, title: 'Brush Teeth', isDone: false},
                                    {id: 3, title: 'Shave', isDone: false},
                                    {id: 4, title: 'Go for a walk', isDone: false}
                                  ]);

  const [todo, setTodo] = useState({});

  

  const onTodoChange = (doneUndoneTodo, changeOperation) =>{
    const todo = todoList.find(x => x.id === doneUndoneTodo?.id);
    todoOperationWiseMap[changeOperation](todo);
    
  }
  
  const onTodoDoneUndone = (todo) =>{
    todo.isDone = !todo?.isDone;
    setTodoList([...todoList]);
  }

  const onDeleteTodo = (todo) =>{
    const newTodos = todoList.filter(x => x.id !== todo?.id);
    setTodoList([...newTodos]);
  }

  const onEditTodo = (todo) =>{
    setTodo(todo);
  }
  const onNewTodoSubmit = (newTodoItem, operationType) =>{
    if(operationType === todoOperations.Add){
      setTodoList((prevTodoList) => [...prevTodoList, {id: prevTodoList.length +1, ...newTodoItem}]);
    }else if (operationType === todoOperations.Update){
      const todoToUpdate = todoList.find(x => x.id === newTodoItem.id);

      todoToUpdate.title = newTodoItem.title;

      setTodoList([...todoList]);
    }
  }

  const todoOperationWiseMap = {
    DoneUndone : onTodoDoneUndone,
    Add: onNewTodoSubmit,
    Delete: onDeleteTodo,
    Edit: onEditTodo,
  }

  return (
    <div className="App">
      <h1>TO DO APP LOADING</h1>
      <TodoForm todo={todo} onNewTodoSubmit={onNewTodoSubmit} /> 
      <hr/>
      <Todos todoList={todoList} onTodoChange={onTodoChange}/>

    </div>
  );
}

export default App;
