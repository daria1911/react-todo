import React from "react";

const TodoListItem = ({todo, onRemoveTodo}) => {
    const handleRemoveItem = () => {
        onRemoveTodo(todo.id);
    };


    return (
        <li>
            {todo.title}
            <button onClick={handleRemoveItem}>Remove</button>
        </li>

    )
}

export default TodoListItem