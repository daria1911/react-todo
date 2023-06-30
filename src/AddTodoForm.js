import React from "react";

const AddTodoForm = (props) => {

    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = event.target.title.value
        console.log(event.target.title.value)
        props.onAddTodo(todoTitle)
        event.target.title.value = ""
    }

    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input name="title" type="text" id="todoTitle" />
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodoForm