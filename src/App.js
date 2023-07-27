import React, {useState, useEffect} from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {

    const defaultValue = JSON.parse (localStorage.getItem("savedTodoList"))

    const [todoList, setTodoList] = useState(     [])
    const [isLoading, setIsLoading] = React.useState(true);


    useEffect(()=> {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({data: {todoList: defaultValue || []}});
            }, 2000);
        }).then(result => {
            setTodoList(result.data.todoList)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        if(!isLoading){
            let params = JSON.stringify(todoList)
            localStorage.setItem("savedTodoList", params)
        }
    }, [todoList, isLoading])


    const removeTodo = (id) => {
        const newTodoList = todoList.filter(elem => elem.id !== id)
        setTodoList(newTodoList)
    }

    return (
      <>
        <h1>Todo List</h1>
          <AddTodoForm addTodo = {(newTodo)=> setTodoList([...todoList, newTodo])} />
          {isLoading ? <p>Loading...</p> : null}
          <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      </>
  );
}

export default App;
