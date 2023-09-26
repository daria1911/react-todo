import React from "react";
import styles from './TodoListItem.module.css';
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo}) => {
    const handleRemoveItem = () => {
        onRemoveTodo(todo.id);
    };


    return (
        <li className={styles.item}>
            <div>
                <p>{todo.title}</p>
                <p className={styles.date}>{todo.created}</p>
            </div>
            <button className={styles.remove_btn} onClick={handleRemoveItem}>
                remove
            </button>
        </li>

    )
}

export default TodoListItem

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
}