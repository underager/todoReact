import './App.css';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';


function App() {
  const [todoList, setTodoList] = useState([
                                    {id: 1, title: 'Wake up', isDone: true},
                                    {id: 2, title: 'Brush Teeth', isDone: false},
                                    {id: 3, title: 'Shave', isDone: false},
                                    {id: 4, title: 'Go for a walk', isDone: false}
                                  ]);

  const onTodoDoneUndone = (doneUndoneTodo) =>{
    const todo = todoList.find(x => x.id === doneUndoneTodo?.id);
    todo.isDone = !todo?.isDone;

    setTodoList([...todoList]);
  }                              
  const onNewTodoSubmit = (newTodoItem) =>{
    setTodoList((prevTodoList) => [...prevTodoList, {id: prevTodoList.length +1, ...newTodoItem}]);
  }

  return (
    <div className="App">
      <h1>TO DO APP LOADING</h1>
      <TodoForm onNewTodoSubmit={onNewTodoSubmit} /> 
      <hr/>
      <Todos todoList={todoList} onTodoDoneUndone={onTodoDoneUndone}/>

    </div>
  );
}

export default App;
