import React from "react";
import styles from './TodoListItem.module.css';

const TodoListItem = ({todo, onRemoveTodo}) => {
    const handleRemoveItem = () => {
        onRemoveTodo(todo.id);
    };


    return (
        <li className={styles.item}>
            <span>{todo.title}</span>
            <button className={styles.remove_btn} onClick={handleRemoveItem}>
                remove
            </button>
        </li>

    )
}

export default TodoListItem