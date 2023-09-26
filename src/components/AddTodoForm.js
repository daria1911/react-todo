import React, {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import PropTypes from "prop-types";
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


    return (
        <>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel title={todoTitle} handleTitle={setTodoTitle}></InputWithLabel>
            </form>
        </>

    )
}

export default AddTodoForm

AddTodoForm.propTypes = {
    addTodo: PropTypes.func
}