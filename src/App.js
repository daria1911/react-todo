import React, {useState, useEffect} from 'react';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

function App() {

    const defaultValue = JSON.parse (localStorage.getItem("savedTodoList"))

    const [todoList, setTodoList] = useState(     [])
    const [isLoading, setIsLoading] = React.useState(true);

    const fetchData =  async () => {
        let options = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        }
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }

            let data = await response.json()
            let todos = data.records.map(record => {
                return {
                    "title": record.fields.title,
                    "id": record.id
                }
            })
            setTodoList(todos)
            setIsLoading(false)
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [] )

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
