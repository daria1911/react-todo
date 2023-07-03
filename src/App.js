import React, {useState} from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {

    const [todoList, setTodoList] = useState([])

    return (
      <>
        <h1>Todo List</h1>
          <AddTodoForm addTodo = {(newTodo)=> setTodoList([...todoList, newTodo])} />
          <TodoList todoList={todoList}/>
      </>
  );
}

export default App;
