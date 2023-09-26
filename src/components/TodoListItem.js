import React from "react";
import styles from './TodoListItem.module.css';
import PropTypes from "prop-types";
import InputWithLabel from "./InputWithLabel";

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

TodoListItem.propTypes = {
    todo: PropTypes.object,
    onRemoveTodo: PropTypes.func
}