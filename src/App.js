import React, {useState, useEffect} from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
    const defaultValue = JSON.parse (localStorage.getItem("savedTodoList"))

    const [value, setValue] = useState(defaultValue)

    useEffect(()=> {
        let params = JSON.stringify(value)
        localStorage.setItem("savedTodoList", params)
    })
    return [value, setValue]
}

function App() {

    const [todoList, setTodoList] = useSemiPersistentState()

    return (
      <>
        <h1>Todo List</h1>
          <AddTodoForm addTodo = {(newTodo)=> setTodoList([...todoList, newTodo])} />
          <TodoList todoList={todoList}/>
      </>
  );
}

export default App;
