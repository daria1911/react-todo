import React from "react";
import TodoListItem from "./TodoListItem";
import styles from './TodoList.module.css';


const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul className={styles.block}>
            {todoList.map( (item) => <TodoListItem key={item.id}
                todo={item} onRemoveTodo={onRemoveTodo}/>)}
        </ul>
    )
}

export default TodoList