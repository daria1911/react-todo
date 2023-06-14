import React from "react";
import TodoListItem from "./TodoListItem";
let todoList = [
    {
        id: 1,
        title: "Complete assignment"
    },
    {
        id: 2,
        title: "Finish course"
    },
    {
        id: 3,
        title: "Build CV"
    }
]

const TodoList = () => {
    return (
        <ul>
            {todoList.map( (item) => <TodoListItem key={item.id} todo={item}/>)}
        </ul>
    )
}

export default TodoList