import React, {useState} from "react";

const AddTodoForm = ({addTodo}) => {

    const [todoTitle, setTodoTitle] = useState("")

    const handleAddTodo = (event) => {
        event.preventDefault();

        let newTodoItem = {
            id: Date.now(),
            title: todoTitle
        }
        addTodo(newTodoItem)
        setTodoTitle("")
    }

    const handleTitleChange = (event) => {
        let newTodoTitle = event.target.value
        setTodoTitle(newTodoTitle)
    }

    return (
        <>
            <form onSubmit={handleAddTodo}>
                <label htmlFor="todoTitle">Title</label>
                <input name="title" type="text" id="todoTitle"
                       value={todoTitle}
                       onChange={handleTitleChange}/>
                <button type="submit">Add</button>
            </form>
        </>

    )
}

export default AddTodoForm