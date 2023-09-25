import React, {useEffect, useState} from "react";

import styles from './Home.module.css';
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import Navigation from "./components/Navigation";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`

const Home = () => {

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
        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }

            let data = await response.json()
            let todos = data.records.map(record => {
                let [year, mm, dd] = record.createdTime.slice(0, 10).split("-")
                return {
                    "title": record.fields.title,
                    "id": record.id,
                    'created': `${mm}-${dd}-${year}`
                }
            })

            todos.sort((a, b) => a.created > b.created ? -1 : 1)

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


    const removeTodo = async(id) => {
        let deleteUrl = `${url}/${id}`
        let options = {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        }

        try {
            const response = await fetch(deleteUrl, options)

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }

        } catch (error) {
            console.error('An error occurred:', error.message);
        }

        const newTodoList = todoList.filter(elem => elem.id !== id)


        setTodoList(newTodoList)
    }


    const handleTodo = async (data) => {

        let options = {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fields: data})
        }

        try {
            const response = await fetch(url, options)

            if (!response.ok) {
                const message = `Error: ${response.status}`;
                throw new Error(message);
            }

            let record = await response.json()


            let [year, mm, dd] = record.createdTime.slice(0, 10).split("-")
            let todoItem = {
                    "title": record.fields.title,
                    "id": record.id,
                    'created': `${mm}-${dd}-${year}`

            }

            let updated =  [...todoList,todoItem].sort((a, b) => a.created > b.created ? -1 : 1)
            setTodoList(updated)
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    }

    return (
        <>
            <Navigation />
            <div className={styles.mainContainer}>
            <h1>Todos App</h1>
            <div>
                <AddTodoForm addTodo = {handleTodo} />
                {isLoading ? <p>Loading...</p> : null}
                <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
            </div>

        </div>
        </>

     )
}

export default Home