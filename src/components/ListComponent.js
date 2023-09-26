import React from "react";
import TodoListItem from "./TodoListItem";
import styles from './Lists.module.css';
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";


const ListComponent = ({list}) => {

    return (
        <ul className={styles.lists}>
            {list.map(listTodo => {
               return  <div className={styles.mainList} key={listTodo.id}>
                   <p>{listTodo.fields.Name}</p>
               </div>
            })}
            <div className={styles.addList}>
                <button className={styles.addListBtn}>Add</button>
            </div>
        </ul>
    )
}

export default ListComponent

ListComponent.propTypes = {
    list: PropTypes.array
}