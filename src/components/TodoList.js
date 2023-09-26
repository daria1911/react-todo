import React from "react";
import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css';
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul className={styles.block}>
            {todoList.map( (item) => <TodoListItem key={item.id}
                todo={item} onRemoveTodo={onRemoveTodo}/>)}
        </ul>
    )
}

export default TodoList

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
}